// Global definitions
var FRET_FIRST_FRET = 63; // Base scale
var FRET_X_OFFSET = 10; // X coordinate offset
var FRET_Y_OFFSET = 10; // Y coordinate offset
var FRET_POS_BLK_HEIGHT = 15; // Position selection block height
var FRET_POS_BLK_OFFSET = 5; // Offset from the fretboard
var FRET_DRAW_UPTO_FRET = 20; // Final fret to draw
var FRET_DOTS = [0, 3, 5, 7, 9]; // Double dot at "0", i.e. 12, 24 frets
var FRET_DOT_DIAMETER = 6; // Dot diameter
var FRET_DOT_DEFAULT_CLASS = "fret-dot-default";
var FRET_DEFAULT_CLASS = "fretboard-default";
var FRET_SHADOW_DEFAULT_CLASS = "fretboard-shadow-default";
var FRET_POS_BLK_DEFAULT_CLASS = "fretboard-pos-blk-default";
var FRET_NUT_DEFAULT_CLASS = "fretboard-nut-default";
var FRET_DEFAULT_MARKER_CLASS = "fretboard-marker-default";
var FRET_WOUND_STRING_SEM_DST = 39; // Which strings are wound?
var FRET_STRING_MIN_DIAM = 1; // Min/max allowed string
var FRET_STRING_MAX_DIAM = 8; // diameters for rendering

// For the keyboard
var KEYB_DEFAULT_WHITE_KEY_CLASS = 'keyboard-white-key-default';
var KEYB_DEFAULT_BLACK_KEY_CLASS = 'keyboard-black-key-default';
var KEYB_DEFAULT_MARKER_CLASS = 'keyboard-marker-default';
var KEYB_TEXTLINE_HEIGHT = 20; // Text line is under the keyboard
var KEYB_TEXT_CLASS = 'keyboard-textline-text';


// Chord builder
var CHBUILD_GRID_Y = 5; // Number of elements in vertical section
var CHBUILD_DEFAULT_MARKER_CLASS = 'chordbuild-marker';
var CHBUILD_DEFAULT_CHORD_CLASS = 'chordbuild-chord';
var CHBUILD_SELECTED_MARKER = 'chordbuild-marker-selected';
var CHBUILD_DEFAULT_ADD_CLASS = 'chordbuild-add';

// Chord progressions
var PROGBUILD_MAJOR_SVG_RELATIONS = {
    "g-majprog-i": "maj",
    "g-majprog-ii": "min",
    "g-majprog-iii": "min",
    "g-majprog-iv": "maj",
    "g-majprog-v": "maj",
    "g-majprog-vi": "min",
    "g-majprog-viidim": "dim"
};

var PROGBUILD_MINOR_SVG_RELATIONS = {
    "g-minprog-i": "min",
    "g-minprog-iidim": "dim",
    "g-minprog-iii": "maj",
    "g-minprog-iv": "min",
    "g-minprog-v": "min",
    "g-minprog-vi": "maj",
    "g-minprog-vii": "maj"
};


// Where are the additional SVG files located? Relative to index.html!
var SVG_DIRECTORY = "svg/";

// Base notes array
var note_array = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#',
    'G', 'G#', 'A', 'A#', 'B'];

// Intervals given in terms of semitones from root
var chord_structures = {
    "maj": [4, 7],
    "maj6": [4, 7, 9],
    "maj6add9": [4, 7, 9, 14],
    "maj7": [4, 7, 11],
    "maj9": [4, 7, 11, 14],
    "dom7": [4, 7, 10],
    "dom7aug5": [4, 8, 10],
    "dom7sus4": [5, 7, 10],
    "dom9": [4, 7, 10, 14],
    "dom9sus4": [5, 7, 10, 14],
    "dom11": [4, 7, 10, 14, 17],
    "dom13": [4, 7, 10, 14, 17, 21],
    "aug": [4, 8],
    "min": [3, 7],
    "min6": [3, 7, 9],
    "min7": [3, 7, 10],
    "min7b5": [3, 6, 10],
    "min9": [3, 7, 10, 14],
    "min11": [3, 7, 10, 14, 17],
    "dim": [3, 6],
    "dim7": [3, 6, 9],
    "sus4": [5, 7],
    "sus2": [2, 7],
    "add9": [4, 7, 14]
};

// Chord list item specific
var CHORD_LIST_TEMPLATE = "<ul id=\"chord-list\" class=\"uk-grid-small uk-child-width-1-3 uk-child-width-1-4@s uk-text-center\" uk-sortable=\"handle: .uk-sortable-handle\" uk-grid></ul>";
var CHORD_LIST_CONTROL_TEMPLATE = "<div class=\"chord-player-controls\"><span class=\"chord-play\">Play</span> @ <input class=\"chord-bpm\" type=\"text\" value=\"{{chord-bpm}}\"> bpm <span class=\"import-chord-list\">Import</span> <span class=\"export-chord-list\">Export</span></div><div class=\"chord-player-timeline\"></div><div class=\"chord-player-timeline-measures\"></div>";
var CHORD_LIST_ITEM_TEMPLATE = "<div class=\"uk-card uk-card-default uk-card-body\"><div class=\"chord-header\"><span class=\"uk-sortable-handle\" uk-icon=\"icon: table\"></span> <span class=\"chord-text\">{{chord-text}}</span> | <span class=\"chord-sustain\">sus.</span><br /></div><div class=\"chord-option chord-length\"><span class=\"chord-option-label\">Length:</span><span class=\"chord-controls chord-reduce-value\" uk-icon=\"icon: minus-circle;\"></span><input type=\"text\" class=\"chord-text-input\" value=\"{{chord-length}}\" /><span class=\"chord-controls chord-add-value\" uk-icon=\"icon: plus-circle;\"></span></div><div class=\"chord-option chord-octave\"><span class=\"chord-option-label\">Octave:</span><span class=\"chord-controls chord-reduce-value\" uk-icon=\"icon: minus-circle;\"></span><input type=\"text\" class=\"chord-text-input\" value=\"{{chord-octave}}\" /><span class=\"chord-controls chord-add-value\" uk-icon=\"icon: plus-circle;\"></span></div><div class=\"chord-option chord-actions\"><span class=\"chord-controls chord-duplicate\">duplicate</span> | <span class=\"chord-controls chord-delete\">delete</span></div></div>";
var CHORD_LENGTHS = ["1/16", "1/12", "1/8", "1/6", "1/4", "1/3", "1/2", "1"];
var CHORD_OCTAVES = [1, 2, 3, 4, 5];
var CHORD_PLAYER_CLASS = 'chord-player';
var CHORD_LIST_ID = "chord-list";
var CHORD_LIST_ITEM_CLASS = "chord-list-element";

// Global counter and chord placeholder
var chord_list_counter = 0;
var chord_list = [];

// Play event order
var chord_play_events = [];

// Configuration object
var comptools_config = {
    "tempo": 120,
    "time_signature": "4/4",
    "play_sound": true,
    "play_midi": false,
    "instrument_glue": null, // Reference to instrument glue
    "theory": null, // Reference to theory
    "chord_player": null, // Reference to chord player
    "chord_builder": null // Reference to chord builder
};

// Helper functions

// Saturates value so that it cannot go outside feasible bounds
function saturate_value(val, minval, maxval)
{
    if (minval === undefined) {
        minval = -1;
        console.log('Minimum saturation value is undefined! Using defaults.');
    }

    if (maxval === undefined) {
        maxval = 1;
        console.log('Maximum saturation value is undefined! Using defaults.');
    }

    if (val < minval) {
        val = minval;
    }
    if (val > maxval) {
        val = maxval;
    }

    return val;
}

// Get length in seconds based on tempo
function get_duration_in_seconds(dur) {
    var mydur = eval(dur);

    // Check if tempo setting exists in options
    var tempo = 120;
    if (comptools_config.tempo !== undefined) {
        tempo = comptools_config.tempo;
    }

    // Multiply fraction by full note length in this tempo
    return mydur * (240 / tempo);
}

