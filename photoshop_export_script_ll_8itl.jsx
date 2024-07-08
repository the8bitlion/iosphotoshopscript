// author Leo Lopez

// Define the sizes for the exported files
var sizes = [48,55,66,58,87,80,88,92,100,102,108,172,196,216,234,258,1024];

// The directory where you want to save the files
// Make sure to change this path to a valid directory on your system
var outputPath = "(Insert Path Here)";

// Loop through the defined sizes and export each one
for (var i = 0; i < sizes.length; i++) {
    // Get the current document
    var doc = app.activeDocument;

    // Duplicate the document to work with the copy
    var duplicate = doc.duplicate();

    // Resize the duplicate using the defined size
    // Note: we also specify the resolution here
    duplicate.resizeImage(UnitValue(sizes[i], "px"), UnitValue(sizes[i], "px"), 72, ResampleMethod.BICUBICSHARPER);

    // Set JPEG save options
    var saveOptions = new JPEGSaveOptions();
    saveOptions.quality = 12; // Set quality from 0 to 12

    // Define the file name and path
    var file = new File(outputPath + "icon_" + sizes[i] + "x" + sizes[i] + ".jpg");

    // Save the duplicate as JPEG
    duplicate.saveAs(file, saveOptions, true, Extension.LOWERCASE);

    // Close the duplicate without saving
    duplicate.close(SaveOptions.DONOTSAVECHANGES);
}

// Alert to confirm completion
alert("Export complete!");