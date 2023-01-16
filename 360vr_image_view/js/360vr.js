var vrImg = new Image();
var imagesFolderPath = "./images/360vr/Gray_AGT_1.png";

const initDimensionW = 1604;
const initDimensionH = 1073;

var vrImgConfig = {
  num: 72,
  folderPath: './images/360vr/',
  imgName: 'Gray_AGT_',
  format: '.png',
}

window.addEventListener("resize", function () {
  repositionHotspot();
});
window.addEventListener("load", function () {
  initImage();
});


const GURKHA_SUV_HOTSPOTS_CONFIG = [
  {
    variant: {
      images: [
        {
          src:
            "https://scaleflex.cloudimg.io/v7/demo/360-assets/AIR_SNORKEL_FINAL_JPG.png?vh=88bccb",
          alt: "air snorkel"
        }
      ],
      title: "Air Intake Snorkel",
      url: "https://www.forcegurkha.co.in/specifications/",
      newTab: true,
      description:
        "The snorkel gives the Gurkha an unmatched water-wading ability and ensures ample supply of fresh air for combustion.",
      moreDetailsUrl: "https://forcegurkha.co.in"
    },
    popupProps: {
      popupSelector: "air-intake-popup",
    },
    initialDimensions: [initDimensionW, initDimensionH],
    positions: [
      { imageIndex: 1, xCoord: 836, yCoord: 491 },
      { imageIndex: 2, xCoord: 814, yCoord: 490 },
      { imageIndex: 3, xCoord: 790, yCoord: 491 },
      { imageIndex: 4, xCoord: 768, yCoord: 492 },
      { imageIndex: 5, xCoord: 748, yCoord: 492 },
      { imageIndex: 6, xCoord: 726, yCoord: 492 },
      { imageIndex: 7, xCoord: 708, yCoord: 489 },
      { imageIndex: 8, xCoord: 690, yCoord: 492 },
      { imageIndex: 9, xCoord: 673, yCoord: 491 },
      { imageIndex: 10, xCoord: 654, yCoord: 489 },
      { imageIndex: 11, xCoord: 638, yCoord: 492 },
      { imageIndex: 12, xCoord: 624, yCoord: 490 },
      { imageIndex: 13, xCoord: 614, yCoord: 491 },
      { imageIndex: 14, xCoord: 600, yCoord: 491 },
      { imageIndex: 15, xCoord: 594, yCoord: 490 },
      { imageIndex: 16, xCoord: 587, yCoord: 488 },
      { imageIndex: 17, xCoord: 582, yCoord: 487 },
      { imageIndex: 18, xCoord: 574, yCoord: 488 },
    ]
  },
  // {
  //   variant: {
  //     title: "New Gurkha Technical Specifications",
  //     url: "https://www.forcegurkha.co.in/specifications/",
  //     newTab: true
  //   },
  //   initialDimensions: [1170, 662],
  //   popupProps: {
  //     popupSelector: "popup-link",
  //     open: true,
  //     arrow: false,
  //     placement: "top",
  //   },
  //   positions: [
  //     { imageIndex: 1, xCoord: 355, yCoord: 474 },
  //     { imageIndex: 2, xCoord: 355 },
  //     { imageIndex: 3, xCoord: 355 },
  //     { imageIndex: 4, xCoord: 341, yCoord: 479 },
  //     { imageIndex: 5, xCoord: 336 },
  //     { imageIndex: 6, xCoord: 332 },
  //     { imageIndex: 7, xCoord: 327 },
  //     { imageIndex: 8, xCoord: 326 },
  //     { imageIndex: 9, xCoord: 327 },
  //     { imageIndex: 10, xCoord: 331 },
  //     { imageIndex: 11, xCoord: 334 },
  //     { imageIndex: 12, xCoord: 336 },
  //     { imageIndex: 13, xCoord: 347 }
  //   ]
  // },
  // {
  //   variant: {
  //     images: [
  //       {
  //         src:
  //           "https://scaleflex.cloudimg.io/v7/demo/360-assets/transparent+%281%29.jpg",
  //         alt: "car accessory"
  //       },
  //       {
  //         src:
  //           "https://scaleflex.cloudimg.io/v7/demo/360-assets/transparent+%282%29.jpg",
  //         alt: "spoiler"
  //       },
  //       {
  //         src:
  //           "https://scaleflex.cloudimg.io/v7/demo/360-assets/transparent.jpg",
  //         alt: "car accessory"
  //       }
  //     ],
  //     description:
  //       "The All New Force Gurkha ensures best-in-class safety for passengers and security for the vehicle with its full metal body structure.",
  //     moreDetailsTitle: "Download accessories brochure",
  //     moreDetailsUrl:
  //       "https://www.forcegurkha.co.in/wp-content/themes/force-motors/assets/pdf/Force-Gurkha-accessories-E-brochure.pdf"
  //   },
  //   popupProps: { popupSelector: "accessories-popup" },
  //   initialDimensions: [1170, 662],
  //   positions: [
  //     { imageIndex: 11, xCoord: 683, yCoord: 151 },
  //     { imageIndex: 12, xCoord: 683 },
  //     { imageIndex: 13, xCoord: 683 },
  //     { imageIndex: 14, xCoord: 683 },
  //     { imageIndex: 15, xCoord: 683 },
  //     { imageIndex: 16, xCoord: 683 },
  //     { imageIndex: 17, xCoord: 681, yCoord: 152 },
  //     { imageIndex: 18, xCoord: 677, yCoord: 156 },
  //     { imageIndex: 19, xCoord: 671, yCoord: 159 },
  //     { imageIndex: 20, xCoord: 665, yCoord: 163 },
  //     { imageIndex: 21, xCoord: 656, yCoord: 168 },
  //     { imageIndex: 22, xCoord: 650, yCoord: 171 },
  //     { imageIndex: 23, xCoord: 643, yCoord: 176 },
  //     { imageIndex: 24, xCoord: 635, yCoord: 178 },
  //     { imageIndex: 25, xCoord: 628, yCoord: 181 },
  //     { imageIndex: 26, xCoord: 621 },
  //     { imageIndex: 27, xCoord: 610 },
  //     { imageIndex: 28, xCoord: 598 },
  //     { imageIndex: 29, xCoord: 588 },
  //     { imageIndex: 30, xCoord: 578 },
  //     { imageIndex: 31, xCoord: 570, yCoord: 176 },
  //     { imageIndex: 32, xCoord: 560, yCoord: 173 }
  //   ]
  // },
  // {
  //   variant: {
  //     images: [
  //       {
  //         src: "https://scaleflex.cloudimg.io/v7/demo/360-assets/feature-5.png",
  //         alt: "car top"
  //       },
  //       {
  //         src:
  //           "https://scaleflex.cloudimg.io/v7/demo/360-assets/ALL_AROUND_VISIBILITY_UPDATED.png",
  //         alt: "car inside"
  //       },
  //       {
  //         src: "https://scaleflex.cloudimg.io/v7/demo/360-assets/feature-2.png",
  //         alt: "transmission"
  //       }
  //     ],
  //     description:
  //       "All four captain seats with ample head room, leg room and shoulder room.Easy ingress and egress from the rear door into the widest gangway in the category that makes space for all your luggage",
  //     moreDetailsUrl:
  //       "https://www.forcegurkha.co.in/wp-content/themes/force-motors/assets/pdf/Force-Gurkha-accessories-E-brochure.pdf"
  //   },
  //   initialDimensions: [1170, 662],
  //   popupProps: { popupSelector: "car-cabin" },
  //   positions: [
  //     { imageIndex: 6, xCoord: 607, yCoord: 246 },
  //     { imageIndex: 7, xCoord: 619 },
  //     { imageIndex: 8, xCoord: 630 },
  //     { imageIndex: 9, xCoord: 637 },
  //     { imageIndex: 10, xCoord: 642 }
  //   ]
  // }
];

window.CI360.addHotspots("gurkha-suv", GURKHA_SUV_HOTSPOTS_CONFIG);

var cloudimage = document.querySelector(".cloudimage-360");

if(cloudimage){
  cloudimage.addEventListener("click", function(e) {
    console.log(e);
    // console.log("e.offsetX", e.offsetX)
    // console.log("e.offsetY", e.offsetY)
    // console.log("e.pageX", e.pageX)
    // console.log("e.pageY", e.pageY)
    // console.log("e.screenX", e.screenX)
    // console.log("e.screenY", e.screenY)
    console.log("e.clientX", e.clientX)
    console.log("e.clientY", e.clientY)
  });
}


function repositionHotspot () {
  if(document.querySelector(".cloudimage-360")){
    var vrImage = document.querySelector(".cloudimage-360").getBoundingClientRect();
    var vrImageW = vrImage.width;
    var vrImageH = vrImage.height;
    var hotspot = document.querySelector(".cloudimage-360-hotspot-link-icon ").getBoundingClientRect();
    console.log(hotspot)
  }


  // console.log("vrImageW", vrImageW);
  // console.log("vrImageH", vrImageH);
  // console.log(initDimensionW);
  // console.log(initDimensionH);
}