function get_duration_in_ms(dur) {
    return 1000 * get_duration_in_seconds(dur);
}

function add_chord_to_player(note, chord) {
    var my_chord = new comptoolsChordPlayerElement(note, chord);
    chord_list.push(my_chord);

    // Because the relationship is many to one, we'll have to use
    // a config variable here---reference to instrument glue.
    // Therefore, it must be assigned beforehand.
    if (comptools_config.instrument_glue !== undefined) {
        my_chord.selection_callback =
                comptools_config
                .instrument_glue
                .funHighlightChordListElementNotes;
    }

    if (comptools_config.chord_player !== undefined) {
        comptools_config.chord_player.update_callback();
    }

    play_chord(note, chord, 3, 0.5);
}

// Audio context sound player
function play_chord(note, chord, oct, len) {
    // Check if there is audio context and that sound is enabled
    var my_notes = get_chord_notes(note, chord, oct);
    if (comptools_sound_player !== undefined && comptools_config.play_sound)
    {
        comptools_sound_player.triggerAttackRelease(my_notes, len);
    }

    // If there is MIDI support and MIDI is enabled, then play midi
    if (comptools_midi_player !== undefined &&
            comptools_midi_player.ready && comptools_config.play_midi) {
        comptools_midi_player.sendOnOffMessage(my_notes, 1000 * len);
    }

}
;

// Audio context sound player
function player_play_chord(notes, len) {

    // Play the sound
    if (comptools_sound_player !== undefined && comptools_config.play_sound)
    {
        comptools_sound_player.triggerAttackRelease(notes, len);
    }

    if (comptools_midi_player !== undefined &&
            comptools_midi_player.ready && comptools_config.play_midi) {
        comptools_midi_player.CyclicSendOnMessage(notes);
    }
}
;

// Extend array with a method to search for objects by key-value pairs
Array.prototype.find_obj_by_prop = function (key, val) {
    // Find the index of the object
    var found = -1;
    for (var k = 0; k < this.length; k++)
    {
        if (this[k][key] === val) {
            found = k;
            break;
        }
    }
    // Return index
    return found;
};

Array.prototype.get_obj_by_prop = function (key, val) {
    return this[this.find_obj_by_prop(key, val)];
}

// Remove object from array by property
Array.prototype.remove_obj_by_prop = function (key, val)
{
    this.splice(this.find_obj_by_prop(key, val), 1);
    return this;
};


// Function to return chord notes
function get_chord(note, chord)
{
    var my_n = note_array.indexOf(note.toUpperCase());
    var my_c = chord_structures[chord.toLowerCase()];

    var my_notes = new Array();
    my_notes.push(note);
    for (var k = 0; k < my_c.length; k++) {
        my_notes.push(note_array[(my_n + my_c[k]) % note_array.length]);
    }
    return my_notes;
}

// This function only parses the string at this point, e.g., "4/4".
// TODO: Make a better implementation with validity checking
function parse_time_signature(ts) {
    return [parseInt(ts.split("/")[0]), parseInt(ts.split("/")[1])];
}

// Function to return chord notes
function get_chord_notes(note, chord, oct)
{
    // Start from 3rd "octave" by default
    if (oct === undefined)
    {
        oct = 3;
    }

    // Generate an couple of octaves worth of notes to work with
    var my_n = note_array.indexOf(note.toUpperCase());
    var fi_n = my_n;
    var now_notes = new Array();

    for (var j = 0; j < 24; j++)
    {
        now_note = note_array[(fi_n + j) % note_array.length];
        now_notes.push(now_note + oct);
        // Test one step ahead
        oct += ((fi_n + j + 1) % note_array.length === 0 ? 1 : 0);
    }

    var my_c = chord_structures[chord.toLowerCase()];

    var my_notes = new Array();
    my_notes.push(now_notes[0]);
    for (var k = 0; k < my_c.length; k++) {
        my_notes.push(now_notes[my_c[k]]);
    }
    return my_notes;
}

