TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "cardboardMenu": {
   "fontFamily": "Arial",
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "rollOverOpacity": 0.8,
   "id": "Menu_9122DED4_8311_7ADA_41CF_2DC8F3A101C0",
   "opacity": 0.4,
   "class": "Menu",
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "children": [
    {
     "label": "360 ACCESO LOFT",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "360  SALON LOFT",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    },
    {
     "label": "360 TERRAZA LOFT",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem"
    },
    {
     "label": "03. 360 CORREDOR",
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "class": "MenuItem"
    },
    {
     "label": "4. HAB AUX",
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "class": "MenuItem"
    },
    {
     "label": "HAB PPAL",
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "class": "MenuItem"
    },
    {
     "label": "360 BAÑO SOCIAL",
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "class": "MenuItem"
    },
    {
     "label": "360 BAÑO PPAL LOFT",
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "class": "MenuItem"
    },
    {
     "label": "360 BAÑO HAB AUX LOFT",
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "class": "MenuItem"
    }
   ],
   "rollOverBackgroundColor": "#000000"
  },
  "id": "panorama_8F6DE057_8311_65C6_41B6_B6BC9BC03B49",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8F6DE057_8311_65C6_41B6_B6BC9BC03B49_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_8ED781AE_8311_A746_41CF_DB32E96A69BA",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D, this.camera_935E3FF3_8311_7ADE_41E0_3470B18002AB); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -31.58,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 116,
           "url": "media/panorama_8F6DE057_8311_65C6_41B6_B6BC9BC03B49_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.84
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_8F6DE057_8311_65C6_41B6_B6BC9BC03B49_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_8F6DE057_8311_65C6_41B6_B6BC9BC03B49_t.jpg",
  "label": "360 ACCESO LOFT",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": false,
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_rotation",
  "touchControlMode": "drag_acceleration",
  "buttonCardboardView": {
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "width": "17.15%",
   "paddingLeft": 0,
   "height": "76.75%",
   "mode": "push",
   "maxWidth": 70,
   "paddingRight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "minHeight": 1,
   "transparencyActive": false,
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "data": {
    "name": "IconButton8475"
   },
   "maxHeight": 70,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "borderSize": 0,
   "borderRadius": 0,
   "minWidth": 1,
   "backgroundOpacity": 0,
   "shadow": false,
   "paddingTop": 0
  },
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false,
  "displayPlaybackBar": true
 },
 {
  "id": "panorama_8F6DE057_8311_65C6_41B6_B6BC9BC03B49_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -44.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0.52
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_9122DED4_8311_7ADA_41CF_2DC8F3A101C0",
  "id": "panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_88DB1FB8_8312_9B4A_41B6_3064BF0BD117",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_8E858B22_8311_BB7E_41DF_2F8CA90E32F3, this.camera_934A4022_8311_657E_41DB_C320001003FC); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 0.32,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.41
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_88DB0FB8_8312_9B4A_41B4_7328CBBB15C9",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B, this.camera_93404031_8311_655D_41B2_38C328A24B9D); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 112.11,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.84
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_8CB11053_8316_E5DE_4176_2AB60F063E25",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_8F6DE057_8311_65C6_41B6_B6BC9BC03B49, this.camera_9377C051_8311_65DA_41A0_FA0FAB214F77); this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 124.42,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 116,
           "url": "media/panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.09
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_8CD0AC50_8312_9DDA_41C6_DB02477A9EC6",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_8F748413_8311_AD5D_41BB_A403EA823F14, this.camera_936DC060_8311_65FA_41A9_28B7BC046AD8); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 146.78,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 116,
           "url": "media/panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.6
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D_t.jpg",
  "label": "360  SALON LOFT",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0.08,
   "class": "PanoramaCameraPosition",
   "pitch": 1.53
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_9122DED4_8311_7ADA_41CF_2DC8F3A101C0",
  "id": "panorama_8E858B22_8311_BB7E_41DF_2F8CA90E32F3",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8E858B22_8311_BB7E_41DF_2F8CA90E32F3_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_8E859B22_8311_BB7E_41B9_3A6CD9DDCDC5",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D, this.camera_8CF3CF51_8311_7BDA_41CB_3491C65B6033); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -164.23,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_8E858B22_8311_BB7E_41DF_2F8CA90E32F3_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.84
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_8E858B22_8311_BB7E_41DF_2F8CA90E32F3_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_8E858B22_8311_BB7E_41DF_2F8CA90E32F3_t.jpg",
  "label": "360 TERRAZA LOFT",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_8E858B22_8311_BB7E_41DF_2F8CA90E32F3_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_9122DED4_8311_7ADA_41CF_2DC8F3A101C0",
  "id": "panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_8FE503AC_8313_6B4A_4177_95D93FDB9508",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D, this.camera_8CE51F71_8311_7BDA_41D9_D72A6A1D4011); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -179.8,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B_0_HS_20_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.41
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_8FE533AC_8313_6B4A_41CC_57C309882650",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_8F4142B5_8311_6545_41BC_3A6BA64ACF50, this.camera_8CECDF61_8311_7BFA_41AF_8A5B23183CF5); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -82.08,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B_0_HS_21_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.92
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_8FE523AC_8313_6B4A_41C2_F967B21802FB",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_8D7D5B1B_831F_BB4E_4172_B36077A99210, this.camera_931AFF90_8311_7B5A_41B6_933FEA617050); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -0.18,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B_0_HS_22_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.16
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B_t.jpg",
  "label": "03. 360 CORREDOR",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -133.76,
   "class": "PanoramaCameraPosition",
   "pitch": -4.07
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_9122DED4_8311_7ADA_41CF_2DC8F3A101C0",
  "id": "panorama_8F4142B5_8311_6545_41BC_3A6BA64ACF50",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8F4142B5_8311_6545_41BC_3A6BA64ACF50_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_8F4152B5_8311_6545_41DD_C286A2E2015F",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B, this.camera_9310FF9F_8311_7B45_4198_A75E397A4FA8); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -160.21,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_8F4142B5_8311_6545_41BC_3A6BA64ACF50_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.92
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_930B714D_8313_67CA_41A4_30EB29666537",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_8F98692C_8311_674B_41D3_0CB36AFD3B3B, this.camera_9306FFB0_8311_7B5A_41D0_98C5EEF296A5); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -134.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 116,
           "url": "media/panorama_8F4142B5_8311_6545_41BC_3A6BA64ACF50_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.17
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_8F4142B5_8311_6545_41BC_3A6BA64ACF50_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_8F4142B5_8311_6545_41BC_3A6BA64ACF50_t.jpg",
  "label": "4. HAB AUX",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_8F4142B5_8311_6545_41BC_3A6BA64ACF50_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_9122DED4_8311_7ADA_41CF_2DC8F3A101C0",
  "id": "panorama_8D7D5B1B_831F_BB4E_4172_B36077A99210",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8D7D5B1B_831F_BB4E_4172_B36077A99210_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_8D7D2B1B_831F_BB4E_41C3_01C7D4EACB4B",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B, this.camera_933CFFC0_8311_7B3A_41C0_8AAF180C6A19); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -160.96,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_8D7D5B1B_831F_BB4E_4172_B36077A99210_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.34
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_935F6768_8313_EBCA_41DF_259F6C087671",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_8F8C3D38_8311_7F4A_418A_776F18EB0236, this.camera_93323FD2_8311_7ADE_41D2_C637403FEF46); this.mainPlayList.set('selectedIndex', 7)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -138.86,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 116,
           "url": "media/panorama_8D7D5B1B_831F_BB4E_4172_B36077A99210_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.59
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_8D7D5B1B_831F_BB4E_4172_B36077A99210_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_8D7D5B1B_831F_BB4E_4172_B36077A99210_t.jpg",
  "label": "HAB PPAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_8D7D5B1B_831F_BB4E_4172_B36077A99210_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_9122DED4_8311_7ADA_41CF_2DC8F3A101C0",
  "id": "panorama_8F748413_8311_AD5D_41BB_A403EA823F14",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8F748413_8311_AD5D_41BB_A403EA823F14_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_8CC31B39_8316_9B4D_41D5_DD89AF0015E7",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D, this.camera_93540012_8311_655E_41C8_34B3B5DC5AE3); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -6.71,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 116,
           "url": "media/panorama_8F748413_8311_AD5D_41BB_A403EA823F14_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.92
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_8F748413_8311_AD5D_41BB_A403EA823F14_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_8F748413_8311_AD5D_41BB_A403EA823F14_t.jpg",
  "label": "360 BA\u00d1O SOCIAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_8F748413_8311_AD5D_41BB_A403EA823F14_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_9122DED4_8311_7ADA_41CF_2DC8F3A101C0",
  "id": "panorama_8F8C3D38_8311_7F4A_418A_776F18EB0236",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8F8C3D38_8311_7F4A_418A_776F18EB0236_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_8CC9CDCA_8311_7ECE_41B9_0CAFD57CAB6E",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_8D7D5B1B_831F_BB4E_4172_B36077A99210, this.camera_91497F03_8311_7B3E_41DA_DAD03B026902); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 179.69,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 116,
           "url": "media/panorama_8F8C3D38_8311_7F4A_418A_776F18EB0236_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.59
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_8F8C3D38_8311_7F4A_418A_776F18EB0236_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_8F8C3D38_8311_7F4A_418A_776F18EB0236_t.jpg",
  "label": "360 BA\u00d1O PPAL LOFT",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_8F8C3D38_8311_7F4A_418A_776F18EB0236_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_9122DED4_8311_7ADA_41CF_2DC8F3A101C0",
  "id": "panorama_8F98692C_8311_674B_41D3_0CB36AFD3B3B",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8F98692C_8311_674B_41D3_0CB36AFD3B3B_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_8CA58C7A_8311_FDCE_41D8_EEBFE53B994C",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_8F4142B5_8311_6545_41BC_3A6BA64ACF50, this.camera_93281FE1_8311_7AFD_41A0_F1305DF80E69); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 157.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 116,
           "url": "media/panorama_8F98692C_8311_674B_41D3_0CB36AFD3B3B_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.34
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_8F98692C_8311_674B_41D3_0CB36AFD3B3B_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_8F98692C_8311_674B_41D3_0CB36AFD3B3B_t.jpg",
  "label": "360 BA\u00d1O HAB AUX LOFT",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_8F98692C_8311_674B_41D3_0CB36AFD3B3B_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_8F6DE057_8311_65C6_41B6_B6BC9BC03B49",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8F6DE057_8311_65C6_41B6_B6BC9BC03B49_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_8E858B22_8311_BB7E_41DF_2F8CA90E32F3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8E858B22_8311_BB7E_41DF_2F8CA90E32F3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_8F4142B5_8311_6545_41BC_3A6BA64ACF50",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8F4142B5_8311_6545_41BC_3A6BA64ACF50_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_8D7D5B1B_831F_BB4E_4172_B36077A99210",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8D7D5B1B_831F_BB4E_4172_B36077A99210_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_8F748413_8311_AD5D_41BB_A403EA823F14",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8F748413_8311_AD5D_41BB_A403EA823F14_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_8F8C3D38_8311_7F4A_418A_776F18EB0236",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8F8C3D38_8311_7F4A_418A_776F18EB0236_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8F98692C_8311_674B_41D3_0CB36AFD3B3B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8F98692C_8311_674B_41D3_0CB36AFD3B3B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_8F6DE057_8311_65C6_41B6_B6BC9BC03B49",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8F6DE057_8311_65C6_41B6_B6BC9BC03B49_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_88DB3FB8_8312_9B4A_41DD_7949901C041D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_8E858B22_8311_BB7E_41DF_2F8CA90E32F3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8E858B22_8311_BB7E_41DF_2F8CA90E32F3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8FFAE3AC_8313_6B4A_419A_0FFB6369897B_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_8F4142B5_8311_6545_41BC_3A6BA64ACF50",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8F4142B5_8311_6545_41BC_3A6BA64ACF50_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_8D7D5B1B_831F_BB4E_4172_B36077A99210",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8D7D5B1B_831F_BB4E_4172_B36077A99210_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_8F748413_8311_AD5D_41BB_A403EA823F14",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8F748413_8311_AD5D_41BB_A403EA823F14_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_8F8C3D38_8311_7F4A_418A_776F18EB0236",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8F8C3D38_8311_7F4A_418A_776F18EB0236_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 0)",
    "media": "this.panorama_8F98692C_8311_674B_41D3_0CB36AFD3B3B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8F98692C_8311_674B_41D3_0CB36AFD3B3B_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.Menu_9122DED4_8311_7ADA_41CF_2DC8F3A101C0",
 {
  "id": "camera_91497F03_8311_7B3E_41DA_DAD03B026902",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 41.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_8CF3CF51_8311_7BDA_41CB_3491C65B6033",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -179.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_8CECDF61_8311_7BFA_41AF_8A5B23183CF5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 19.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_8CE51F71_8311_7BDA_41D9_D72A6A1D4011",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -67.89,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_931AFF90_8311_7B5A_41B6_933FEA617050",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 19.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_9310FF9F_8311_7B45_4198_A75E397A4FA8",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 97.92,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_9306FFB0_8311_7B5A_41D0_98C5EEF296A5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -22.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_933CFFC0_8311_7B3A_41C0_8AAF180C6A19",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 179.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_93323FD2_8311_7ADE_41D2_C637403FEF46",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -0.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_93281FE1_8311_7AFD_41A0_F1305DF80E69",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 45.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_935E3FF3_8311_7ADE_41E0_3470B18002AB",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -55.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_93540012_8311_655E_41C8_34B3B5DC5AE3",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -33.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_934A4022_8311_657E_41DB_C320001003FC",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 15.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_93404031_8311_655D_41B2_38C328A24B9D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_9377C051_8311_65DA_41A0_FA0FAB214F77",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 148.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_936DC060_8311_65FA_41A9_28B7BC046AD8",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 173.29,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904_t.jpg",
  "label": "1. EXT 1 - CABA\u00d1A VT1",
  "width": 160,
  "id": "photo_7A1D2634_714C_3CEE_41D0_EA423895C904",
  "class": "Photo",
  "height": 80,
  "image": {
   "levels": [
    {
     "url": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B_t.jpg",
  "label": "2. EXT 2 - CABA\u00d1A VT1",
  "width": 1600,
  "id": "photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B",
  "class": "Photo",
  "height": 800,
  "image": {
   "levels": [
    {
     "url": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469_t.jpg",
  "label": "3. EXT 3 - CABA\u00d1A VT1",
  "width": 1600,
  "id": "photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469",
  "class": "Photo",
  "height": 800,
  "image": {
   "levels": [
    {
     "url": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC_t.jpg",
  "label": "4. INT 1 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18_t.jpg",
  "label": "5. INT 2 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_7394633D_781D_12D6_41A4_A0A677937A18",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6_t.jpg",
  "label": "6. EXT 4 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C_t.jpg",
  "label": "7. INT 3- CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 }
], "children": [
 {
  "shadow": false,
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingLeft": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "toolTipTextShadowVerticalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 0.7,
  "toolTipTextShadowColor": "#000000",
  "minHeight": 50,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressLeft": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingTop": 9,
  "toolTipShadowColor": "#333333",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "minWidth": 100,
  "progressBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderSize": 0,
  "paddingTop": 0,
  "toolTipBorderRadius": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "width": "100%",
  "height": "100%",
  "toolTipBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 15,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 14,
  "toolTipFontSize": 13,
  "progressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBorderRadius": 0,
  "top": 0,
  "propagateClick": false,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 0,
  "toolTipPaddingRight": 14,
  "playbackBarBottom": 5,
  "progressOpacity": 1,
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "id": "MainViewer",
  "toolTipPaddingBottom": 9,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 1,
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical"
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "toolTipBackgroundColor": "#000000",
      "width": "17.48%",
      "paddingLeft": 0,
      "height": "76.75%",
      "mode": "toggle",
      "maxWidth": 70,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Full Screen",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon fullscreen"
      },
      "maxHeight": 70,
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "toolTipBackgroundColor": "#000000",
      "width": "17.15%",
      "paddingLeft": 0,
      "height": "76.75%",
      "mode": "toggle",
      "maxWidth": 70,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Audio On/Off",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon audio"
      },
      "maxHeight": 70,
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     }
    ],
    "gap": 10,
    "scrollBarVisible": "rollOver",
    "width": "75.269%",
    "paddingLeft": 0,
    "height": "100%",
    "overflow": "visible",
    "paddingRight": 0,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "minHeight": 1,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "right",
    "data": {
     "name": "-Hide buttons"
    },
    "creationPolicy": "delayed",
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "scrollBarVisible": "rollOver",
  "width": "22.545%",
  "paddingLeft": 0,
  "overflow": "visible",
  "paddingRight": 0,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "minHeight": 50,
  "top": "89%",
  "layout": "horizontal",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "3%",
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "scrollBarMargin": 2,
  "data": {
   "name": "--Settings Button Set"
  },
  "creationPolicy": "delayed",
  "horizontalAlign": "right",
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "borderRadius": 5,
  "minWidth": 265,
  "right": 25,
  "shadow": false,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "width": "21%",
  "paddingLeft": 0,
  "height": "25%",
  "overflow": "visible",
  "paddingRight": 0,
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "class": "Container",
  "minHeight": 120,
  "top": "3.5%",
  "layout": "vertical",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "left",
  "scrollBarMargin": 2,
  "data": {
   "name": "--Stickers Container"
  },
  "creationPolicy": "delayed",
  "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "left": "2.14%",
  "borderRadius": 0,
  "minWidth": 300,
  "backgroundOpacity": 0,
  "shadow": false,
  "paddingTop": 0
 },
 {
  "selectedItemThumbnailShadow": true,
  "backgroundOpacity": 0.25,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "backgroundColor": [
   "#000000"
  ],
  "itemHorizontalAlign": "center",
  "itemBackgroundColorDirection": "vertical",
  "paddingLeft": 15,
  "maxWidth": 150,
  "paddingRight": 15,
  "itemBackgroundColor": [],
  "itemLabelHorizontalAlign": "center",
  "backgroundColorRatios": [
   0
  ],
  "selectedItemThumbnailShadowBlurRadius": 10,
  "selectedItemBackgroundColorRatios": [],
  "selectedItemLabelFontWeight": "bold",
  "itemBorderRadius": 0,
  "itemPaddingTop": 3,
  "itemLabelFontFamily": "Arial",
  "itemLabelPosition": "bottom",
  "layout": "vertical",
  "minHeight": 1,
  "rollOverItemLabelFontColor": "#FFFFFF",
  "scrollBarMargin": 4,
  "scrollBarOpacity": 1,
  "itemThumbnailShadow": false,
  "selectedItemBackgroundColor": [],
  "itemBackgroundOpacity": 0,
  "scrollBarColor": "#52B7EF",
  "itemThumbnailWidth": 80,
  "selectedItemBorderRadius": 0,
  "borderSize": 0,
  "rollOverItemLabelFontWeight": "bold",
  "minWidth": 1,
  "itemLabelGap": 9,
  "itemLabelFontColor": "#FFFFFF",
  "backgroundColorDirection": "vertical",
  "paddingTop": 20,
  "gap": 10,
  "itemThumbnailBorderRadius": 50,
  "itemPaddingLeft": 3,
  "selectedItemLabelFontStyle": "italic",
  "itemVerticalAlign": "middle",
  "itemOpacity": 1,
  "itemThumbnailOpacity": 1,
  "selectedItemThumbnailShadowVerticalLength": 0,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "selectedItemBorderSize": 0,
  "selectedItemBackgroundOpacity": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "paddingBottom": 20,
  "scrollBarWidth": 7,
  "height": "82.127%",
  "class": "ThumbnailList",
  "itemPaddingRight": 3,
  "verticalAlign": "top",
  "selectedItemLabelTextDecoration": "underline",
  "top": "3.5%",
  "itemLabelFontWeight": "normal",
  "rollOverItemLabelTextDecoration": "underline",
  "itemLabelTextDecoration": "none",
  "visible": false,
  "itemLabelFontStyle": "normal",
  "propagateClick": false,
  "itemPaddingBottom": 3,
  "horizontalAlign": "left",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "data": {
   "name": "-ThumbnailList"
  },
  "itemMode": "normal",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "borderRadius": 3,
  "itemBackgroundColorRatios": [],
  "selectedItemLabelFontColor": "#FFFFFF",
  "selectedItemLabelFontSize": 12,
  "itemThumbnailHeight": 80,
  "itemLabelFontSize": 12,
  "scrollBarVisible": "rollOver",
  "shadow": false,
  "right": "2%"
 },
 {
  "children": [
   {
    "gap": 10,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingLeft": 0,
    "height": "55.435%",
    "overflow": "visible",
    "paddingRight": 0,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "minHeight": 1,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "left",
    "data": {
     "name": "Container Content"
    },
    "creationPolicy": "delayed",
    "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "scrollBarVisible": "rollOver",
  "width": "37.394%",
  "paddingLeft": 0,
  "height": 92,
  "overflow": "visible",
  "paddingRight": 0,
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "bottom",
  "class": "Container",
  "minHeight": 1,
  "layout": "vertical",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "3%",
  "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "scrollBarMargin": 2,
  "data": {
   "name": "-Discover Container"
  },
  "creationPolicy": "delayed",
  "horizontalAlign": "left",
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "left": "2%",
  "borderRadius": 0,
  "minWidth": 1,
  "backgroundOpacity": 0,
  "shadow": false,
  "paddingTop": 0
 },
 {
  "width": "5%",
  "paddingLeft": 0,
  "height": "5%",
  "maxWidth": 485,
  "paddingRight": 0,
  "url": "skin/Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "class": "Image",
  "verticalAlign": "middle",
  "minHeight": 1,
  "top": "0.98%",
  "propagateClick": false,
  "horizontalAlign": "center",
  "data": {
   "name": "Image21736"
  },
  "maxHeight": 265,
  "id": "Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D",
  "borderSize": 0,
  "borderRadius": 0,
  "minWidth": 1,
  "right": "0.6%",
  "shadow": false,
  "backgroundOpacity": 0,
  "paddingTop": 0
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "gap": 10,
 "mouseWheelEnabled": true,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "paddingLeft": 0,
 "height": "100%",
 "overflow": "visible",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "paddingRight": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "class": "Player",
 "layout": "absolute",
 "minHeight": 20,
 "propagateClick": false,
 "vrPolyfillScale": 0.85,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "Player463"
 },
 "creationPolicy": "delayed",
 "id": "rootPlayer",
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "scripts": {
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getKey": function(key){  return window[key]; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); }
 },
 "paddingTop": 0
})