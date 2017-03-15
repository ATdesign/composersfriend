// Notes array and parsing thereof
var note_array = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
var note_scinot = /([A-G]#?)([0-9])/;
var note_scinot_global = /([A-G]#?)([0-9])/g;

// Define a function for returning the semitone distance from B-1
function get_semitone_distance(note) {
    note = note.toUpperCase();
    match = note_scinot.exec(note);
    return note_array.indexOf(match[1]) + 1 + (12 * parseInt(match[2]));
}

// Treat this as an argument when creating FRETBOARD object
var FRET_TUNING = "E4B3G3D3A2E2"; // Guitar tuning
// var FRET_TUNING = "G2D2A1E1"; // Bass tuning

var fret_notes = new Object();
fret_notes.note = Array();
fret_notes.index = Array();
fret_notes.full_note = Array();
fret_notes.count = null;

// Create note/index arrays
fret_current_tuning = FRET_TUNING;
fret_current_tuning.toUpperCase();

match = note_scinot_global.exec(fret_current_tuning);
while (match !== null) {
    fret_notes.full_note.push(match[0]);
    fret_notes.note.push(match[1]);
    fret_notes.index.push(match[2]);
    fret_notes.count++;
    match = note_scinot_global.exec(fret_current_tuning);
}

// Get the container height and width
// NB! These should always be set!
fret_conw = parseFloat(d3.select(".fretboard").style("width"));
fret_conh = parseFloat(d3.select(".fretboard").style("height"));

// Start generating the fretboard given the size
var FRET_FIRST_FRET = 63; // Base scale
var FRET_X_OFFSET = 10; // X coordinate offset
var FRET_Y_OFFSET = 10; // Y coordinate offset
var FRET_DRAW_TO_FRET = 21; // Final fret to draw
var FRET_DOTS = [0, 3, 5, 7, 9]; // Double dot at "0", i.e. 12, 24 frets
var FRET_DOT_DIAMETER = 6; // Dot diameter
var FRET_DOT_DEFAULT_CLASS = "fret-dot-default";
var FRET_DEFAULT_CLASS = "fretboard-default";
var FRET_NUT_DEFAULT_CLASS = "fretboard-nut-default";
var FRET_DEFAULT_MARKER_CLASS = "fretboard-marker-default";
var FRET_WOUND_STRING_SEM_DST = 39; // Which strings are wound?
var FRET_STRING_MIN_DIAM = 1; // Min/max allowed string
var FRET_STRING_MAX_DIAM = 8; // diameters for rendering


var fret_w = fret_conw - FRET_X_OFFSET;
var fret_h = fret_conh - FRET_Y_OFFSET;

// Create the SVG container: fills the containing container
svg_fretboard = d3.select(".fretboard").append("svg")
        .attr("width", fret_w)
        .attr("height", fret_h);

// Single string height
var fret_string_h = Math.floor(fret_h / (fret_notes.count + 1));

var fret_x_coord = FRET_X_OFFSET;

// We will need to find the smallest fret width to determine the
// size of the note markers. Also, we need all center positions.
var centerPos = Array();
var fret_min_width = FRET_FIRST_FRET;

// We start with the open position (a third of the first fret size)
now_fret_size = Math.floor(FRET_FIRST_FRET / 3);
fret_min_width = Math.min(fret_min_width, now_fret_size);
svg_fretboard.append("rect").attr("x", fret_x_coord)
        .attr("y", FRET_Y_OFFSET)
        .attr("width", now_fret_size)
        .attr("height", fret_h)
        .attr("class", FRET_NUT_DEFAULT_CLASS);

// Add the first center
centerPos.push(Math.floor(fret_x_coord + now_fret_size / 2));

fret_x_coord += now_fret_size + 1;

// Now, we generate all other frets
for (n = 1; n < FRET_DRAW_TO_FRET; n++) {

    var now_fret_size = Math.floor(FRET_FIRST_FRET * Math.exp(-0.0655 * n));
    centerPos.push(Math.floor(fret_x_coord + now_fret_size / 2));
    fret_min_width = Math.min(fret_min_width, now_fret_size);

    svg_fretboard.append("rect").attr("x", fret_x_coord)
            .attr("y", FRET_Y_OFFSET)
            .attr("width", now_fret_size)
            .attr("height", fret_h)
            .attr("class", FRET_DEFAULT_CLASS);

    // Decide whether to draw a circle mark here
    if (FRET_DOTS.indexOf(n % 12) !== -1)
    {
        var fret_dot_y = Math.floor(fret_h / 2 + FRET_Y_OFFSET);
        var fret_dot_x = Math.floor(now_fret_size / 2 + fret_x_coord);
        var fret_dot_r = Math.floor(FRET_DOT_DIAMETER / 2);

        if ((n % 12) !== 0) {

            svg_fretboard.append("circle").attr("cx", fret_dot_x)
                    .attr("cy", fret_dot_y)
                    .attr("r", fret_dot_r)
                    .attr("class", FRET_DOT_DEFAULT_CLASS);
        } else { // Double dot
            svg_fretboard.append("circle").attr("cx", fret_dot_x)
                    .attr("cy", Math.floor(fret_dot_y + fret_string_h))
                    .attr("r", fret_dot_r)
                    .attr("class", FRET_DOT_DEFAULT_CLASS);

            svg_fretboard.append("circle").attr("cx", fret_dot_x)
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
for (var i = 0; i < fret_notes.count; i++)
{
    var string_index = i + 1;

    // Compute this using a specific formula
    var sem_distance = get_semitone_distance(fret_notes.full_note[i]);
    var string_diameter = Math.round(-4.634 *
            Math.log(sem_distance) + 19.259);

    // Clip at boundaries
    string_diameter = Math.min(string_diameter, FRET_STRING_MAX_DIAM);
    string_diameter = Math.max(string_diameter, FRET_STRING_MIN_DIAM);

    current_string_y = FRET_Y_OFFSET + string_index * fret_string_h;

    // First put the string shadow on there
    current_string_shadow = svg_fretboard.append("line")
            .attr("x1", FRET_X_OFFSET)
            .attr("y1", current_string_y+1)
            .attr("x2", FRET_X_OFFSET + fret_width)
            .attr("y2", current_string_y+1)
            .attr("class", "fretboard-shadow-default")
            .attr("stroke-width", string_diameter);
    
    // Now the string itself
    current_string = svg_fretboard.append("line")
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
    first_note = note_array.indexOf(fret_notes.note[i]);
    first_note_index = parseInt(fret_notes.index[i]);
    half_fret_marker_size = Math.floor(fret_marker_size / 2);
    for (j = 0; j < centerPos.length; j++)
    {
        now_note = note_array[(first_note + j) % note_array.length];
        now_note_class = "note-"+now_note.replace("#", "s").toLowerCase();
        first_note_index += ((first_note + j) % note_array.length === 0 ? 1 : 0);
        now_note_num_class = now_note_class + "-" + first_note_index;
        
        var current_note_class = FRET_DEFAULT_MARKER_CLASS + " " 
                + "fretboard-marker-inactive" + " "
                + now_note_class + " "
                + now_note_num_class;
        
        fret_marker_x = centerPos[j] - half_fret_marker_size;
        fret_marker_y = current_string_y - half_fret_marker_size;
        now_g = svg_fretboard.append("g").attr("class", current_note_class);
        now_g.append("rect")
                .attr("x", fret_marker_x)
                .attr("y", fret_marker_y)
                .attr("width", fret_marker_size)
                .attr("height", fret_marker_size);
        now_g.append("text")
                .attr("x", fret_marker_x)
                .attr("y", fret_marker_y + 12)
                .text(now_note);
    }

    // Assign click events
    d3.selectAll("g." + FRET_DEFAULT_MARKER_CLASS).on('click', function () {
        d3.select(this).classed("fretboard-marker-selected",
                !d3.select(this).classed("fretboard-marker-selected"));
    });

}