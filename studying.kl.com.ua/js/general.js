$(document).ready(function(){
    $("#bd_inf").hide();
    $("#bd_lab").hide();
    $("#bd_material").hide();
    $("#alg_inf").hide();
    $("#alg_lab").hide();
    $("#alg_materials").hide();
    $("#maths_inf").hide();
    $("#maths_lab").hide();
    $("#maths_materials").hide();
    $("#test_inf").hide();
    $("#test_lab").hide();
    $("#test_materials").hide();
    $("#serv_inf").hide();
    $("#serv_lab").hide();
    $("#serv_materials").hide();
});

$(document).ready(function(){
    $("#bd").click(function(){
        $("#bd_inf").show();
        $("#alg_inf").hide();
        $("#alg_lab").hide();
        $("#alg_materials").hide();
        $("#maths_inf").hide();
        $("#maths_lab").hide();
        $("#maths_materials").hide();
        $("#test_inf").hide();
        $("#test_lab").hide();
        $("#test_materials").hide();
        $("#serv_inf").hide();
        $("#serv_lab").hide();
        $("#serv_materials").hide();
    });
});
$(document).ready(function(){
    $("#bd_inf .labs").click(function(){
        $("#bd_lab").show();
        $("#bd_material").hide();
    });
});
$(document).ready(function(){
    $("#bd_inf .materials").click(function(){
        $("#bd_lab").hide();
        $("#bd_material").show();
    });
});


$(document).ready(function(){
    $("#alg").click(function(){
        $("#alg_inf").show();
        $("#bd_inf").hide();
        $("#bd_lab").hide();
        $("#bd_material").hide();
        $("#maths_inf").hide();
        $("#maths_lab").hide();
        $("#maths_materials").hide();
        $("#test_inf").hide();
        $("#test_lab").hide();
        $("#test_materials").hide();
        $("#serv_inf").hide();
        $("#serv_lab").hide();
        $("#serv_materials").hide();

    });
});
$(document).ready(function(){
    $("#alg_inf .labs").click(function(){
        $("#alg_lab").show();
        $("#alg_materials").hide();
    });
});
$(document).ready(function(){
    $("#alg_inf .materials").click(function(){
        $("#alg_lab").hide();
        $("#alg_materials").show();
    });
});
$(document).ready(function(){
    $("#maths").click(function(){
        $("#maths_inf").show();
        $("#bd_inf").hide();
        $("#bd_lab").hide();
        $("#bd_material").hide();
        $("#alg_inf").hide();
        $("#alg_lab").hide();
        $("#alg_materials").hide();
        $("#test_inf").hide();
        $("#test_lab").hide();
        $("#test_materials").hide();
        $("#serv_inf").hide();
        $("#serv_lab").hide();
        $("#serv_materials").hide();

    });
});
$(document).ready(function(){
    $("#maths_inf .labs").click(function(){
        $("#maths_lab").show();
        $("#maths_materials").hide();
    });
});
$(document).ready(function(){
    $("#maths_inf .materials").click(function(){
        $("#maths_lab").hide();
        $("#maths_materials").show();
    });
});
$(document).ready(function(){
    $("#test").click(function(){
        $("#test_inf").show();
        $("#bd_inf").hide();
        $("#bd_lab").hide();
        $("#bd_material").hide();
        $("#maths_inf").hide();
        $("#maths_lab").hide();
        $("#maths_materials").hide();
        $("#alg_inf").hide();
        $("#alg_lab").hide();
        $("#alg_materials").hide();
        $("#serv_inf").hide();
        $("#serv_lab").hide();
        $("#serv_materials").hide();

    });
});
$(document).ready(function(){
    $("#test_inf .labs").click(function(){
        $("#test_lab").show();
        $("#test_materials").hide();
    });
});
$(document).ready(function(){
    $("#test_inf .materials").click(function(){
        $("#test_lab").hide();
        $("#test_materials").show();
    });
});
$(document).ready(function(){
    $("#serv").click(function(){
        $("#serv_inf").show();
        $("#bd_inf").hide();
        $("#bd_lab").hide();
        $("#bd_material").hide();
        $("#maths_inf").hide();
        $("#maths_lab").hide();
        $("#maths_materials").hide();
        $("#test_inf").hide();
        $("#test_lab").hide();
        $("#test_materials").hide();
        $("#alg_inf").hide();
        $("#alg_lab").hide();
        $("#alg_materials").hide();

    });
});
$(document).ready(function(){
    $("#serv_inf .labs").click(function(){
        $("#serv_lab").show();
        $("#serv_materials").hide();
    });
});
$(document).ready(function(){
    $("#serv_inf .materials").click(function(){
        $("#serv_lab").hide();
        $("#serv_materials").show();
    });
});