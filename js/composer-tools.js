// Global definitions
var FRET_FIRST_FRET = 63; // Base scale
var FRET_X_OFFSET = 10; // X coordinate offset
var FRET_Y_OFFSET = 10; // Y coordinate offset
var FRET_DRAW_TO_FRET = 21; // Final fret to draw
var FRET_DOTS = [0, 3, 5, 7, 9]; // Double dot at "0", i.e. 12, 24 frets
var FRET_DOT_DIAMETER = 6; // Dot diameter
var FRET_DOT_DEFAULT_CLASS = "fret-dot-default";
var FRET_DEFAULT_CLASS = "fretboard-default";
var FRET_SHADOW_DEFAULT_CLASS = "fretboard-shadow-default";
var FRET_NUT_DEFAULT_CLASS = "fretboard-nut-default";
var FRET_DEFAULT_MARKER_CLASS = "fretboard-marker-default";
var FRET_WOUND_STRING_SEM_DST = 39; // Which strings are wound?
var FRET_STRING_MIN_DIAM = 1; // Min/max allowed string
var FRET_STRING_MAX_DIAM = 8; // diameters for rendering

// For the keyboard
var KEYB_DEFAULT_WHITE_KEY_CLASS = 'keyboard-white-key-default';
var KEYB_DEFAULT_BLACK_KEY_CLASS = 'keyboard-black-key-default';
var KEYB_DEFAULT_MARKER_CLASS = 'keyboard-marker-default';

var CHBUILD_GRID_Y = 5; // Number of elements in vertical section
var CHBUILD_DEFAULT_MARKER_CLASS = 'chordbuild-marker';
var CHBUILD_DEFAULT_CHORD_CLASS = 'chordbuild-chord';
var CHBUILD_SELECTED_MARKER = 'chordbuild-marker-selected';
var CHBUILD_DEFAULT_ADD_CLASS = 'chordbuild-add';


// Where are the additional SVG files located? Relative to index.html!
var SVG_DIRECTORY = "svg/";

// Base notes array
var note_array = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#',
    'G', 'G#', 'A', 'A#', 'B'];

// Intervals given in terms of semitones from root
var chord_structures = {
    "maj": [4, 7],
    "maj6": [4, 7, 9],
    "maj7": [4, 7, 11],
    "dom7": [4, 7, 10],
    "dom7aug5": [4, 8, 10],
    "dom7sus4": [5, 7, 10],
    "aug": [4, 8],
    "min": [3, 7],
    "min6": [3, 7, 9],
    "min7": [3, 7, 10],
    "min7b5": [3, 6, 10],
    "dim": [3, 6],
    "dim7": [3, 6, 9],
    "sus4": [5, 7],
    "sus2": [2, 7]
};

// Chord list item specific
var CHORD_LIST_ITEM_TEMPLATE = "<div class=\"uk-card uk-card-default uk-card-body\"><div class=\"chord-header\"><span class=\"uk-sortable-handle\" uk-icon=\"icon: table\"></span> <span class=\"chord-text\">{{chord-text}}</span><br /></div><div class=\"chord-option chord-length\"><span class=\"chord-option-label\">Length:</span><span class=\"chord-controls chord-reduce-value\" uk-icon=\"icon: minus-circle; ratio:0.8;\"></span><input type=\"text\" class=\"chord-text-input\" value=\"1/2\" /><span class=\"chord-controls chord-add-value\" uk-icon=\"icon: plus-circle; ratio:0.8;\"></span></div><div class=\"chord-option chord-octave\"><span class=\"chord-option-label\">Octave:</span><span class=\"chord-controls chord-reduce-value\" uk-icon=\"icon: minus-circle; ratio:0.8;\"></span><input type=\"text\" class=\"chord-text-input\" value=\"3\" /><span class=\"chord-controls chord-add-value\" uk-icon=\"icon: plus-circle; ratio:0.8;\"></span></div></div>";
var CHORD_LENGTHS = ["1/16", "1/12", "1/8", "1/6", "1/4", "1/3", "1/2", "1"];
var CHORD_LIST_ID = "chord-list";
var CHORD_LIST_ITEM_CLASS = "chord-list-element";

// Global counter
var chord_list_counter = 0;

// Function to return chord notes
function get_chord(note, chord)
{
    var my_n = note_array.indexOf(note.toUpperCase());
    var my_c = chord_structures[chord.toLowerCase()];

    var my_notes = new Array();
    my_notes.push(note);
    for (k = 0; k < my_c.length; k++) {
        my_notes.push(note_array[(my_n + my_c[k]) % note_array.length]);
    }
    return my_notes;
}

// Function to return chord notes
function get_chord_notes(note, chord, oct)
{
    // Start from 4th "octave" by default
    if (oct === undefined)
    {
        oct = 3;
    }
    
    // Generate an octave worth of notes to work with
    var my_n = note_array.indexOf(note.toUpperCase());
    var fi_n = my_n;
    var now_notes = new Array();
    
    for (j = 0; j < 12; j++)
        {
            now_note = note_array[(fi_n + j) % note_array.length];
            now_notes.push(now_note + oct);
            // Test one step ahead
            oct += ((fi_n + j + 1) % note_array.length === 0 ? 1 : 0);
        }

    var my_c = chord_structures[chord.toLowerCase()];

    var my_notes = new Array();
    my_notes.push(now_notes[0]);
    for (k = 0; k < my_c.length; k++) {
        my_notes.push(now_notes[my_c[k]]);
    }
    return my_notes;
}

