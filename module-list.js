(function(){
    var modules={
        "panel-main-spardac":    	        {url:"$H/m/panel-main.html",router:1},
        "panel-main-spardac-del":    	        {url:"$H/m/panel-main-del.html",router:1},
        "panel-main-spardac-mod":    	        {url:"$H/m/panel-main-mod.html",router:1},
        "panel-child-spardac":              {url:"$H/m/panel-child.html"},
        "panel-library-spardac":    			{url:"$H/m/panel-library.html",router:1},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"spardac-participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child-spardac",
                                                questionnaire_setup:"online-questionnaire-setup-spardac",
                                                online_questionnaire:"online-questionnaire-app-spardac",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                            },
        "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"spardac-participant"},

        "online-questionnaire-setup-spardac": {url:"$H/m/oq-setup.html",Table:"spardac-participant"},
        "online-questionnaire-app-spardac":   {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"spardac-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"spardac-notes"},

        "randomisation-table-data-spardac":		{url:"$H/m/library/randomisation-table-data.html",Table:"randomisation-table-spardac",form_module:"randomisation-table-form-spardac"},
        "randomisation-table-form-spardac":		{url:"$H/m/library/randomisation-table-form.html",Table:"randomisation-table-spardac"},

        "dynamic-text-form-data-spardac":		{url:"$H/m/spardac/dynamic-text-form-data.html",Table:"dynamic-text-form-spardac",form_module:"dynamic-text-form-form-spardac",task_name:"Screening - Dynamically generated text inputs from label names"},
        "dynamic-text-form-form-spardac":		{url:"$H/m/spardac/dynamic-text-form-form.html",Table:"dynamic-text-form-spardac",task_name:"Screening - Dynamically generated text inputs from label names"},
        "upload-file-data-spardac":		        {url:"$H/m/spardac/upload-file-data.html",Table:"upload-file-spardac",form_module:"upload-file-form-spardac",task_name:"Screening - Upload file"},
        "upload-file-form-spardac":		        {url:"$H/m/spardac/upload-file-form.html",Table:"upload-file-spardac",task_name:"Screening - Upload file"},
        "read-data-from-file-data-spardac":		{url:"$H/m/spardac/read-data-from-file-data.html",Table:"read-data-from-file-spardac",form_module:"read-data-from-file-form-spardac",task_name:"Screening - Read data from file"},
        "read-data-from-file-form-spardac":		{url:"$H/m/spardac/read-data-from-file-form.html",Table:"read-data-from-file-spardac",task_name:"Screening - Read data from file"},
        "one-many-standard-data-spardac":	    {url:"$H/m/spardac/one-many-standard-data.html",Table:"one-many-standard-spardac",form_module:"one-many-standard-form-spardac",task_name:"Screening - One of many choice - Standard"},
        "one-many-standard-form-spardac":	    {url:"$H/m/spardac/one-many-standard-form.html",Table:"one-many-standard-spardac",task_name:"Screening - One of many choice - Standard"},
        "one-many-special-1-data-spardac":	    {url:"$H/m/spardac/one-many-special-1-data.html",Table:"one-many-special-1-spardac",form_module:"one-many-special-1-form-spardac",task_name:"Screening - One of many choice - Special type 1"},
        "one-many-special-1-form-spardac":	    {url:"$H/m/spardac/one-many-special-1-form.html",Table:"one-many-special-1-spardac",task_name:"Screening - One of many choice - Special type 1"},
        "one-many-special-2-data-spardac":	    {url:"$H/m/spardac/one-many-special-2-data.html",Table:"one-many-special-2-spardac",form_module:"one-many-special-2-form-spardac",task_name:"Screening - One of many choice - Special type 2"},
        "one-many-special-2-form-spardac":	    {url:"$H/m/spardac/one-many-special-2-form.html",Table:"one-many-special-2-spardac",task_name:"Screening - One of many choice - Special type 2"},

        "textarea-data-spardac":                {url:"$H/m/spardac/textarea-data.html",Table:"textarea-spardac",form_module:"textarea-form-spardac",task_name:"Baseline - Multiple lines text inputs"},
        "textarea-form-spardac":                {url:"$H/m/spardac/textarea-form.html",Table:"textarea-spardac",task_name:"Baseline - Multiple lines text inputs"},
        "many-of-many-data-spardac":            {url:"$H/m/spardac/many-of-many-data.html",Table:"many-of-many-spardac",form_module:"many-of-many-form-spardac",task_name:"Baseline - Many of many choices"},
        "many-of-many-form-spardac":            {url:"$H/m/spardac/many-of-many-form.html",Table:"many-of-many-spardac",task_name:"Baseline - Many of many choices - Standard"},

        "calculation-data-spardac":             {url:"$H/m/spardac/calculation-data.html",Table:"calculation-spardac",form_module:"calculation-form-spardac",task_name:"Visit 1 - Number input with calculation"},
        "calculation-form-spardac":             {url:"$H/m/spardac/calculation-form.html",Table:"calculation-spardac",task_name:"Visit 1 - Number input with calculation"},
        "visual-analogue-scale-data-spardac":   {url:"$H/m/spardac/visual-analogue-scale-data.html",Table:"visual-analogue-scale-spardac",form_module:"visual-analogue-scale-form-spardac",task_name:"Visit 1 - Visual analogue scale"},
        "visual-analogue-scale-form-spardac":   {url:"$H/m/spardac/visual-analogue-scale-form.html",Table:"visual-analogue-scale-spardac",task_name:"Visit 1 - Visual analogue scale"},
        "digital-scale-data-spardac":           {url:"$H/m/spardac/digital-scale-data.html",Table:"digital-scale-spardac",form_module:"digital-scale-form-spardac",task_name:"Visit 1 - Digital scale"},
        "digital-scale-form-spardac":           {url:"$H/m/spardac/digital-scale-form.html",Table:"digital-scale-spardac",task_name:"Visit 1 - Digital scale"},
        "star-rating-data-spardac":             {url:"$H/m/spardac/star-rating-data.html",Table:"star-rating-spardac",form_module:"star-rating-form-spardac",task_name:"Visit 1 - Star rating"},
        "star-rating-form-spardac":             {url:"$H/m/spardac/star-rating-form.html",Table:"star-rating-spardac",task_name:"Visit 1 - Star rating"},
    
        "date-time-data-spardac":   	        {url:"$H/m/spardac/date-time-data.html",Table:"date-time-spardac",form_module:"date-time-form-spardac",task_name:"Visit 2 - Date/time inputs"},
        "date-time-form-spardac":   	        {url:"$H/m/spardac/date-time-form.html",Table:"date-time-spardac",task_name:"Visit 2 - Date/time inputs"},
        "number-max-min-data-spardac":          {url:"$H/m/spardac/numbers-data.html",Table:"number-max-min-spardac",form_module:"number-max-min-form-spardac",task_name:"Visit 2 - Number min/max inputs"},
        "number-max-min-form-spardac":          {url:"$H/m/spardac/numbers-form.html",Table:"number-max-min-spardac",task_name:"Visit 2 - Number min/max inputs"},

        "concom-medication-data-spardac":       {url:"$H/m/spardac/concom-medication-data.html",Table:"concom-medication-spardac",form_module:"concom-medication-form-spardac",task_name:"Unscheduled - Concomitant Medication"},
        "concom-medication-form-spardac":       {url:"$H/m/spardac/concom-medication-form.html",Table:"concom-medication-spardac",task_name:"Unscheduled - Concomitant Medication"},
        "adverse-event-data-spardac":           {url:"$H/m/spardac/adverse-event-data.html",Table:"adverse-event-spardac",form_module:"adverse-event-form-spardac",task_name:"Unscheduled - Adverse Event"},
        "adverse-event-form-spardac":           {url:"$H/m/spardac/adverse-event-form.html",Table:"adverse-event-spardac",task_name:"Unscheduled - Adverse Event"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
})();
