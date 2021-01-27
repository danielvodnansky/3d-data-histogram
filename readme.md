# 3D Histogram - Data structuredness, hierarchicallity and amount of information visalizer
This project was developed as a part of disertation thesis at the Prague University of Economics and Business

To run, open index.html

View demo at https://danielvodnansky.github.io/3d-data-histogram/

## Purpose of the application

This application helps to visualize a list of data objects, having **amount of information, structuredness and hierarchicallity** calculated. 
Each value must belong to an interval <0; 1>. Each of three metrics value is shonw on axis (_i_, _s_, _h_); The applications displays the **covered areas** (containing any data objects) in 3D space.
The opacity of the small cube expresses the total relative size of the contained objects. The number of areas on all axis can be set by 
_Intervals_ slider.

You can display the **demodata** by clicking the button or upload your own CSV with the following structure: 
_object_id;size;information_amount;hierarchicallity;structuredness_. object_id is any unique identifier, size is positive integer with any unit
(probably bytes or textual length) and the thee metrics are floats in the interval <0; 1>. The data is shown in the table below the visualization.

You can rotate the space on all three axis or by dragging the visualization, set the perspective and the zoom.

By clicking on any **data structure type** (RDBS, XML, JSON, RDF or unstructured formats), you display the area covered by ideal data
of this structure type (eg. structured and normalized for relational database). This helps to visualize the compatibility of the daa and its 
structure type.