// Used for converting between sharps / flats
var pure_tones = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

var note_scinot = /([A-G]#?)([0-9])/;
var note_scifnot = /([A-G])([0-9])/;
var note_scinot_global = /([A-G]#?)([0-9])/g;

// For this version, we only consider classical Major/Minor scales + pentatonics
// Therefore, to make this tool more universal, a partial rewrite will be needed
var scale_defs = {
    "major": {"ints": [2, 2, 1, 2, 2, 2], "miss": [], "add": []},
    "minor": {"ints": [2, 1, 2, 2, 1, 2], "miss": [], "add": []},
    "major pentatonic": {"ints": [2, 2, 3, 2], "miss": [4, 7], "add": []},
    "minor pentatonic": {"ints": [3, 2, 2, 3], "miss": [2, 6], "add": []}
};

// Enumerate all values
var all_scales = new Array();
for (var property in scale_defs) {
    if (scale_defs.hasOwnProperty(property)) {
        all_scales.push(property);
    }
}

// Return notes corresponding to this scale
function get_scale(note, scale) {

    // Check note
    var my_notes = note_array.slice();
    if (note.indexOf("b") !== -1)
    {
        // Convert note array to flat format
        my_notes = sharps2flats(my_notes);
    }

    // Make sure we use lower case for scale
    scale = scale.toLowerCase();

    // Locate the first note
    ind = my_notes.indexOf(note);
    if (ind === undefined) {
        return null;
    }
    ;
    var my_scale = new Array();

    // Locate the scale, if it is present
    if (scale_defs.hasOwnProperty(scale)) {
        var my_pattern = scale_defs[scale]["ints"];
        for (k = 0; k <= my_pattern.length; k++)
        {
            my_scale.push(my_notes[ind]);
            ind = (ind + my_pattern[k]) % my_notes.length;
        }

        return {"notes": my_scale,
            "missing_degrees": scale_defs[scale]["miss"],
            "additional_degrees": scale_defs[scale]["add"]};

    } else
    {
        return null;
    }
}

// Count the number of sharps (~flats); input argument - array of notes
function get_sharps(scale) {
    var my_count = 0;
    for (var k = 0; k < scale.length; k++) {
        if (scale[k].indexOf("#") !== -1) {
            my_count++;
        }
    }
    return my_count;
}

function sharps2flats(notes) {
    // Check input is an array
    var return_array = true;
    if (notes.constructor !== Array) {
        notes = new Array(notes);
        return_array = false;
    }
    var new_notes = new Array();
    for (k = 0; k < notes.length; k++) {
        if (notes[k].indexOf("#") !== -1) {
            var pt_index = pure_tones.indexOf(notes[k][0]);
            new_notes.push(pure_tones[(pt_index + 1) % pure_tones.length] + "b");
        } else
        {
            new_notes.push(notes[k]);
        }
    }
    // Return either array or string
    return return_array ? new_notes : new_notes[0];
}

function flats2sharps(notes) {
    // Check input is an array
    var return_array = true;
    if (notes.constructor !== Array) {
        notes = new Array(notes);
        return_array = false;
    }
    var new_notes = new Array();
    for (k = 0; k < notes.length; k++) {
        if (notes[k].indexOf("b") !== -1) {
            var pt_index = pure_tones.indexOf(notes[k][0]) - 1;
            if (pt_index < 0) {
                pt_index = pure_tones.length - 1;
            }
            new_notes.push(pure_tones[pt_index] + "#");
        } else
        {
            new_notes.push(notes[k]);
        }
    }
    return return_array ? new_notes : new_notes[0];
}


// This is a glue object for drawing all selected notes on all
// instruments that the object enumerator contains.

// Create the object...
function InstrumentGlue() {
    // ... and push single note update functions here
    this.objArray = new Array();

    // Bind theory object
    this.theory = new Object();

    // Bind chord builder object
    this.chord_builder = new Object();

    var self = this;

    // Apply this callback function to all instruments' selection callback
    this.funCallback = function (note, action)
    {
        for (var k = 0; k < self.objArray.length; k++)
        {
            // Call all functions in array with the update information
            self.objArray[k].updateSingleNote(note, action);
        }
    };

    // Highlight all notes
    this.funHighlightNotes = function ()
    {
        var myth = self.theory;
        for (var k = 0; k < self.objArray.length; k++) {
            if (myth.scale_data !== "none") {
                self.objArray[k].updateNotes(myth.scale_data["notes"]);
            } else {
                self.objArray[k].clearNotes();
            }

        }
    };

    // Highlight all chord notes
    this.funHighlightChordNotes = function ()
    {
        var mycb = self.chord_builder;

        // Get the notes
        var show_notes = false;
        var the_notes = null;
        if (mycb.current_note !== "none" && mycb.current_chord !== "none") {
            show_notes = true;
            the_notes = get_chord(mycb.current_note, mycb.current_chord);
        }

        for (var k = 0; k < self.objArray.length; k++) {
            if (show_notes === true) {
                self.objArray[k].updateNotes(the_notes);
            } else {
                self.objArray[k].clearNotes();
            }

        }
    };
}
;

// Define a function for returning the semitone distance from B-1
function get_semitone_distance(note) {
    note = note.toUpperCase();
    match = note_scinot.exec(note);
    return note_array.indexOf(match[1]) + 1 + (12 * parseInt(match[2]));
}

// The same for whole tones
function get_tone_distance(note) {
    note = note.toUpperCase();
    match = note_scifnot.exec(note);
    return note_array.indexOf(match[1]) + 1 + (7 * parseInt(match[2]));
}

// The basic theoretical tools. Currently in fixed layout.
function comptoolsTheory(cont_id) {

    var self = this;

    // Pentatonic mode
    this.pentatonic_mode = false;

    // Current root
    this.root = 'none';

    // Current scale
    this.scale = 'none';

    // Flats
    this.use_flats = false;

    // The actual data
    this.scale_data = 'none';

    // Get the correct SVG file and add it to the specified container
    my_theory_svg = SVG_DIRECTORY + "note-relationships.svg";

    // Load the XML and place it into the specified container
    d3.xml(my_theory_svg, function (xml) {
        document.getElementById(cont_id).appendChild(xml.documentElement);

        // The id
        elid = "#" + cont_id;

        self.svg_theory = d3.select(elid).select("svg");

        // Fill the whole container element; we assume SVG has no margins
        var the_conw = parseFloat(d3.select(elid).style("width"));
        var the_conh = parseFloat(d3.select(elid).style("height"));
        var the_curw = parseFloat(self.svg_theory.attr("width"));
        var the_curh = parseFloat(self.svg_theory.attr("height"));

        // Set the width/height
        self.svg_theory.attr("width", the_conw);
        self.svg_theory.attr("height", the_conh);

        // Set scale
        //d3.select("#"+cont_id).select("svg")
        //       .attr("transform", "scale("+ the_conw/the_curw +")");

        // Clear notes
        self.clearNotes();

        // Set the events
        self.svg_theory.selectAll('.circle-scale').on("click", function () {

            // Get current state for this one
            var now_state = d3.select(this).select('.scale-marker')
                    .classed('selected');

            // Already selected
            if (now_state) {
                d3.select(this).select('.scale-marker')
                        .classed('selected', false);
                self.root = "none";
                self.scale = "none";
                self.scale_data = "none";
                self.clearAccidentals();
                self.clearNotes();
                self.selection_callback();
            }
            // Otherwise, assign values
            else
            {
                // Clear all
                d3.select(elid).selectAll('.scale-marker')
                        .classed('selected', false);

                // Parse the id and class
                var scale_data = self.parseScale(d3.select(this).attr("id"));
                self.root = scale_data["note"];
                self.scale = scale_data["scale"];

                if (d3.select(this).classed("flat-scale"))
                {
                    self.use_flats = true;
                } else
                {
                    self.use_flats = false;
                }

                d3.select(this).select('.scale-marker')
                        .classed('selected', true);

                self.clickHandler();
            }

        });

        self.svg_theory.select("#scale-pentatonic").on("click", function () {
            var pent_sel = d3.select(this)
                    .select('.pentatonic-marker')
                    .classed("selected");
            pent_sel = !pent_sel;
            d3.select(this)
                    .select('.pentatonic-marker')
                    .classed("selected", pent_sel);
            self.pentatonic_mode = pent_sel ? true : false;

            if (self.scale !== "none") {
                self.clickHandler();
            }
        });

    });

    // TODO: Not extremely versatile, should rewrite ...
    // This is a particular method for the id format identifying the
    // scale of the present circle of fifths.
    this.parseScale = function (id) {
        var format = /scale-([A-G])(s|b)?(Maj|Min)/ig;
        match = format.exec(id);
        var note = match[1].toUpperCase()
                + (match[2] === undefined ? "" : match[2]).replace("s", "#");
        var scale = match[3].toLowerCase() + "or";
        return {"note": note, "scale": scale};
    };

    // Update all accidentals based on the notes
    this.updateAccidentals = function () {

        // Clear current accidentals
        this.clearAccidentals();

        var notes = this.scale_data["notes"];
        var miss = this.scale_data["missing_degrees"];

        // We will need pure tones to process this
        var the_pures = pure_tones.slice();
        var cnt = 0;

        // TODO: This is probably a NetBeans bug; I need to put
        // (cnt++) in parentheses, otherwise the parser goes haywire
        while (the_pures[0] !== notes[0][0] && (cnt++) < 8)
        {
            the_pures.push(the_pures.shift());
        }

        // Remove the missing degrees
        for (var k = 0; k < miss.length; k++) {
            // TODO: Potential bug; Here we assume
            // "miss" is sorted such that [a, b]: a < b
            // since when an element is removed, indices change
            the_pures.splice(miss[k] - 1 - k, 1);
        }

        // Preprocess notes
        var new_notes = new Array();
        var display_what = 'f'; // Display flats by default
        for (k = 0; k < notes.length; k++) {
            if (notes[k].indexOf("#") !== -1) {
                display_what = 's';
            }
            if (notes[k] !== the_pures[k])
            {
                new_notes.push(the_pures[k] + "!");
            } else
            {
                new_notes.push(the_pures[k]);
            }
        }

        var the_class = ".clef-" + display_what + "-";
        for (k = 0; k < new_notes.length; k++) {
            if (new_notes[k].indexOf("!") !== -1) {
                var class_to_select = the_class + new_notes[k][0].toLowerCase();
                this.svg_theory.selectAll(class_to_select)
                        .classed("visible-accidental", true);
            }
        }
        return true;
    };

    this.clearAccidentals = function () {
        for (k = 1; k <= 7; k++) {
            this.svg_theory.select('#clef-s' + k)
                    .classed("visible-accidental", false);
            this.svg_theory.select('#clefb-s' + k)
                    .classed("visible-accidental", false);
            this.svg_theory.select('#clef-f' + k)
                    .classed("visible-accidental", false);
            this.svg_theory.select('#clefb-f' + k)
                    .classed("visible-accidental", false);
        }

    }

    this.updateNotes = function () {
        var notes = this.scale_data["notes"];
        var miss = this.scale_data["missing_degrees"];
        var ind = 0;
        for (var k = 1; k <= 8; k++)
        {
            var this_note = "";
            if (miss.indexOf(k) === -1) {
                this_note = notes[ind++ % notes.length];
            }
            var my_id = "#noterel-" + k + " text";
            this.svg_theory.select(my_id).text(this_note);
        }
    };

    this.clearNotes = function () {
        for (var k = 1; k <= 8; k++)
        {
            var my_id = "#noterel-" + k + " text";
            this.svg_theory.select(my_id).text("");
        }
    };

    this.get_scale_data = function () {

        if (this.scale !== undefined && this.scale !== 'none')
        {
            // Generate the scale
            var to_get_scale = this.scale
                    + (this.pentatonic_mode ? " pentatonic" : "");

            var my_scale_data = get_scale(this.root, to_get_scale);
            if (this.use_flats) {
                my_scale_data["notes"] = sharps2flats(my_scale_data["notes"]);
            }

            // Save as object property
            this.scale_data = my_scale_data;

        } else
        {
            this.scale_data = "none";
        }
    };

}

comptoolsTheory.prototype.clickHandler = function ()
{
    // Update scale data
    this.get_scale_data();

    // Update the notes
    this.updateNotes();

    // Update the accidentals
    this.updateAccidentals();

    // Finally, run the callback
    this.selection_callback();
};

// Default dummy function for callbacks
comptoolsTheory.prototype.selection_callback = function () {
    return null;
};

// The piano keyboard
function comptoolsKeyboard(cont_class, range, options) {
    if (typeof options !== "undefined" && typeof options === "object" && options !== null)
    {
        // Parse options here
    }

    // Get the number of "white keys" to draw
    var the_range = range.split("-");
    var keys_to_draw = get_semitone_distance(the_range[1]) -
            get_semitone_distance(the_range[0]);

    // Same for white keys only
    var wh_keys_to_draw = get_tone_distance(the_range[1]) -
            get_tone_distance(the_range[0]);

    if (keys_to_draw <= 0) {
        return null;
    }

    // Get container/width/height
    // NB! These should always be set!
    var keyb_conw = parseFloat(d3.select(cont_class).style("width"));
    var keyb_conh = parseFloat(d3.select(cont_class).style("height"));

    // Now we compute all the basic sizes of SVG elements
    var wh_key_height = keyb_conh;
    var wh_key_width = Math.floor(keyb_conw / wh_keys_to_draw);
    var bl_key_height = Math.floor(5 / 8 * wh_key_height);
    var bl_key_width = Math.floor(wh_key_width / 2);

    var marker_rad = Math.floor(0.6 * wh_key_width);
    var bl_key_offset = Math.floor(bl_key_width / 2);
    var marker_bl = bl_key_height - Math.floor(1.5 * bl_key_width);
    var marker_wh = wh_key_height - Math.floor(1.6 * bl_key_width);

    // Position offsets
    var wh_offset = Math.floor((wh_key_width - marker_rad) / 2);
    var bl_offset = Math.floor((bl_key_width - marker_rad) / 2);

    this.svg_keyboard = d3.select(cont_class).append("svg")
            .attr("width", keyb_conw)
            .attr("height", keyb_conh);

    // Start populating the svg
    var curr_note = the_range[0][0];
    var note_ptr = note_array.indexOf(curr_note.toUpperCase());
    var curr_note_index = parseInt(the_range[0][1]);

    // The reason to have the buffer is that we need to draw the black key
    // AFTER the next white key for correct element order. Otherwise it will
    // be partially covered by the next white key.

    bl_buffer = new Array(); // Yes, you read correctly. BLACK BUFFER. ffs.
    curr_x_pos = 1;
    for (k = 0; k < keys_to_draw; k++) {

        // Get note
        curr_note = note_array[(note_ptr + k) % (note_array.length)].toLowerCase();

        // Check index
        curr_note_index += ((note_ptr + k) % (note_array.length) === 0) ? 1 : 0;

        var now_note_class = "note-" + curr_note.replace("#", "s");
        var now_note_num_class = "note-" + curr_note.replace("#", "s")
                + curr_note_index;

        var current_note_class = KEYB_DEFAULT_MARKER_CLASS + " "
                + "keyboard-marker-inactive" + " "
                + now_note_class + " "
                + now_note_num_class;

        // Check if key is black
        if (curr_note.indexOf("#") !== -1)
        {
            save_note = {"note": curr_note,
                "pos": curr_x_pos - bl_key_offset,
                "class": current_note_class};
            bl_buffer.push(save_note);
        } else
        {
            this.svg_keyboard.append("rect").attr("x", curr_x_pos)
                    .attr("y", 0)
                    .attr("width", wh_key_width)
                    .attr("height", wh_key_height)
                    .attr("class", KEYB_DEFAULT_WHITE_KEY_CLASS);

            // Marker
            this.svg_keyboard.append("rect")
                    .attr("x", curr_x_pos + wh_offset)
                    .attr("y", marker_wh)
                    .attr("width", marker_rad)
                    .attr("height", marker_rad)
                    .attr("class", current_note_class);

            // Check if we have a black note to draw after the white key
            another_key = bl_buffer.pop();
            if (another_key !== undefined) {
                this.svg_keyboard.append("rect")
                        .attr("x", another_key["pos"])
                        .attr("y", 0)
                        .attr("width", bl_key_width)
                        .attr("height", bl_key_height)
                        .attr("class", KEYB_DEFAULT_BLACK_KEY_CLASS);

                this.svg_keyboard.append("rect")
                        .attr("x", another_key["pos"] + bl_offset)
                        .attr("y", marker_bl)
                        .attr("width", marker_rad)
                        .attr("height", marker_rad)
                        .attr("class", another_key["class"]);
            }

            curr_x_pos += wh_key_width;
        }

    }

    // Assign click events
    d3.selectAll("rect." + KEYB_DEFAULT_MARKER_CLASS)
            .on('click', this.clickHandler());

    this.updateSingleNote = function (note, display) {

        if (typeof display === 'undefined')
        {
            display = true;
        }

        this.svg_keyboard.selectAll(".note-" + note.replace("#", "s").
                toLowerCase()).classed("keyboard-marker-selected", display);

    };

    this.updateNotes = function (notes, display) {

        this.clearNotes();

        // As there is no text, no need to convert accidentals

        // Make sure we're speaking in terms of sharps
        notes = flats2sharps(notes);

        if (typeof display === 'undefined')
        {
            display = true;
        }

        // TODO: this should be easier to do using D3.js
        for (var k = 0; k < notes.length; k++) {
            var now_note = notes[k].replace("#", "s").toLowerCase();
            this.svg_keyboard.selectAll(".note-" + now_note)
                    .classed("keyboard-marker-highlighted", display);
            if (k === 0)
            {
                this.svg_keyboard.selectAll(".note-" + now_note)
                        .classed("keyboard-marker-highlighted-root", display);
            }
        }

    };

    this.clearNotes = function () {
        this.svg_keyboard.selectAll(".keyboard-marker-highlighted")
                .classed("keyboard-marker-highlighted", false);
        this.svg_keyboard.selectAll(".keyboard-marker-highlighted-root")
                .classed("keyboard-marker-highlighted-root", false);
    };
}

// Note selection callback
comptoolsKeyboard.prototype.clickHandler = function ()
{
    var self = this;
    return function (d, i) {
        var action = !d3.select(this).classed("keyboard-marker-selected");
        d3.select(this).classed("keyboard-marker-selected", action);

        // Get the class of the selected element and pass it to callback
        the_note = d3.select(this).attr("class");
        var myregexp = /note-([a-g]s?[0-9])/ig;
        var capt_note = myregexp.exec(the_note)[1]
                .replace("s", "#").toUpperCase();
        self.selection_callback(capt_note, action);
    };
};

// Callback function to run when the note is selected
comptoolsKeyboard.prototype.selection_callback = function (note, action) {
    return null;
};

// Create the fret object below
function comptoolsFretboard(cont_class, tuning, options) {

    // Assign default option values from above
    var firstFretWidth = FRET_FIRST_FRET;
    var fretboardClass = FRET_DEFAULT_CLASS;
    var fretboardNutClass = FRET_NUT_DEFAULT_CLASS;
    var fretCount = FRET_DRAW_TO_FRET;

    if (typeof options !== 'undefined' && typeof options === 'object' && options !== null)
    {
        // Check arguments one by one
        if (options.hasOwnProperty("firstFretWidth"))
        {
            firstFretWidth = options.firstFretWidth;
        }

        if (options.hasOwnProperty("fretboardClass"))
        {
            fretboardClass = options.fretboardClass;
        }

        if (options.hasOwnProperty("fretboardNutClass"))
        {
            fretboardNutClass = options.fretboardNutClass;
        }

        if (options.hasOwnProperty("fretCount"))
        {
            fretCount = options.fretCount;
        }

    }

    this.fret_notes = new Object();
    this.fret_notes.note = Array();
    this.fret_notes.index = Array();
    this.fret_notes.full_note = Array();
    this.fret_notes.count = null;

    // Create note/index arrays
    var fret_current_tuning = tuning;
    fret_current_tuning.toUpperCase();

    match = note_scinot_global.exec(fret_current_tuning);
    while (match !== null) {
        this.fret_notes.full_note.push(match[0]);
        this.fret_notes.note.push(match[1]);
        this.fret_notes.index.push(match[2]);
        this.fret_notes.count++;
        match = note_scinot_global.exec(fret_current_tuning);
    }

    // Get the container height and width
    // NB! These should always be set!
    var fret_conw = parseFloat(d3.select(cont_class).style("width"));
    var fret_conh = parseFloat(d3.select(cont_class).style("height"));

    var fret_w = fret_conw - FRET_X_OFFSET;
    var fret_h = fret_conh - FRET_Y_OFFSET;

    // Create the SVG container: fills the containing container
    this.svg_fretboard = d3.select(cont_class).append("svg")
            .attr("width", fret_w)
            .attr("height", fret_h);

    // Single string height
    var fret_string_h = Math.floor(fret_h / (this.fret_notes.count + 1));

    var fret_x_coord = FRET_X_OFFSET;

    // We will need to find the smallest fret width to determine the
    // size of the note markers. Also, we need all center positions.
    var centerPos = Array();
    var fret_min_width = firstFretWidth;

    // We start with the open position (a third of the first fret size)
    var now_fret_size = Math.floor(firstFretWidth / 3);
    fret_min_width = Math.min(fret_min_width, now_fret_size);
    this.svg_fretboard.append("rect").attr("x", fret_x_coord)
            .attr("y", FRET_Y_OFFSET)
            .attr("width", now_fret_size)
            .attr("height", fret_h)
            .attr("class", fretboardNutClass);

    // Add the first center
    centerPos.push(Math.floor(fret_x_coord + now_fret_size / 2));

    fret_x_coord += now_fret_size + 1;

    // Now, we generate all other frets
    for (n = 1; n < fretCount; n++) {

        var now_fret_size = Math.floor(firstFretWidth * Math.exp(-0.0655 * n));
        centerPos.push(Math.floor(fret_x_coord + now_fret_size / 2));
        fret_min_width = Math.min(fret_min_width, now_fret_size);

        this.svg_fretboard.append("rect").attr("x", fret_x_coord)
                .attr("y", FRET_Y_OFFSET)
                .attr("width", now_fret_size)
                .attr("height", fret_h)
                .attr("class", fretboardClass);

        // Decide whether to draw a circle mark here
        if (FRET_DOTS.indexOf(n % 12) !== -1)
        {
            var fret_dot_y = Math.floor(fret_h / 2 + FRET_Y_OFFSET);
            var fret_dot_x = Math.floor(now_fret_size / 2 + fret_x_coord);
            var fret_dot_r = Math.floor(FRET_DOT_DIAMETER / 2);

            if ((n % 12) !== 0) {

                this.svg_fretboard.append("circle").attr("cx", fret_dot_x)
                        .attr("cy", fret_dot_y)
                        .attr("r", fret_dot_r)
                        .attr("class", FRET_DOT_DEFAULT_CLASS);
            } else { // Double dot
                this.svg_fretboard.append("circle").attr("cx", fret_dot_x)
                        .attr("cy", Math.floor(fret_dot_y + fret_string_h))
                        .attr("r", fret_dot_r)
                        .attr("class", FRET_DOT_DEFAULT_CLASS);

                this.svg_fretboard.append("circle").attr("cx", fret_dot_x)
                        .attr("cy", Math.floor(fret_dot_y - fret_string_h))
                        .attr("r", fret_dot_r)
                        .attr("class", FRET_DOT_DEFAULT_CLASS);
            }

        }

        fret_x_coord += now_fret_size;

    }

    // Compute the width of the whole fretboard
    fret_width = fret_x_coord - FRET_X_OFFSET;

    // Fret min width determines marker size...
    var fret_marker_size = fret_min_width;

    // We are now ready to draw the strings and populate the fret with notes
    for (var i = 0; i < this.fret_notes.count; i++)
    {
        var string_index = i + 1;

        // Compute this using a specific formula
        var sem_distance = get_semitone_distance(this.fret_notes.full_note[i]);
        var string_diameter = Math.round(-4.634 *
                Math.log(sem_distance) + 19.259);

        // Clip at boundaries
        string_diameter = Math.min(string_diameter, FRET_STRING_MAX_DIAM);
        string_diameter = Math.max(string_diameter, FRET_STRING_MIN_DIAM);

        current_string_y = FRET_Y_OFFSET + string_index * fret_string_h;

        // Correct for string diameter
        corrn = Math.floor(string_diameter / 2);
        current_string_y -= corrn;

        // First put the string shadow on there
        current_string_shadow = this.svg_fretboard.append("line")
                .attr("x1", FRET_X_OFFSET)
                .attr("y1", current_string_y + 1)
                .attr("x2", FRET_X_OFFSET + fret_width)
                .attr("y2", current_string_y + 1)
                .attr("class", FRET_SHADOW_DEFAULT_CLASS)
                .attr("stroke-width", string_diameter);

        // Now the string itself
        current_string = this.svg_fretboard.append("line")
                .attr("x1", FRET_X_OFFSET)
                .attr("y1", current_string_y)
                .attr("x2", FRET_X_OFFSET + fret_width)
                .attr("y2", current_string_y)
                .attr("class", "fret-string")
                .attr("stroke-width", string_diameter);

        // Check if this is a wound string
        if (sem_distance < FRET_WOUND_STRING_SEM_DST)
        {
            current_string.classed("fret-wound-string", true);
        }

        // Populate notes
        first_note = note_array.indexOf(this.fret_notes.note[i]);
        first_note_index = parseInt(this.fret_notes.index[i]);
        half_fret_marker_size = Math.floor(fret_marker_size / 2);
        for (j = 0; j < centerPos.length; j++)
        {
            now_note = note_array[(first_note + j) % note_array.length];
            now_note_class = "note-" + now_note.replace("#", "s").toLowerCase();
            now_note_num_class = now_note_class + first_note_index;
            first_note_index += ((first_note + j + 1) % note_array.length === 0 ? 1 : 0);

            var current_note_class = FRET_DEFAULT_MARKER_CLASS + " "
                    + "fretboard-marker-inactive" + " "
                    + now_note_class + " "
                    + now_note_num_class;

            fret_marker_x = centerPos[j] - half_fret_marker_size;
            fret_marker_y = current_string_y - half_fret_marker_size;
            var now_g = this.svg_fretboard.append("g").attr("class", current_note_class);
            now_g.append("rect")
                    .attr("x", fret_marker_x)
                    .attr("y", fret_marker_y)
                    .attr("width", fret_marker_size)
                    .attr("height", fret_marker_size);
            now_g.append("text")
                    .attr("text-anchor", "middle")
                    .attr("x", centerPos[j])
                    .attr("y", fret_marker_y + 12)
                    .text(now_note);
        }

        // Assign click events
        d3.selectAll("g." + FRET_DEFAULT_MARKER_CLASS)
                .on('click', this.clickHandler());

    }

    // Draw particular note, e.g., "F#4" or clear it via display = false
    this.updateSingleNote = function (note, display) {

        if (typeof display === 'undefined')
        {
            display = true;
        }

        this.svg_fretboard.selectAll(".note-" + note.replace("#", "s").
                toLowerCase()).classed("fretboard-marker-selected", display);

    };

    // Draw based on note sets, e.g., ["A", "B", "C", "D", "E", "F#", "G"]
    this.updateNotes = function (notes, display) {

        this.clearNotes();

        // If the notes are provided in terms of flats,
        // introduce relevant text changes
        var is_flats = false;
        // TODO: make universal, use count_sharps function instead of this
        for (k = 0; k < notes.length; k++) {
            if (notes[k].indexOf("b") !== -1)
                is_flats = true;
        }

        if (is_flats) {
            this.sharps2flats();
        } else
        {
            this.flats2sharps();
        }

        // Make sure we're speaking in terms of sharps
        notes = flats2sharps(notes);

        if (typeof display === 'undefined')
        {
            display = true;
        }

        // TODO: this should be easier to do using D3.js
        for (var k = 0; k < notes.length; k++) {
            var now_note = notes[k].replace("#", "s").toLowerCase();
            this.svg_fretboard.selectAll(".note-" + now_note)
                    .classed("fretboard-marker-highlighted", display);
            if (k === 0)
            {
                this.svg_fretboard.selectAll(".note-" + now_note)
                        .classed("fretboard-marker-highlighted-root", display);
            }
        }

    };

    this.clearNotes = function () {
        this.svg_fretboard.selectAll(".fretboard-marker-highlighted")
                .classed("fretboard-marker-highlighted", false);
        this.svg_fretboard.selectAll(".fretboard-marker-highlighted-root")
                .classed("fretboard-marker-highlighted-root", false);
    };

    this.accidental_state = "sharps"; // TODO: Allowed values: sharps/flats

    this.sharps2flats = function () {
        if (this.accidental_state === "sharps") {
            this.svg_fretboard
                    .selectAll("." + FRET_DEFAULT_MARKER_CLASS + " text")
                    .each(function () {
                        d3.select(this)
                                .text(sharps2flats(d3.select(this).text()));
                    });
        }
        this.accidental_state = "flats";
    };

    this.flats2sharps = function () {

        if (this.accidental_state === "flats") {
            this.svg_fretboard
                    .selectAll("." + FRET_DEFAULT_MARKER_CLASS + " text")
                    .each(function () {
                        d3.select(this)
                                .text(flats2sharps(d3.select(this).text()));
                    });
        }
        this.accidental_state = "sharps";
    };

}

// Note selection callback
comptoolsFretboard.prototype.clickHandler = function ()
{
    var self = this;
    return function (d, i) {
        action = !d3.select(this).classed("fretboard-marker-selected");
        d3.select(this).classed("fretboard-marker-selected", action);

        // Get the class of the selected element and pass it to callback
        the_note = d3.select(this).attr("class");
        var myregexp = /note-([a-g]s?[0-9])/ig;
        var capt_note = myregexp.exec(the_note)[1]
                .replace("s", "#").toUpperCase();
        self.selection_callback(capt_note, action);
    };
};

// Callback function to run when the note is selected
comptoolsFretboard.prototype.selection_callback = function (note, action) {
    return null;
};

function comptoolsChordbuilder(cont_class) {

    this.current_note = "none";
    this.current_chord = "none";

    var chordbuild_w = parseFloat(d3.select(cont_class).style("width"));
    var chordbuild_h = parseFloat(d3.select(cont_class).style("height"));

    // Create the SVG container: fills the containing container
    this.svg_chordbuild = d3.select(cont_class).append("svg")
            .attr("width", chordbuild_w)
            .attr("height", chordbuild_h);

    // Start creating the UI elements
    var circ_d = Math.floor(chordbuild_h / 6);
    var circ_r = Math.floor(circ_d / 2);

    // Half of the height
    var half_h = Math.floor(chordbuild_h / 2);
    var th_h = Math.floor(2 * chordbuild_h / 5);

    // Initial angle is -PI/2
    var the_x, the_y;
    var ang = -Math.PI / 2;
    var dang = 2 * Math.PI / note_array.length;

    var now_g;

    // Create markers
    for (var k = 0; k < note_array.length; k++) {
        the_x = half_h - th_h * Math.cos(ang + dang * k);
        the_y = half_h - th_h * Math.sin(ang + dang * k);

        now_g = this.svg_chordbuild.append("g")
                .attr("class", CHBUILD_DEFAULT_MARKER_CLASS)
                .attr("id", "cbnote-" + k)
                .on("click", this.update_note());

        now_g.append("circle").attr("cx", the_x)
                .attr("cy", the_y)
                .attr("r", circ_r);

        now_g.append("text")
                .attr("text-anchor", "middle")
                .attr("x", the_x)
                .attr("y", the_y + 4)
                .text(note_array[k]);
    }

    // Create the add button
     now_g = this.svg_chordbuild.append("g")
     .attr("class", CHBUILD_DEFAULT_ADD_CLASS);
     
     now_g.append("circle").attr("cx", half_h)
     .attr("cy", half_h)
     .attr("r", circ_r);
     
     now_g.append("text")
     .attr("text-anchor", "middle")
     .attr("x", half_h)
     .attr("y", half_h+8)
     .text("+");
     

    var fh = Math.floor(4 / 5 * chordbuild_h + 2 * circ_r);
    var base_y = Math.floor(half_h - fh / 2);
    var base_x = Math.floor(2 * half_h + 2 * circ_r);
    var base_dn = Math.floor((fh - 2 * CHBUILD_GRID_Y * circ_r) / (CHBUILD_GRID_Y - 1) + 2 * circ_r);
    var base_w = 7 * circ_r;
    var add_x = 0, add_y;

    // The keys
    var chord_str = Object.keys(chord_structures);

    // Create chord options
    for (var k = 0; k < chord_str.length; k++) {

        now_g = this.svg_chordbuild.append("g")
                .attr("class", CHBUILD_DEFAULT_CHORD_CLASS)
                .attr("id", "cbchord-" + k)
                .on("click", this.update_chord());

        // Some coordinate computations
        add_x += ((k !== 0 && (k % CHBUILD_GRID_Y === 0)) ? base_w + circ_r : 0);
        add_y = (k % CHBUILD_GRID_Y) * base_dn;

        now_g.append("rect")
                .attr("x", base_x + add_x)
                .attr("y", base_y + add_y)
                .attr("width", base_w)
                .attr("height", 2 * circ_r);

        now_g.append("text")
                .attr("text-anchor", "middle")
                .attr("x", base_x + add_x + Math.floor(base_w / 2))
                .attr("y", base_y + add_y + 20)
                .text(chord_str[k]);

    }

}

comptoolsChordbuilder.prototype.update_note = function () {
    var self = this;
    return function (d, i) {
        // Get the note, set it and call the updater
        // TODO: this way of getting notes is somewhat shabby
        // What if the index changes for some reason?
        var this_note_index = parseInt(d3.select(this).attr("id").split("-")[1]);
        var this_note = note_array[this_note_index];

        // Note logic: depending on this we decide what to do
        if (self.current_note === this_note) {
            self.current_note = "none";
            d3.select(this).classed(CHBUILD_SELECTED_MARKER, false);
        } else
        {
            self.svg_chordbuild.selectAll("." + CHBUILD_DEFAULT_MARKER_CLASS)
                    .classed(CHBUILD_SELECTED_MARKER, false);
            d3.select(this).classed(CHBUILD_SELECTED_MARKER, true);
            self.current_note = this_note;
        }

        self.selection_callback();

    };
};

comptoolsChordbuilder.prototype.update_chord = function () {
    var self = this;
    return function (d, i) {
        // TODO: this way of getting chords is somewhat shabby
        // What if the index changes for some reason?

        var chord_str = Object.keys(chord_structures);
        var this_chord_index = parseInt(d3.select(this).attr("id").split("-")[1]);
        var this_chord = chord_str[this_chord_index];

        // Note logic: depending on this we decide what to do
        if (self.current_chord === this_chord) {
            self.current_chord = "none";
            d3.select(this).classed(CHBUILD_SELECTED_MARKER, false);
        } else
        {
            self.svg_chordbuild.selectAll("." + CHBUILD_DEFAULT_CHORD_CLASS)
                    .classed(CHBUILD_SELECTED_MARKER, false);
            d3.select(this).classed(CHBUILD_SELECTED_MARKER, true);
            self.current_chord = this_chord;
        }

        self.selection_callback();
    };
};

comptoolsChordbuilder.prototype.selection_callback = function () {
    return 0;
};

// **********************
// Chord player functions
// **********************

// The object
function comptoolsChordPlayerElement(root, chord)
{
    // Initialization 
    
    var self = this;
    
    var my_chord = CHORD_LIST_ITEM_TEMPLATE.replace('{{chord-text}}', root + " " + chord);
    
    console.log(my_chord);
    
    this.my_root = root;
    this.my_chord = chord;
    
    // Add to DOM
    var chord_list_elem = d3.select("#" + CHORD_LIST_ID);
    chord_list_elem.append('li')
                   .attr('class', CHORD_LIST_ITEM_CLASS)
                   .attr('id', 'chord-list-item-'+chord_list_counter++)
                   .html(my_chord);
           
    // Delete
    this.delete = function()
    {
        
    }
           
           
}