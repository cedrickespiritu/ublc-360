// open Lists

infospotAfirstfloor0.addEventListener('click', function(){
    $('.building-a-first-list, .facility-list-background').show();
    });
infospotAfirstfloor1.addEventListener('click', function(){
    $('.building-a-second-list, .facility-list-background').show();
    });
infospotAfirstfloor2.addEventListener('click', function(){
    $('.building-a-registrar, .facility-list-background').show();
    });
infospotBA2mid1.addEventListener('click', function(){
    $('.building-a2-right, .facility-list-background').show();
    });
infospotBA2mid0.addEventListener('click', function(){
    $('.building-a2-left, .facility-list-background').show();
    });
infospotBA3mid0.addEventListener('click', function(){
    $('.building-a3-left, .facility-list-background').show();
    });
infospotBA3mid1.addEventListener('click', function(){
    $('.building-a3-right, .facility-list-background').show();
    });
infospotbuildingBentrance2.addEventListener('click', function(){
    $('.study-area-list, .facility-list-background').show();
});
infospotbuildingBentrance1.addEventListener('click', function(){
    $('.building-mags, .facility-list-background').show();
});
infospotBCfirststep0.addEventListener('click', function(){
    $('.building-mags, .facility-list-background').show();
});
infospotBB1floor3.addEventListener('click', function(){
    $('.building-b1-right, .facility-list-background').show();
});
infospotBB2floor2.addEventListener('click', function(){
    $('.bb2floor-left, .facility-list-background').show();
});
infospotBB2floor3.addEventListener('click', function(){
    $('.bb2floor-right, .facility-list-background').show();
});
infospotBB3floor1.addEventListener('click', function(){
    $('.bb3floor-right, .facility-list-background').show();
});
infospotBB3floor2.addEventListener('click', function(){
    $('.bb3floor-left, .facility-list-background').show();
});
infospotcfirstfloor2.addEventListener('click', function(){
    $('.bc1floor-right, .facility-list-background').show();
});
infospotcfirstfloor1.addEventListener('click', function(){
    $('.bc1floor-left, .facility-list-background').show();
});
infospotBC2floor2.addEventListener('click', function(){
    $('.bc2floor-left, .facility-list-background').show();
});
infospotBC2floor1.addEventListener('click', function(){
    $('.bc2floor-right, .facility-list-background').show();
});
infospotBC3floor1.addEventListener('click', function(){
    $('.bc3floor-left, .facility-list-background').show();
});
infospotBC3floor2.addEventListener('click', function(){
    $('.bc3floor-right, .facility-list-background').show();
}); 
infospotBC4floor0.addEventListener('click', function(){
    $('.bc4floor, .facility-list-background').show();
}); 

// regular room selection
infospotregularroom0.addEventListener('click', function(){
    $('.select-building, .facility-list-background').show();
}); 



// open 360
    
// building a side 1
// comlab1
    $('#comlab-btn1').click(function() {
    ChangePanorama('BA1comlab');
    $('.building-a-first-list, .facility-list-background').hide();
    });

// testing room
    $('#testing-room').click(function() {
    ChangePanorama('BA1testingroom');
    $('.building-a-first-list, .facility-list-background').hide();
    });

// moot court
    $('#moot-court').click(function() {
    ChangePanorama('BA1mootcourt');
    $('.building-a-first-list, .facility-list-background').hide();
    });


// building 
// psychics lab
    $('#psychics-lab').click(function() {
    ChangePanorama('psychlab');
    $('.building-a2-right, .facility-list-background').hide();
    });

    // chem-lab
    $('#chem-lab').click(function() {
    ChangePanorama('chemistrylab');
    $('.building-a2-right, .facility-list-background').hide();
    });

    // BA2left
    $('#bio-lab').click(function() {
    ChangePanorama('biologylab');
    $('.building-a2-left, .facility-list-background').hide();
    });
    $('#crimesceneplaza').click(function() {
    ChangePanorama('crimesceneplaza');
    $('.building-a2-left, .facility-list-background').hide();
    });
    $('#crimlab2').click(function() {
    ChangePanorama('crimlab2');
    $('.building-a2-left, .facility-list-background').hide();
    });
    $('#ballistic-room').click(function() {
    ChangePanorama('ballistic');
    $('.building-a2-left, .facility-list-background').hide();
    });

    // building-a3-left
    // edtech
    $('#edtech').click(function() {
    ChangePanorama('edtech');
    $('.building-a3-left, .facility-list-background').hide();
    });

    $('#avroom').click(function() {
    ChangePanorama('avr');
    $('.building-a3-left, .facility-list-background').hide();
    });

    $('#psychlab').click(function() {
    ChangePanorama('psychlab');
    $('.building-a3-left, .facility-list-background').hide();
    });


    // building-a3-right
$('#netlab').click(function() {
    ChangePanorama('netlab');
    $('.building-a3-right, .facility-list-background').hide();
    });
$('#mma-lab').click(function() {
    ChangePanorama('mmalab');
    $('.building-a3-right, .facility-list-background').hide();
    });


    // building-b1-right
$('#homeEconomics').click(function() {
    ChangePanorama('homeeconomics');
    $('.building-b1-right, .facility-list-background').hide();
    });


    // bb2floor-left
$('#regular-room').click(function() {
    ChangePanorama('regularroom');
    $('.bb2floor-left, .facility-list-background').hide();
    });

    // bb3floor-right
$('#drawinglab1').click(function() {
    ChangePanorama('drawinglab');
    $('.bb3floor-right, .facility-list-background').hide();
    });

    // bc1floor-right
$('#cbi-office').click(function() {
    ChangePanorama('cbi');
    $('.bc1floor-right, .facility-list-background').hide();
    });
$('#hotelvivace').click(function() {
    ChangePanorama('vivace');
    $('.bc1floor-right, .facility-list-background').hide();
    });

    // bc2floor-right
$('#trattoria').click(function() {
    ChangePanorama('tratoria');
    $('.bc2floor-right, .facility-list-background').hide();
    });

    // bc2floor-left
$('#coldkitchen').click(function() {
    ChangePanorama('coldkitchen');
    $('.bc2floor-left, .facility-list-background').hide();
    });
$('#regular-room-bc2').click(function() {
    ChangePanorama('regularroom');
    $('.bc2floor-left, .facility-list-background').hide();
    });

    // bc3floor-left
$('#drawingLab').click(function() {
    ChangePanorama('drawinglab2');
    $('.bc3floor-left, .facility-list-background').hide();
    });

    // bc4floor
$('#mphall').click(function() {
    ChangePanorama('mph');
    $('.bc4floor, .facility-list-background').hide();
    });
$('#tiered-hall').click(function() {
    ChangePanorama('tieredhall');
    $('.bc4floor, .facility-list-background').hide();
    });

    // select building
$('#buildingA').click(function() {
    ChangePanorama('Afirstfloor');
    $('.select-building, .facility-list-background').hide();
    });
$('#buildingB').click(function() {
    ChangePanorama('BB1floor');
    $('.select-building, .facility-list-background').hide();
    });
$('#buildingC').click(function() {
    ChangePanorama('cfirstfloor');
    $('.select-building, .facility-list-background').hide();
    });


    