// Parse the chord player
function parse_chord_player() {
    // Get the current order
    var play_order_ids = [];
    d3.selectAll('#' + CHORD_LIST_ID + ' .' + CHORD_LIST_ITEM_CLASS).
            each(function () {
                play_order_ids.push(d3.select(this).attr('id'));
            });

    // Go through all id's and find a selected chord,
    // if any; defaults to first chord
    var my_elem, chord_selected = -1;
    for (var k = 0; k < play_order_ids.length; k++) {
        if (d3.select('#' + CHORD_LIST_ID + ' #'
                + play_order_ids[k] + ' div.uk-card')
                .classed('chord-selected')) {
            chord_selected = k;
            break;
        }
    }

    // NB! Note that chords marked as "sustain" will NOT play if they are
    // selected and represent an actual continuation of the previous
    // chord(s). Thus, the user must always select the first chord in the
    // series to hear the full duration. (TODO: Maybe fix this?)

    // Create the event list
    var current_chord, unchanged_chord;
    var unchanged_chord_event_ind = 0;  // This is used to update lengths

    // Start position
    var start_position = 0;

    // Total duration
    var total_dur = 0;

    var chord_play_events = [];  // Local scope
    for (var k = 0; k < play_order_ids.length; k++) {

        current_chord = chord_list.get_obj_by_prop('elem_id',
                play_order_ids[k]);

        // Store the first chord to unchanged_chord so we can update
        // it with additional length if sustains are used in sequence
        if (k === 0) {
            unchanged_chord = current_chord;
            unchanged_chord_event_ind = 0;
        }

        // Check whether this chord is the same as unchanged_chord and there
        // is a sustain mark present (for all chords after the first one)
        var do_sustain = false;
        if (k > 0 && current_chord.my_root === unchanged_chord.my_root &&
                current_chord.my_chord === unchanged_chord.my_chord &&
                current_chord.sustain) {
            do_sustain = true;
        }

        // Get current duration
        var now_dur = get_duration_in_seconds(current_chord.get_dur());

        // Figure out start position by selected chord
        if (chord_selected !== -1 && k < chord_selected) {
            start_position += now_dur;
        }

        // Create the event
        var my_event = {
            "object": current_chord,
            "highlight_id": current_chord.elem_id,
            "chord_notes": get_chord_notes(current_chord.my_root,
                    current_chord.my_chord, current_chord.get_oct()),
            "highlight_notes": get_chord(current_chord.my_root,
                    current_chord.my_chord),
            "duration": now_dur,
            "interval": now_dur,
            "sustain": do_sustain
        };

        // Get sum of all durations
        total_dur += now_dur;

        chord_play_events.push(my_event);

        // Legato?
        if (do_sustain) {
            chord_play_events[unchanged_chord_event_ind].duration +=
                    get_duration_in_seconds(current_chord.get_dur());
        } else {
            unchanged_chord = current_chord;
            unchanged_chord_event_ind = k;
        }

    }

    // Return play events and the selected chord
    return {"events": chord_play_events,
        "selected_chord": chord_selected,
        "start_position": start_position,
        "total_duration": total_dur};
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
        for (var k = 0; k <= my_pattern.length; k++)
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
    for (var k = 0; k < notes.length; k++) {
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
    for (var k = 0; k < notes.length; k++) {
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


// This is a glue object for drawing all selected notes on all
// instruments that the object enumerator contains.

// This ought to be replaced with an event dispatcher/signal model.

// Create the object...
function InstrumentGlue() {
    // ... and push single note update functions here
    this.objArray = new Array();

    // Bind theory object
    this.theory = null;

    // Bind chord builder object
    this.chord_builder = null;

    // Bind chord progressions object
    this.chord_progressions = null;

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

                // Also update chord progressions diagram for the given scale
                self.chord_progressions.updateChords(myth.root, myth.scale);

            } else {
                self.objArray[k].clearNotes();
                self.chord_progressions.clearChords();
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

    // Highlight all chord notes
    this.funHighlightChordListElementNotes = function (obj, act)
    {
        if (act) {
            // Get the notes
            var the_notes = get_chord(obj.my_root, obj.my_chord);

            for (var k = 0; k < self.objArray.length; k++) {
                self.objArray[k].updateNotes(the_notes);
            }

            // Play the chord
            play_chord(obj.my_root, obj.my_chord, obj.get_oct(),
                    get_duration_in_seconds(obj.get_dur()));

        } else {
            for (var k = 0; k < self.objArray.length; k++) {
                self.objArray[k].clearNotes(the_notes);
            }
        }

    };
}
;


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
    var my_theory_svg = SVG_DIRECTORY + "note-relationships.svg";

    // Load the XML and place it into the specified container
    d3.xml(my_theory_svg, function (xml) {
        document.getElementById(cont_id).appendChild(xml.documentElement);

        // The id
        var elid = "#" + cont_id;

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
        for (var k = 0; k < notes.length; k++) {
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
        for (var k = 0; k < new_notes.length; k++) {
            if (new_notes[k].indexOf("!") !== -1) {
                var class_to_select = the_class + new_notes[k][0].toLowerCase();
                this.svg_theory.selectAll(class_to_select)
                        .classed("visible-accidental", true);
            }
        }
        return true;
    };

    this.clearAccidentals = function () {
        for (var k = 1; k <= 7; k++) {
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

// Chord progressions
function comptoolsChordProgressions(cont_class, root, scale) {

    // Draw immediately
    var draw_now = false;

    // Check input arguments
    if (root === undefined || scale === undefined) {
        root = 'none';
        scale = 'none';
    } else {
        // Otherwise we'd need to draw this immediately, 
        // and we do this after everything is initialized
        draw_now = true;
    }

    var self = this;

    // Current root
    this.root = root;

    // Current scale
    this.scale = scale;

    // Major and minor progression container element references
    this.maj_prog = null;
    this.min_prog = null;

    // Get the correct SVG file and add it to the specified container
    var major_progressions = SVG_DIRECTORY + "major_chord_progressions.svg";
    var minor_progressions = SVG_DIRECTORY + "minor_chord_progressions.svg";

    // Add the chord progression div containers
    d3.select(cont_class).append('div').attr('id', 'id-major-progressions');
    d3.select(cont_class).append('div')
            .attr('id', 'id-minor-progressions')
            .style('display', 'none'); // Hide by default

    // Load the XML and place it into the specified container
    d3.xml(major_progressions, function (xml) {
        document.getElementById('id-major-progressions')
                .appendChild(xml.documentElement);

        // The id
        var elid = "#id-major-progressions";
        self.maj_prog = d3.select(elid).select("svg");

        // Fill the whole container element; we assume SVG has no margins
        var the_conw = parseFloat(d3.select(elid).style("width"));
        var the_conh = parseFloat(d3.select(elid).style("height"));

        // Set the width/height
        self.maj_prog.attr("width", the_conw);
        self.maj_prog.attr("height", the_conh);

        // Initialize the text
        self.initializeMajorText();

    });

    // Do the same for minor progressions
    d3.xml(minor_progressions, function (xml) {
        document.getElementById('id-minor-progressions').appendChild(xml.documentElement);

        // The id
        var elid = "#id-minor-progressions";
        self.min_prog = d3.select(elid).select("svg");

        // Fill the whole container element; we assume SVG has no margins
        var the_conw = parseFloat(d3.select(elid).style("width"));
        var the_conh = parseFloat(d3.select(elid).style("height"));

        // Set the width/height
        self.min_prog.attr("width", the_conw);
        self.min_prog.attr("height", the_conh);

        // Initialize the text
        self.initializeMinorText();

    });
}

// Erases text and prepares the fields for future values
comptoolsChordProgressions.prototype.initializeMajorText = function () {

    for (var k in PROGBUILD_MAJOR_SVG_RELATIONS) {
        d3.selectAll(".chord-progressions svg g." + k + " text")
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .text("");

        d3.selectAll(".chord-progressions svg g." + k + " rect")
                .style("fill", "#fff");

        d3.selectAll(".chord-progressions svg g." + k)
                .style("cursor", "pointer")
                .on("click", function () {
                    return null;
                });
    }
};

comptoolsChordProgressions.prototype.initializeMinorText = function () {

    for (var k in PROGBUILD_MINOR_SVG_RELATIONS) {
        d3.selectAll(".chord-progressions svg g." + k + " text")
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .text("");

        d3.selectAll(".chord-progressions svg g." + k + " rect")
                .style("fill", "#fff");

        d3.selectAll(".chord-progressions svg g." + k)
                .style("cursor", "pointer")
                .on("click", function () {
                    return null;
                });
    }
};

comptoolsChordProgressions.prototype.clearChords = function () {

    for (var k in PROGBUILD_MAJOR_SVG_RELATIONS) {
        d3.selectAll(".chord-progressions svg g." + k + " text")
                .text("");

        d3.selectAll(".chord-progressions svg g." + k)
                .on("click", function () {
                    return null;
                });
    }

    for (var k in PROGBUILD_MINOR_SVG_RELATIONS) {
        d3.selectAll(".chord-progressions svg g." + k + " text")
                .text("");

        d3.selectAll(".chord-progressions svg g." + k)
                .on("click", function () {
                    return null;
                });
    }

};

comptoolsChordProgressions.prototype.updateChords = function (note, scale) {

    self = this;

    // Get the notes of the scale first
    var notes = get_scale(flats2sharps(note), scale).notes;

    if (scale === "major") {
        d3.select("#id-major-progressions").style("display", "block");
        d3.select("#id-minor-progressions").style("display", "none");

        var it = 0;
        for (var k in PROGBUILD_MAJOR_SVG_RELATIONS) {
            d3.selectAll(".chord-progressions svg g." + k + " text")
                    .text(notes[it] + " " + PROGBUILD_MAJOR_SVG_RELATIONS[k]);

            d3.selectAll(".chord-progressions svg g." + k)
                    .on("click", self.handle_add_chord(notes[it], PROGBUILD_MAJOR_SVG_RELATIONS[k]));
            it++;
        }

    } else if (scale === "minor") {
        d3.select("#id-minor-progressions").style("display", "block");
        d3.select("#id-major-progressions").style("display", "none");

        var it = 0;
        for (var k in PROGBUILD_MINOR_SVG_RELATIONS) {
            d3.selectAll(".chord-progressions svg g." + k + " text")
                    .text(notes[it] + " " + PROGBUILD_MINOR_SVG_RELATIONS[k]);

            d3.selectAll(".chord-progressions svg g." + k)
                    .on("click", self.handle_add_chord(notes[it], PROGBUILD_MINOR_SVG_RELATIONS[k]));
            it++;
        }
    }
};

comptoolsChordProgressions.prototype.handle_add_chord = function (note, chord) {
    return function () {
        add_chord_to_player(note, chord);
    };
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
    // NB! These should always be set in pixels.
    var keyb_conw = parseFloat(d3.select(cont_class).style("width"));
    var keyb_conh = parseFloat(d3.select(cont_class).style("height"));
    
    // Add a little height to original container to account for note names
    d3.select(cont_class).style("height", (keyb_conh + KEYB_TEXTLINE_HEIGHT) + "px");

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
            .attr("height", keyb_conh + KEYB_TEXTLINE_HEIGHT);

    // Start populating the svg
    var curr_note = the_range[0][0];
    var note_ptr = note_array.indexOf(curr_note.toUpperCase());
    var curr_note_index = parseInt(the_range[0][1]);

    // The reason to have the buffer is that we need to draw the black key
    // AFTER the next white key for correct element order. Otherwise it will
    // be partially covered by the next white key.

    bl_buffer = new Array(); // Yes, you read correctly. BLACK BUFFER. ffs.
    curr_x_pos = 1;
    for (var k = 0; k < keys_to_draw; k++) {

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
            
            // In note is C_
            if (curr_note.indexOf("c") !== -1){
                this.svg_keyboard.append('text')
                        .attr('x', curr_x_pos + 2) // TODO: this should be improved
                        .attr('y', wh_key_height + KEYB_TEXTLINE_HEIGHT)
                        .attr('class', KEYB_TEXT_CLASS)
                        .html('C' + curr_note_index);
            }

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
    var fretboardPosBlkClass = FRET_POS_BLK_DEFAULT_CLASS;
    var fretCount = FRET_DRAW_UPTO_FRET + 1;

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
        
        if (options.hasOwnProperty("fretboardPosBlkClass"))
        {
            fretboardPosBlkClass = options.fretboardPosBlkClass;
        }

        if (options.hasOwnProperty("fretCount"))
        {
            fretCount = options.fretCount;
        }

    }

    this.fret_notes = new Object();
    this.notes = null;
    this.tuning = tuning.toUpperCase();
    this.cont_class = cont_class;
    this.svg_fretboard = null;

    // Position information: show selected/highlighted notes only on the
    // specified range of frets
    this.pos_info = null;
   
    // This method creates the actual fretboard. TODO: method name may be
    // misleading, so maybe rename. Also, rebuilding the SVG on tuning change
    // will also remove position information; be sure to save/update that
    this.updateTuning = function (tuning) {

        // Check optional argument
        if (typeof tuning !== 'undefined' && tuning !== null && tuning !== "")
        {
            this.tuning = tuning.toUpperCase(); // Update tuning property
        }

        var cont_class = this.cont_class;
        var fret_current_tuning = this.tuning;

        // Save notes
        this.saveHighlightedNotes();
        
        // Save position information
        this.savePositionInfo();

        // Remove the SVG (if it exists)
        d3.select(cont_class).selectAll('*').remove()

        // Create note/index arrays
        this.fret_notes.note = Array();
        this.fret_notes.index = Array();
        this.fret_notes.full_note = Array();
        this.fret_notes.count = null;

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
        var fret_h = fret_conh - FRET_Y_OFFSET - FRET_POS_BLK_HEIGHT - FRET_POS_BLK_OFFSET;
        
        // We draw here the position block
        var fret_pos_blk = fret_h + FRET_Y_OFFSET + FRET_POS_BLK_OFFSET;

        // Create the SVG container: fills the containing container
        this.svg_fretboard = d3.select(cont_class).append("svg")
                .attr("width", fret_w)
                .attr("height", fret_h + fret_pos_blk);

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
        
        // Position selection block
        this.svg_fretboard.append("rect").attr("x", fret_x_coord)
                .attr("y", fret_pos_blk)
                .attr("width", now_fret_size)
                .attr("height", FRET_POS_BLK_HEIGHT)
                .attr("class", fretboardPosBlkClass + " nok")
                .attr("data-posctrl", 0);

        // Add the first center
        centerPos.push(Math.floor(fret_x_coord + now_fret_size / 2));

        fret_x_coord += now_fret_size + 1;

        // Now, we generate all other frets
        for (var n = 1; n < fretCount; n++) {

            var now_fret_size = Math.floor(firstFretWidth * Math.exp(-0.0655 * n));
            centerPos.push(Math.floor(fret_x_coord + now_fret_size / 2));
            fret_min_width = Math.min(fret_min_width, now_fret_size);

            this.svg_fretboard.append("rect").attr("x", fret_x_coord)
                    .attr("y", FRET_Y_OFFSET)
                    .attr("width", now_fret_size)
                    .attr("height", fret_h)
                    .attr("class", fretboardClass);
            
            this.svg_fretboard.append("rect").attr("x", fret_x_coord)
                .attr("y", fret_pos_blk)
                .attr("width", now_fret_size)
                .attr("height", FRET_POS_BLK_HEIGHT)
                .attr("class", fretboardPosBlkClass + " nok")
                .attr("data-posctrl", n);

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
            for (var j = 0; j < centerPos.length; j++)
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
                var now_g = this.svg_fretboard.append("g")
                        .attr("class", current_note_class + " nps-" + j);
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
            d3.selectAll(this.cont_class + " g." + FRET_DEFAULT_MARKER_CLASS)
                    .on('click', this.clickHandler());

        }

        // Restore notes, if needed
        this.restoreHighlightedNotes();
        
        // Restore or initialize positions
        if (this.pos_info === null){
            // Default behavior is to display all
            d3.selectAll(this.cont_class + " rect." + FRET_POS_BLK_DEFAULT_CLASS)
                    .classed('ok', true);
            //this.savePositionInfo();
            //this.restorePositionInfo(); // This call is needed to actually
                                        // update marker classes
                                        
            // Just bruteforce it now. TODO: implement properly
            d3.selectAll(this.cont_class + " g." + 
                    FRET_DEFAULT_MARKER_CLASS)
                    .classed('ok', true);
        } else
        {
            this.restorePositionInfo();
        }
        
        // Assign click events to position selection controls
        d3.selectAll(this.cont_class + " rect." + FRET_POS_BLK_DEFAULT_CLASS)
                .on('click', this.positionSelectionHandler());
        

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
        for (var k = 0; k < notes.length; k++) {
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

    this.accidental_state = "sharps";

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

    // The following functions are necessary when regeneration of the fretboard
    // must occur (e.g., tuning changed) while there are notes highlighted on it

    // Store the notes into a placeholder property
    this.saveHighlightedNotes = function () {

        // Check if the fretboard exists
        if (this.svg_fretboard !== null) {
            // We scan three classes of notes based on the highlighting function
            var rexp_note = /note-([a-g]s?(?!s?[0-9]))/ig;
            var rexp_noten = /note-([a-g]s?[0-9])/ig;

            var fbh_notes = [];
            var fbhr_notes = [];
            var fbs_notes = [];

            this.svg_fretboard.selectAll('.fretboard-marker-highlighted')
                    .each(function (d, i) {
                        var capt_note = rexp_note.exec(d3.select(this).attr('class'))[1]
                                .replace("s", "#").toUpperCase();
                        rexp_note.lastIndex = 0;
                        if (fbh_notes.indexOf(capt_note) === -1) {
                            fbh_notes.push(capt_note);
                        }
                    });

            this.svg_fretboard.selectAll('.fretboard-marker-highlighted-root')
                    .each(function (d, i) {
                        var capt_note = rexp_note.exec(d3.select(this).attr('class'))[1]
                                .replace("s", "#").toUpperCase();
                        rexp_note.lastIndex = 0;
                        if (fbhr_notes.indexOf(capt_note) === -1) {
                            fbhr_notes.push(capt_note);
                        }
                    });

            this.svg_fretboard.selectAll('.fretboard-marker-selected')
                    .each(function (d, i) {
                        var capt_note = rexp_noten.exec(d3.select(this).attr('class'))[1]
                                .replace("s", "#").toUpperCase();
                        rexp_noten.lastIndex = 0;
                        if (fbs_notes.indexOf(capt_note) === -1) {
                            fbs_notes.push(capt_note);
                        }
                    });

            // Save notes, but only if there are any
            if (fbh_notes.length === 0 &&
                    fbhr_notes.length === 0 &&
                    fbs_notes.length === 0) {
                this.notes = null;
            } else
            {
                this.notes = {fbh: fbh_notes,
                    fbhr: fbhr_notes,
                    fbs: fbs_notes};
            }
        } else
        {
            this.notes = null;
        }

    };

    // Restore the notes
    this.restoreHighlightedNotes = function () {
        if (this.notes !== null && this.svg_fretboard !== null) {
            // Do some magic here
            var k = 0;

            // Restore the notes from the three arrays
            for (k = 0; k < this.notes.fbh.length; k++) {
                this.svg_fretboard.selectAll('.note-' +
                        this.notes.fbh[k].toLowerCase().replace("#", "s"))
                        .classed('fretboard-marker-highlighted', true);
            }

            for (k = 0; k < this.notes.fbhr.length; k++) {
                this.svg_fretboard.selectAll('.note-' +
                        this.notes.fbhr[k].toLowerCase().replace("#", "s"))
                        .classed('fretboard-marker-highlighted-root', true);
            }

            for (k = 0; k < this.notes.fbs.length; k++) {
                this.svg_fretboard.selectAll('.note-' +
                        this.notes.fbs[k].toLowerCase().replace("#", "s"))
                        .classed('fretboard-marker-selected', true);
            }

        }

        // Remove the stored notes
        this.notes = null;
    };
    
    // Save position
    this.savePositionInfo = function() {
       return null;
    };
    
    this.restorePositionInfo = function(){
      return null;  
    };

    // Update the fretboard (initializtion)
    this.updateTuning();

}

// Note selection callback
comptoolsFretboard.prototype.clickHandler = function ()
{
    var self = this;
    return function (d, i) {
        var action = !d3.select(this).classed("fretboard-marker-selected");
        d3.select(this).classed("fretboard-marker-selected", action);

        // Get the class of the selected element and pass it to callback
        var the_note = d3.select(this).attr("class");
        var myregexp = /note-([a-g]s?[0-9])/ig;
        var capt_note = myregexp.exec(the_note)[1]
                .replace("s", "#").toUpperCase();
        self.selection_callback(capt_note, action);
    };
};

comptoolsFretboard.prototype.positionSelectionHandler = function (){
  var self = this;
  return function (d, i) {
    
        // Which position control are we dealing with here?
        var the_position = d3.select(this).attr('data-posctrl');

        
        if (d3.select(this).classed('ok')){
            d3.select(this).classed('ok', false);
            d3.selectAll(self.cont_class + " g." + 
                    FRET_DEFAULT_MARKER_CLASS + ".nps-" + the_position)
                    .classed('ok', false);
        }
        else
        {
            d3.select(this).classed('ok', true);
            d3.selectAll(self.cont_class + " g." + 
                    FRET_DEFAULT_MARKER_CLASS + ".nps-" + the_position)
                    .classed('ok', true);
        }
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

    // Initial angle is -PI
    var the_x, the_y;
    var ang = -Math.PI;
    var dang = 2 * Math.PI / note_array.length;

    var now_g;

    // Create markers
    for (var k = 0; k < note_array.length; k++) {
        the_x = half_h - th_h * Math.cos(ang + dang * k);
        the_y = half_h - th_h * Math.sin(ang + dang * k);

        now_g = this.svg_chordbuild.append("g")
                .attr("class", CHBUILD_DEFAULT_MARKER_CLASS + " "
                        + "chb-n-" + note_array[k].replace("#", "s").toLowerCase())
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
            .attr("class", CHBUILD_DEFAULT_ADD_CLASS)
            .on("click", this.add_chord_to_player());

    now_g.append("circle").attr("cx", half_h)
            .attr("cy", half_h)
            .attr("r", circ_r);

    now_g.append("text")
            .attr("text-anchor", "middle")
            .attr("x", half_h)
            .attr("y", half_h + 8)
            .text("+");


    var fh = Math.floor(4 / 5 * chordbuild_h + 2 * circ_r);
    var base_y = Math.floor(half_h - fh / 2);
    var base_x = Math.floor(2 * half_h + 2 * circ_r);
    var base_dn = Math.floor((fh - 2 * CHBUILD_GRID_Y * circ_r) / (CHBUILD_GRID_Y - 1) + 2 * circ_r);
    var base_w = 6 * circ_r;
    var add_x = 0, add_y;

    // The keys
    var chord_str = Object.keys(chord_structures);

    // Create chord options
    for (var k = 0; k < chord_str.length; k++) {

        now_g = this.svg_chordbuild.append("g")
                .attr("class", CHBUILD_DEFAULT_CHORD_CLASS + " "
                        + "chb-c-" + chord_str[k])
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

        // Edit the chord if needed
        self.edit_chord_in_player();

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

        self.edit_chord_in_player();
        self.selection_callback();
    };
};


// This is used to edit the current chord in the player if it exists
comptoolsChordbuilder.prototype.edit_chord_in_player = function () {
    if (comptools_config.chord_player !== undefined &&
            comptools_config.chord_player.current_chord !== null &&
            this.current_note !== "none" &&
            this.current_chord !== "none") {
        comptools_config.chord_player.current_chord.updateChord(
                this.current_note, this.current_chord);
    }
};

// Note that his function DOES NOT update the fretboards and keyboards
// What it does is it only highlights the desired note and chord in the selector
comptoolsChordbuilder.prototype.set_note_chord = function (note, chord) {

    // Set current note and chord. We assume they are appropriate!
    this.current_note = note;
    this.current_chord = chord;

    // Get class names
    var note_cl = "chb-n-" + note.replace("#", "s").toLowerCase();
    var chord_cl = "chb-c-" + chord;

    // Remove all previous highlights
    this.svg_chordbuild.selectAll("." + CHBUILD_DEFAULT_MARKER_CLASS)
            .classed(CHBUILD_SELECTED_MARKER, false);
    this.svg_chordbuild.selectAll("." + CHBUILD_DEFAULT_CHORD_CLASS)
            .classed(CHBUILD_SELECTED_MARKER, false);

    // Find and highlight the correct markers
    this.svg_chordbuild.select("." + note_cl)
            .classed(CHBUILD_SELECTED_MARKER, true);
    this.svg_chordbuild.select("." + chord_cl)
            .classed(CHBUILD_SELECTED_MARKER, true);


};


comptoolsChordbuilder.prototype.add_chord_to_player = function () {
    var self = this;
    return function (d, i) {

        if (self.current_chord !== "none" &&
                self.current_note !== "none")
        {
            add_chord_to_player(self.current_note, self.current_chord);
        }
    };
};

comptoolsChordbuilder.prototype.selection_callback = function () {
    return 0;
};

// **********************************
// Chord player objects and functions
// **********************************

// The object
function comptoolsChordPlayerElement(root, chord, dur, oct, sus)
{

    // Check argument list
    var my_dur = '1/2';
    if (dur !== undefined)
    {
        my_dur = dur;
    }

    var my_oct = 3;
    if (oct !== undefined)
    {
        my_oct = oct;
    }
    
    var my_sus = false;
    if (sus !== undefined){
        my_sus = sus;
    }

    // Initialization 
    var self = this;

    // Check root and chord, use default (C maj) if unsupported
    var my_root = 'C';
    root = flats2sharps(root).toUpperCase().replace("H", "B"); // Make sure root is correct
    if (note_array.indexOf(root) !== -1){
        my_root = root;
    }else{
        console.log('Wrong chord root detected. Using default value.');
    }
    
    var my_chord = 'maj';
    chord = chord.toLowerCase();
    if (chord_structures.hasOwnProperty(chord)){
        my_chord = chord;
    }else{
        console.log('Wrong chord detected. Using default value.');
    }

    this.my_root = my_root;
    this.my_chord = my_chord;

    // Timeline correspondence
    this.timeline_id = null;

    // Indices for duration and octave: defaults to length of 1/2 and 3rd octave
    this.duration_index = CHORD_LENGTHS.indexOf(my_dur);
    if (this.duration_index === -1){
        my_dur = '1/2';
        this.duration_index = CHORD_LENGTHS.indexOf('1/2');
        console.log('Wrong duration detected. Using default value.');
    }
    
    this.octave_index = CHORD_OCTAVES.indexOf(my_oct);
    if (this.octave_index === -1){
        my_oct = 3;
        this.octave_index = CHORD_OCTAVES.indexOf(3);
        console.log('Wrong octave detected. Using default value.');
    }

    // Also methods to get actual values
    this.get_dur = function () {
        return CHORD_LENGTHS[this.duration_index];
    };

    this.get_oct = function () {
        return CHORD_OCTAVES[this.octave_index];
    };

    // Play this chord
    this.play = function () {
        play_chord(this.my_root, this.my_chord, this.get_oct(),
                get_duration_in_seconds(this.get_dur()));
    }

    // Whether to use sustain with several same chords
    this.sustain = my_sus;

    this.elem_id = 'chord-list-item-' + chord_list_counter++;

    // Replace the values
    var my_chord_elem = CHORD_LIST_ITEM_TEMPLATE.replace('{{chord-text}}', root + " " + chord);
    my_chord_elem = my_chord_elem.replace('{{chord-length}}', my_dur);
    my_chord_elem = my_chord_elem.replace('{{chord-octave}}', my_oct);

    // Add to DOM
    var chord_list_elem = d3.select("#" + CHORD_LIST_ID);
    this.list_elem = chord_list_elem.append('li')
            .attr('class', CHORD_LIST_ITEM_CLASS)
            .attr('id', this.elem_id)
            .html(my_chord_elem);

    // Set up sustain
    d3.select("#" + this.elem_id + ' .chord-sustain')
            .classed('selected', this.sustain);

    // Assign actions

    // Legato
    d3.select("#" + this.elem_id + ' .chord-sustain')
            .on('click', function () {
                self.sustain = !self.sustain;
                d3.select(this).classed('selected', self.sustain);
                if (comptools_config.chord_player !== undefined) {
                    comptools_config.chord_player.update_callback();
                }
            }
            );

    // Chord selection
    d3.select("#" + this.elem_id + ' .chord-header .chord-text')
            .on('click', this.clickHandler());

    // Length and octave controls
    d3.select('#' + this.elem_id + ' .chord-length .chord-reduce-value')
            .on('click', function () {
                self.updateDuration(-1);
                if (comptools_config.chord_player !== undefined) {
                    comptools_config.chord_player.update_callback();
                }
            });

    d3.select('#' + this.elem_id + ' .chord-length .chord-add-value')
            .on('click', function () {
                self.updateDuration(1);
                if (comptools_config.chord_player !== undefined) {
                    comptools_config.chord_player.update_callback();
                }
            });

    d3.select('#' + this.elem_id + ' .chord-octave .chord-reduce-value')
            .on('click', function () {
                self.updateOctave(-1);
            });

    d3.select('#' + this.elem_id + ' .chord-octave .chord-add-value')
            .on('click', function () {
                self.updateOctave(1);
            });

    // Delete and duplicate
    d3.select('#' + this.elem_id + ' .chord-actions .chord-delete')
            .on('click', function () {
                self.delete();
                if (comptools_config.chord_player !== undefined) {
                    comptools_config.chord_player.update_callback();
                }
            });

    d3.select('#' + this.elem_id + ' .chord-actions .chord-duplicate')
            .on('click', function () {
                // Get duration and octave by indices
                var dup_dur = CHORD_LENGTHS[self.duration_index];
                var dup_oct = CHORD_OCTAVES[self.octave_index];
                var my_chord = new comptoolsChordPlayerElement(self.my_root,
                        self.my_chord, dup_dur, dup_oct);
                chord_list.push(my_chord);
                if (comptools_config.instrument_glue !== undefined) {
                    my_chord.selection_callback =
                            comptools_config
                            .instrument_glue
                            .funHighlightChordListElementNotes;
                }
                if (comptools_config.chord_player !== undefined) {
                    comptools_config.chord_player.update_callback();
                }
            });


    // Update chord
    this.updateChord = function (note, chord) {

        // Replace note and chord assuming they are correct
        this.my_root = note;
        this.my_chord = chord;

        // Update text
        d3.select("#" + this.elem_id + " span.chord-text")
                .html(note + " " + chord);

        // Play the chord
        this.play();

    };

    // Update duration
    this.updateDuration = function (dir)
    {
        // Add to current index, check that it's within bounds
        this.duration_index += dir;

        this.duration_index =
                saturate_value(this.duration_index, 0, CHORD_LENGTHS.length - 1);

        // Set the appropriate value in the text box
        var my_dur = CHORD_LENGTHS[this.duration_index];
        d3.select('#' + this.elem_id + ' .chord-length .chord-text-input')
                .attr('value', my_dur);

    };

    // Update octave
    this.updateOctave = function (dir)
    {
        // Add to current index, check that it's within bounds
        this.octave_index += dir;

        this.octave_index =
                saturate_value(this.octave_index, 0, CHORD_OCTAVES.length - 1);

        // Set the appropriate value in the text box
        var my_oct = CHORD_OCTAVES[this.octave_index];
        d3.select('#' + this.elem_id + ' .chord-octave .chord-text-input')
                .attr('value', my_oct);

    };

    // Delete method
    this.delete = function ()
    {
        // Check if this object is the selected one in player and remove it
        if (comptools_config.chord_player !== undefined &&
                this === comptools_config.chord_player.current_chord) {
            comptools_config.chord_player.current_chord = null;
        }

        this.list_elem.remove();
        chord_list.remove_obj_by_prop('elem_id', this.elem_id);

        if (comptools_config.chord_player !== undefined) {
            comptools_config.chord_player.update_callback();
        }

        return true;
    };

}

// Note selection callback
comptoolsChordPlayerElement.prototype.clickHandler = function ()
{
    var self = this;
    return function (d, i) {

        // TODO: This solution is quite poor in general since how do we know 
        // which is the parent element and whether it is the correct one?
        var the_elem = this.parentElement.parentElement;
        var action = !d3.select(the_elem).classed("chord-selected");

        // Remove all other selections
        d3.selectAll('.' + CHORD_LIST_ITEM_CLASS
                + ' .uk-card').classed('chord-selected', false);

        // Assign selection
        d3.select(the_elem).classed("chord-selected", action);

        // Update the player with currently selected chord information
        if (comptools_config.chord_player !== undefined && action) {
            comptools_config.chord_player.current_chord = self;
        } else {
            comptools_config.chord_player.current_chord = null;
        }

        // Assign selection in chord builder as well
        if (comptools_config.chord_builder !== undefined && action) {
            comptools_config.chord_builder
                    .set_note_chord(self.my_root, self.my_chord);
        }

        // Update chord player timeline too
        if (comptools_config.chord_player !== undefined) {
            comptools_config.chord_player
                    .update_timeline_selection(self, action);
        }

        // Check if the chord list exists and envoke the selection_callback
        if (chord_list !== undefined) {
            // Pass the object reference to selection callback
            var my_elem_id = d3.select(the_elem.parentElement).attr('id');
            var my_obj = chord_list[
                    chord_list.find_obj_by_prop('elem_id', my_elem_id)];
            my_obj.selection_callback(my_obj, action);
        } else {
            console.log('Chord list (chord_list) is not found in scope.');
        }
    };
};

comptoolsChordPlayerElement.prototype.selection_callback = function (my_obj)
{
    return null;
}

function comptoolsChordPlayer(player_class)
{

    var self = this;

    this.playing = false;           // Player state
    this.current_event_index = 0;   // Event index for the scheduler
    this.current_chord = null;      // Currently selected chord element

    // Get tempo from config file if there is one
    var my_tempo = 120; // Defaults to 120 bpm
    if (comptools_config.tempo !== undefined) {
        my_tempo = comptools_config.tempo;
    }

    // Add the basic controls first
    d3.select(player_class).html(
            d3.select(player_class).html()
            + CHORD_LIST_CONTROL_TEMPLATE.replace("{{chord-bpm}}", my_tempo));

    // Finally, add the container
    d3.select(player_class).html(
            d3.select(player_class).html() + CHORD_LIST_TEMPLATE);

    // Assign controls
    d3.select(player_class + ' .chord-play').on('click', function () {
        self.togglePlay();
    });

    // Pressing the space bar has the same effect
    // Bind a keyboard event as well
    Mousetrap.bind("space", function (e) {
        self.togglePlay();
    });

    // Prevent default behavior of space bar as well
    window.onkeydown = function (e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // Event: begin play
    this.togglePlay = function () {

        // Toggle play state
        this.playing = !this.playing;
        d3.select(player_class + ' .chord-play')
                .classed('selected', this.playing);
        ;

        // Check if playing is stopped
        if (!this.playing) {
            // Stop transport and cancel all events
            Tone.Transport.stop();

            // Stop MIDI, if present
            if (comptools_midi_player !== undefined &&
                    comptools_midi_player.ready) {
                comptools_midi_player.flushNoteBuffer();
            }

            return true;
        }

        // Parse tempo and update it in the config file if needed
        var now_tempo = d3.select(player_class + ' .chord-bpm')
                .property('value');

        // Convert to integer and store value in the configuration object
        if (comptools_config.tempo !== undefined) {
            comptools_config.tempo = parseInt(now_tempo);
        }

        // Return early if there is nothing to play
        if (chord_list === undefined || chord_list.length == 0) {
            // Disable play button
            d3.select(player_class + ' .chord-play').classed('selected', false);
            return null;
        }

        // Get the events and store them in a global variable
        var myev = parse_chord_player();
        chord_play_events = myev.events;

        // If no chord is selected, start from the first one
        var start_chord = 0;
        if (myev.selected_chord !== -1) {
            start_chord = myev.selected_chord;
        }

        // Clear all previous events
        Tone.Transport.cancel(0);

        // Setup transport
        Tone.Transport.position = myev.start_position;
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = myev.total_duration;
        Tone.Transport.loop = true;

        // Schedule all play events
        var my_position = 0;
        for (var k = 0; k < chord_play_events.length; k++) {
            Tone.Transport.schedule(function (time) {
                self.process_events();
            }, my_position);
            my_position += chord_play_events[k].interval;
        }

        // Start processing the events
        this.current_event_index = start_chord;

        // Start transport
        Tone.Transport.start();

    };

    this.process_events = function () {

        var current_event = chord_play_events[self.current_event_index++];

        // Repeat
        if (self.current_event_index >= chord_play_events.length) {
            self.current_event_index = 0;
        }

        // Deselect all chords
        d3.selectAll('.' + CHORD_LIST_ITEM_CLASS + ' div.uk-card')
                .classed('chord-selected', false);

        // Select this chord
        d3.select('#' + current_event.highlight_id + " div.uk-card")
                .classed('chord-selected', true);

        // Assign selection in chord builder as well
        if (comptools_config.chord_builder !== undefined) {
            comptools_config.chord_builder
                    .set_note_chord(current_event.object.my_root,
                            current_event.object.my_chord);
        }

        // Update the player with currently selected chord information
        if (comptools_config.chord_player !== undefined) {
            this.current_chord = current_event.object;
        } else {
            this.current_chord = null;
        }

        // Update timeline
        self.update_timeline_selection(current_event.object, true);

        // Start playing the chord, if not sustain
        if (!current_event.sustain) {
            // Play the notes
            player_play_chord(current_event.chord_notes, current_event.duration);

            // Also highlight the notes
            if (comptools_config.instrument_glue !== undefined) {
                var my_glue = comptools_config.instrument_glue;
                for (var k = 0; k < my_glue.objArray.length; k++) {
                    my_glue.objArray[k]
                            .updateNotes(current_event.highlight_notes);
                }
            }

        }
    };

    // Create/update timeline is based on the play events
    this.update_timeline = function () {

        // Get current events
        var ev = parse_chord_player();
        var my_events = ev.events;
        var total_dur = ev.total_duration;
        var selected_chord = ev.selected_chord;

        // Find out the size of the timeline
        var timel_w = parseFloat(d3.select("." + CHORD_PLAYER_CLASS
                + " .chord-player-timeline").style("width"));

        // Clear the timeline
        d3.select("." + CHORD_PLAYER_CLASS
                + " .chord-player-timeline").html("");

        // Clear the measures
        d3.select("." + CHORD_PLAYER_CLASS
                + " .chord-player-timeline-measures").html("");

        // For every play event, get actual event width on the timeline,
        // add the element to DOM, and assign "selected" class, if the
        // corresponding chord is currently selected; skip all "sustain"

        var my_id;

        for (var k = 0; k < my_events.length; k++) {

            // Generate first id
            if (k === 0) {
                my_id = "timeline-" + k;
            }

            var my_obj = my_events[k].object;

            // Merge sustain chords
            if (!my_events[k].sustain) {

                // Generate new id
                my_id = "timeline-" + k;
                var my_width = Math.floor((my_events[k].duration / total_dur)
                        * timel_w) - 3;
                d3.select("." + CHORD_PLAYER_CLASS
                        + " .chord-player-timeline")
                        .append("div")
                        .attr("id", my_id)
                        .classed("timeline-element", true)
                        .style("width", my_width + "px");
            }

            // If a chord is selected, highlight it in timeline as well
            if (selected_chord !== -1) {
                this.update_timeline_selection(my_events[selected_chord].object, true);
            }

            // Update timeline id
            my_obj.timeline_id = my_id;
        }

        // TODO: Currently, there is no strict alignment between the chords
        // and corresponding measures. As many chords are added, the difference
        // will grow even more visible. However, the current architecture is
        // limiting in this sense. A more general approach would fix this.

        // Draw the measures
        var mesw = d3.select("." + CHORD_PLAYER_CLASS
                + " .chord-player-timeline-measures").style("width");
        var mesh = d3.select("." + CHORD_PLAYER_CLASS
                + " .chord-player-timeline-measures").style("height");

        var my_svg = d3.select("." + CHORD_PLAYER_CLASS
                + " .chord-player-timeline-measures")
                .append("svg")
                .attr("width", mesw)
                .attr("height", mesh);

        // Do the necessary computations: find beat duration
        var beatd = get_duration_in_seconds("1/"
                + parse_time_signature(comptools_config.time_signature)[1]);

        // Bar is every N beats
        var barn = parse_time_signature(comptools_config.time_signature)[0];

        // Compute pixel per second for a single beat
        var meswi = parseInt(mesw);
        var meshi = parseInt(mesh);
        var pps = beatd * (meswi / total_dur);

        // Draw Beat/bar lines along the timeline
        var myx = 0, cbeat = 0;
        while (myx <= meswi) {

            // Beat or bar line?
            var len = 4;
            if (cbeat % barn === 0) {
                // Bar
                len = 8;
            }

            my_svg.append("line")
                    .attr("x1", myx)
                    .attr("x2", myx)
                    .attr("y1", meshi)
                    .attr("y2", meshi - len);

            myx += pps;
            cbeat += 1;
        }

        // Draw the base horizontal line
        my_svg.append("line")
                .attr("x1", 0)
                .attr("x2", meswi)
                .attr("y1", meshi)
                .attr("y2", meshi);

    };

    this.update_timeline_selection = function (obj, action) {

        // Clear all previous selections
        d3.selectAll("." + CHORD_PLAYER_CLASS + " .chord-player-timeline"
                + " .timeline-element")
                .classed("selected", false);

        // Highlight current chord in timeline
        d3.select("." + CHORD_PLAYER_CLASS + " .chord-player-timeline"
                + " #" + obj.timeline_id).classed("selected", action);

    };

    // Clear all chords
    this.clear = function () {
        if (chord_list !== undefined) {
            while (chord_list.length > 0) {
                chord_list[0].delete();
                if (comptools_config.chord_player !== undefined) {
                    comptools_config.chord_player.update_callback();
                }
            }
        }
    };

    // Export chords
    this.export_chords = function () {

        // Get the current order
        var play_order_ids = [];
        d3.selectAll('#' + CHORD_LIST_ID + ' .' + CHORD_LIST_ITEM_CLASS).
                each(function () {
                    play_order_ids.push(d3.select(this).attr('id'));
                });

        var text = "";
        var k;
        for (k = 0; k < play_order_ids.length; k++) {
            var tc = chord_list.get_obj_by_prop('elem_id', play_order_ids[k]);
            text += tc.my_root + " " + tc.my_chord + " "
                    + tc.get_dur() + " " + tc.get_oct()
                    + (tc.sustain ? " sus" : "") + "; ";
        }

        // Beautification
        text = text.trim();
        if (text.slice(-1) === ";") {
            text = text.substr(0, text.length - 1);
        }
        
        // Add the comment with some additional information
        var add_com = "";
        if (comptools_config.theory !== undefined && 
                comptools_config.theory.root !== "null"){
            add_com = "{*Scale: " + comptools_config.theory.root + " " +
                    comptools_config.theory.scale + "*} ";
        }

        return add_com + text;
    };

    // Import chords
    this.import_chords = function (text) {

        // Clear the current chords
        this.clear();
        
        // Remove the comments
        text = text.replace(/{\*.*\*}/, "");

        // Parse text
        var the_chords = text.split(";");
        var k;

        for (k = 0; k < the_chords.length; k++) {

            // Preprocess the chord text
            var this_chord = the_chords[k].replace(/\s+/g, ' ').trim();

            // Break the chord into pieces. Currently length determines
            // the contents, although this is not a very good approach
            // (a parser would have been better). But for simplicity, we
            // just use this method.
            var chord_elem = this_chord.split(" ");

            // Parse depending on the length
            if (chord_elem.length === 4 || chord_elem.length === 5) {
                
                // Root, chord, duration, octave
                var my_root = chord_elem[0];
                var my_chord = chord_elem[1];
                var my_dur = chord_elem[2];
                var my_oct = parseInt(chord_elem[3]);
                
                // Determine whether this is a sustain
                var my_sus = false;
                if (chord_elem.length === 5 && chord_elem[4] === 'sus'){
                    my_sus = true;
                }
                
                // Add the chord to timeline
                var my_chord = new comptoolsChordPlayerElement(my_root,
                            my_chord, my_dur, my_oct, my_sus);
                chord_list.push(my_chord);

                // Because the relationship is many to one, we'll have to use
                // a config variable here---reference to instrument glue.
                // Therefore, it must be assigned beforehand.
                if (comptools_config.instrument_glue !== undefined) {
                    my_chord.selection_callback =
                            comptools_config
                            .instrument_glue
                            .funHighlightChordListElementNotes;
                }

                if (comptools_config.chord_player !== undefined) {
                    comptools_config.chord_player.update_callback();
                }

            } else
            {
                // Do nothing
            }

        }

    };
}

// Function to run every time a chord is added, updated, duplicated, or deleted
comptoolsChordPlayer.prototype.update_callback = function () {

    // TODO: Create and draw the chord timeline
    this.update_timeline();

}

// Options setting etc
comptoolsOptions = function () {

    // Sound on/off
    d3.select('.option-use-sound').on("change", function () {
        comptools_config.play_sound = d3.select(this).property('checked');
    });

};

// Experimental but highly sought after feature
// ***************
// * MIDI PLAYER *
// ***************

comptoolsMIDIPlayer = function () {

    var self = this;

    // Properties
    this.MIDI_outputs = [];
    this.MIDI_current_output = null;
    this.midi = null;
    this.ready = false;

    // Check if support is present in the browser
    this.support = function () {
        if (navigator.requestMIDIAccess === undefined) {
            return false;
        } else {
            return true;
        }
    };

    this.initialize = function () {

        // Check if there is support, if not - return
        if (!this.support()) {
            return null;
        }

        // Otherwise proceed with initialization
        navigator.requestMIDIAccess().then(function (midiAccess) {
            // Set up access object
            self.midi = midiAccess;
            console.log('MIDI access is obtained.');

            // Enumerate all MIDI outputs
            // TODO: potential bug. This may not work everywhere.
            self.MIDI_outputs = [];
            self.midi.outputs.forEach(function (key, port) {
                self.MIDI_outputs.push({"name": key.name, "id": port});
            });

            // Are there any available outputs?
            if (self.MIDI_outputs.length > 0) {
                self.MIDI_current_output =
                        self.MIDI_outputs[0].id; // Default output
                self.ready = true;

                // Populate the controls (if present)
                self
                        .populateOptionsForm('option-use-midi',
                                'option-midi-output');

            } else
            {
                self.MIDI_current_output = null;
                self.ready = false;
                console.log('There are no available MIDI outputs.');
            }

            return self;
        },
                function () {
                    console.log('Failed to get access to MIDI devices.')
                });

    };

    // This is used to create the GUI element which has the output list
    this.populateOptionsForm = function (chk_class, sel_class) {

        // Use d3.js to add options to a select field

        // Remove all previous entries
        var my_sel = d3.select('select.' + sel_class);
        my_sel.html();

        // Go through available outputs (if any) and populate the select
        for (var k = 0; k < this.MIDI_outputs.length; k++) {
            my_sel.append('option')
                    .attr('value', this.MIDI_outputs[k].id)
                    .text(this.MIDI_outputs[k].name);
        }

        // Create the callbacks
        my_sel.on('change', function (d) {
            self.MIDI_current_output = d3.select(this).property("value");
        });

        var my_chk = d3.select('input.' + chk_class);
        my_chk.on('change', function (d) {

            // This changes the general option and
            // does not modify the MIDI player object
            comptools_config.play_midi = d3.select(this).property('checked');

        });


    };

    this.note_buffer = [];  // Stores on notes to flush on next send

    this.flushNoteBuffer = function () {
        this.sendOffMessage(this.note_buffer); // Stop playing notes
        this.note_buffer = []; // Remove all notes from buffer
    }

    this.sendOffMessage = function (notes, velocity) {

        if (!this.ready) {
            return false;
        }

        var myvel = 0x64;
        if (velocity !== undefined) {
            myvel = velocity;
        }

        var noteOffArray = [];
        for (var k = 0; k < notes.length; k++) {
            var n = get_semitone_distance(notes[k]) + 11;
            noteOffArray.push(0x80, n, myvel);
        }

        var output = this.midi.outputs.get(this.MIDI_current_output);
        output.send(noteOffArray);

    }

    // Special function that first sends buffered off messages
    this.CyclicSendOnMessage = function (notes, velocity) {

        if (!this.ready) {
            return false;
        }

        var myvel = 0x64;
        if (velocity !== undefined) {
            myvel = velocity;
        }

        // Send buffered off messages
        this.flushNoteBuffer();

        var noteOnArray = [];
        for (var k = 0; k < notes.length; k++) {
            var n = get_semitone_distance(notes[k]) + 11;
            noteOnArray.push(0x90, n, myvel);
        }

        var output = this.midi.outputs.get(this.MIDI_current_output);
        output.send(noteOnArray);

        // Assign future off messages
        this.note_buffer = notes;

    };

    // Sends the notes to the port with specified duration (no sync)
    this.sendOnOffMessage = function (notes, duration_in_ms, velocity) {

        // Check if we are ready
        if (!this.ready) {
            return false;
        }

        var myvel = 0x64;
        if (velocity !== undefined) {
            myvel = velocity;
        }

        // Generate note on and note off messages for the notes
        // Note that the formula for getting the note "byte" is
        // simply get_semitone_distance(note) + 11
        var noteOnArray = [];
        var noteOffArray = [];
        for (var k = 0; k < notes.length; k++) {
            var n = get_semitone_distance(notes[k]) + 11;
            noteOnArray.push(0x90, n, myvel);
            noteOffArray.push(0x80, n, myvel);
        }

        // Get the correct output
        var output = this.midi.outputs.get(this.MIDI_current_output);

        // Send noteon and then noteoff with a delay
        output.send(noteOnArray);
        output.send(noteOffArray,
                window.performance.now() + duration_in_ms);

        return true;

    };

}