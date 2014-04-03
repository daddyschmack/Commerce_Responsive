/**
 * Created by johnjaeckle on 3/9/14.
 */


var targetList =[{
    targetDiv:"ShippingSection_Holder",
    contentDiv : "shippingReviewArea1",
    titleDiv : "ShippingSection_Title"
},
    {
        targetDiv:"BillingSection_Holder",
        contentDiv : "BillingSection",
        titleDiv : "BillingSection_Title"
    },
    {
        targetDiv:"OrderDetail_Holder",
        contentDiv : "OrderDetail",
        titleDiv : "OrderDetails_Title"
    },
    {
        targetDiv:"orderPromotions_Holder",
        contentDiv :"promotions",
        titleDiv:"orderPromotions_Title"
    }
];

targetList.forEach(function(entry) {
    console.log(entry);
});

var showTitle;
var getScreenWidth;
var paymentToggle;

var getScreenWidth = function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    return w;
}
var getScreenHeight = function(){
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
}


var showTitle = function(TitlePane,dom){
    try{
        targetList.forEach(function(entry){
            var titleString;
            var contentDiv =dom.byId(entry.contentDiv);
            if(contentDiv == null){console.log('could not find promo area, exitng program');return null};
            var titleDiv = dom.byId(entry.titleDiv);
            if(titleDiv.textContent == undefined){
                titleString = titleDiv.innerText
            }else{
                titleString = titleDiv.textContent
            }
            var titleMarkup = "<span class='section_header'>"+titleString+"</span>";
            var tp = new TitlePane({title:titleMarkup, content: contentDiv});
            dom.byId(entry.targetDiv).appendChild(tp.domNode);
            titleDiv.style.display = "none";
            tp.startup();
        })
    }
    catch(e){
        error.log("an error, "  +e + "occured when running placeTitlePane("+ titleHTML +"," + targetDiv +")");
    }
}

var toggleBillingSection = function(sectionNumber){
    dojo.toggleClass("paymentSection"+ sectionNumber,'hide');

};

var toggleSection  = function(targetDiv, action, asciiCode){
    //actiosn are show or hide
    //if an asciiCode is passed, put that in the appropriate position else, just change between plus or minus

    try {
        if (action == '' || targetDiv == '') {
            console.log("no action passed or targetDiv passed.  Action: " + action + " -taretDiv: " + targetDiv)
        };

    if (action == 'hide'){
        dojo.toggleClass(targetDiv, action)
    }


    } catch (e) {
        error.log("an error occurred in toggleSection with error: " + e);
    }
}