/*! mygalleries 25-11-2015 */
function isBotVersion2() {
    var a = "bot,spider,slurp,crawler,extractor,generator,download,harvest,email,larbin,nutch,link,reaper,wget,fetch,curl,libww,finder,WinHttpRequest,google,yahoo,teoma,scoutjet,facebook,keynote,appmanager,check_http,redalert,expo9,pirst,SearchBlox,Screenshot,TimKim,PubSub,mechanize,pinterest", b = navigator.userAgent, c = "", d = !1;
    if (c = a.split(","), "" != c && null != c && void 0 != c) if ("" != b && null != b && void 0 != b) {
        for (var e = 0; e <= c.length; e++) if (b.toLocaleLowerCase().indexOf(c[e]) > -1) {
            d = !0;
            break;
        }
    } else d = !0;
    return d;
}

function registerMyGalleryModules() {
    try {
        apicallDoneForMygalleries = !0, MyGalleriesCore.init(MyGalleriesEnvironmentVariables, viewMode, MyGalleriesEnvironmentVariablesDynamic), 
        MyGalleriesCore.addToSubEnvironment("isMyGalleryPage", (location.href.indexOf("/me/") > -1 || location.href.indexOf("mygalleries.asp")) > -1), 
        MyGalleriesCore.addToSubEnvironment("isExternalPage", -1 == location.href.indexOf("/me/")), 
        MyGalleriesCore.addToSubEnvironment("isMyAccountPage", location.href.indexOf("/asp/secure") > -1), 
        MyGalleriesCore.addToSubEnvironment("isCommunityPage", location.href.indexOf("/community") > -1), 
        MyGalleriesCore.addToSubEnvironment("isSkinnyBannerPopup", location.href.indexOf("/pop_terms.asp") > -1), 
        MyGalleriesCore.addToSubEnvironment("issharePagePopup", location.href.indexOf("/taf.asp") > -1 || location.href.indexOf("/mailfriend.asp") > -1), 
        MyGalleriesCore.addToSubEnvironment("issecurityPage", location.href.indexOf("/security_info.asp") > -1), 
        MyGalleriesCore.addToSubEnvironment("isLiveChatPage", location.href.indexOf("/ChatInitial.aspx") > -1), 
        MyGalleriesCore.addToSubEnvironment("isGCPage", location.href.indexOf("gift-vouchers") > -1), 
        MyGalleriesCore.addToSubEnvironment("isJudyPage", location.href.indexOf("/discover") > -1), 
        MyGalleriesCore.addToSubEnvironment("isMyPhotosPage", location.href.indexOf("/photostoart") > -1 || location.href.indexOf("/nav/fr/photo-deco/") > -1 || location.href.indexOf("myphotos") > -1 || location.href.indexOf("mesphotos") > -1), 
        "undefined" == typeof isProductPage || "null" == typeof isProductPage ? MyGalleriesEnvironmentVariables.isProductPage = !1 : MyGalleriesEnvironmentVariables.isProductPage = !0, 
        MyGalleriesCore.addToSubEnvironment("isnewProductPage", !1), void 0 != window.newProductPage && window.newProductPage && MyGalleriesCore.addToSubEnvironment("isnewProductPage", !0), 
        (MyGalleriesEnvironmentVariablesDynamic.isExternalPage || MyGalleriesEnvironmentVariablesDynamic.isCommunityPage) && (MyGalleriesCore.registerModule(new com.art.myGalleries.modules.ExternalModule({}, MyGalleriesCore)), 
        MyGalleriesCore.registerModule(new com.art.myGalleries.components.LoginInvokeComponent({}, MyGalleriesCore)), 
        MyGalleriesCore.registerSubscriber(new com.art.myGalleries.commands.ApplicationCommand({
            target: ""
        }, MyGalleriesCore)), MyGalleriesCore.startModule(com.art.myGalleries.modules.ExternalModule.NAME), 
        MyGalleriesCore.startModule(com.art.myGalleries.components.LoginInvokeComponent.NAME));
        var a = location.href, b = !1;
        if ((a.indexOf("/OrderConfirmation.aspx") > -1 || a.indexOf("/OrderConfirm.aspx") > -1) && (b = !0), 
        MyGalleriesEnvironmentVariablesDynamic.isMyAccountPage || MyGalleriesEnvironmentVariablesDynamic.isMyPhotosPage || b || MyGalleriesEnvironmentVariablesDynamic.isSkinnyBannerPopup || MyGalleriesEnvironmentVariablesDynamic.issharePagePopup || MyGalleriesEnvironmentVariablesDynamic.issecurityPage || MyGalleriesEnvironmentVariablesDynamic.isLiveChatPage || MyGalleriesEnvironmentVariablesDynamic.isJudyPage || MyGalleriesEnvironmentVariablesDynamic.isnewProductPage || (MyGalleriesCore.registerModule(new com.art.myGalleries.modules.TrayModule({
            target: "body"
        }, MyGalleriesCore)), MyGalleriesCore.startModule(com.art.myGalleries.modules.TrayModule.NAME), 
        MyGalleriesCore.getModel().getIfLoggedInCookieNew() ? $(".tray_login").hide() : $(".tray_login").show()), 
        !(MyGalleriesEnvironmentVariablesDynamic.isCommunityPage || MyGalleriesEnvironmentVariablesDynamic.isSkinnyBannerPopup || MyGalleriesEnvironmentVariablesDynamic.issharePagePopup || MyGalleriesEnvironmentVariablesDynamic.isLiveChatPage || MyGalleriesEnvironmentVariablesDynamic.isGCPage || MyGalleriesEnvironmentVariablesDynamic.isJudyPage || MyGalleriesEnvironmentVariablesDynamic.isMyPhotosPage || b || "true" != MyGalleriesEnvironmentVariables.galleryDrivenRV || isBotVersion2())) {
            var c = !1;
            com.art.core.utils.ArtServer.prototype.isART() ? MyGalleriesEnvironmentVariablesDynamic.isnewProductPage ? setTimeout(function() {
                navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPad/i) ? (MyGalleriesCore.registerModule(new com.art.myGalleries.modules.TremulaRvModule({
                    target: "#recently-viewed"
                }, MyGalleriesCore)), MyGalleriesCore.startModule(com.art.myGalleries.modules.TremulaRvModule.NAME)) : $(document).mousemove(function(a) {
                    c || (MyGalleriesCore.registerModule(new com.art.myGalleries.modules.TremulaRvModule({
                        target: "#recently-viewed"
                    }, MyGalleriesCore)), MyGalleriesCore.startModule(com.art.myGalleries.modules.TremulaRvModule.NAME), 
                    c = !0);
                });
            }, 3e3) : setTimeout(function() {
                MyGalleriesCore.registerModule(new com.art.myGalleries.modules.TremulaRvModule({
                    target: "body"
                }, MyGalleriesCore)), MyGalleriesCore.startModule(com.art.myGalleries.modules.TremulaRvModule.NAME), 
                setTimeout(function() {
                    $("#RecentlyViewedModuleT").resize();
                }, 2e3);
            }, 3e3) : (MyGalleriesCore.registerModule(new com.art.myGalleries.modules.RecentlyViewedModule({
                target: "body"
            }, MyGalleriesCore)), MyGalleriesCore.startModule(com.art.myGalleries.modules.RecentlyViewedModule.NAME));
        }
        MyGalleriesCore.registerModule(new com.art.myGalleries.components.LoginInvokeComponent({}, MyGalleriesCore)), 
        MyGalleriesCore.startModule(com.art.myGalleries.components.LoginInvokeComponent.NAME), 
        $(document).on("mouseover", ".save_to_gal_icon", function() {
            $(this).hasClass("save_to_gal_icon_hover") || $(this).addClass("save_to_gal_icon_hover");
        }), $(document).on("mouseout", ".save_to_gal_icon", function() {
            $(this).hasClass("save_to_gal_icon_hover") && $(this).removeClass("save_to_gal_icon_hover");
        });
    } catch (d) {
        trace(d);
    }
}

com.art.myGalleries = {}, com.art.myGalleries.modules = {}, com.art.myGalleries.proxies = {}, 
com.art.myGalleries.components = {}, com.art.myGalleries.commands = {}, com.art.myGalleries.vos = {}, 
com.art.myGalleries.proxies.ApplicationProxy = function(a, b, c) {
    this.NAME = "ApplicationProxy", this.galleryPerPage = 16, this.galleryItemPerPage = 12, 
    this.galleryList = [], this.galleryListForWebUser = [], this.galleryItemList = [], 
    this.galleryListIsCachedFlag = !1, this.cacheByGalleryList = {}, this.cacheByGalleryListForWebUser = {}, 
    this.cacheByGalleryItemList = {}, this.toggleDisplay = "", this.galleryItemPageNumber = -1, 
    this.galleryDefaultSort = !1, this.gallerySortBy = 0, this.gallerySortDirection = 1, 
    this.getAllItemsFlag = !0, this.ProfileUrl = "", this.myGalleryItemCount = 0, this.GalleryNamecookieCountValueSeparator = "~!", 
    this.apnumTrendGallery = 0, this.environment = a, this.environmentSub = c, this.galleryTemplate = {
        Name: null,
        GalleryItemSource: 4,
        GalleryId: null,
        GalleryVisibility: 1,
        BackGround: null,
        GalleryImage: {
            LargeImage: {
                HttpImageURL: ""
            }
        },
        ShortDescription: null,
        SortOptions: {
            SortBy: 0,
            SortDirection: 0,
            DefaultSort: !0
        },
        LongDescription: null,
        StreamConfiguration: null,
        GalleryType: 0
    }, this.galleryItemTemplate = {
        APNum: null,
        FrameSku: null,
        Imageid: 0,
        GalleryItemSource: 4,
        AvailableInOtherSizes: !1,
        ItemGalleryItemID: 0,
        ItemDisplayTypeID: 0,
        Item: {
            ArtistId: 0,
            ArtistName: null,
            " Price": null,
            Title: null
        }
    }, this.getDFEEngineParameters = {
        PrintAPNum: 0,
        PrintPODConfigID: 0,
        Crop: 0,
        ColorGrouping: {
            ColorID: 0,
            ColorName: ""
        },
        StyleGrouping: {
            StyleID: 0,
            StyleName: ""
        },
        MaxConfigurations: 0,
        CustomerZoneID: 0,
        LanguageID: 0,
        FitFixedFrame: !0,
        CurrencyCode: null,
        WriteToDB: !0,
        ImageMaxW: "0",
        ImageMaxH: "0",
        ShowTrace: !1,
        MergePreFrameData: !1,
        FrameSKU: null,
        Domain: null,
        SendLiteResponse: !1,
        FSFrameConfiguration: {
            Print: {
                APNum: 0
            },
            MatCombo: {
                NumMats: 0,
                TopMat: {
                    APNum: 0,
                    LeftSize: 2.5,
                    TopSize: 2.5,
                    RightSize: 2.5,
                    BottomSize: 2.5
                },
                MiddleMat: {
                    APNum: 0,
                    LeftSize: 0,
                    TopSize: 0,
                    RightSize: 0,
                    BottomSize: 0
                },
                BottomMat: {
                    APNum: 0,
                    LeftSize: 0,
                    TopSize: 0,
                    RightSize: 0,
                    BottomSize: 0
                }
            },
            Moulding: {
                APNum: 0
            },
            GlassConfig: {
                GlassAPNum: 0
            }
        }
    }, this.selectedItemId, this.selectedGalleryId, this.orderObject = [], this.highestZIndex = -1, 
    this.frameStudioFlag = !1, this.requestForAllItemsFromSlideShow = !1, this.selectedImageObject = {}, 
    this.currentViewMode = b, this.updateFromDLE = !1, this.facebookShare = {}, this.facebookShare[MyGalleriesCore.constants.GRID_VIEW] = {
        caption: MyGalleriesCore.getString("I've created a gallery on Art.com"),
        description: MyGalleriesCore.getString("Come check out the gallery of art I created on Art.com, and let me know what you think")
    }, this.facebookShare[MyGalleriesCore.constants.SLIDESHOW] = {
        caption: MyGalleriesCore.getString("I've created a gallery on Art.com"),
        description: MyGalleriesCore.getString("Come check out the gallery of art I created on Art.com, and let me know what you think")
    }, this.facebookShare[MyGalleriesCore.constants.ROOM_VIEW] = {
        caption: MyGalleriesCore.getString("I've decorated a room on Art.com"),
        description: MyGalleriesCore.getString("Come check out the room view of art I created on Art.com, and let me know what you think")
    }, this.LOGGED_IN = com.art.myGalleries.proxies.ApplicationProxy.LOGGED_IN, this.LOGGED_OUT = com.art.myGalleries.proxies.ApplicationProxy.LOGGED_OUT, 
    this.galleryRequiredProperites = [ "GalleryId", "ItemId", "DateUpdated", "DateCreated", "Name", "GalleryItemSource", "PagingOptions", "ParentId", "ItemCount", "AccountId", "Icon", "ItemSource", "ItemKey", "ItemText", "ItemData", "GalleryId", "GalleryVisibility", "Rooms", "Walls", "BackGround", "ShortDescription", "SortOptions", "LongDescription", "BareWalls", "ChildGalleries", "Permissions", "Items", "TotalItems" ], 
    this.ISOCurrencyENUM = {
        AUD: 0,
        CAD: 1,
        DKK: 2,
        HKD: 3,
        JPY: 4,
        NZD: 5,
        NOK: 6,
        SGD: 7,
        ZAR: 8,
        SEK: 9,
        CHF: 10,
        GBP: 11,
        USD: 12,
        EUR: 13,
        ARS: 14,
        CNY: 15,
        CZK: 16,
        MXN: 17,
        TRY: 18,
        PLN: 19,
        BRL: 20
    }, this.ISOLangaugeENUM = {
        EN: 0,
        FR: 1,
        DE: 2,
        ES: 3,
        IT: 4,
        JA: 5,
        NL: 6,
        SE: 7,
        DA: 8,
        NO: 9,
        FI: 10
    }, this.shareTitle = "", this.shareURL = "", this.selectedFramingStudioObject = [ {} ], 
    this.shareType, this.isViewingSharedRoomView = !1, this.isViewingSavedRoom = !1, 
    this.isEditingSavedRoom = !1, this.savedRoomViewingMode = "view", this.savedRoomKey, 
    this.isRoomView = !1, this.roomViewParms = {
        mode: null,
        type: null,
        roomKey: null,
        galleryKey: null,
        savedWallId: null
    }, this.roomImageBaseURL = "http://cache1.allpostersimages.com/", this.restorePreviousVisit = !1, 
    this.dleIsLoaded = !1, this.galleryItemsLoaded = !1, this.oneClickCookie = "oneclick", 
    this.GalleryIDCookie = "galleryid", this.LastGalleryNameCookie = "lastgalleryname", 
    this.artCookieBase = "arts", this.cookieobject = new com.art.core.cookie.Cookie(), 
    this.loginSource = "", this.registerSource = "", this.myGalItemCount = "", this.selectedMultipleSize = {}, 
    this.user = new com.art.core.vos.User(), this.shareRequestObject = new com.art.myGalleries.vos.ShareRequestVO(), 
    this.shareRequestFlag = !1, this.saveMenuBoolean = !1, this.saveMenuPosition = {
        left: 172,
        top: 566,
        width: 0
    }, this.saveMenuSourceClick = "", this.saveDefaultGalleryTitle = MyGalleriesCore.getKeyString("defaultGallerynameKey"), 
    this.savetogalleryoption = !0, this.copyormovetogalleryoption = "", this.galleryKey, 
    this.migratedItemCount = 0, this.SESSIONCOOKIENAME, this.MigrationDone = !1, this.galleryItemNextPage = 1;
}, com.art.myGalleries.proxies.ApplicationProxy.NAME = "ApplicationProxy", com.art.myGalleries.proxies.ApplicationProxy.LOGGED_IN = "0", 
com.art.myGalleries.proxies.ApplicationProxy.LOGGED_OUT = "1", com.art.myGalleries.proxies.ApplicationProxy.ONECLICKCOOKIEVAL = "1", 
com.art.myGalleries.proxies.ApplicationProxy.prototype.hasWritePermissions = function() {
    if ("undefined" != typeof _galleryDataJson) for (var a = 0; a < _galleryDataJson.length; a++) {
        var b = _galleryDataJson[a];
        if (location.href.indexOf(b.VanityURL)) return b.Permissions > Number(MyGalleriesCore.constants.VIEW);
    }
    return !1;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.filterGalleries = function(a) {
    for (var b = [], c = 0; c < a.length; c++) if (null == a[c].GalleryDefaultFlags && "recently-viewed" != a[c].ItemKey.toLowerCase() && "photos-to-art" != a[c].ItemKey.toLowerCase() && "frame-your-art" != a[c].ItemKey.toLowerCase()) b.push(a[c]); else if (null != a[c].GalleryDefaultFlags) for (var d = a[c].GalleryDefaultFlags, e = 0; e < d.length; e++) 0 == d[e].GalleryDefaultType && b.push(a[c]);
    return b;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getColorIndexByHex = function(a) {
    for (var b = this.getBackgroundColors(), c = 0; c < b.length; c++) if (b[c] == a) return c;
    return 0;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getFramingSKURequestObjectAsString = function(a) {
    return "dfeEngineParameters=" + JSON.stringify(this.getDFEEngineParameters);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setFramingStudioResponseObject = function(a) {
    this.selectedFramingStudioObject = a;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getFramingStudioResponseObject = function() {
    return this.selectedFramingStudioObject;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setSelectedImageObject = function(a) {
    this.selectedImageObject = a;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getNextHighestZIndex = function() {
    return -1 == this.highestZIndex && (this.highestZIndex = com.art.core.utils.BrowserUtil.getNextHighestZIndex()), 
    this.highestZIndex;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setInitialPageNumber = function(a) {
    this.galleryItemPageNumber = "" != a ? parseInt(a) : 1;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getSelectedGallery = function() {
    var a = this.environmentSub.selectedGalleryID, b = this.cacheByGalleryList[a];
    return b;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getOneClickAddToGalleryEnabled = function() {
    var a = "1" == this.cookieobject.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, this.oneClickCookie);
    return a;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setGalleryItemCountCookie = function(a) {
    var a = this.getGalleryItemCountFromCookie();
    a > 0 ? (a = parseInt(a) + 1, this.cookieobject.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "mgitemcount", a, "/", this.cookieobject.getCookieDomain("art"))) : (a = 1, 
    this.cookieobject.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "mgitemcount", a, "/", this.cookieobject.getCookieDomain("art"))), 
    this.myGalleryItemCount = parseInt(a);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.resetGalleryItemCountCookie = function(a) {
    this.cookieobject.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "mgitemcount", a, "/", this.cookieobject.getCookieDomain("art"));
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getGalleryItemCountFromCookie = function() {
    var a = this.cookieobject.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "mgitemcount");
    return a.length > 0 ? a : 0;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setCookieGalleryIDCountCookie = function(a) {
    var b = this.getGalIDCountCookie(a), c = "", d = "";
    if (0 == b) d = 1, c = a + this.GalleryNamecookieCountValueSeparator + 1, this.cookieobject.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "galleryCount", c, "/", this.cookieobject.getCookieDomain("art")); else {
        var e = "", f = "", g = "", h = b.indexOf("|");
        if (f = b.split("~!"), g = f[0], d = parseInt(f[1]) + 1, 0 > h && g == a) c = a + this.GalleryNamecookieCountValueSeparator + d, 
        this.cookieobject.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "galleryCount", c, "/", this.cookieobject.getCookieDomain("art")); else if (e = b.split("|"), 
        0 > h) d = 1, c = b + "|" + a + this.GalleryNamecookieCountValueSeparator + d, this.cookieobject.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "galleryCount", c, "/", this.cookieobject.getCookieDomain("art")); else {
            for (var i = "", j = !1, k = 0; k < e.length; k++) {
                var l = e[k].split("~!");
                a == l[0] ? (j = !0, d = parseInt(l[1]) + 1, i += l[0] + this.GalleryNamecookieCountValueSeparator + d + "|") : i += l[0] + this.GalleryNamecookieCountValueSeparator + l[1] + "|";
            }
            j || (i = b + "|" + a + this.GalleryNamecookieCountValueSeparator + "1|"), c = i.substring(0, i.length - 1), 
            this.cookieobject.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "galleryCount", c, "/", this.cookieobject.getCookieDomain("art"));
        }
    }
    this.myGalleryItemCount = parseInt(d);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getGalIDCountCookie = function(a) {
    var b = this.cookieobject.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "galleryCount");
    return "" != b && "~!undefined" != b ? b : 0;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getGalleryIDCountCookie = function(a) {
    var b = this.cookieobject.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "galleryCount"), c = b.indexOf("|"), d = "", e = "";
    if (0 > c) e = b.split("~!"), d = e[1]; else {
        e = b.split("|");
        for (var f = 0; f < e.length; f++) {
            var g = e[f].split("~!");
            a == g[0] && (d = g[1]);
        }
    }
    return void 0 == d || "undefined" == d || "~!undefined" == d ? 0 : d;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.resetGalleryIDCountCookie = function(a) {
    var b = this.cookieobject.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "galleryCount"), c = "", d = "", e = "", f = "";
    c = b.split("|");
    for (var g = 0; g < c.length; g++) {
        var h = c[g].split("~!");
        d = h[0], e = h[1], d = d.toLowerCase(), a = a.toLowerCase(), a == d && (e = 0), 
        f += d + this.GalleryNamecookieCountValueSeparator + e + "|";
    }
    f = f.substring(0, f.length - 1), this.cookieobject.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "galleryCount", f, "/", this.cookieobject.getCookieDomain("art"));
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setOneClickAddToGalleryEnabled = function(a) {
    if ("string" == typeof a) throw new Error("ApplicationProxy.setOneClickAddToGalleryEnabled failed! Invalid input.");
    if ("number" == typeof a) throw new Error("ApplicationProxy.setOneClickAddToGalleryEnabled failed! Invalid input.");
    var b = 1 == a ? "1" : "0";
    this.cookieobject.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, this.oneClickCookie, b, "/", this.cookieobject.getCookieDomain("art"));
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setLoginUserNameCookie = function(a) {
    this.cookieobject.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "loginusername", a, "/", this.cookieobject.getCookieDomain("art"));
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getLoginUserNameCookie = function() {
    var a = this.cookieobject.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "loginusername");
    return a;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getIfLoggedInCookie = function() {
    var a = this.cookieobject.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "loggedin");
    return "-1" != a && "" != a ? !0 : !1;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getIfLoggedInCookieNew = function() {
    var a = this.cookieobject.getCookieDictionary("ap", "accounttype");
    return "2" == a || "3" == a ? !0 : "" == a || "1" == a ? !1 : !1;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getLastSelectedGalleryID = function() {
    var a = "";
    return a = this.cookieobject.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, this.GalleryIDCookie);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setLastSelectedGalleryID = function(a) {
    this.cookieobject.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, this.GalleryIDCookie, a, "/", this.cookieobject.getCookieDomain("art"));
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setLastSelectedGalleryName = function(a) {
    this.cookieobject.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, this.LastGalleryNameCookie, a, "/", this.cookieobject.getCookieDomain("art"));
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.resetLastSelectedGalleryName = function(a) {
    this.cookieobject.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "galleryKey", a, "/", this.cookieobject.getCookieDomain("art"));
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setLastSelectedGalleryKey = function(a) {
    this.cookieobject.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "galleryKey", a, "/", this.cookieobject.getCookieDomain("art"));
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getLastSelectedGalleryKey = function() {
    return this.cookieobject.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "galleryKey");
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getLastSelectedGalleryName = function() {
    var a = this.cookieobject.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "galleryid"), b = "";
    return a.length > 0 && (b = void 0 != this.cacheByGalleryList[a] ? this.cacheByGalleryList[a].Name : this.cookieobject.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "galleryKey")), 
    b = b.replace(/-/g, " ");
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getSelectedGalleryClone = function() {
    var a = {}, b = this.getSelectedGallery();
    for (var c in b) a[c] = b[c];
    return a;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.galleyNameIsAvailable = function(a, b) {
    for (var c = 0; c < this.galleryList.length; c++) if (this.galleryList[c].Name == a && b != this.galleryList[c].GalleryId) return !1;
    return !0;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setSelectedGalleryTitle = function(a) {
    this.cacheByGalleryList[this.environmentSub.selectedGalleryID].Name = $.trim(a);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setSelectedGalleryDesc = function(a) {
    this.cacheByGalleryList[this.environmentSub.selectedGalleryID].LongDescription = $.trim(a);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setSelectedGalleryPrivacy = function(a) {
    this.cacheByGalleryList[this.environmentSub.selectedGalleryID].GalleryVisibility = a;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setCreateGallery = function() {
    return void 0 == this.galleryTemplate.GalleryVisibility && (this.galleryTemplate.GalleryVisibility = 1), 
    "Enter a description (optional)" == this.galleryTemplate.LongDescription && (this.galleryTemplate.LongDescription = ""), 
    this.galleryTemplate;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setAddedGalleryTitle = function(a) {
    var a = encodeURIComponent($.trim(a));
    this.galleryTemplate.Name = escape(a);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setAddedGalleryDesc = function(a) {
    var a = encodeURIComponent($.trim(a));
    this.galleryTemplate.LongDescription = escape(a);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setAddedGalleryPrivacy = function(a) {
    this.galleryTemplate.GalleryVisibility = a;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setAddedBannerUrl = function(a) {
    var a = encodeURIComponent($.trim(a));
    this.galleryTemplate.GalleryImage.LargeImage.HttpImageURL = escape(a);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getImagesPerPage = function() {
    return this.imagesPerPage;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getSelectedMethodName = function() {
    return "SomeService";
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.galleryListIsCached = function() {
    return this.galleryListIsCachedFlag;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setGalleryList = function(a) {
    this.galleryList = a, this.flattenGalleryList(a);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.flattenGalleryList = function(a) {
    for (var b = 0; b < a.length; b++) this.cacheByGalleryList[a[b].GalleryId] = a[b];
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setGalleryListForWebUser = function(a) {
    this.galleryListForWebUser = a, this.flattenGalleryListForWebUser(a);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.flattenGalleryListForWebUser = function(a) {
    for (var b = 0; b < a.length; b++) this.cacheByGalleryListForWebUser[a[b].GalleryId] = a[b];
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.flattenGalleryItemDetailsNext = function(a) {
    if (null != this.cacheByGalleryItemList) {
        var b = 0;
        for (var c in this.cacheByGalleryItemList) b++;
        for (var d = b + a.length, e = b - 1, f = e; d > f; f++) {
            var g = f - e;
            null != a[g] && null != a[g].ItemDetails && (this.orderObject.push(a[g].ItemGalleryItemID), 
            this.cacheByGalleryItemList[a[g].ItemGalleryItemID] = a[g]);
        }
    }
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.flattenGalleryItemDetails = function(a) {
    if (this.orderObject = [], this.cacheByGalleryItemList = {}, this.environmentSub.isMyGalleryPage && "" != mygalPageInfo.wallItemsViewLink) for (var b = 0; b < a.length; b++) null != a[b] && null != a[b].Item && (this.orderObject.push(a[b].Item.ItemGalleryItemID), 
    this.cacheByGalleryItemList[a[b].Item.ItemGalleryItemID] = a[b].Item); else for (var b = 0; b < a.length; b++) null != a[b] && null != a[b].ItemDetails && (this.orderObject.push(a[b].ItemGalleryItemID), 
    this.cacheByGalleryItemList[a[b].ItemGalleryItemID] = a[b]);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getGalleryByGalleryId = function(a) {
    return {
        GalleryData: this.cacheByGalleryList[a]
    };
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getGalleryItemByGalleryId = function(a, b) {
    var c = void 0 != b ? this.orderObject[b] : a;
    return {
        GalleryItemData: this.convertToGalleryItemVO(this.cacheByGalleryItemList[c])
    };
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.convertToGalleryItemVO = function(a) {
    return new com.art.myGalleries.vos.GalleryItemVO(a);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getGalleryList = function(a) {
    for (var b = [], c = (a - 1) * this.galleryPerPage, d = 0; d < this.galleryPerPage; d++) void 0 != this.galleryList[c] ? b.push(this.galleryList[c]) : b.push({
        placeholder: !0,
        imageUrl: "http://spacer.gif"
    }), c++;
    return b;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getGalleryListForSlideShow = function(a, b, c) {
    for (var d = [], e = this.getGalleryItemList(), f = 0; f < e.length; f++) if (null != e[f].ItemDetails) {
        var g = new com.art.myGalleries.vos.GalleryItemVO(e[f]), h = e[f].ItemDetails.ImageInformation.CroppedSquareImage.HttpImageURL || e[f].ItemDetails.ImageInformation.LargeImage.HttpImageURL;
        if (null != h) {
            var i = com.art.core.utils.BrowserUtil.getCroppedImageUrl(h, a, b, c);
            d.push({
                apnum: e[f].ItemDetails.APNum,
                url: i,
                price: g.Price,
                showMarkDownPrice: g.ShowMarkDownPrice,
                DisplayMSRP: g.DisplayMSRP,
                ItemStatus: g.ItemStatus
            });
        }
    }
    return d;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.galleryItemsCached = function() {
    return void 0 != this.galleryItemList[this.galleryItemPageNumber];
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getBackgroundColorsForDLE = function() {
    for (var a = [], b = this.getBackgroundColors(), c = 0; c < b.length; c++) a.push({
        id: "hex_" + b[c],
        url: null,
        emptyWallFlag: !0,
        bgcolor: "0x" + b[c],
        hexAsString: b[c]
    });
    return a;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getBackgroundColors = function() {
    return [ "ffe3e4", "fff4d6", "fff7d0", "efede7", "ebf0e4", "edf7fa", "fcfaec", "e2c7c7", "f0debd", "eee7c3", "d4d0c2", "ced7d3", "cfd9dd", "d6d7d3", "9f6d73", "e4bd8b", "decfad", "bdb1a5", "94a6a1", "b3c4ce", "868f94", "733b4b", "ca9153", "907761", "847467", "526965", "607d90", "4c545b", "84303d", "8b4a26", "584035", "584d43", "364643", "31343a", "FFFFFF" ];
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setGalleryItems = function(a, b) {
    b || ("" != mygalPageInfo.wallItemsViewLink ? this.galleryItemList = this.movePropertiesOneLevelUp(a) : this.galleryItemList = a), 
    this.flattenGalleryItemDetails(a);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getGalleryItemList = function(a) {
    return this.galleryItemList;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setGalleries = function(a) {
    this.galleryList = a, this.flattenGalleryList(a);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getAccessKeyObjectAsString = function() {
    var a = new com.art.core.cookie.Cookie(), b = a.cookieGetStateData(), c = "accessKey=" + JSON.stringify({
        apikey: this.environment.apiKey,
        authToken: b.authToken,
        sessionId: this.environment.sessionId
    });
    return c;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getUserProfileObjectAsString = function() {
    var a = this.environment.domain;
    a = "undefined" != typeof $serverSideConfig && "undefined" != typeof $serverSideConfig.domain ? $serverSideConfig.domain : com.art.core.utils.ArtServer.prototype.GetDomainNameWithoutSub();
    var b = "userProfile=" + JSON.stringify({
        ClientIpAddress: this.environment.clientIpAddress,
        ISOCurrencyCode: this.ISOCurrencyENUM[this.environment.currencyCode],
        CustomerZoneId: this.environment.customerZoneId,
        ISOLanguageCode: this.ISOLangaugeENUM[this.environment.languageIso.toUpperCase()],
        Domain: a
    });
    return b;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getGallerySortObjectAsString = function() {
    var a = "gallerySortOption=" + JSON.stringify({
        DefaultSort: this.environment.galleryDefaultSort,
        SortBy: this.gallerySortBy,
        SortDirection: this.gallerySortDirection
    });
    return a;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getGraphInfoObjectAsString = function() {
    var a = "", b = "";
    a = this.environmentSub.selectedGalleryID, a.length > 0 && this.cacheByGalleryList[a] && (b = this.cacheByGalleryList[a].GalleryId);
    var c = "";
    c = "GalleryId", "undefined" != typeof mygalPageInfo && mygalPageInfo.UserView == MyGalleriesCore.constants.ROOMPAGE && (c = "WallId", 
    b = mygalPageInfo.BookmarkingWallId);
    var d;
    d = "WallId" == c ? {
        RelationshipChangeAction: "placeholder1",
        UserRelationshipData: {
            UserRelationshipType: "placeholder2",
            UserRelationshipActivities: [ {
                WallId: b,
                Note: "url:urlplaceholder~commenttext:commentplaceholder"
            } ]
        }
    } : {
        RelationshipChangeAction: "placeholder1",
        UserRelationshipData: {
            UserRelationshipType: "placeholder2",
            UserRelationshipActivities: [ {
                GalleryId: b,
                Note: "url:urlplaceholder~commenttext:commentplaceholder"
            } ]
        }
    };
    var e = "request=" + JSON.stringify(d);
    return e;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getBookmarkObjectAsString = function() {
    var a;
    a = {
        RelationshipChangeAction: "placeholder1",
        UserRelationshipData: {
            UserRelationshipType: "placeholder2",
            UserRelationshipActivities: [ {
                GalleryId: "placeholder3"
            } ]
        }
    };
    var b = "request=" + JSON.stringify(a);
    return b;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getFollowsObjectAsString = function() {
    var a;
    a = {
        RelationshipChangeAction: "placeholder1",
        UserRelationshipData: {
            UserRelationshipType: "placeholder2",
            UserRelationshipActivities: [ {
                UserId: "placeholder3"
            } ]
        }
    };
    var b = "request=" + JSON.stringify(a);
    return b;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setPagingOptionsAllItems = function(a) {
    a ? this.getAllItemsFlag = !0 : this.getAllItemsFlag = !1;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getGalleryPagingOptionObjectAsString = function() {
    var a = "pagingOptions=" + JSON.stringify({
        AllItems: this.getAllItemsFlag,
        ItemsPerPage: this.galleryItemPerPage,
        PageNumber: this.galleryItemPageNumber,
        TotalPages: 0
    });
    return a;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getMoveOptions = function() {
    return "moveOptions=" + this.environment.moveOption;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getCopyOptions = function() {
    return "moveOptions=0";
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getNewItemToGalleryFromFramingStudio = function() {
    var a, b = {};
    return b = this.galleryItemTemplate, b.AccountId = 1, b.Imageid = this.getFramingStudioResponseObject().Imageid, 
    b.ItemGroupType = 1, b.GalleryItemSource = 0, b.APNum = this.getFramingStudioResponseObject().APNum, 
    b.FrameSku = this.getFramingStudioResponseObject().FrameSku, b.AvailableInOtherSizes = "True" == this.getFramingStudioResponseObject().AvailableInOtherSizes ? !0 : !1, 
    b.ItemDisplayTypeID = this.getFramingStudioResponseObject().ItemDisplayedTypeID, 
    b.Item.ArtistId = this.getFramingStudioResponseObject().ArtistId, b.Item.ArtistName = "", 
    b.Item.ItemId = 0, b.Item.Title = "", a = "", b.PODConfigID = this.getFramingStudioResponseObject().PODConfigID, 
    b.Source = 0, b;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getNewItemToGallery = function() {
    var a = {};
    a = this.galleryItemTemplate, a.AccountId = 1, a.Imageid = this.selectedImageObject.Imageid, 
    a.ItemGroupType = 1, a.GalleryItemSource = 0, a.APNum = this.selectedImageObject.APNum, 
    this.selectedImageObject.FrameSku && (a.FrameSku = this.selectedImageObject.FrameSku);
    var b = !1;
    return (1 == this.selectedImageObject.AvailableInOtherSizes || "true" == this.selectedImageObject.AvailableInOtherSizes || "True" == this.selectedImageObject.AvailableInOtherSizes) && (b = !0), 
    a.AvailableInOtherSizes = b, a.ItemDisplayTypeID = this.selectedImageObject.ItemDisplayTypeID, 
    a.Item.ArtistId = this.selectedImageObject.ArtistId, a.Item.ArtistName = "", a.Item.ItemId = 0, 
    a.Item.Title = "", a.ItemURL = "", a.PODConfigID = this.selectedImageObject.PODConfigID, 
    a.Source = this.selectedImageObject.Source, a.SpecialHandlingID = this.selectedImageObject.SpecialHandlingID, 
    void 0 != this.selectedImageObject.UPI && "" != this.selectedImageObject.UPI && (a.UPI = this.selectedImageObject.UPI), 
    a;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getExisitngItemToGallery = function(a) {
    var b = {};
    if (a) {
        b = this.galleryItemTemplate, b.AccountId = 1, b.APNum = this.cacheByGalleryItemList[this.getSelectedGridItem()].APNum, 
        b.Name = this.cacheByGalleryItemList[this.getSelectedGridItem()].Name, b.Imageid = this.cacheByGalleryItemList[this.getSelectedGridItem()].Imageid, 
        b.ItemText = this.cacheByGalleryItemList[this.getSelectedGridItem()].ItemText, b.ItemGroupType = this.cacheByGalleryItemList[this.getSelectedGridItem()].ItemGroupType, 
        b.ItemData = this.cacheByGalleryItemList[this.getSelectedGridItem()].ItemData, b.ItemKey = this.cacheByGalleryItemList[this.getSelectedGridItem()].ItemKey, 
        b.GalleryItemSource = this.cacheByGalleryItemList[this.getSelectedGridItem()].GalleryItemSource, 
        b.ItemGalleryItemID = this.cacheByGalleryItemList[this.getSelectedGridItem()].ItemGalleryItemID;
        var c = !1;
        (1 == this.selectedImageObject.AvailableInOtherSizes || "true" == this.selectedImageObject.AvailableInOtherSizes || "True" == this.selectedImageObject.AvailableInOtherSizes) && (c = !0), 
        b.AvailableInOtherSizes = c, b.ItemURL = "", b.Item.ArtistId = this.cacheByGalleryItemList[this.getSelectedGridItem()].Item.ArtistId, 
        b.Item.ArtistName = "", b.Item.ItemId = this.cacheByGalleryItemList[this.getSelectedGridItem()].Item.ItemId, 
        b.Item.Title = "", b.Source = this.cacheByGalleryItemList[this.getSelectedGridItem()].Item.Source, 
        b.SpecialHandlingID = this.cacheByGalleryItemList[this.getSelectedGridItem()].SpecialHandlingID, 
        void 0 != this.selectedImageObject.UPI && "" != this.selectedImageObject.UPI && (b.UPI = this.selectedImageObject.UPI);
    } else b = this.galleryTemplate, b = this.cacheByGalleryList[this.getDestinationSelectedGalleryId()];
    return b;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getSelectedGridItem = function() {
    return this.selectedItemId;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setSelectedGridItem = function(a) {
    this.selectedItemId = a;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getDestinationSelectedGalleryId = function() {
    return this.selectedGalleryId;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setDestinationSelectedGalleryId = function(a) {
    this.selectedGalleryId = a;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setStreamObject = function(a) {
    this.galleryTemplate.StreamConfiguration = a, this.galleryTemplate.GalleryType = 1;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.movePropertiesOneLevelUp = function(a) {
    for (var b = [], c = 0; c < a.length; c++) null != a[c].Item && b.push(a[c].Item);
    return b;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getProductPageUrl = function(a) {
    var b = "", c = this.cacheByGalleryItemList[a], d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "", l = this.environment.sessionId, m = "", n = "", o = "";
    if (g = void 0 != c.PODConfigID && c.PODConfigID > 0 ? c.PODConfigID : 0, i = void 0 != c.FrameSku && "" != c.FrameSku ? "&mg" : "?mg", 
    void 0 != c.SpecialHandlingID && c.SpecialHandlingID > 0 && 1 != c.SpecialHandlingID && !MyGalleriesCore.isa3sProductServiceUrlsUse()) {
        var p = c.ItemDetails.Sku, q = p.substring(0, p.length - 1), r = p.substring(p.length - 1, p.length).toLowerCase(), s = "";
        2 == c.SpecialHandlingID ? s = 1 : 6 == c.SpecialHandlingID ? s = 2 : 4 == c.SpecialHandlingID && (s = 3), 
        d = "asp/mountshop/default.asp/_/mt--" + s + "/pd--" + q + "/sp--" + r + "/posters.htm?PODConfigID=" + g + "&ui=" + l, 
        g = "", i = "&mg";
    } else {
        var t = c.ItemDetails.AdditonalUrls.ProductPageUrl;
        i = t.indexOf("?") > -1 ? "&mg" : "?mg", d = "/" == t.substring(0, 1) ? t.substring(1, t.length) : c.ItemDetails.AdditonalUrls.ProductPageUrl, 
        g = "&PODConfigID=" + g;
    }
    var u = this.environmentSub.selectedGalleryID;
    if (void 0 != u && "" != u && (e = "gid=" + u, k = this.cacheByGalleryList[u].Name), 
    void 0 != a && "" != a && (f = "&itemid=" + a), void 0 != c.ItemDetails.ItemStatus && "" != c.ItemDetails.ItemStatus && (j = "&oos=" + c.ItemDetails.ItemStatus), 
    void 0 != c.APNum && "" != c.APNum && (h = "&apnum=" + c.APNum), m = "http://" + window.location.hostname + "/me/" + this.environmentSub.profileKey + "/gallery/", 
    n = "http://" + window.location.hostname + "/me/" + this.environmentSub.profileKey + "/gallery/" + this.environmentSub.galleryKey + "/?vt=gv", 
    void 0 != mygalPageInfo && mygalPageInfo.RightNavThem ? "room" == mygalPageInfo.UserView ? (e = "", 
    k = mygalPageInfo.wallItemsTitle, n = mygalPageInfo.wallItemsViewLink, m = "http://" + window.location.hostname + "/me/" + this.environmentSub.profileKey + "/room/", 
    i += "=rv&", b = "http://" + location.host + "/" + d + i + f + h + g + j) : (i += "=n&", 
    b = "http://" + location.host + "/" + d + i + e + f + h + g + j) : void 0 != mygalPageInfo && "room" == mygalPageInfo.UserView ? (e = "", 
    k = mygalPageInfo.wallItemsTitle, n = mygalPageInfo.wallItemsViewLink, m = "http://" + window.location.hostname + "/me/" + this.environmentSub.profileKey + "/room/", 
    i += "=rv&", b = "http://" + location.host + "/" + d + i + f + h + g + j) : (i += "=y&", 
    b = "http://" + location.host + "/" + d + i + e + f + h + g + j), void 0 != mygalPageInfo) {
        var v = this.cookieobject.getCookieDictionary("ap", "accountid").length;
        v > 0 && !mygalPageInfo.RightNavThem && mygalPageInfo.profileInfoExists ? o = mygalPageInfo.profileNickName : v > 0 && mygalPageInfo.RightNavThem && mygalPageInfo.profileInfoExists ? o = mygalPageInfo.profileNickName : v > 0 && !mygalPageInfo.RightNavThem && !mygalPageInfo.profileInfoExists ? o = location.hostname.indexOf(".allposters.") > -1 ? MyGalleriesCore.getKeyString("myGalleryKey") : MyGalleriesCore.getString(MyGalleriesCore.constants.YOUPLUSARTLABEL) : v > 0 && mygalPageInfo.RightNavThem && !mygalPageInfo.profileInfoExists ? o = MyGalleriesCore.getString("Art Lover") : 0 != v || mygalPageInfo.RightNavThem || mygalPageInfo.profileInfoExists ? 0 == v && mygalPageInfo.RightNavThem && mygalPageInfo.profileInfoExists ? o = mygalPageInfo.profileNickName : 0 == v && mygalPageInfo.RightNavThem && !mygalPageInfo.profileInfoExists && (o = MyGalleriesCore.getString("Art Lover")) : o = location.hostname.indexOf(".allposters.") > -1 ? MyGalleriesCore.getKeyString("myGalleryKey") : MyGalleriesCore.getString(MyGalleriesCore.constants.YOUPLUSARTLABEL);
    }
    var w = {
        gid: u,
        itemid: a,
        title: k,
        galleryNameUrl: n,
        uname: o,
        galleryUrl: m
    };
    return MyGalleriesCore.getModel().setMyGalObjectVal(w), b;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setGalleryKey = function(a) {
    this.galleryKey = this.cacheByGalleryList[a].ItemKey;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getGalleryKey = function() {
    var a = "";
    return a = this.savetogalleryoption ? this.environmentSub.galleryKey : this.galleryKey;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setMyGalObjectVal = function(a) {
    store.set("MyGalObject", a);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getMyGalObjectVal = function() {
    var a = store.get("MyGalObject"), b = "", c = "", d = "", e = "", f = "", g = "";
    return void 0 != a && (b = a.gid, c = a.itemid, d = a.title, e = a.galleryNameUrl, 
    f = a.uname, g = a.galleryUrl), {
        gid: b,
        itemid: c,
        title: d,
        galleryNameUrl: e,
        uname: f,
        galleryUrl: g
    };
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.setProfileKey = function() {
    if (this.cookieobject.getCookieDictionary("ap", "accounttype") != MyGalleriesCore.constants.ANONYMOUS) {
        var a = this.cookieobject.getCookieDictionary("ap", "profileURL");
        "" != a && (a = a.replace("/me/", ""), this.environmentSub.profileKey = a.substring(0, a.length - 1));
    } else "" != this.cookieobject.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "profileKey") && (this.environmentSub.profileKey = this.cookieobject.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "profileKey"));
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getButtonTextForNewGallery = function() {
    var a = MyGalleriesCore.getKeyString("saveToGalleryKey");
    return this.savetogalleryoption || (a = "MOVE" == this.copyormovetogalleryoption ? MyGalleriesCore.getKeyString("moveToGalleryKey") : MyGalleriesCore.getKeyString("copyToGalleryKey")), 
    a;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.loadGigyaComments = function(a) {
    this.gigyaObj = new com.art.core.utils.Gigya(new com.art.core.services.ServiceProvider(MyGalleriesCore.getEnvironment()), "gigya", "", MyGalleriesCore.getEnvironment().apiKey, MyGalleriesCore.getEnvironment().sessionId);
    var b = MyGalleriesCore.getModel().environmentSub.selectedGalleryID, c = MyGalleriesCore.getModel().cookieobject.getCookieDictionary("ap", "accountid"), d = "Gallery Comments", e = a, f = "facebook", g = $("#MyGalleriesMainBody #itemsDisplay").length > 0 ? $("#itemsDisplay").width() : 792, h = MyGalleriesCore.getModel().getAccessKeyObjectAsString() + "&" + MyGalleriesCore.getModel().getGraphInfoObjectAsString();
    mygalPageInfo.UserView == MyGalleriesCore.constants.ROOMPAGE && (d = "Room Comments", 
    b = mygalPageInfo.BookmarkingWallId), this.gigyaObj.showCommentsUI(b, d, e, f, g, c, !0, h, MyGalleriesCore.getEnvironment().authToken);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.loadGigyaSharebar = function(a) {
    var b, c;
    this.gigyaObj = new com.art.core.utils.Gigya(new com.art.core.services.ServiceProvider(MyGalleriesCore.getEnvironment()), "gigya", "", MyGalleriesCore.getEnvironment().apiKey, MyGalleriesCore.getEnvironment().sessionId);
    var d = MyGalleriesCore.getModel().getAccessKeyObjectAsString() + "&" + MyGalleriesCore.getModel().getGraphInfoObjectAsString();
    if (mygalPageInfo.UserView == MyGalleriesCore.constants.ROOMPAGE || "" != com.art.core.utils.BrowserUtil.getQueryString("wid")) {
        var e = [ {
            provider: "pinterest-pinit",
            enableCount: "false"
        }, {
            provider: "google-plusone",
            enableCount: "true"
        }, {
            provider: "facebook-like"
        } ];
        b = e, this.gigyaObj.showShareBarUI(a, b, !0, d);
    } else {
        var f = [ {
            provider: "google-plusone",
            enableCount: "true"
        }, {
            provider: "facebook-like"
        } ];
        c = f, this.gigyaObj.showShareBarUI(a, c, !0, d);
    }
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getAddtoCartUrlForAjaxService = function(a, b, c, d, e) {
    var f = "";
    void 0 == d && (d = 0);
    var g;
    return "custom_none" != c || e ? c == MyGalleriesCore.constants.MOUNTED ? (g = "M", 
    f = "/gallery.asp?CID=" + b + "&Action=additem&apnum=" + a + "&S=" + g + "&PODConfigID=" + d + "&startat=viewcart.asp") : c == MyGalleriesCore.constants.LAMINATED ? (g = "L", 
    f = "/gallery.asp?CID=" + b + "&Action=additem&apnum=" + a + "&S=" + g + "&PODConfigID=" + d + "&startat=viewcart.asp") : c == MyGalleriesCore.constants.CANVAS ? (g = "C", 
    f = "/gallery.asp?CID=" + b + "&Action=additem&apnum=" + a + "&S=" + g + "&PODConfigID=" + d + "&startat=viewcart.asp") : f = e ? "/gallery.asp?CID=" + b + "&APNum=" + a + "&Action=AddItem&IID=&FID=&P=&PP=&f=&FindID=&SearchID=&startat=/viewCart_Frame.asp" : "/gallery.asp?CID=" + b + "&APNum=" + a + "&PODConfigID=" + d + "&Action=AddItem&startat=/viewCart_Frame.asp" : f = "/gallery.asp?CID=" + b + "&Action=AddItem&APNum=" + a + "&PODConfigID=" + d + "&IID=&FID=&P=&PP=&f=&FindID=&SearchID=&startat=/Viewcart_frame.asp", 
    info("proxyUrl for add to cart or value added helper page" + f), f;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.addToCart = function(a, b, c) {
    info("inside add to cart");
    var d = !1, e = !1;
    e = "true" == d ? !0 : !1;
    var f = null != c.frameConfigurationId && c.frameConfigurationId.trim().length > 0;
    f ? MyGalleriesCore.getModel().makeAjaxCallToAddToCartDFE(a, c.frameConfigurationId) : MyGalleriesCore.getModel().makeAjaxCallToAddToCart(a);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.makeAjaxCallToAddToCartDFE = function(a, b) {
    _this = this;
    var c;
    c = b ? b : MyGalleriesCore.getEnvironment().global_framesku;
    var d = "";
    info("aFrameSku=" + b), "" != b && (skuData = b.split("-"), lastIndex = skuData.length, 
    lastIndex > 0 && (d = skuData[lastIndex - 1], info("frameConfigId=" + d)));
    var e = MyGalleriesCore.getEnvironment().unitOfMeasure, f = MyGalleriesCore.getEnvironment().customerZoneId, g = MyGalleriesCore.getEnvironment().languageId, h = MyGalleriesCore.getEnvironment().currencyId, i = MyGalleriesCore.getEnvironment().currencyCode, j = "/ADC.NET/Root/Pages/Proxy/Master/ValueAddedServicesHelper.aspx?", k = MyGalleriesCore.getModel().buildAddToCartParams(a);
    k = k.replace("CID", "sessionId");
    var l = "&IsDFEAjax=Y&frameConfigurationId=" + c + "&unittoMeasure=" + e + "&CustomerzoneID=" + f + "&LanguageID=" + g + "&currencyID=" + h + "&currencyCode=" + i, m = j + k + l;
    info("The ajax url for value added service helper" + m), $.ajax({
        url: m,
        processData: !1,
        cache: !1,
        type: "GET",
        dataType: "text",
        success: function(b) {
            if (b.length > 0) {
                var c = b;
                destinationURL = a + "&S=F&FID=" + c, location.href = destinationURL;
            } else alert(k + "error: DFE ajax response OK, but no frameSku returned.");
        },
        error: function(a, b) {
            alert("error in ajax response"), alert(b);
        }
    });
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.makeAjaxCallToAddToCart = function(a) {
    var b = "/addToCart.asp?", c = MyGalleriesCore.getModel().buildAddToCartParams(a), d = b + c;
    info("final url for addtocart.asp" + d);
    var e = "/frameStep/?" + c, f = "";
    $.ajax({
        url: d,
        processData: !1,
        cache: !1,
        type: "GET",
        dataType: "text",
        success: function(b) {
            b.indexOf("added#") > -1 ? (theStatusSplit = b.split("#"), theCartCount = theStatusSplit[1], 
            f = theStatusSplit[2], cartImageFileName = theStatusSplit[3], e += "&cartCount=" + theCartCount, 
            $("#cartCountText").text(theCartCount), location.href = a) : info("error in ajax response.");
        },
        error: function(a, b) {
            alert("error in ajax response"), "True" == $("#isJCPenney").text() && (window.location.href = "/error.asp?errorcode=1001");
        }
    });
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.buildAddToCartParams = function(a) {
    var b = "", c = MyGalleriesCore.getModel().extractValueFromKey(a, "apnum"), d = MyGalleriesCore.getModel().extractValueFromKey(a, "s");
    b = "CID=" + MyGalleriesCore.getModel().extractValueFromKey(a, "cid") + "&apnum=" + c;
    var e = MyGalleriesCore.getModel().extractValueFromKey(a, "iid");
    "True" == $("#isJCPenney").text() && ("" == e && (e = $("#dIID").text()), b = b + "&EditRefPage=" + $("#dEditRefPage").text()), 
    b = b + "&IID=" + e;
    var f = MyGalleriesCore.getModel().extractValueFromKey(a, "podconfigid");
    return "" != d && (b = b + "&S=" + d), "" != f && (b = b + "&PODConfigID=" + f), 
    b;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.extractValueFromKey = function(a, b) {
    var c, d, e = "", f = a.toLowerCase();
    return theKeyString = b + "=", c = f.indexOf(theKeyString), c > -1 && (d = a.indexOf("&", c), 
    0 > d && (d = a.length), e = a.substring(c, d), e = e.substring(b.length + 1, e.length)), 
    e;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.EventRecordCall = function(a) {
    var b = new com.art.core.services.ServiceProvider(MyGalleriesCore.getEnvironment()), c = b.createHandlers(function() {}, function() {}, function() {}), d = JSON.stringify(a), e = "objData=" + d;
    trace(e), b.ProcessEventAPI.EventRecordMessage(c, e);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getCartInfo = function(a) {
    var b = "", c = "", d = window.location.hostname;
    if (null != a && a.length > 0) for (var e = 0; e < a.length; e++) {
        var f = a[e];
        d.indexOf(f.domain.toLowerCase()) > -1 && (b = f.cartKey, c = f.CartItemsCount);
    }
    return {
        cartKey: b,
        cartCount: c
    };
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.updateCartCookie = function(a) {
    var b, c = window.location.hostname;
    switch (!0) {
      case c.indexOf("allposters") > -1:
        b = "allposters";
        break;

      case c.indexOf("art") > -1:
        b = "art";
        break;

      default:
        b = "art";
    }
    var d = new com.art.core.cookie.Cookie();
    d.setCookieDictionary("ap", "cartkey", a.cartKey, "/", d.getCookieDomain(b));
    var e = a.cartCount || 0, f = new Date();
    f.setDate(f.getDate() + 730), d.setCookieDictionary("ap", "ct", e, "/", d.getCookieDomain(b), f);
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.UpdateItemToDefaultGallery = function(a) {
    var b = "", c = "", d = !1;
    void 0 != a && (d = a);
    var e = {};
    e = MyGalleriesEnvironmentVariablesDynamic.isMyGalleryPage ? MyGalleriesCore.getModel().galleryListForWebUser : MyGalleriesCore.getModel().galleryList, 
    1 == e.length && e[0].Name == MyGalleriesCore.getKeyString("galleries") ? (MyGalleriesCore.getModel().environmentSub.selectedGalleryID = e[0].GalleryId, 
    c = e[0].GalleryId, b = e[0].Name, "" != b && "" != c && MyGalleriesCore.getModel().savetogalleryoption && MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.ADD_ITEM_TO_EXISTING_GALLERY, c, {
        fromLoginExternalModule: d
    }))) : 1 == e.length && e[0].Name != MyGalleriesCore.getKeyString("galleries") && MyGalleriesCore.getModel().createDefaultGallery();
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.createDefaultGallery = function() {
    MyGalleriesCore.getModel().setAddedGalleryTitle(MyGalleriesCore.getKeyString("galleries")), 
    MyGalleriesCore.getModel().savetogalleryoption && MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.ADD_ITEM_TO_NEW_GALLERY, {}, {
        fromLoginExternalModule: !0
    }));
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.updateMigrationCount = function() {
    this.migratedItemCount += 1;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.getMigrationCount = function() {
    return this.migratedItemCount;
}, com.art.myGalleries.proxies.ApplicationProxy.prototype.clearMigrationCount = function() {
    this.migratedItemCount = 0;
}, com.art.myGalleries.proxies.UserLibraryProxy = function(a, b) {
    this.NAME = com.art.myGalleries.proxies.UserLibraryProxy.NAME, this.systemLibraryObject, 
    this.userLibraryObject, this.wallsObject = [], this.savedWallsObject = [], this.selectedWallGalleryName = "LivingRoom", 
    this.selectedWallGalleryIndex = 1, this.selectedWallName = "LivingRoom_04", this.totalItemsOnWall = 0, 
    this.userBareWallNamePrefix = "UserBareWall_", this.wallItemsMap = {}, this.selectedWallObject, 
    this.EMPTY_WALL_DELIMITER = com.art.myGalleries.proxies.UserLibraryProxy.EMPTY_WALL_DELIMITER, 
    this.baseUrl = "http://cache1.allpostersimages.com/", this.baseUrlUserWalls = "http://cache2.artprintimages.com", 
    this.flattenedWallItemsByWallId = {}, this.tempWallItems = {}, this.flattenedWallsByName = {}, 
    this.userLibraryObject, this.roomsCollection = [], this.selectedSharedBareWallIndex = 0, 
    this.checkBoxMap = {}, this.RHVerticalTray, this.selectedSharedWallObject, this.sharedWallId, 
    this.sharedEmptyRoomHexColor = "", this.lastUpdatedWallObject, this.updateWalls = !1, 
    this.initialLoadComplete = !1, this.RETRIEVE_ALL_WALLS = com.art.myGalleries.proxies.UserLibraryProxy.RETRIEVE_ALL_WALLS, 
    this.savedWallId;
}, com.art.myGalleries.proxies.UserLibraryProxy.NAME = "UserLibraryProxy", com.art.myGalleries.proxies.UserLibraryProxy.RETRIEVE_ALL_WALLS = "UserLibraryProxyRetrieveAllWalls", 
com.art.myGalleries.proxies.UserLibraryProxy.EMPTY_WALL_DELIMITER = "@@@", com.art.myGalleries.proxies.UserLibraryProxy.prototype.getCheckBoxByItemGalleryItemID = function(a) {
    for (var b in this.checkBoxMap) if (this.checkBoxMap[b].value.ItemGalleryItemID == a) return this.checkBoxMap[b];
    throw new Error("UserLibraryProxy.getCheckBoxByItemGalleryItemID failed! No checkbox found by id: " + a + ".");
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getSelectedWallGAEventName = function(a) {
    var a = void 0 != a ? a : this.selectedWallName, b = "Choose Public Wall";
    return (a.indexOf(com.art.myGalleries.proxies.UserLibraryProxy.EMPTY_WALL_DELIMITER) > -1 || a.indexOf("hex") > -1) && (b = "Choose Bare Wall"), 
    (a.indexOf("myWallsBrowseBtn") > -1 || a.indexOf(this.userBareWallNamePrefix) > -1) && (b = "Choose Personal Room"), 
    b;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.flatten = function(a) {
    this.flattenWallItems(a), this.flattenWallsByName(a);
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.flattenWallItems = function(a) {
    for (var b = 0; b < a.length; b++) {
        var c = a[b];
        this.flattenedWallItemsByWallId[c.WallId] = {};
        for (var d = 0; d < c.WallItems.length; d++) {
            var e = c.WallItems[d];
            this.flattenedWallItemsByWallId[c.WallId][e.Item.ItemGalleryItemID] = e;
        }
    }
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.flattenWallsByName = function(a) {
    for (var b = 0; b < a.length; b++) {
        var c = a[b], d = c.WallDetails.Name;
        ("" == d || void 0 != c.WallDetails.RulerX1 && d.indexOf(this.userBareWallNamePrefix) < 0) && (d = this.userBareWallNamePrefix + c.WallDetails.BareWallId), 
        this.flattenedWallsByName[d] = c;
    }
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.setUserLibrary = function(a) {
    this.userLibraryObject = a;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getUserLibrary = function() {
    return this.userLibraryObject;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.updateItemPosition = function(a, b) {}, 
com.art.myGalleries.proxies.UserLibraryProxy.prototype.getUserBareWalls = function() {
    if (void 0 == this.userLibraryObject) return [];
    var a = [];
    if (0 == this.userLibraryObject.BareWallGalleries.length) return a;
    for (var b = this.userLibraryObject.BareWallGalleries[0].BareWalls, c = 0; c < b.length; c++) {
        var d = b[c], e = "" == d.Name ? this.userBareWallNamePrefix + d.BareWallId : d.Name;
        d.Name = e, a.push({
            id: e,
            url: d.ImageInformation.ThumbnailImage.HttpImageURL
        });
    }
    return a;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getSelectedPersonalBareWallWithUpdates = function(a) {
    for (var b = this.userLibraryObject.BareWallGalleries[0].BareWalls, c = {}, d = 0; d < b.length; d++) if (b[d].Name == this.selectedWallName) {
        for (var e in b[d]) c[e] = b[d][e];
        c.InchesConversionRate = a.inchesConversionRate, c.ProductTargetAreaPosX = a.productTargetAreaPosX, 
        c.ProductTargetAreaPosY = a.productTargetAreaPosY, c.RulerLength = a.rulerLength, 
        c.RulerX1 = a.rulerX1, c.RulerX2 = a.rulerX2, c.RulerY1 = a.rulerY1, c.RulerY2 = a.rulerY2, 
        delete c.__type, delete c.ImageInformation;
    }
    if (void 0 == c.InchesConversionRate) throw new Error("UserLibraryProxy.getSelectedPersonalBareWallWithUpdates failed! currentPersonalBareWall not set.");
    return c;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.refreshUserBareWalls = function(a) {
    this.userLibraryObject.BareWallGalleries[0] = a;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.setSystemLibrary = function(a) {
    this.systemLibraryObject = a;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getSystemLibrary = function(a) {
    return this.systemLibraryObject;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.setSelectedWallGalleryIndexAndName = function(a) {
    this.selectedWallGalleryName = a.indexOf(this.EMPTY_WALL_DELIMITER) > -1 ? a.split(this.EMPTY_WALL_DELIMITER)[1] : a;
    for (var b = this.systemLibraryObject.BareWallGalleries, c = a.indexOf(this.EMPTY_WALL_DELIMITER) > -1 ? a.split(this.EMPTY_WALL_DELIMITER)[0] : a, d = 0; d < b.length; d++) if (b[d].Name == c) return void (this.selectedWallGalleryIndex = d);
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getThumbnailImageUrls = function(a, b, c, d, e) {
    for (var f = this.systemLibraryObject.BareWallGalleries, g = [], h = f[this.selectedWallGalleryIndex].BareWalls, i = 0; i < h.length; i++) {
        var j = h[i], k = this.baseUrl + j.ImageInformation.ThumbnailImage.HttpImageURL;
        g.push({
            id: j.Name,
            url: k
        });
    }
    return g;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getImageObject = function(a) {
    if (a.indexOf(this.userBareWallNamePrefix) > -1) return this.getUserImageObject(a);
    var b = a.indexOf("hex") > -1;
    if (null == this.selectedWallGalleryName || null == this.selectedWallGalleryIndex) throw new Error("UserLibraryProxy.getImageObject failure! Selected wall gallery and/or selected wall gallery index not set.");
    for (var c = {}, d = this.systemLibraryObject.BareWallGalleries[this.selectedWallGalleryIndex].BareWalls, e = 0; e < d.length; e++) {
        if (a = b ? this.selectedWallGalleryName : a, d[e].Name == a) return c = d[e], c.url = null == d[e].ImageInformation ? null : this.baseUrl + d[e].ImageInformation.LargeImage.HttpImageURL, 
        c.thumbUrl = null == d[e].ImageInformation ? null : this.baseUrl + d[e].ImageInformation.ThumbnailImage.HttpImageURL, 
        this.selectedWallObject = c, c;
        if (a.indexOf("hex") > -1) return {};
    }
    throw new Error("UserLibraryProxy.getImageObject failure! no Wall Object found.");
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getUserImageObject = function(a) {
    for (var b = {}, c = 0; c < this.userLibraryObject.BareWallGalleries[0].BareWalls.length; c++) {
        var d = this.userLibraryObject.BareWallGalleries[0].BareWalls[c];
        if (d.Name == a) return b = d, b.url = d.ImageInformation.LargeImage.HttpImageURL, 
        b.thumbUrl = d.ImageInformation.ThumbnailImage.HttpImageURL, this.selectedWallObject = b, 
        b;
    }
    throw new Error("UserLibraryProxy.getUserImageObject failure! no User Wall Object found.");
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getSelectedWallId = function() {
    if (void 0 == this.selectedWallName) throw new Error("UserLibraryProxy.UserLibraryProxy failed! selectedWallName is undefined.");
    var a = this.selectedWallName.indexOf("hex") > -1 ? this.selectedWallGalleryName : this.selectedWallName;
    if (void 0 == this.flattenedWallsByName[a]) return -1;
    var b = this.flattenedWallsByName[a].WallId;
    return b;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getPositionData = function(a, b) {
    var c = this.getSelectedWallId();
    return -1 != c || b ? this.flattenedWallItemsByWallId[c][a] : this.tempWallItems[a];
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.wallItemExists = function(a, b) {
    var c = this.getSelectedWallId();
    return -1 != c || b ? c && this.flattenedWallItemsByWallId && this.flattenedWallItemsByWallId[c] && this.flattenedWallItemsByWallId[c][a] ? void 0 != this.flattenedWallItemsByWallId[c][a] : !1 : void 0 != this.tempWallItems[a];
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.countWallItem = function() {
    this.totalItemsOnWall++;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.removeWallItem = function(a, b) {
    if (this.totalItemsOnWall--, this.totalItemsOnWall < 0) throw new Error("UserLibraryProxy.removeWallItme error! totalItemsOnWall is < 0");
    b ? delete this.wallItemsMap[a] : delete this.tempWallItems[a];
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getWallObjectAsStringForCreateWall = function() {
    return JSON.stringify({
        WallDetails: {
            BareWallId: this.selectedWallObject.BareWallId
        }
    });
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getWallObjectAsStringForUpdateWall = function(a, b) {
    var c = {
        WallItems: a,
        WallId: b
    }, d = JSON.stringify(c);
    return d;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getWallByBareWallId = function(a) {
    for (var b, c = this.userLibraryObject.Walls, d = 0; d < c.length; d++) {
        var e = c[d];
        if (e.WallDetails.BareWallId == a) {
            b = e;
            break;
        }
    }
    return b;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.lastUpdatedIsSet = function() {
    return void 0 != this.lastUpdatedWallObject;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.setLastUpdatedWall = function(a) {
    var b, c;
    void 0 == this.lastUpdatedWallObject && a.length > 0 && (this.lastUpdatedWallObject = a[0], 
    c = this.parseDateUpdated(this.lastUpdatedWallObject));
    for (var d = 0; d < a.length; d++) {
        var e = a[d];
        b = this.parseDateUpdated(e), b > c && (this.lastUpdatedWallObject = e, c = this.parseDateUpdated(this.lastUpdatedWallObject));
    }
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.parseDateUpdated = function(wallObject) {
    var str = wallObject.DateUpdated;
    if (-1 == str.indexOf("Date")) throw new Error("UserLibraryProxy.parseDateUpdated failed! Date object not found.");
    return str = str.replace(/\//g, ""), eval("new " + str);
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getWallByWallId = function(a) {
    for (var b, c = this.userLibraryObject.Walls, d = 0; d < c.length; d++) {
        var e = c[d];
        if (e.WallId == a) {
            b = e;
            break;
        }
    }
    return b;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.wallExists = function() {
    var a = this.selectedWallName.indexOf("hex") > -1 ? this.selectedWallGalleryName : this.selectedWallName, b = this.flattenedWallsByName[a] ? !0 : !1;
    return b;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getItemsForUpdate = function() {
    var a = this.getSelectedWallId();
    if (-1 == a) return [];
    var b = [];
    for (var c in this.wallItemsMap) if (c) {
        var d = this.wallItemsMap[c];
        if (void 0 == d.moved) {
            var e = {
                centerXPos: d.ProductCenterPositionX,
                centerYPos: d.ProductCenterPositionY,
                initialLoad: !1,
                itemGalleryItemID: c,
                moved: !1
            };
            this.wallItemsMap[c] = e, d = this.wallItemsMap[c];
        }
        var f = new com.art.myGalleries.vos.WallItemVO(c);
        d.moved ? (MyGalleriesCore.getModel().isEditingSavedRoom || (d.moved = !1), f.ProductCenterPositionX = d.centerXPos, 
        f.ProductCenterPositionY = d.centerYPos, f.ProductTargetAreaPosX = -1, f.ProductTargetAreaPosY = -1) : void 0 != this.flattenedWallItemsByWallId[a][c] ? (f.ProductCenterPositionX = this.flattenedWallItemsByWallId[a][c].ProductCenterPositionX, 
        f.ProductCenterPositionY = this.flattenedWallItemsByWallId[a][c].ProductCenterPositionY, 
        f.ProductTargetAreaPosX = this.flattenedWallItemsByWallId[a][c].ProductTargetAreaPosX, 
        f.ProductTargetAreaPosY = this.flattenedWallItemsByWallId[a][c].ProductTargetAreaPosY) : (this.updateWalls = !0, 
        f.ProductCenterPositionX = d.centerXPos, f.ProductCenterPositionY = d.centerYPos, 
        f.ProductTargetAreaPosX = 0, f.ProductTargetAreaPosY = 0), b.push(f);
    }
    return b;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getFlattenedWallItems = function(a) {
    if (this.selectedWallName = this.selectedWallName.indexOf("hex") > -1 ? this.selectedWallGalleryName : a ? this.getPersonalWallName() : this.selectedWallName, 
    void 0 != this.flattenedWallsByName[this.selectedWallName] && this.flattenedWallsByName[this.selectedWallName].WallId) {
        var b = this.flattenedWallsByName[this.selectedWallName].WallId;
        return this.flattenedWallItemsByWallId[b];
    }
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getPersonalWallName = function() {
    for (var a in this.flattenedWallsByName) return a;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getSelectedWallItems = function() {
    return [];
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getRooms = function(a, b, c, d) {
    if (this.roomsCollection.length > 0) return this.roomsCollection;
    for (var e = 0, f = 0; f < this.systemLibraryObject.BareWallGalleries.length; f++) {
        var g = this.systemLibraryObject.BareWallGalleries[f], h = g.ItemKey;
        if ("Roomsbysize" == h) for (var i = 0; i < g.BareWalls.length; i++) {
            var j = "emptyRoom-" + com.art.core.utils.StringUtil.generateUID(), k = g.BareWalls[i], l = k.Name, m = h + this.EMPTY_WALL_DELIMITER + l, n = k.WallAreaWidth / 12 + "' x " + k.WallAreaHeight / 12 + "'";
            this.roomsCollection.push({
                label: l,
                name: m,
                id: j,
                selected: !1,
                data: 0,
                isEmptyWall: !0,
                dimension: n
            });
        } else {
            var o = g.BareWalls.length;
            if (o > 0) {
                var p = 0 == e, q = g.GalleryId;
                this.roomsCollection.push({
                    label: h,
                    name: h,
                    id: q,
                    selected: p,
                    data: o,
                    isEmptyWall: !1
                }), e++;
            }
        }
    }
    return this.roomsCollection;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getEmptyRoomIdByName = function(a) {
    for (var b = 0; b < this.getRooms().length; b++) if (this.getRooms()[b].name == a) return this.getRooms()[b].id;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getSelectedSharedWallObject = function() {
    if (null != this.selectedSharedWallObject) return this.selectedSharedWallObject;
    for (var a = 0; a < this.wallsObject.length; a++) {
        var b = this.wallsObject[a];
        if (b.WallId == this.sharedWallId) return this.selectedSharedWallObject = b, this.selectedSharedWallObject;
    }
    throw new Error("UserLibraryProxy.getSelectedSharedWallObject failed! SharedWallId can't be resolved.");
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getSelectedWallObject = function() {
    for (var a = 0; a < this.wallsObject.length; a++) {
        var b = this.wallsObject[a];
        if (b.WallDetails.Name == this.selectedWallObject.Name) return b;
    }
    throw new Error("UserLibraryProxy.getSelectedWallObject failed! SharedWallId can't be resolved.");
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getGalleryByWallId = function(a) {
    for (var b = this.systemLibraryObject.BareWallGalleries, c = 0; c < b.length; c++) for (var d = b[c], e = 0; e < d.BareWalls.length; e++) if (d.BareWalls[e].BareWallId == a.WallDetails.BareWallId) return this.selectedSharedBareWallIndex = e, 
    d;
    for (var f = this.userLibraryObject.BareWallGalleries, g = 0; g < f.length; g++) for (var h = f[g], i = 0; i < h.BareWalls.length; i++) if (h.BareWalls[i].BareWallId == a.WallDetails.BareWallId) return this.selectedSharedBareWallIndex = i, 
    h;
    throw new Error("UserLibraryProxy.getGalleryByWallId failed! No System Gallery found.");
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.galleryHasWalls = function() {
    var a = this.systemLibraryObject.BareWallGalleries[this.selectedWallGalleryIndex].Walls, b = a.length > 0;
    return b;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getWallId = function(a) {
    var b = a.indexOf("hex") > -1 ? this.selectedWallGalleryName : a;
    if (!this.flattenedWallsByName[b]) throw new Error("TitleBarModule.getRoomViewQuerystringVals failed! Wall not found.");
    return this.flattenedWallsByName[b].WallId;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getHexValue = function(a) {
    return a.indexOf("hex") > -1 ? "/" + a : "";
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.getNumberOfWalls = function(a, b, c, d, e) {
    for (var f = 0, g = 0; g < a.BareWalls.length; g++) this.wallCanAccomodateImage(a.BareWalls[g], b, c, d, e) && f++;
    return f;
}, com.art.myGalleries.proxies.UserLibraryProxy.prototype.wallCanAccomodateImage = function(a, b, c, d, e) {
    var f = a.UsableAreaWidth, g = 500, h = a.WallAreaWidth / a.WallAreaWidthInches, i = Math.round(f / h), j = Math.round(g / h), k = d / h, l = e / h;
    return i >= b && j >= c && k > b && l > c;
}, com.art.myGalleries.proxies.RoomViewProxy = function() {
    this instanceof com.art.myGalleries.proxies.RoomViewProxy || error("BIZARRE ERROR"), 
    this.currentWall, this.bareWalls_system, this.bareWalls_userUploaded, this.changeSize_dataset, 
    this.serviceProvider, this.status = "ready";
}, com.art.myGalleries.proxies.RoomViewProxy.NAME = "RoomViewProxy", com.art.myGalleries.proxies.RoomViewProxy.prototype.getDataset_wall = function(a) {
    if (this.checkDatasetStatus("getDataset_wall")) {
        if (this.status = "working", this.currentWall = null, this.bareWalls_system = null, 
        this.bareWalls_userUploaded = null, "object" != typeof a) return void this.error("getDataset_wall > must provide an object as input.");
        var b = a.mode, c = a.type, d = a.wallKey, e = a.galleryKey, f = a.onComplete, g = a.thisObj, h = a.savedWallId, i = !isNullOrEmpty(d), j = !isNullOrEmpty(e), k = !isNullOrEmpty(h);
        if ("view" != b && "edit" != b) return void this.error('getDataset_wall > expected inputs.mode to be either "view" or "edit". Instead, got "' + b + '".');
        if ("user" != c && "auto" != c && "new" != c && "" != c) return void this.error('getDataset_wall > expected inputs.type to be either "user", "auto", "new", or blank. Instead, got "' + c + '".');
        if ("auto" == c && !j && !i) return void this.error("getDataset_wall > in auto mode, either wallKey or galleryKey must be supplied.");
        if ("" == c && !i) return void this.error("getDataset_wall > leaving type blank will auto-detect type. However, this requires wallKey, which was not supplied.");
        if ("view" == b && !i && !k) return void this.error("getDataset_wall > in view mode, room key is required.");
        var l = function() {
            if (null != this.bareWalls_system && null != this.bareWalls_userUploaded && null != this.currentWall) {
                if (this.status = "done", this.currentWall.bareWalls_system = this.bareWalls_system, 
                this.currentWall.bareWalls_userUploaded = this.bareWalls_userUploaded, null == this.currentWall.bareWall) for (var a = 0; a < this.bareWalls_system.length; a++) if ("Roomsbysize" != this.bareWalls_system[a].ItemKey) {
                    this.currentWall.bareWall = this.bareWalls_system[a].BareWalls[0];
                    break;
                }
                f.call(g, this.currentWall), this.status = "ready";
            }
        };
        if ("view" == b) {
            var m = this;
            this.getWallByProfileKey(d, function() {
                f.call(g, m.currentWall);
            });
        }
        "edit" == b && (this.getBareWalls_system(l), this.getBareWalls_userUploaded(l), 
        i ? this.getWallByProfileKey(d, function(a) {
            this.handleAutoDetectGallery(a, l, c, d);
        }) : this.getGalleryDetailsWithResultFilter(e, l, "auto", null));
    }
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handleAutoDetectGallery = function(a, b, c, d) {
    switch (this.checkResponseForErrors(a, "handleAutoDetectGallery (anonymous)"), !0) {
      case "undefined" == typeof a.Library:
        return void this.error("handleAutoDetectGallery (anonymous) > response.Library not found.");

      case "undefined" == typeof a.Library.Galleries[0]:
        return void this.error("handleAutoDetectGallery (anonymous) > response.Library.Galleries[0] not found.");

      case "undefined" == typeof a.Library.Galleries[0].ItemKey:
        return void this.error("handleAutoDetectGallery (anonymous) > response.Library.Galleries[0].ItemKey not found.");
    }
    var e = a.Library.Galleries[0].ItemKey;
    this.getGalleryDetailsWithResultFilter(e, b, c, d);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.getBareWalls_system = function(a) {
    var b = MyGalleriesCore.getModel(), c = b.getAccessKeyObjectAsString() + "&" + b.getUserProfileObjectAsString();
    c += "&gallerySortOption=" + JSON.stringify({
        DefaultSort: !0,
        SortBy: b.gallerySortBy,
        SortDirection: b.gallerySortDirection
    }), c += "&" + b.getGalleryPagingOptionObjectAsString();
    var d = this.getServiceProvider();
    d.galleryAPIService.getSystemLibrary({
        rvp: this,
        successHandler: function(b) {
            this.rvp.handle_getBareWalls_system_success(b, a);
        },
        errorHandler: this.handleError,
        beforeSendHandler: function() {}
    }, c);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handle_getBareWalls_system_success = function(a, b) {
    if (this.checkResponseForErrors(a, "handle_getBareWalls_system_success"), "undefined" == typeof a.Library) return void this.error("handle_getBareWalls_system_success > response.Library is not present.");
    this.bareWalls_system = a.Library.BareWallGalleries;
    for (var c = 0; c < this.bareWalls_system.length; c++) for (var d = 0; d < this.bareWalls_system[c].BareWalls.length; d++) this.bareWalls_system[c].BareWalls[d].type = "system", 
    this.bareWalls_system[c].BareWalls[d].bareWallGalleryId = this.bareWalls_system[c].GalleryId;
    return "function" == typeof b && b.call(this), this.bareWalls_system;
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.getBareWalls_userUploaded = function(a) {
    var b, c = MyGalleriesCore.getModel();
    b = c.getAccessKeyObjectAsString() + "&" + c.getUserProfileObjectAsString(), b += '&libraryResultFilter={"IncludeAutoSavedWalls":"false","IncludeBareWalls":"true"}';
    var d = this.getServiceProvider();
    d.galleryAPIService.getUserLibrary({
        rvp: this,
        successHandler: function(b) {
            this.rvp.handle_getBareWalls_userUploaded_success(b, a);
        },
        errorHandler: this.handleError,
        beforeSendHandler: function() {}
    }, b);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handle_getBareWalls_userUploaded_success = function(a, b) {
    if (this.checkResponseForErrors(a, "handle_getBareWalls_userUploaded_success"), 
    "undefined" == typeof a.Library) return void this.error("handle_getBareWalls_userUploaded_success > response.Library is not present.");
    var c = [];
    for (var d in a.Library.BareWallGalleries) {
        var e = a.Library.BareWallGalleries[d].BareWalls;
        if (e && e.length) for (var f = 0; f < e.length; f++) c.push(e[f]);
    }
    for (var d = 0; d < c.length; d++) c[d].type = "userUploaded", c[d].bareWallGalleryId = "user";
    return this.bareWalls_userUploaded = c, "function" == typeof b && b.call(this, c), 
    c;
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.getWallByProfileKey = function(a, b, c) {
    "undefined" == typeof a && this.error("getWallByProfileKey > wallKey was not defined.");
    var d, e = MyGalleriesCore.getModel(), f = this.getServiceProvider();
    d = e.getAccessKeyObjectAsString() + "&" + e.getUserProfileObjectAsString(), d += "&profileKey=" + e.environmentSub.profileKey, 
    "" != MyGalleriesCore.getUserLibraryProxy().savedWallId && void 0 != MyGalleriesCore.getUserLibraryProxy().savedWallId ? (d += "&wallId=" + MyGalleriesCore.getUserLibraryProxy().savedWallId, 
    f.galleryAPIService.getWallByWallId({
        rvp: this,
        successHandler: function(a) {
            this.rvp.handle_getWallByProfileKey_success(a, b);
        },
        errorHandler: this.handleError,
        beforeSendHandler: function() {}
    }, d)) : (d += "&roomKey=" + a, f.galleryAPIService.getWallByProfileKey({
        rvp: this,
        successHandler: function(a) {
            this.rvp.handle_getWallByProfileKey_success(a, b);
        },
        errorHandler: this.handleError,
        beforeSendHandler: function() {}
    }, d));
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handle_getWallByProfileKey_success = function(a, b) {
    if (this.checkResponseForErrors(a, "handle_getWallByProfileKey_success"), null == a.Library) return $("#itemsDisplayErrorMsg").show(), 
    void $("#itemsDisplay").hide();
    switch (!0) {
      case "undefined" == typeof a.Library:
        return void this.error("handle_getWallByProfileKey_success > response.Library not found.");

      case "undefined" == typeof a.Library.Galleries[0]:
        return void this.error("handle_getWallByProfileKey_success > response.Library.Galleries[0] not found.");

      case "undefined" == typeof a.Library.Galleries[0].Walls[0]:
        return void this.error("handle_getWallByProfileKey_success > response.Library.Galleries[0].Walls[0] not found.");

      case "function" != typeof b:
        return void this.error("handle_getWallByProfileKey_success > onSuccess was not a function. Cannot return data.");
    }
    var c = a.Library.Galleries[0].Walls[0], d = {};
    d.id = c.WallId, d.name = c.Name, d.key = c.ItemKey, d.saveType = c.IsSnapShot ? "user" : "auto", 
    d.imageUrl = c.Icon.LargeImage.HttpImageURL, d.bareWall = c.WallDetails, d.wallItems = c.WallItems, 
    d.description = c.LongDescription;
    for (var e = 0; e < d.wallItems.length; e++) d.wallItems[e].selected = !0;
    return d.gallery = a.Library.Galleries[0], this.currentWall = d, "function" == typeof b && b.call(this, a), 
    a;
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.getGalleryDetailsWithResultFilter = function(a, b, c, d) {
    "undefined" == typeof a && this.error("getGalleryDetailsWithResultFilter > galleryKey was not defined."), 
    c && "" != c || error('RoomViewProxy > getGalleryDetailsWithResultFilter > ERROR: required input "type" not provided. Aborting...');
    var e, f = MyGalleriesCore.getModel();
    e = f.getAccessKeyObjectAsString() + "&" + f.getUserProfileObjectAsString(), e += "&persona=" + f.environmentSub.profileKey, 
    e += "&galleryKey=" + a, e += "&galleryAuthToken=" + f.environment.galleryAuthToken, 
    e += "&gallerySortOption=" + JSON.stringify({
        DefaultSort: !0,
        SortBy: f.gallerySortBy,
        SortDirection: f.gallerySortDirection
    }), e += "&" + f.getGalleryPagingOptionObjectAsString(), e += "&ResultFilterOptions=" + JSON.stringify({
        IncludeGalleryItems: !0,
        IncludeUserSavedWalls: "user" == c,
        IncludeAutoSavedWalls: "auto" == c,
        IncludeWallItems: !0
    });
    var g = this.getServiceProvider();
    g.galleryAPIService.getGalleryDetailswithResultFilter({
        rvp: this,
        successHandler: function(a) {
            this.rvp.handle_getGalleryDetailsWithResultFilter_success(a, b, c, d);
        },
        errorHandler: this.handleError,
        beforeSendHandler: function() {}
    }, e);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handle_getGalleryDetailsWithResultFilter_success = function(a, b, c, d) {
    switch (this.checkResponseForErrors(a, "handle_getGalleryDetailsWithResultFilter_success"), 
    !0) {
      case "undefined" == typeof a.Library:
        return void this.error("handle_getGalleryDetailsWithResultFilter_success > response.Library not found.");

      case "undefined" == typeof a.Library.Galleries[0]:
        return void this.error("handle_getGalleryDetailsWithResultFilter_success > response.Library.Galleries[0] not found.");

      case "object" != typeof a.Library.Galleries[0].Walls:
        return void this.error("handle_getGalleryDetailsWithResultFilter_success > response.Library.Galleries[0].Walls not found, or was not an array. Cannot parse auto-saved walls.");

      case "undefined" == typeof a.Library.Galleries[0].Items:
        return void this.error("handle_getGalleryDetailsWithResultFilter_success > response.Library.Galleries[0].Items not found. Cannot parse gallery items.");

      case "function" != typeof b:
        return void this.error("handle_getGalleryDetailsWithResultFilter_success > onSuccess was not a function. Cannot return data.");
    }
    var e = null, f = a.Library.Galleries[0];
    if (0 == f.Walls.length) c = "new"; else {
        for (var g = 0; g < f.Walls.length; g++) if ("undefined" != typeof d && "" != d) {
            if ("undefined" != typeof f.Walls[g].ItemKey && f.Walls[g].ItemKey == d) {
                e = f.Walls[g];
                break;
            }
            (null == e || f.Walls[g].DateUpdated > e.DateUpdated) && (e = f.Walls[g]);
        }
        null == e && error("RoomViewProxy > handle_getGalleryDetailsWithResultFilter_success > could not find the right wall node! Aborting...");
    }
    var h, i = [];
    if (this.currentWall) {
        h = this.currentWall, h.gallery = a.Library.Galleries[0];
        for (var g = 0; g < this.currentWall.wallItems.length; g++) this.currentWall.wallItems[g].selected && i.push(this.currentWall.wallItems[g]);
        h.wallItems = [];
    } else {
        if (h = {}, "new" == c) h.id = "", h.name = "(NEW WALL)", h.key = "", h.saveType = "new", 
        h.imageUrl = "", h.bareWall = null, h.wallItems = []; else {
            h.id = e.WallId, h.name = e.Name, h.key = e.ItemKey, h.saveType = e.IsSnapShot ? "user" : "auto";
            try {
                h.imageUrl = e.Icon.LargeImage.HttpImageURL;
            } catch (j) {
                "user" == h.saveType && (error("RoomViewProxy > handle_getGalleryDetailsWithResultFilter > warning! this wall did not have an Icon property! View and Share functionality will not work! Wall to follow."), 
                error(h)), h.imageUrl = "";
            }
            h.bareWall = e.WallDetails, e.WallItems.length > 0 && (i = e.WallItems), h.wallItems = [];
        }
        h.gallery = a.Library.Galleries[0];
    }
    for (var k = a.Library.Galleries[0].Items, g = 0; g < k.length; g++) {
        var l = {
            Item: k[g],
            selected: !1
        };
        if (i.length > 0) for (var m = 0; m < i.length; m++) l.Item.ItemGalleryItemID == i[m].Item.ItemGalleryItemID && (l.selected = !0, 
        l.ProductCenterPositionX = i[m].ProductCenterPositionX, l.ProductCenterPositionY = i[m].ProductCenterPositionY, 
        l.ProductTargetAreaPosX = i[m].ProductTargetAreaPosX, l.ProductTargetAreaPosY = i[m].ProductTargetAreaPosY);
        h.wallItems.push(l);
    }
    return this.currentWall = h, "function" == typeof b && b.call(this, a), a;
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.updateWall = function(a, b) {
    "undefined" == typeof a && this.error("updateWall > wall was not defined.");
    var c = MyGalleriesCore.getModel();
    if (c.hasWritePermissions()) {
        var d = "";
        a.description && (d = a.description), "" == d && (d = $("#mg_saveroommodal_roomdescription").val()), 
        d == MyGalleriesCore.getString("Optional Description") && (d = "");
        var e, f = {
            Name: a.name,
            WallId: a.id,
            WallVisibility: 0,
            ShortDescription: d,
            LongDescription: d,
            WallDetails: {
                BareWallId: a.bareWall.BareWallId,
                BackGroundColor: a.bareWall.hex
            }
        };
        e = c.getAccessKeyObjectAsString() + "&" + c.getUserProfileObjectAsString(), e += "&WallId=" + a.id, 
        e += "&Wall=" + JSON.stringify(f);
        var g = this.getServiceProvider();
        g.galleryAPIService.updateWall({
            rvp: this,
            successHandler: function(a) {
                this.rvp.handle_updateWall_success(a, b);
            },
            errorHandler: this.handleError,
            beforeSendHandler: function() {}
        }, e);
    }
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handle_updateWall_success = function(a, b) {
    this.checkResponseForErrors(a, "handle_updateWall_success"), "function" == typeof b && b.call(this, a);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.updateWallItems = function(a, b) {
    "undefined" == typeof a && this.error("updateWallItems > wall was not defined.");
    var c = MyGalleriesCore.getModel();
    if (c.hasWritePermissions()) {
        for (var d = {
            WallId: a.id,
            WallItems: []
        }, e = 0; e < a.wallItems.length; e++) if (a.wallItems[e].selected) {
            var f = {
                Item: {
                    ItemGalleryItemID: a.wallItems[e].Item.ItemGalleryItemID
                },
                ProductCenterPositionX: a.wallItems[e].ProductCenterPositionX,
                ProductCenterPositionY: a.wallItems[e].ProductCenterPositionY,
                ProductTargetAreaPosX: 0,
                ProductTargetAreaPosY: 0
            };
            d.WallItems.push(f);
        }
        var g;
        g = c.getAccessKeyObjectAsString() + "&" + c.getUserProfileObjectAsString(), g += "&WallID=" + a.id, 
        g += "&Wall=" + JSON.stringify(d);
        var h = this.getServiceProvider();
        h.galleryAPIService.updateWallItems({
            rvp: this,
            successHandler: function(a) {
                this.rvp.handle_updateWallItems_success(a, b);
            },
            errorHandler: this.handleError,
            beforeSendHandler: function() {}
        }, g);
    }
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handle_updateWallItems_success = function(a, b) {
    this.checkResponseForErrors(a, "handle_updateWallItems_success"), "function" == typeof b && b.call(this, a);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.createWall = function(a, b) {
    "undefined" == typeof a && this.error("createWall > wall was not defined.");
    for (var c = MyGalleriesCore.getModel(), d = {
        WallDetails: {
            BareWallId: a.bareWall.BareWallId
        },
        WallItems: []
    }, e = 0; e < a.wallItems.length; e++) if (a.wallItems[e].selected) {
        var f = {
            Item: {
                ItemGalleryItemID: a.wallItems[e].Item.ItemGalleryItemID
            },
            ProductCenterPositionX: a.wallItems[e].ProductCenterPositionX,
            ProductCenterPositionY: a.wallItems[e].ProductCenterPositionY,
            ProductTargetAreaPosX: 0,
            ProductTargetAreaPosY: 0
        };
        d.WallItems.push(f);
    }
    var g;
    g = c.getAccessKeyObjectAsString() + "&" + c.getUserProfileObjectAsString(), g += "&galleryId=" + a.gallery.GalleryId, 
    g += "&Wall=" + JSON.stringify(d);
    var h = this.getServiceProvider();
    h.galleryAPIService.createWall({
        rvp: this,
        successHandler: function(a) {
            this.rvp.handle_createWall_success(a, b);
        },
        errorHandler: this.handleError,
        beforeSendHandler: function() {}
    }, g);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handle_createWall_success = function(a, b) {
    this.checkResponseForErrors(a, "handle_createWall_success"), "function" == typeof b && b.call(this, a);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.getAlternateSizes = function(a, b) {
    var c = "itemId=" + a;
    if (c += "&imageId=", c += "&lookupType=ItemNumber", c += "&targetDomain=" + com.art.core.utils.ArtServer.prototype.GetTargetDomain(), 
    c += "&CurrencyCode=" + MyGalleriesCore.getModel().environment.currencyCode, c += "&languageCode=" + MyGalleriesCore.getModel().environment.languageIso, 
    c += "&includePODServiceOptions=true", c += "&includeRelatedCategories=true", c += "&includeRelatedItems=true", 
    c += "&includeProductContent=true", c += "&includeRatingAndReview=true", !com.art.core.utils.ArtServer.prototype.isART()) {
        var d = art.site.config.getFeatureValue({
            page: "sitewide",
            feature: "IsGeoIpProjectEnabled"
        });
        "undefined" != typeof d && d || (d = ""), "" != d && (d = "true" == d.toLowerCase() ? !0 : !1, 
        d && (c += "&IPCountryCode=" + com.art.core.utils.ArtServer.prototype.GetIPCountryCode()));
    }
    var e = {
        rvp: this,
        getProductInfoSuccess: function(a) {
            this.rvp.handle_getAlternateSizes_success(a, b);
        },
        getProductInfoError: this.handleError,
        getProductInfoBeforeSend: function() {}
    };
    this.serviceProvider.productServiceAPI.GetProductInformation(c, e);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handle_getAlternateSizes_success = function(a, b) {
    this.changeSize_dataset = a, b.call(null, a);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.addNewSizeToGallery = function(a, b, c) {
    for (var d = null, e = 0; e < this.currentWall.wallItems.length; e++) if (this.currentWall.wallItems[e].Item.ItemGalleryItemID == a) {
        d = this.currentWall.wallItems[e].Item;
        break;
    }
    if (null == d) return error('RoomViewProxy > addNewSizeToGallery > ERROR: could not find base item in wallItems collection. ItemGalleryItemID was: "' + a + '". WallItems collection to follow.'), 
    void error(this.currentWall.wallItems);
    var f = this.changeSize_dataset, g = {};
    g.Imageid = d.Imageid, g.AvailableInOtherSizes = d.AvailableInOtherSizes || !1, 
    g.ArtistId = d.Item.ArtistId, g.ArtistName = d.Item.ArtistName, g.Source = "roomView", 
    null != d.SpecialHandlingID && void 0 != d.SpecialHandlingID && (g.SpecialHandlingID = d.SpecialHandlingID);
    for (var e = 0; e < f.length; e++) if (b != f[e].ItemId || f[e].IsPOD) {
        if (f[e].IsPOD) for (var h = f[e].PODProductType.length, i = 0; h > i; i++) for (var j = f[e].PODProductType[i], k = j.PODInformation, l = 0; l < k.length; l++) (b == k[l].POD_ConfigID || b == f[e].ItemId) && (g.APNum = f[e].ItemId, 
        g.Sku = "", g.ItemDisplayTypeID = j.ItemDisplayTypeID, g.ItemPrice = k[l].ItemPrice.Price, 
        g.Title = f[e].Title, g.PODConfigID = k[l].POD_ConfigID);
    } else g.APNum = f[e].ItemId, g.Sku = "", g.ItemDisplayTypeID = f[e].ItemDisplayTypeID, 
    g.ItemPrice = f[e].ItemPrice.Price, g.Title = f[e].Title, g.PODConfigID = 0;
    var m = MyGalleriesCore.getModel(), n = this.currentWall.gallery.GalleryId, o = [ g ], p = m.getAccessKeyObjectAsString() + "&" + m.getUserProfileObjectAsString();
    p += "&galleryItems=" + escape(JSON.stringify(o)), p += "&galleryID=" + n, p += "&allowDuplicate=false";
    var q = {
        rvp: this,
        app: this.app,
        successHandler: function(a) {
            this.rvp.handle_addNewSizeToGallery_success(a, c);
        },
        getProductInfoError: this.handleError,
        beforeSendHandler: function() {}
    }, r = this.getServiceProvider();
    r.galleryAPIService.addItemsToGallery(q, p);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handle_addNewSizeToGallery_success = function(a, b) {
    this.checkResponseForErrors(a, "handle_addNewSizeToGallery_success"), this.getGalleryDetailsWithResultFilter(this.currentWall.gallery.ItemKey, b, this.currentWall.saveType, this.currentWall.key);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.saveRoom = function(a) {
    var b = MyGalleriesCore.getModel(), c = $("#mg_saveroommodal_roomtitle").val(), d = $("#mg_saveroommodal_roomdescription").val();
    d == MyGalleriesCore.getString("Optional Description") && (d = "");
    var e = 0, f = {
        Name: c,
        ShortDescription: d,
        LongDescription: d,
        WallVisibility: e,
        IsSnapshot: "true"
    }, g = b.getAccessKeyObjectAsString() + "&" + b.getUserProfileObjectAsString();
    g += "&WallID=" + this.currentWall.id, g += "&wall=" + escape(JSON.stringify(f));
    var h = {
        rvp: this,
        app: this.app,
        successHandler: function(b) {
            this.rvp.handle_saveRoom_success(b, a);
        },
        getProductInfoError: this.handleError,
        beforeSendHandler: function() {}
    }, i = this.getServiceProvider();
    i.galleryAPIService.copyWallWithItems(h, g);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handle_saveRoom_success = function(a, b) {
    this.checkResponseForErrors(a, "handle_saveRoom_success"), b.call(null, a);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.shareWall = function(a) {
    var b = MyGalleriesCore.getModel(), c = b.getAccessKeyObjectAsString() + "&" + b.getUserProfileObjectAsString();
    c += "&galleryId=" + b.environmentSub.selectedGalleryID, c += "&persona=" + b.environmentSub.profileKey, 
    c += "&galleryKey=" + b.environmentSub.galleryKey, c += "&galleryAuthToken=" + b.environment.galleryAuthToken, 
    c += "&WallID=" + this.currentWall.id, c += "&createSnapshot=true";
    var d = {
        rvp: this,
        app: this.app,
        successHandler: function(b) {
            this.rvp.handle_shareWall_success(b, a);
        },
        getProductInfoError: this.handleError,
        beforeSendHandler: function() {}
    }, e = this.getServiceProvider();
    e.galleryAPIService.shareWall(d, c);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handle_shareWall_success = function(a, b) {
    this.checkResponseForErrors(a, "handle_shareWall_success"), b.call(null, a);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.createBarewallFromImageUploadService = function(a, b) {
    var c = {}, d = com.art.core.utils.XMLUtil.getXMLFromString(a.Image.replace(/\[\[BACKSLASH\]\]/g, "\\")), e = {};
    e.LargeImage = {
        HttpImageURL: com.art.core.utils.XMLUtil.getTextFromUniqueNodeInXml(d, "LrgImageUrl")
    }, e.MediumImage = {
        HttpImageURL: com.art.core.utils.XMLUtil.getTextFromUniqueNodeInXml(d, "MedImageUrl")
    }, e.SmallImage = {
        HttpImageURL: com.art.core.utils.XMLUtil.getTextFromUniqueNodeInXml(d, "SmlImageUrl")
    }, c.BareWallId = "0", c.IsAngledRoom = !1, c.RoomAngle = 0, c.ImageInformation = null, 
    c.UsableAreaWidth = com.art.core.utils.XMLUtil.getTextFromUniqueNodeInXml(d, "OrigW"), 
    c.UsableAreaHeight = com.art.core.utils.XMLUtil.getTextFromUniqueNodeInXml(d, "OrigH"), 
    c.UsableAreaPosY = 0, c.UsableAreaPosX = 0, c.ProductTargetAreaPosX = 0, c.ProductTargetAreaPosY = 0, 
    c.WallAreaWidth = c.UsableAreaWidth, c.WallAreaHeight = c.UsableAreaHeight, c.WallAreaWidthInches = 120, 
    c.WallAreaHeightInches = c.WallAreaWidthInches * (c.UsableAreaHeight / c.UsableAreaWidth), 
    c.RulerLength = 0, c.Guide1Y = 0, c.Guide2Y = 0, c.RulerX1 = 0, c.RulerX2 = 0, c.RulerY1 = 0, 
    c.RulerY2 = 0, c.RulerLength = 0, c.Caption = "caption", c.WallImageGUID = com.art.core.utils.XMLUtil.getTextFromUniqueNodeInXml(d, "ImageGUID");
    var f = -1, g = Number(c.UsableAreaWidth) / 120;
    isNaN(g) || (f = g), c.InchesConversionRate = f, this.createBarewall(c, b);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.createBarewall = function(a, b) {
    var c = MyGalleriesCore.getModel(), d = c.getAccessKeyObjectAsString() + "&" + c.getUserProfileObjectAsString();
    d += "&galleryID=0", d += "&Wall=" + JSON.stringify([ a ]);
    var e = {
        rvp: this,
        app: this.app,
        successHandler: function(a) {
            this.rvp.handle_createBarewall_success(a, b);
        },
        getProductInfoError: this.handleError,
        beforeSendHandler: function() {}
    }, f = this.getServiceProvider();
    f.galleryAPIService.addBareWalls(e, d);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handle_createBarewall_success = function(a, b) {
    this.checkResponseForErrors(a, "handle_createBarewall_success"), b.call(null, a);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.updateBarewall = function(a, b) {
    var c = MyGalleriesCore.getModel(), d = JSON.parse(JSON.stringify(a));
    delete d.ImageInformation;
    var e = JSON.stringify(d);
    e = escape(e);
    var f = c.getAccessKeyObjectAsString() + "&" + c.getUserProfileObjectAsString();
    f += "&galleryID=0", f += "&Wall=" + e;
    var g = {
        rvp: this,
        app: this.app,
        successHandler: function(a) {
            this.rvp.handle_updateBarewall_success(a, b);
        },
        getProductInfoError: this.handleError,
        beforeSendHandler: function() {}
    }, h = this.getServiceProvider();
    h.galleryAPIService.updateBareWall(g, f);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handle_updateBarewall_success = function(a, b) {
    this.checkResponseForErrors(a, "handle_updateBarewall_success"), b.call(null, a);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.checkResponseForErrors = function(a, b) {
    return "undefined" == typeof b && (b = ""), "undefined" == typeof a ? void this.error(b + " > response is null.") : "undefined" == typeof a.OperationResponse ? void this.error(b + " >  OperationResponse is null.") : "undefined" == typeof a.OperationResponse.ResponseMessage ? void this.error(b + " > OperationResponse.ResponseMessage is null.") : void ("Success" != a.OperationResponse.ResponseMessage && this.error(b + " > service call was not successful. ResponseMessage=" + a.OperationResponse.ResponseMessage));
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.checkDatasetStatus = function(a) {
    switch (this.status) {
      case "working":
        return this.error(a + "> unable to get new dataset. An operation is currently in progress."), 
        !1;

      case "error":
        this.error(a + "> beginning a new dataset while a previous dataset is in an error state. This will overwrite the dataset and discard the error.");
        break;

      case "done":
        this.warn(a + "> beginning a new dataset while a previous dataset is done, but not yet read. This will overwrite the dataset.");
        break;

      case "ready":
        break;

      default:
        this.warn(a + "> unknown status prior to getDataset operation. Erratic behavior may occur.");
    }
    return !0;
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.handleError = function(a) {
    this.status = "error", this.error("handleError > generic error. Response to follow."), 
    this.error(a);
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.getServiceProvider = function() {
    return this.serviceProvider || (this.serviceProvider = new com.art.core.services.ServiceProvider(MyGalleriesCore.getEnvironment())), 
    this.serviceProvider;
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.error = function(a) {
    this.status = "error", "undefined" != typeof console && ("undefined" != typeof console.error ? console.error("RoomViewProxy > " + a) : "undefined" != typeof console.log && console.log("ERROR: RoomViewProxy > " + a));
}, com.art.myGalleries.proxies.RoomViewProxy.prototype.warn = function(a) {
    "undefined" != typeof console && ("undefined" != typeof console.warn ? console.warn("RoomViewProxy > " + a) : "undefined" != typeof console.log && console.log("WARNING: RoomViewProxy > " + a));
};

var MyGalleriesCore = function() {
    var a, b = {}, c = {}, d = {}, e = {}, f = {}, g = {}, h = {}, i = "@VERSION@", j = {
        STARTUP: "startup",
        UPDATE_BACKGROUND_COLOR: "updateBackgroundColor",
        CHANGE_VIEWMODE: "changeViewMode",
        GET_ALL_GALLERY_ITEMS: "getAllGalleryItems",
        GET_ALL_GALLERY_ITEMS_SUCCESS: "getAllGalleryItemsSuccess",
        GET_ALL_GALLERY_ITEMS_FAILED: "getAllGalleryItemsFailed",
        UPDATE_GALLERY_TITLE_DESC: "updateTitleDesc",
        UPDATE_GALLERY_TITLE_DESC_SUCCESS: "updateTitleDescSuccess",
        UPDATE_GALLERY_TITLE_DESC_FAILED: "updateTitleDescFailure",
        ADD_GALLERY_TITLE_DESC: "addTitleDesc",
        ADD_GALLERY_TITLE_DESC_SUCCESS: "addTitleDescSuccess",
        ADD_GALLERY_TITLE_DESC_FAILED: "addTitleDescFailure",
        GALLERY_ITEM_SORT: "galleryItemsSort",
        GALLERY_ITEM_SORT_SUCCESS: "galleryItemsSortSuccess",
        GALLERY_ITEM_SORT_FAILED: "galleryItemsSortFailed",
        GET_SYSTEM_LIBRARY: "getSystemLibrary",
        GET_SYSTEM_LIBRARY_SUCCESS: "getSystemLibrarySuccess",
        GET_SYSTEM_LIBRARY_FAILED: "getSystemLibraryFailed",
        GET_USER_LIBRARY: "getUserLibrary",
        GET_USER_LIBRARY_SUCCESS: "getUserLibrarySuccess",
        GET_USER_LIBRARY_FAILED: "getUserLibraryFailed",
        ADD_ITEM_TO_EXISTING_GALLERY: "addItemToExistingGallery",
        ADD_ITEM_TO_EXISTING_GALLERY_SUCCESS: "addItemToExistingGallerySuccess",
        ADD_ITEM_TO_EXISTING_GALLERY_FALIED: "addItemToExistingGalleryFailed",
        ADD_ITEM_TO_EXISTING_GALLERY_DP: "detailPageAddItemToExistingGallery",
        ADD_ITEM_TO_EXISTING_GALLERY_DP_SUCCESS: "detailPageAddItemToExistingGallerySuccess",
        ADD_ITEM_TO_EXISTING_GALLERY_DP_FALIED: "detailPageAddItemToExistingGalleryFailed",
        MOVE_ADD_ITEM_TO_EXISTING_GALLERY: "moveAddItemToExistingGallery",
        MOVE_ADD_ITEM_TO_EXISTING_GALLERY_SUCCESS: "moveAddItemToExistingGallerySuccess",
        MOVE_ADD_ITEM_TO_EXISTING_GALLERY_FALIED: "moveAddItemToExistingGalleryFailed",
        MOVE_ADD_ITEM_TO_NEW_GALLERY: "moveAddItemToNewGallery",
        MOVE_ADD_ITEM_TO_NEW_GALLERY_SUCCESS: "moveAddItemToNewGallerySuccess",
        MOVE_ADD_ITEM_TO_NEW_GALLERY_FALIED: "moveAddItemToNewGalleryFailed",
        ADD_ITEM_TO_EXISTING_GALLERY_EXT: "addItemToExistingGalleryExt",
        GET_ALL_GALLERIES: "getAllGalleries",
        GET_ALL_GALLERIES_SUCCESS: "getAllGalleriesSuccess",
        GET_ALL_GALLERIES_FAILED: "getAllGalleriesFailed",
        ADD_ITEM_TO_NEW_GALLERY: "AddItemToNewGallery",
        ADD_ITEM_TO_NEW_GALLERY_SUCCESS: "AddItemToNewGallerySuccess",
        ADD_ITEM_TO_NEW_GALLERY_FALIED: "AddItemToNewGalleryFailed",
        ADD_ITEM_TO_NEW_GALLERY_DP: "detailPageAddItemToNewGallery",
        ADD_ITEM_TO_NEW_GALLERY_DP_SUCCESS: "detailPageAddItemToNewGallerySuccess",
        ADD_ITEM_TO_NEW_GALLERY_DP_FALIED: "detailPageAddItemToNewGalleryFailed",
        SHOW_LOGINMODAL: "showLoginModal",
        REGISTER_ACCOUNT: "registerMyGalleriesAccount",
        REGISTER_ACCOUNT_SUCCESS: "registerMyGalleriesAccountSuccess",
        REGISTER_ACCOUNT_FAILED: "registerMyGalleriesAccountFailed",
        REGISTER_ACCOUNT_TRAY_SUCCESS: "registerMyGalleriesTrayAccountSuccess",
        REGISTER_ACCOUNT_TRAY_FAILED: "registerMyGalleriesTrayAccountFailed",
        LOGIN_ACCOUNT: "loginMyGalleriesAccount",
        LOGIN_ACCOUNT_SUCCESS: "loginMyGalleriesAccountSuccess",
        LOGIN_ACCOUNT_FAILED: "loginMyGalleriesAccountFailed",
        LOGOUT_MYGALLERY: "logoutMyGalleriesAccount",
        LOGOUT_MYGALLERY_SUCCESS: "logoutMyGalleriesAccountSuccess",
        LOGOUT_MYGALLERY_FAILED: "logoutMyGalleriesAccountFailed",
        LOGIN_ACCOUNT_TRAY_SUCCESS: "loginMyGalleriesTrayAccountSuccess",
        LOGIN_ACCOUNT_TRAY_FAILED: "loginMyGalleriesTrayAccountFailed",
        LOGOUT_TRAY_MYGALLERY: "logoutMyGalleriesAccount",
        LOGOUT_TRAY_MYGALLERY_SUCCESS: "logoutMyGalleriesAccountSuccess",
        LOGOUT_TRAY_MYGALLERY_FAILED: "logoutMyGalleriesAccountFailed",
        UPDATE_DLE: "updateDLE",
        UPDATE_WALL_ITEMS: "updateWallItems",
        UPDATE_WALL_ITEMS_SUCCESS: "updateWallItemsSuccess",
        UPDATE_WALL_ITEMS_FAILED: "updateWallItemsFailed",
        CREATE_WALL: "createWall",
        CREATE_WALL_SUCCESS: "createWallSuccess",
        CREATE_WALL_FAILED: "createWallFailed",
        GET_WALLS: "getWalls",
        GET_WALLS_SUCCESS: "getWallsSuccess",
        GET_WALLS_FAILED: "getWallsFailed",
        ADD_SIMILAR_ARTIST_ITEM: "addSimilarArtistItem",
        ADD_SIMILAR_ARTIST_ITEM_SUCCESS: "addSimilarArtistItemSuccess",
        ADD_SIMILAR_ARTIST_ITEM_FAILED: "addSimilarArtistItemFailed",
        SHORTEN_ROOM_VIEW_URL: "shortenRoomViewURL",
        SHORTEN_ROOM_VIEW_URL_SUCCESS: "shortenRoomViewURLSuccess",
        SHORTEN_ROOM_VIEW_URL_FAILED: "shortenRoomViewURLFailed",
        INITIAL_LOAD: "initialLoad",
        SHARE_REQUEST: "shareRequest",
        SHARE_REQUEST_SUCCESS: "shareRequestSuccess",
        SHARE_REQUEST_FAILED: "shareRequestFailed",
        DELETE_GALLERY_ITEM: "deleteGalleryItem",
        DELETE_GALLERY_ITEM_FAILED: "deleteGalleryItemFailed",
        DELETE_GALLERY_ITEM_SUCCESS: "deleteGalleryItemSuccess",
        DELETE_GALLERY: "deleteGallery",
        DELETE_GALLERY_FAILED: "deleteGalleryFailed",
        DELETE_GALLERY_SUCCESS: "deleteGallerySuccess",
        ADD_BARE_WALLS: "addBareWalls",
        ADD_BARE_WALLS_SUCCESS: "addBareWallsSuccess",
        ADD_BARE_WALLS_ERROR: "addBareWallsError",
        SHARE_WALL: "shareWall",
        SHARE_ACTION_SUCCESS: "shareActionSuccess",
        UPDATE_BARE_WALL: "updateBareWall",
        UPDATE_BARE_WALL_SUCCESS: "updateBareWallSuccess",
        UPDATE_BARE_WALL_ERROR: "updateBareWallError",
        ADD_BARE_WALLS_ERROR: "addBareWallsError",
        SHOW_CREATE_GALLERY_MODAL: "SHOW_CREATE_GALLERY_MODAL",
        DELETE_GALLERY_ITEM_DP: "detailPageDeleteGalleryItem",
        DELETE_GALLERY_ITEM_DP_FAILED: "detailPageDeleteGalleryItemFailed",
        DELETE_GALLERY_ITEM_DP_SUCCESS: "detailPageDeleteGalleryItemSuccess",
        SHOW_LOGIN_OR_JOIN: "showloginorjoin",
        UPDATE_PRIVACY_SETTINGS: "updateprivacysettings",
        GET_FRAME_SKU: "getFrameSku",
        GET_FRAME_SKU_SUCCESS: "getFrameSkuSuccess",
        GET_FRAME_SKU_FAILED: "getFrameSkuError",
        GET_WALL_BY_ID: "getWallById",
        GET_WALL_BY_ID_SUCCESS: "getWallByIdSuccess",
        GET_WALL_BY_ID_ERROR: "getWallByIdError",
        GET_WALL_BY_PROFILE_KEY: "getWallByProfileKey",
        GET_WALL_BY_PROFILE_KEY_SUCCESS: "getWallByProfileKeySuccess",
        GET_WALL_BY_PROFILE_KEY_ERROR: "getWallByProfileKeyError",
        GET_USER_LIBRARY_BY_PROFILE: "getUserLibraryByProfile",
        GET_USER_LIBRARY_BY_PROFILE_SUCCESS: "getUserLibraryByProfileSuccess",
        GET_USER_LIBRARY_BY_PROFILE_ERROR: "getUserLibraryByProfileError",
        LOGIN_FACEBOOK_MYGALLERY: "loginWithFacebook",
        LOGIN_FACEBOOK_MYGALLERY_SUCCESS: "loginWithFacebookSuccess",
        LOGIN_FACEBOOK_MYGALLERY_FAILED: "loginWithFacebookFailed",
        ROOM_VIEW_SWF_LOADED: "roomViewSWFLoaded",
        MYACCOUNT_WISHLIST: "myAccountWishList",
        GET_FRAME_ID: "getFrameID",
        GET_FRAME_ID_SUCCESS: "getFrameIDSuccess",
        GET_FRAME_ID_FAILED: "getFrameIDFailed",
        ADD_DATA_GRAPH: "addDataToGraph",
        FACEBOOK_MERGE_ACCOUNTS: "facebookMergeAccounts",
        ADD_GALLERY_TO_BOOKMARK: "addGalleryToBookmark",
        ADD_GALLERY_TO_BOOKMARK_SUCCESS: "addGalleryToBookmarkSuccess",
        ADD_GALLERY_TO_BOOKMARK_FAILED: "addGalleryToBookmarkFailed",
        ADD_ROOM_TO_BOOKMARK: "addRoomToBookmark",
        ADD_ROOM_TO_BOOKMARK_SUCCESS: "addRoomToBookmarkSuccess",
        ADD_ROOM_TO_BOOKMARK_FAILED: "addRoomToBookmarkFailed",
        REMOVE_ROOM_FROM_BOOKMARK: "removeRoomFromBookmark",
        REMOVE_ROOM_FROM_BOOKMARK_SUCCESS: "removeRoomFromBookmarkSuccess",
        REMOVE_ROOM_FROM_BOOKMARK_FAILED: "removeRoomFromBookmarkFailed",
        REMOVE_GALLERY_FROM_BOOKMARK: "removeGalleryFromBookmark",
        REMOVE_GALLERY_FROM_BOOKMARK_SUCCESS: "removeGalleryFromBookmarkSuccess",
        REMOVE_GALLERY_FROM_BOOKMARK_FAILED: "removeGalleryFromBookmarkFailed",
        ADD_FOLLOW_PROFILE: "addFollowProfile",
        ADD_FOLLOW_PROFILE_SUCCESS: "addFollowProfileSuccess",
        ADD_FOLLOW_PROFILE_FAILED: "addFollowProfileFailed",
        REMOVE_FOLLOW_PROFILE: "removeFollowProfile",
        REMOVE_FOLLOW_PROFILE_SUCCESS: "removeFollowProfileSuccess",
        REMOVE_FOLLOW_PROFILE_FAILED: "removeFollowProfileFailed",
        ADD_ITEM_TO_DEFAULT_GALLERY: "addItemsToDefaultGallery",
        SAVE_ROOM: "saveRoom",
        SAVE_EXISTING_ROOM: "saveExistingRoom",
        SAVE_ROOM_AS: "saveRoomAs",
        SAVE_ROOM_SUCCESS: "saveRoomSuccess",
        SAVE_ROOM_ERROR: "saveRoomError",
        OPEN_SAVE_ROOM_MODAL: "openSaveRoomModal",
        DLE_IMAGE_UPLOAD_COMPLETE: "dleImageUploadComplete",
        DLE_ENABLE_UPLOAD_BUTTON: "dleEnableUploadButton",
        DLE_DISABLE_UPLOAD_BUTTON: "dleDisableUploadButton",
        GET_PRODUCT_INFO: "getProductInfo",
        GET_PRODUCT_INFO_SUCCESS: "getProductInfoSuccess",
        GET_PRODUCT_INFO_FAILED: "getProductInfoFailed",
        SHOW_GLOBAL_LOGINMODAL: "showGlobalLoginModal",
        LOGIN_ACCOUNT_GLOBAL_SUCCESS: "loginAccountGlobalSuccess",
        LOGIN_ACCOUNT_GLOBAL_FAILED: "loginAccountGlobalFailed",
        REGISTER_ACCOUNT_GLOBAL_SUCCESS: "registerAccountGlobalSuccess",
        REGISTER_ACCOUNT_GLOBAL_FAILED: "registerAccountGlobalFailed",
        LOGIN_FACEBOOK_GLOBAL_SUCCESS: "loginFacebookGlobalSuccess",
        LOGIN_FACEBOOK_GLOBAL_FAILED: "loginFacebookGlobalFailed",
        GET_ALL_GALLERIES_USER: "getAllGalleriesUser",
        GET_ALL_GALLERIES_FAILED_FOR_WEBUSER: "getAllGalleriesFailedForWebUser",
        GET_ALL_GALLERIES_SUCCESS_FOR_WEBUSER: "getAllGalleriesSuccessForWebUser",
        REMOVE_WALL: "removeWall",
        REMOVE_WALL_SUCCESS: "removeWallSucess",
        REMOVE_WALL_FAILED: "removeWallFailed",
        SHARE_GALLERY_ITEM: "shareGalleryItem",
        SHARE_GALLERY_ITEM_SUCCESS: "shareGalleryItemSucess",
        SHARE_GALLERY_ITEM_FAILED: "shareGalleryItemFailed",
        ADD_ITEM_TO_EXISTING_OR_NEW_GALLERY_SAVEMENU: "addItemToExistingOrNewGallerySaveMenu",
        GET_ALL_ITEMS_RECENT_GALLERY: "getAllItemsRecentGallery",
        GET_ALL_ITEMS_RECENT_GALLERY_SUCCESS: "getAllItemsRecentGallerySuccess",
        UPDATE_GALLERY_ITEM: "updateGalleryItem",
        CHECK_EMAIL_MIGRATION: "checkEmailMigration",
        CHECK_EMAIL_MIGRATION_SUCCESS: "checkEmailMigrationSuccess",
        CHECK_EMAIL_MIGRATION_FAILURE: "checkEmailMigrationFailure",
        GET_NEXT_GALLERY_ITEMS: "getNextGalleryItems",
        GET_NEXT_GALLERY_ITEMS_SUCCESS: "getNextGalleryItemsSuccess",
        GET_NEXT_GALLERY_ITEMS_FAILED: "getNextGalleryItemsFailed"
    }, k = {
        GALLERY_HOME: "galleryHome",
        GRID_VIEW: "gridView",
        DETAIL_VIEW: "detailView",
        SLIDESHOW: "slideshow",
        ROOM_VIEW: "roomView",
        DEFAULT: "default",
        FACEBOOK: "facebook",
        EMAIL: "email",
        ANONYMOUS: "1",
        OWNER: "200",
        VIEW: "50",
        EDIT: "100",
        SIGNUP: "SignUp",
        PRODUCT_PAGE: "productPage",
        GALLERY_PAGE: "galleryPage",
        LOGIN: "Login",
        DFEIMAGEMAXW: "200",
        DFEIMAGEMAXH: "200",
        DFEUNITOFMEASUREINCH: "in",
        DFEUNITOFMEASURECM: "cm",
        PERSISTENTCOOKIENAME: "ap",
        ACCOUNTID: "accountid",
        AUTHTOKEN: "authtoken",
        ACCOUNTTYPE: "accounttype",
        PROFILEURL: "profileURL",
        BOOKMARK: "10",
        FOLLOWS: "9",
        LOGINFOLLOWS: "follows",
        LOGINBOOKMARK: "bookmark",
        LOGINTRAY: "tray",
        GALLERYPAGE: "gallery",
        FOLLOWSPAGE: "follows",
        FOLLOWERSPAGE: "followers",
        BOOKMARKGALLERYPAGE: "bookmarks-gallery",
        BOOKMARKROOMPAGE: "bookmarks-room",
        ROOMPAGE: "room",
        ANONYMOUSUSERLABEL: "Anonymous User",
        YOUPLUSARTLABEL: "YOU+ART",
        LOCALIZATIONAPPID: "22",
        MOUNTED: 2,
        LAMINATED: 6,
        CANVAS: 4
    }, l = {};
    return {
        getVersion: function() {
            return i;
        },
        events: j,
        constants: k,
        getUseCaseResultsByName: function(a) {
            return applicationFlowDebugger.getUseCase(a);
        },
        registerModule: function(a) {
            this.registerSubscriber(a);
        },
        registerSubscriber: function(a) {
            if (void 0 == a.NAME) throw new Error("MyGalleries.registerSubscriber failed! observer.NAME is undefined.");
            for (var b = a.listNotificationInterests(), c = 0; c < b.length; c++) {
                var d = b[c];
                void 0 == l[d] && (l[d] = {}), l[d][a.NAME] = !0;
            }
            f[a.NAME] = a;
        },
        getInterestedSubscribers: function() {
            return l;
        },
        removeModule: function(a) {
            var b = {};
            for (var c in f) c != a && (b[c] = f[c]);
            f = b;
        },
        sendNotification: function(a) {
            for (var b in l[a.name]) void 0 != f[b] && f[b].handleNotification(a);
        },
        clearAll: function() {
            f = {}, l = {};
        },
        startAll: function() {
            for (var a in f) f[a].init();
        },
        startAllByViewMode: function(a) {
            for (var b in f) f[b].init(a);
        },
        startModule: function(a, b) {
            void 0 == b ? f[a].init() : f[a].init(b);
        },
        getSubscriber: function(a) {
            return f[a];
        },
        getSubscribers: function(a) {
            return f;
        },
        getModule: function(a) {
            return f[a];
        },
        setEnvironment: function(a) {
            g = a;
        },
        getEnvironment: function() {
            return g;
        },
        addToEnvironment: function(a, b) {
            g[a] = b;
        },
        setSubEnvironment: function(a) {
            h = a;
        },
        getSubEnvironment: function() {
            return h;
        },
        addToSubEnvironment: function(a, b) {
            h[a] = b;
        },
        getModel: function() {
            return b;
        },
        getUserLibraryProxy: function() {
            return c;
        },
        getRoomViewProxy: function() {
            return d;
        },
        getServiceProvider: function() {
            return e;
        },
        getString: function(a) {
            return gbllocalizationManager.getString(a);
        },
        getKeyString: function(a) {
            if ("undefined" != typeof MyGalleriesEnvironmentVariables && void 0 != MyGalleriesEnvironmentVariables.languageId && "1" == MyGalleriesEnvironmentVariables.languageId) {
                var b = "";
                return ("1" == MyGalleriesEnvironmentVariables.languageId || "3" == MyGalleriesEnvironmentVariables.languageId || "4" == MyGalleriesEnvironmentVariables.languageId) && void 0 != MyGalleriesEnvironmentVariables.TranslationKeys && void 0 != MyGalleriesEnvironmentVariables.TranslationKeys[a] && (b = MyGalleriesEnvironmentVariables.TranslationKeys[a].replace(/_/gi, " ")), 
                b;
            }
            var b = "";
            return void 0 != MyGalleriesEnvironmentVariables.TranslationKeys && (b = MyGalleriesEnvironmentVariables.TranslationKeys[a].replace(/_/gi, " ")), 
            gbllocalizationManager.getString(b);
        },
        init: function(a, e, f) {
            try {
                void 0 == a && (a = {});
            } catch (i) {
                a = {};
            }
            var j = new com.art.core.vos.Environment();
            j.init(a), g = j.properties, h = f, b = new com.art.myGalleries.proxies.ApplicationProxy(g, e, f), 
            c = new com.art.myGalleries.proxies.UserLibraryProxy(g, f), d = new com.art.myGalleries.proxies.RoomViewProxy();
            var k = location.host;
            k.indexOf("allposters.") > -1 ? MyGalleriesCore.getModel().SESSIONCOOKIENAME = "apc" : MyGalleriesCore.getModel().SESSIONCOOKIENAME = "arts";
        },
        updateWallFromDLE: function(a) {
            if (a.initialLoad) this.getUserLibraryProxy().getCheckBoxByItemGalleryItemID(a.itemGalleryItemID).value.initialLoad = !1; else {
                if (this.getUserLibraryProxy().wallItemsMap[a.itemGalleryItemID] = a, !this.getModel().hasWritePermissions()) return this.getUserLibraryProxy().tempWallItems[a.itemGalleryItemID] = a, 
                void com.art.core.utils.Flash.getMovie("roomViewFlashTarget").stopCursor();
                var b = this.getUserLibraryProxy().getItemsForUpdate();
                if (this.getModel().updateFromDLE = !0, this.getModel().isEditingSavedRoom) return void com.art.core.utils.Flash.getMovie("roomViewFlashTarget").stopCursor();
                this.sendNotification(new com.art.core.utils.Note(this.events.UPDATE_WALL_ITEMS, b));
            }
        },
        createWallFromDLE: function(a) {
            this.getModel().updateFromDLE = !0;
            var a = a.indexOf("hex") > -1 ? this.getUserLibraryProxy().selectedWallGalleryName : a;
            if (this.getModel().isEditingSavedRoom) return void com.art.core.utils.Flash.getMovie("roomViewFlashTarget").stopCursor();
            if (this.getUserLibraryProxy().initialLoadComplete) if (this.getUserLibraryProxy().wallExists()) this.getModel().hasWritePermissions() && (items = this.getUserLibraryProxy().getItemsForUpdate(), 
            this.sendNotification(new com.art.core.utils.Note(this.events.UPDATE_WALL_ITEMS, items))); else {
                if (!this.getModel().hasWritePermissions()) return;
                this.sendNotification(new com.art.core.utils.Note(this.events.CREATE_WALL));
            } else if (this.getUserLibraryProxy().initialLoadComplete = !0, this.getUserLibraryProxy().wallExists()) this.sendNotification(new com.art.core.utils.Note(this.events.INITIAL_LOAD)); else {
                if (!this.getModel().hasWritePermissions()) return;
                this.sendNotification(new com.art.core.utils.Note(this.events.CREATE_WALL));
            }
        },
        gaTrackFromDLE: function(a) {
            this.getUserLibraryProxy().initialLoadComplete && mygalleriesGA.trackEventWithCategory("Room", this.getUserLibraryProxy().getSelectedWallGAEventName(a));
        },
        allWallItemsResizeComplete: function() {
            if (this.getUserLibraryProxy().wallExists()) {
                var a = this.getUserLibraryProxy().getItemsForUpdate();
                com.art.core.utils.Flash.getMovie("roomViewFlashTarget").updateImagePositions(a);
            }
        },
        swfReadyFromDLE: function() {
            this.getModel().dleIsLoaded = !0, this.getModel().galleryItemsLoaded && this.sendNotification(new com.art.core.utils.Note(this.events.ROOM_VIEW_SWF_LOADED));
        },
        setNickNameGeneratedCookie: function(a) {
            var b = !1;
            b = a.IsNicknameSystemGenerated;
            var c = new com.art.core.cookie.Cookie();
            c.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "isNickNameSystemGenerated", b, "/", c.getCookieDomain("art"));
        },
        RedirectToProfileFlow: function() {
            var a = new com.art.core.cookie.Cookie(), b = a.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "isNickNameSystemGenerated");
            "true" == b && "true" == MyGalleriesCore.getEnvironment().enableCommunityFeatures && ShowProfile();
        },
        getImageObjectFromDLE: function(a) {
            this.getUserLibraryProxy().selectedWallName = a;
            var b = this.getUserLibraryProxy().getImageObject(a);
            return b;
        },
        setSelectedWallGalleryIndexAndNameFromDLE: function(a) {
            this.getUserLibraryProxy().selectedWallGalleryName = a.indexOf(com.art.myGalleries.proxies.UserLibraryProxy.EMPTY_WALL_DELIMITER) > -1 ? a.split(com.art.myGalleries.proxies.UserLibraryProxy.EMPTY_WALL_DELIMITER)[1] : a;
            var b = a.indexOf(com.art.myGalleries.proxies.UserLibraryProxy.EMPTY_WALL_DELIMITER) > -1 ? a.split(com.art.myGalleries.proxies.UserLibraryProxy.EMPTY_WALL_DELIMITER)[0] : a;
            if ("myWallsBrowseBtn" != this.getUserLibraryProxy().selectedWallGalleryName) {
                for (var c = this.getUserLibraryProxy().systemLibraryObject.BareWallGalleries, d = 0; d < c.length; d++) if (c[d].Name == b) return void (this.getUserLibraryProxy().selectedWallGalleryIndex = d);
            } else for (var e = this.getUserLibraryProxy().userLibraryObject.BareWallGalleries, f = 0; f < e.length; f++) if (e[f].Name == this.getUserLibraryProxy().selectedWallGalleryName) return void (this.getUserLibraryProxy().selectedWallGalleryIndex = f);
        },
        handleSignInFromDLE: function(a) {
            "upload" != a && "ruler" != a && this.sendNotification(new com.art.core.utils.Note(this.events.SHOW_LOGINMODAL, {
                signInMode: a
            }));
        },
        handleCallibrationFromDLE: function(a) {
            this.sendNotification(new com.art.core.utils.Note(this.events.UPDATE_BARE_WALL, a));
        },
        createBareWallFromDLE: function(a) {
            this.getModel().hasWritePermissions() && this.sendNotification(new com.art.core.utils.Note(this.events.ADD_BARE_WALLS, a));
        },
        setAccountProviderCookieInfo: function(a, b, c, d) {
            var e = new com.art.core.cookie.Cookie();
            e.setCookie(a, b, c, d);
        },
        isUserInThemMode: function() {
            var a = !1;
            if (null != mygalPageInfo.RightNavThem) {
                var b = null != mygalPageInfo.RightNavThem;
                1 == b && (a = !0);
            }
            return a;
        },
        isa3sProductServiceUrlsUse: function() {
            var a = "false";
            return void 0 != MyGalleriesEnvironmentVariables && void 0 != MyGalleriesEnvironmentVariables.isa3sproductserviceurls && (a = MyGalleriesEnvironmentVariables.isa3sproductserviceurls), 
            "true" == a ? !0 : !1;
        },
        isa3sAddToCartUsed: function() {
            var a = "false";
            return void 0 != MyGalleriesEnvironmentVariables && void 0 != MyGalleriesEnvironmentVariables.isa3sAddToCartEnabled && (a = MyGalleriesEnvironmentVariables.isa3sAddToCartEnabled), 
            "true" == a || location.hostname.indexOf(".allposters.") > -1 ? !0 : !1;
        },
        AddItemToDefaultGallery: function() {
            this.sendNotification(new com.art.core.utils.Note(this.events.ADD_ITEM_TO_DEFAULT_GALLERY));
        },
        TriggerLoginModal: function() {
            var a = com.art.core.components.LoginModal.REGISTER, b = new com.art.core.utils.Note(MyGalleriesCore.events.SHOW_GLOBAL_LOGINMODAL, {
                loginOption: a
            }, {
                modulename: "GlobalHeader"
            });
            MyGalleriesCore.sendNotification(b);
        },
        updateGalleryItemFromExternal: function() {
            var b = this;
            clearTimeout(a), a = setTimeout(function() {
                b.sendNotification(new com.art.core.utils.Note(b.events.UPDATE_GALLERY_ITEM));
            }, 300);
        },
        externalAddToGallery: function(b) {
            var c = this;
            c.getModel().saveMenuBoolean = !1, clearTimeout(a), a = setTimeout(function() {
                if (null != c.getModel().selectedImageObject) {
                    switch (b) {
                      case c.constants.PRODUCT_PAGE:
                        mygalleriesGA.trackEventWithCategory("Save to Gallery", "Product Page Add - Page Link");
                        break;

                      case c.constants.GALLERY_PAGE:
                        mygalleriesGA.trackEventWithCategory("Save to Gallery", "Gallery Page Add - Page Link");
                    }
                    c.sendNotification(new com.art.core.utils.Note(c.events.ADD_ITEM_TO_EXISTING_GALLERY_EXT));
                }
            }, 300);
        },
        externalSaveToGalleryMenu: function(b, c) {
            var d = this;
            d.getModel().saveMenuBoolean = !0, clearTimeout(a), a = setTimeout(function() {
                if (null != d.getModel().selectedImageObject) {
                    switch (b) {
                      case d.constants.PRODUCT_PAGE:
                        "MOVE" == c ? mygalleriesGA.trackEventWithCategory("Product Page", "Move to Another Gallery") : "COPY" == c ? mygalleriesGA.trackEventWithCategory("Product Page", "Copy to Another Gallery") : mygalleriesGA.trackEventWithCategory("Save to Gallery", "Product Page Add - Page Link"), 
                        MyGalleriesEnvironmentVariablesDynamic.sourcePageForLogin = "Save to gallery on product page";
                        break;

                      case d.constants.GALLERY_PAGE:
                        mygalleriesGA.trackEventWithCategory("Save to Gallery", "Gallery Page Add - Page Link"), 
                        MyGalleriesEnvironmentVariablesDynamic.sourcePageForLogin = "Save to gallery on gallery page ";
                    }
                    "3" == d.getModel().environment.customerZoneId || "4" == d.getModel().environment.customerZoneId || "25" == d.getModel().environment.customerZoneId ? d.sendNotification(new com.art.core.utils.Note(d.events.ADD_ITEM_TO_EXISTING_OR_NEW_GALLERY_SAVEMENU)) : "MOVE" == c || "COPY" == c ? d.sendNotification(new com.art.core.utils.Note(d.events.ADD_ITEM_TO_EXISTING_OR_NEW_GALLERY_SAVEMENU)) : d.sendNotification(new com.art.core.utils.Note(d.events.ADD_ITEM_TO_EXISTING_GALLERY_EXT));
                }
            }, 300);
        }
    };
}();

com.art.myGalleries.modules.ExternalModule = function(a, b) {
    this.app = b, this.moduleData = a, this.NAME = com.art.myGalleries.modules.ExternalModule.NAME, 
    this.instance = this, this.modalGalleryLB, this.modalSignUpLB, this.myModalSaveToGallery, 
    this.loginLink, this.modalGallery, this.selectedGalleryName = "", this.framingStudioCall, 
    this.FSData = {}, this.loginOption = "", this.wishList, this.modalWishList, this.modalSaveMenuContainer, 
    this.modalAddNewGallery, this.newGalleryOptionLB, this.deleteArt, this.modalDeleteArt, 
    this.deleteArtLB, this.updateGalleryItemFlag = !1, this.galleriesListFlag = !1;
}, com.art.myGalleries.modules.ExternalModule.NAME = "ExternalModule", com.art.myGalleries.modules.ExternalModule.prototype.init = function(a) {
    var b = this;
    $(document).on("click", ".myWishListMyAccount", function() {
        b.app.sendNotification(new com.art.core.utils.Note(b.app.events.MYACCOUNT_WISHLIST));
    }), "y" == com.art.core.utils.BrowserUtil.getQueryString("mg") && this.getUserGalleries(), 
    $(document).on("click", ".mygalremovecontainer", function() {
        mygalleriesGA.trackEventWithCategory("Product Page", "Remove from Gallery"), b.app.getModel().getIfLoggedInCookieNew() ? b.DeleteArt() : b.app.TriggerLoginModal();
    }), $(document).on("click", "#modalClose", function() {
        null != MyGalleriesEnvironmentVariablesDynamic && null != MyGalleriesEnvironmentVariablesDynamic.sourcePageForLogin && "" != MyGalleriesEnvironmentVariablesDynamic.sourcePageForLogin && (MyGalleriesEnvironmentVariablesDynamic.sourcePageForLogin = "");
    });
}, com.art.myGalleries.modules.ExternalModule.prototype.getUserGalleries = function() {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_ALL_GALLERIES));
}, com.art.myGalleries.modules.ExternalModule.prototype.updateGalleryItem = function() {
    var a = this.app.getModel().getSelectedGridItem(), b = this.app.getModel().getGalleryItemByGalleryId(a), c = b.GalleryItemData.APNum, d = b.GalleryItemData.PODConfigID;
    this.updateGalleryItemFlag = !0, this.app.sendNotification(new com.art.core.utils.Note(this.app.events.DELETE_GALLERY_ITEM, {
        ItemId: a,
        APNum: c,
        PodConfigId: d
    }));
}, com.art.myGalleries.modules.ExternalModule.prototype.updateGalleryItemToGallery = function() {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_ITEM_TO_EXISTING_GALLERY, this.app.getModel().environmentSub.selectedGalleryID));
}, com.art.myGalleries.modules.ExternalModule.prototype.DeleteArt = function() {
    var a = this;
    this.deleteArtLB = new com.art.core.components.LightBox("myDeleteArtLB", "body", .7), 
    this.deleteArtLB.show();
    var b = a.app.getModel().getSelectedGridItem(), c = a.app.getModel().getGalleryItemByGalleryId(b), d = c.GalleryItemData.APNum, e = c.GalleryItemData.PODConfigID, f = a.app.getKeyString("removeGalleryContentKey");
    f = f.replace("[x]", "<span style='font-weight: bold;'>" + c.GalleryItemData.Title + " </span> "), 
    this.deleteArt = new com.art.myGalleries.components.CommonComponent("deleteArtComponent", MyGalleriesCore.getString("Remove"), 500, 200, b, "", "", "", c.GalleryItemData.Title, f), 
    this.modalDeleteArt = new com.art.core.components.BaseModal("myModalDeleteArt", 480, "#ffffff", !0), 
    this.modalDeleteArt.setContents(this.deleteArt.render()), $("body").append(this.modalDeleteArt.render(this.deleteArtLB.getLightBoxZIndex() + 1)), 
    this.modalDeleteArt.registerEvents(), $(".modal_header_text").html(a.app.getKeyString("removeGalleryHeaderKey")), 
    $(".modal_header_text").addClass("uCase gCustomFont"), this.modalDeleteArt.registerButton("dontDelete", com.art.core.components.ArtButton.ART_ORANGE, a.app.getString("Don't Remove"), function() {
        a.modalDeleteArt.close(), a.deleteArtLB.close();
    }), this.modalDeleteArt.registerButton("delete", com.art.core.components.ArtButton.ART_BLUE, a.app.getString("Remove"), function() {
        a.app.sendNotification(new com.art.core.utils.Note(a.app.events.DELETE_GALLERY_ITEM, {
            ItemId: b,
            APNum: d,
            PodConfigId: e
        }));
    }), this.modalDeleteArt.registerCallback(com.art.core.components.BaseModal.CLOSE_CLICKED, function() {
        a.deleteArtLB.close();
    }), this.deleteArt.registerEvents(), $("#deleteArtComponent_Title").addClass("uCase gCustomFont");
}, com.art.myGalleries.modules.ExternalModule.prototype.setModalInit = function() {
    var a = new com.art.core.cookie.Cookie(), b = "";
    if (b = this.app.getModel().getLastSelectedGalleryID(), "1" == a.getCookieDictionary(this.getModel().SESSIONCOOKIENAME, this.app.getModel().oneClickCookie) && b.length > 0) this.app.getModel().environmentSub.selectedGalleryID = this.app.getModel().getLastSelectedGalleryID(), 
    this.app.getModel().setDestinationSelectedGalleryId(this.app.getModel().getLastSelectedGalleryID()), 
    this.selectedGalleryName = this.app.getModel().cacheByGalleryList[this.app.getModel().getLastSelectedGalleryID()].Name, 
    setTimeout(function() {
        MyGalleriesCore.getModel().frameStudioFlag = !1;
    }, 250), "framingStudioCall" == this.framingStudioCall ? (this.app.getModel().setFramingStudioResponseObject(this.FSData), 
    mygalleriesGA.trackEventWithCategory("Save to Gallery", "Framing Studio Add - Completed"), 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_ITEM_TO_EXISTING_GALLERY, this.FSData.FileName))) : this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_ITEM_TO_EXISTING_GALLERY, this.app.getModel().getLastSelectedGalleryID())); else {
        var c = this;
        this.modalGalleryLB = new com.art.core.components.LightBox("myMoveToGalleryLB", "body", .7), 
        this.modalGalleryLB.show(), setTimeout(function() {
            MyGalleriesCore.getModel().frameStudioFlag = !1;
        }, 250);
        var d = "", e = c.app.getModel().selectedImageObject, d = this.app.getModel().environmentSub.selectedGalleryID, f = {
            id: "SaveToGallery",
            Title: c.app.getString("Save to My Gallery"),
            SelectedGalleryId: d,
            galleryList: c.app.getModel().galleryList,
            galleryItem: e
        };
        if ("framingStudioCall" != this.framingStudioCall) var e = c.app.getModel().selectedImageObject, d = this.app.getModel().environmentSub.selectedGalleryID, f = {
            id: "SaveToGallery",
            Title: c.app.getString("Save to My Gallery"),
            SelectedGalleryId: d,
            galleryList: c.app.getModel().galleryList,
            galleryItem: e
        }; else var f = {
            id: "SaveToGallery",
            Title: c.app.getString("Save to My Gallery"),
            galleryList: c.app.getModel().galleryList,
            galleryItem: this.FSData
        };
        this.modalGallery = new com.art.myGalleries.components.MyGalleriesModal(f);
        var g = $.browser.msie ? 750 : 720;
        this.myModalSaveToGallery = new com.art.core.components.BaseModal("myModalSaveToGallery", g, "#ffffff", !1), 
        this.myModalSaveToGallery.setContents(this.modalGallery.render());
        var h = new com.art.core.components.CheckBox("privacyChk", "privacy", c.app.getString("Make Gallery Private"), !1), i = "<div class='privacy'><div style='float: left;'>" + h.render() + "</div><div id='privacyTxt' class='SiteFont fontsize12'>" + h.label + "</div><div style='clear:both'></div></div>";
        $("body").append(this.myModalSaveToGallery.render(this.modalGalleryLB.getLightBoxZIndex() + 1)), 
        this.myModalSaveToGallery.registerEvents(), $(".modal_header_text").html(c.app.getString("Save to My Gallery")), 
        $(".modal_header_text").addClass("uCase gCustomFont"), this.app.getModel().environment.accountType != this.app.constants.ANONYMOUS && this.myModalSaveToGallery.setLeftButtonBarContent(i), 
        $(".newGalleryTextBox").after(i), h.registerEvents(), h.registerCallback(com.art.core.components.CheckBox.CHECKED, function(a) {
            var b = a.selected ? 3 : 1;
            c.app.getModel().setAddedGalleryPrivacy(b);
        }), this.modalGallery.registerCallback(com.art.myGalleries.components.MyGalleriesModal.LOGIN_CLICKED, function() {
            c.loginOption = com.art.core.components.LoginModal.LOGIN, c.showLoginModal();
        }), this.modalGallery.registerCallback(com.art.myGalleries.components.MyGalleriesModal.REGISTER_CLICKED, function() {
            c.loginOption = com.art.core.components.LoginModal.REGISTER, c.showLoginModal();
        });
        var j = new com.art.core.components.ArtButton("continue", com.art.core.components.ArtButton.ART_ORANGE, c.app.getString("Save to Gallery"));
        $(".MyGalleriesModalGalleryContainer").after(j.render()), j.registerEvents(), j.registerCallback(com.art.core.components.BaseButton.CLICK, function() {
            var b = c.modalGallery.ContinueToMove();
            a.getCookieDictionary(c.getModel().SESSIONCOOKIENAME, c.app.getModel().oneClickCookie);
            if ("Existing" == b) c.app.getModel().environmentSub.selectedGalleryID = c.modalGallery.getDestinationSelectedGalleryId(), 
            c.app.getModel().setDestinationSelectedGalleryId(c.modalGallery.getDestinationSelectedGalleryId()), 
            c.selectedGalleryName = c.app.getModel().cacheByGalleryList[c.app.getModel().environmentSub.selectedGalleryID].Name, 
            "framingStudioCall" == c.framingStudioCall ? (c.app.getModel().setFramingStudioResponseObject(c.FSData), 
            mygalleriesGA.trackEventWithCategory("Save to Gallery", "Framing Studio Add - Completed"), 
            c.app.sendNotification(new com.art.core.utils.Note(c.app.events.ADD_ITEM_TO_EXISTING_GALLERY, c.FSData.FileName))) : c.app.sendNotification(new com.art.core.utils.Note(c.app.events.ADD_ITEM_TO_EXISTING_GALLERY)); else if (b) {
                var d = c.modalGallery.getAddTitleData();
                c.app.getModel().setAddedGalleryTitle(d.title), c.selectedGalleryName = d.title;
                var e = c.app.getString("Found invalid characters in title"), f = com.art.core.utils.StringUtil.findInvalidChars(c.selectedGalleryName, "-@#$%^&*()_+<>!~,.?/[]{}|=", "<p>" + e + " {~listOfInvalidChars~}</p>");
                if ("" != f) return $(".commonErrorMsg").text(c.app.getString("Found invalid characters in title")), 
                void $(".commonErrorMsg").show();
                "framingStudioCall" == c.framingStudioCall ? (c.app.getModel().setFramingStudioResponseObject(c.FSData), 
                c.app.sendNotification(new com.art.core.utils.Note(c.app.events.ADD_ITEM_TO_NEW_GALLERY, c.FSData.FileName, {
                    fromLoginExternalModule: !1
                }))) : c.app.sendNotification(new com.art.core.utils.Note(c.app.events.ADD_ITEM_TO_NEW_GALLERY, {}, {
                    fromLoginExternalModule: !1
                }));
            }
        }), this.myModalSaveToGallery.registerCallback(com.art.core.components.BaseModal.CLOSE_CLICKED, function() {
            $(document).off("click", "#loginSavetogallery"), $("#loginSavetogallery").unbind("click"), 
            $(document).off("click", "#registerSavetogallery"), $("#registerSavetogallery").unbind("click"), 
            c.app.getModel().galleryList = "", c.modalGalleryLB.close();
        }), this.modalGallery.registerEvents();
    }
}, com.art.myGalleries.modules.ExternalModule.prototype.setCookieForDropDown = function(a) {
    if ("" != a) {
        var b = new com.art.core.cookie.Cookie();
        b.setCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "SaveToGallery", a, "/", b.getCookieDomain("art"));
    }
}, com.art.myGalleries.modules.ExternalModule.prototype.showLoginModal = function() {
    var a = new com.art.core.utils.Note(MyGalleriesCore.events.SHOW_GLOBAL_LOGINMODAL, {
        loginOption: this.loginOption
    }, {
        modulename: this.NAME
    });
    MyGalleriesCore.sendNotification(a);
}, com.art.myGalleries.modules.ExternalModule.prototype.loginModalClose = function() {
    $(document).off("#myModalLogin"), $("#myModalLogin").unbind("click"), $("#myModalLogin").remove(), 
    this.loginLink && this.loginLink.doClose(), this.modalSignUpLB && this.modalSignUpLB.close(), 
    $("#mygallerylogin").unbind("click"), $(document).off("click", "#mygallerylogin"), 
    $("#mygallerylogin").remove(), $("#mygalleryregister").unbind("click"), $(document).off("click", "#mygalleryregister"), 
    $("#mygalleryregister").remove(), $(document).off("#" + this.id), $("#" + this.id).unbind("click"), 
    $("#" + this.id).remove();
}, com.art.myGalleries.modules.ExternalModule.prototype.OpenWishListModal = function() {
    var a = this, b = new com.art.core.components.LightBox("myAccountWishListLB", "body", .7);
    b.show(), this.wishList = new com.art.myGalleries.components.CommonComponent("wishlistMyAccount", a.app.getString("Wish lists are now My Galleries"), 500, 200), 
    this.modalWishList = new com.art.core.components.BaseModal("myModalWishlist", 480, "#f7f7ed", !0), 
    this.modalWishList.setContents(this.wishList.render()), $("body").append(this.modalWishList.render(b.getLightBoxZIndex() + 1)), 
    this.modalWishList.registerEvents(), this.modalWishList.registerCallback(com.art.core.components.BaseModal.CLOSE_CLICKED, function() {
        b.close();
    }), this.modalWishList.registerButton("closeBtn", com.art.core.components.ArtButton.ART_ORANGE, a.app.getString("Close"), function() {
        a.modalWishList.close(), b.close();
    }), this.wishList.registerEvents();
}, com.art.myGalleries.modules.ExternalModule.prototype.setMenuModalInit = function() {
    var a = this, b = this.app.getModel().environmentSub.selectedGalleryID, c = {
        id: "SaveMenuContainer",
        SelectedGalleryId: b,
        galleryList: a.app.getModel().galleryList
    };
    this.modalSaveMenuContainer = {}, this.modalSaveMenuContainer = new com.art.myGalleries.components.SaveMenuContainer(c), 
    $("body").append(this.modalSaveMenuContainer.render()), this.modalSaveMenuContainer.position(), 
    this.app.getModel().galleryList.length > 0 && (this.modalSaveMenuContainer.renderGalleriesList(), 
    $(".allMyGalleriesSaveMenuMarginTop").show(), $(".allMyGalleriesContainer").show(), 
    "" != MyGalleriesCore.getModel().getLastSelectedGalleryName() && null != MyGalleriesCore.getModel().getLastSelectedGalleryName() && $(".allMyGalleriesSaveMenuLine").show());
    var d = new com.art.core.cookie.Cookie();
    d.getCookieDictionary("ap", "accounttype") != this.app.constants.ANONYMOUS && "" != d.getCookieDictionary("ap", "accounttype") ? ($(".loginSaveGalleryMenuText").hide(), 
    $(".loginSaveMenuGap").hide()) : $(".allMyGalleriesContainer").hide(), $(".lastSavedGalleryMenu").hide(), 
    $(".lastSavedMenuLine").hide(), $(".lastSaveMenuGap").hide();
    var e = "";
    "" != MyGalleriesCore.getModel().getLastSelectedGalleryName() && null != MyGalleriesCore.getModel().getLastSelectedGalleryName() && (e = MyGalleriesCore.getModel().getLastSelectedGalleryName(), 
    e = com.art.core.utils.StringUtil.autoEllipseText(e, 15), $(".lastSavedGalleryMenu").html(e), 
    $(".lastSaveMenuGap").show(), $(".lastSavedGalleryMenu").show(), $(".lastSavedMenuLine").show(), 
    $(".lastSavedGalleryMenu").addClass("saveMenuHover")), this.modalSaveMenuContainer.registerEvents(), 
    setTimeout(function() {
        MyGalleriesCore.getModel().frameStudioFlag = !1;
    }, 250), this.modalSaveMenuContainer.registerCallback(com.art.myGalleries.components.SaveMenuContainer.RECENTLYSAVEDGALLERY_CLICKED, function() {
        a.app.getModel().getIfLoggedInCookieNew() ? (a.app.getModel().environmentSub.selectedGalleryID = a.app.getModel().getLastSelectedGalleryID(), 
        "framingStudioCall" == a.framingStudioCall ? (a.app.getModel().setFramingStudioResponseObject(a.FSData), 
        mygalleriesGA.trackEventWithCategory("Save to Gallery", "Framing Studio Add - Completed"), 
        a.app.sendNotification(new com.art.core.utils.Note(a.app.events.ADD_ITEM_TO_EXISTING_GALLERY, a.FSData.FileName))) : a.app.getModel().savetogalleryoption ? a.app.sendNotification(new com.art.core.utils.Note(a.app.events.ADD_ITEM_TO_EXISTING_GALLERY, a.app.getModel().environmentSub.selectedGalleryID)) : (a.app.getModel().setDestinationSelectedGalleryId(a.app.getModel().environmentSub.selectedGalleryID), 
        a.app.sendNotification(new com.art.core.utils.Note(a.app.events.MOVE_ADD_ITEM_TO_EXISTING_GALLERY)))) : a.app.TriggerLoginModal();
    }), this.modalSaveMenuContainer.registerCallback(com.art.myGalleries.components.SaveMenuContainer.GALLERIES_CLICKED, function() {
        a.app.getModel().getIfLoggedInCookieNew() ? (a.app.getModel().environmentSub.selectedGalleryID = a.modalSaveMenuContainer.GetGalleryID(), 
        "framingStudioCall" == a.framingStudioCall ? (a.app.getModel().setFramingStudioResponseObject(a.FSData), 
        mygalleriesGA.trackEventWithCategory("Save to Gallery", "Framing Studio Add - Completed"), 
        a.app.sendNotification(new com.art.core.utils.Note(a.app.events.ADD_ITEM_TO_EXISTING_GALLERY, a.FSData.FileName))) : a.app.getModel().savetogalleryoption ? a.app.sendNotification(new com.art.core.utils.Note(a.app.events.ADD_ITEM_TO_EXISTING_GALLERY, a.app.getModel().environmentSub.selectedGalleryID)) : (a.app.getModel().setDestinationSelectedGalleryId(a.app.getModel().environmentSub.selectedGalleryID), 
        a.app.sendNotification(new com.art.core.utils.Note(a.app.events.MOVE_ADD_ITEM_TO_EXISTING_GALLERY)))) : a.app.TriggerLoginModal();
    }), this.modalSaveMenuContainer.registerCallback(com.art.myGalleries.components.SaveMenuContainer.NEW_GALLERY_CLICKED, function() {
        if (d.getCookieDictionary("ap", "accounttype") == MyGalleriesCore.constants.ANONYMOUS || "" == d.getCookieDictionary("ap", "accounttype")) {
            var b = com.art.core.components.LoginModal.REGISTER;
            MyGalleriesCore.getModel().saveMenuBoolean = !0;
            var c = new com.art.core.utils.Note(MyGalleriesCore.events.SHOW_GLOBAL_LOGINMODAL, {
                loginOption: b
            }, {
                modulename: "NEW_GALLERY_CLICKED"
            });
            return void MyGalleriesCore.sendNotification(c);
        }
        $("#myModalAddNewGallery").length > 0 && ($(document).off("#myModalAddNewGallery"), 
        $("#myModalAddNewGallery").unbind("click"), $("#myModalAddNewGallery").remove()), 
        a.newGalleryOptionLB = new com.art.core.components.LightBox("newGalleryOptionLB", "body", .7), 
        a.newGalleryOptionLB.show();
        var e = MyGalleriesCore.getModel().saveDefaultGalleryTitle;
        "3" != MyGalleriesCore.getModel().environment.customerZoneId && "4" != MyGalleriesCore.getModel().environment.customerZoneId && "25" != MyGalleriesCore.getModel().environment.customerZoneId && (MyGalleriesCore.getModel().saveDefaultGalleryTitle = e = MyGalleriesCore.getKeyString("galleries"));
        var f = new com.art.myGalleries.components.CommonComponent("addNewGallery", "", 340, 196, "", e);
        return a.modalAddNewGallery = new com.art.core.components.BaseModal("myModalAddNewGallery", 340, "#ffffff", !0), 
        a.modalAddNewGallery.setContents(f.render()), $("body").append(a.modalAddNewGallery.render(a.newGalleryOptionLB.getLightBoxZIndex() + 1)), 
        a.modalAddNewGallery.registerEvents(), $(".modal_header_text").html(a.app.getKeyString("newGalleryKey")), 
        $(".modal_header_text").addClass("uCase gCustomFont"), a.modalAddNewGallery.registerButton("savetomygallery", com.art.core.components.ArtButton.ART_ORANGE, a.app.getModel().getButtonTextForNewGallery(), function() {
            if (f.validateTitle()) {
                var b = $("#addNewGallery_txtTitle").val(), c = a.app.getString("Found invalid characters in title"), d = com.art.core.utils.StringUtil.findInvalidChars(b, "-@#$%^&*()_+<>!~,.?/[]{}|=", "<p>" + c + " {~listOfInvalidChars~}</p>");
                if ("" != d) return $("#showErrorMsg").text(""), $(".newGalleryErrorMsg").text(a.app.getString("Found invalid characters in title")), 
                void $(".newGalleryErrorMsg").css("visibility", "visible");
                a.app.getModel().setAddedGalleryTitle(b), a.app.getModel().savetogalleryoption ? a.app.sendNotification(new com.art.core.utils.Note(a.app.events.ADD_ITEM_TO_NEW_GALLERY, {}, {
                    fromLoginExternalModule: !1
                })) : a.app.sendNotification(new com.art.core.utils.Note(a.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY));
            }
        }), a.modalAddNewGallery.registerCallback(com.art.core.components.BaseModal.CLOSE_CLICKED, function() {
            $(document).off("#myModalAddNewGallery"), $("#myModalAddNewGallery").unbind("click"), 
            $("#myModalAddNewGallery").remove(), a.modalAddNewGallery && a.modalAddNewGallery.close(), 
            a.newGalleryOptionLB && a.newGalleryOptionLB.close();
        }), f.registerCallback(com.art.myGalleries.components.CommonComponent.NEW_GALLERY_SUBMIT, function() {
            if (f.validateTitle()) {
                var b = $("#addNewGallery_txtTitle").val(), c = a.app.getString("Found invalid characters in title"), d = com.art.core.utils.StringUtil.findInvalidChars(b, "-@#$%^&*()_+<>!~,.?/[]{}|=", "<p>" + c + " {~listOfInvalidChars~}</p>");
                if ("" != d) return $(".newGalleryErrorMsg").text(a.app.getString("Found invalid characters in title")), 
                void $(".newGalleryErrorMsg").css("visibility", "visible");
                a.app.getModel().setAddedGalleryTitle(b), a.app.getModel().savetogalleryoption ? a.app.sendNotification(new com.art.core.utils.Note(a.app.events.ADD_ITEM_TO_NEW_GALLERY, {}, {
                    fromLoginExternalModule: !1
                })) : a.app.sendNotification(new com.art.core.utils.Note(a.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY));
            }
        }), void f.registerEvents();
    });
}, com.art.myGalleries.modules.ExternalModule.prototype.destroy = function() {}, 
com.art.myGalleries.modules.ExternalModule.prototype.notify = function() {
    this.app.sendNotification(note);
}, com.art.myGalleries.modules.ExternalModule.prototype.listNotificationInterests = function() {
    return [ this.app.events.ADD_ITEM_TO_EXISTING_GALLERY_EXT, this.app.events.ADD_ITEM_TO_EXISTING_OR_NEW_GALLERY_SAVEMENU, this.app.events.GET_ALL_GALLERIES_SUCCESS, this.app.events.GET_ALL_GALLERIES_FAILED, this.app.events.ADD_ITEM_TO_EXISTING_GALLERY_SUCCESS, this.app.events.ADD_ITEM_TO_EXISTING_GALLERY_FAILED, this.app.events.ADD_ITEM_TO_NEW_GALLERY_SUCCESS, this.app.events.ADD_ITEM_TO_NEW_GALLERY_FAILED, this.app.events.REGISTER_ACCOUNT_SUCCESS, this.app.events.REGISTER_ACCOUNT_FAILED, this.app.events.LOGIN_ACCOUNT_SUCCESS, this.app.events.LOGIN_ACCOUNT_FAILED, this.app.events.GET_FRAME_SKU_SUCCESS, this.app.events.GET_FRAME_SKU_FAILED, this.app.events.MYACCOUNT_WISHLIST, this.app.events.LOGIN_FACEBOOK_MYGALLERY_SUCCESS, this.app.events.LOGIN_FACEBOOK_MYGALLERY_FAILED, this.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY_SUCCESS, this.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY_FAILED, this.app.events.MOVE_ADD_ITEM_TO_EXISTING_GALLERY_SUCCESS, this.app.events.MOVE_ADD_ITEM_TO_EXISTING_GALLERY_FAILED, this.app.events.GET_ALL_GALLERY_ITEMS_SUCCESS, this.app.events.DELETE_GALLERY_ITEM_SUCCESS, this.app.events.DELETE_GALLERY_ITEM_FAILED, this.app.events.UPDATE_GALLERY_ITEM ];
}, com.art.myGalleries.modules.ExternalModule.prototype.handleNotification = function(a) {
    var b = new com.art.core.cookie.Cookie(), c = b.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "isNickNameSystemGenerated");
    switch (a.name) {
      case this.app.events.GET_FRAME_SKU_SUCCESS:
        if (this.FSData = a.body, this.framingStudioCall = "framingStudioCall", "3" != MyGalleriesCore.getModel().environment.customerZoneId && "4" != MyGalleriesCore.getModel().environment.customerZoneId && "25" != MyGalleriesCore.getModel().environment.customerZoneId && (this.galleriesListFlag = !0, 
        !this.app.getModel().getIfLoggedInCookieNew())) {
            var d = com.art.core.components.LoginModal.REGISTER;
            MyGalleriesCore.getModel().saveMenuBoolean = !0;
            var a = new com.art.core.utils.Note(MyGalleriesCore.events.SHOW_GLOBAL_LOGINMODAL, {
                loginOption: d
            }, {
                modulename: "NEW_GALLERY_CLICKED"
            });
            return void MyGalleriesCore.sendNotification(a);
        }
        0 == this.app.getModel().galleryList.length ? this.getUserGalleries() : (1 == this.app.getModel().saveMenuBoolean && ("3" != MyGalleriesCore.getModel().environment.customerZoneId && "4" != MyGalleriesCore.getModel().environment.customerZoneId && "25" != MyGalleriesCore.getModel().environment.customerZoneId ? (this.galleriesListFlag = !0, 
        0 == this.app.getModel().galleryList.length ? this.getUserGalleries() : this.app.getModel().galleryList.length >= 2 ? this.setMenuModalInit() : this.app.getModel().UpdateItemToDefaultGallery()) : this.setMenuModalInit()), 
        "y" == com.art.core.utils.BrowserUtil.getQueryString("mg") ? (MyGalleriesCore.getModel().setGalleryKey(this.app.getModel().getMyGalObjectVal().gid), 
        0 == MyGalleriesCore.getModel().galleryItemList.length && MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.GET_ALL_GALLERY_ITEMS, {
            module: ""
        }))) : "rv" == com.art.core.utils.BrowserUtil.getQueryString("mg"));
        break;

      case this.app.events.GET_FRAME_SKU_FAILED:
        break;

      case this.app.events.MYACCOUNT_WISHLIST:
        this.OpenWishListModal(), $.browser.msie && ($("#baseModalButtonBarRight_myModalWishlist").css("width", "35%"), 
        $("#closeBtn").css("height", "32px"), $("#closeBtn").css("left", "120px"), $("#closeBtn_label").css("height", "32px"), 
        $("#closeBtn_rightcap").css("height", "32px"));
        break;

      case this.app.events.UPDATE_GALLERY_ITEM:
        this.updateGalleryItem();
        break;

      case this.app.events.ADD_ITEM_TO_EXISTING_OR_NEW_GALLERY_SAVEMENU:
        0 == this.app.getModel().galleryList.length ? this.getUserGalleries() : (0 == MyGalleriesCore.getModel().galleryItemList.length && MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.GET_ALL_GALLERY_ITEMS, {
            module: ""
        })), this.setMenuModalInit());
        break;

      case this.app.events.ADD_ITEM_TO_EXISTING_GALLERY_EXT:
        if (!this.app.getModel().getIfLoggedInCookieNew()) {
            var d = com.art.core.components.LoginModal.REGISTER;
            MyGalleriesCore.getModel().saveMenuBoolean = !0;
            var a = new com.art.core.utils.Note(MyGalleriesCore.events.SHOW_GLOBAL_LOGINMODAL, {
                loginOption: d
            }, {
                modulename: "NEW_GALLERY_CLICKED"
            });
            return void MyGalleriesCore.sendNotification(a);
        }
        this.galleriesListFlag = !0, 0 == this.app.getModel().galleryList.length ? this.getUserGalleries() : this.app.getModel().galleryList.length >= 2 ? this.setMenuModalInit() : this.app.getModel().UpdateItemToDefaultGallery();
        break;

      case this.app.events.GET_ALL_GALLERIES_SUCCESS:
        "y" == com.art.core.utils.BrowserUtil.getQueryString("mg") ? (MyGalleriesCore.getModel().setGalleryKey(this.app.getModel().getMyGalObjectVal().gid), 
        0 == MyGalleriesCore.getModel().galleryItemList.length && MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.GET_ALL_GALLERY_ITEMS, {
            module: ""
        }))) : "rv" == com.art.core.utils.BrowserUtil.getQueryString("mg"), 1 == this.app.getModel().saveMenuBoolean && (1 == this.galleriesListFlag && 1 == this.app.getModel().galleryList.length ? this.app.getModel().UpdateItemToDefaultGallery() : 1 == this.galleriesListFlag && 0 == this.app.getModel().galleryList.length ? this.app.getModel().createDefaultGallery() : this.setMenuModalInit());
        break;

      case this.app.events.GET_ALL_GALLERIES_FAILED:
        1 == this.app.getModel().saveMenuBoolean && this.setMenuModalInit(), "y" == com.art.core.utils.BrowserUtil.getQueryString("mg") ? (MyGalleriesCore.getModel().setGalleryKey(this.app.getModel().getMyGalObjectVal().gid), 
        0 == MyGalleriesCore.getModel().galleryItemList.length && MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.GET_ALL_GALLERY_ITEMS, {
            module: ""
        }))) : "rv" == com.art.core.utils.BrowserUtil.getQueryString("mg");
        break;

      case this.app.events.ADD_ITEM_TO_EXISTING_GALLERY_SUCCESS:
        this.newCreatedGalleryId = a.body.GalleryName, this.app.getModel().setLastSelectedGalleryID(a.body.GalleryID), 
        this.app.getModel().setLastSelectedGalleryName(a.body.Library.Galleries[0].Name), 
        this.app.getModel().galleryList = "", this.myModalSaveToGallery.close(), $(document).off("click", "#loginSavetogallery"), 
        $("#loginSavetogallery").unbind("click"), $(document).off("click", "#registerSavetogallery"), 
        $("#registerSavetogallery").unbind("click"), $(document).off("click", ".lastSavedGalleryMenu"), 
        $(".lastSavedGalleryMenu").unbind("click");
        break;

      case this.app.events.ADD_ITEM_TO_EXISTING_GALLERY_FAILED:
        break;

      case this.app.events.ADD_ITEM_TO_NEW_GALLERY_SUCCESS:
        if (0 != a.body.OperationResponse.OperationStatus) if (1 == this.app.getModel().saveMenuBoolean) {
            var e = a.body.OperationResponse.ResponseMessage;
            $(".newGalleryErrorMsg").text(e), $(".newGalleryErrorMsg").css("visibility", "visible");
        } else if (503 == a.body.OperationResponse.ResponseCode) $(".commonErrorMsg").css("width", "450px"), 
        $(".commonErrorMsg").css("top", "165px"), $(".commonErrorMsg").text(this.app.getString("You have an existing gallery with this name. Please enter a new name or select your existing gallery from the dropdown menu.")), 
        $(".commonErrorMsg").show(); else {
            var e = a.body.OperationResponse.ResponseMessage;
            $(".commonErrorMsg").text(e), $(".commonErrorMsg").show();
        } else {
            this.newCreatedGalleryId = a.body.GalleryName;
            var f = a.body.Library.Galleries[0].Name;
            if (this.app.getModel().setLastSelectedGalleryID(a.body.GalleryID), this.app.getModel().setLastSelectedGalleryName(f), 
            this.app.getModel().galleryList = "", this.myModalSaveToGallery && this.myModalSaveToGallery.close(), 
            this.modalGalleryLB && this.modalGalleryLB.close(), $(document).off("click", "#loginSavetogallery"), 
            $("#loginSavetogallery").unbind("click"), $(document).off("click", "#registerSavetogallery"), 
            $("#registerSavetogallery").unbind("click"), 1 == this.app.getModel().saveMenuBoolean && ($(document).off("#myModalAddNewGallery"), 
            $("#myModalAddNewGallery").unbind("click"), $("#myModalAddNewGallery").remove(), 
            this.newGalleryOptionLB && this.newGalleryOptionLB.close(), $("#SaveMenuContainer").length > 0 && ($(document).off("#SaveMenuContainer"), 
            $("#SaveMenuContainer").unbind("click"), $("#SaveMenuContainer").remove())), this.updateGalleryItemFlag) {
                $(".mygalmoveoptions").show(), $(".mygalsaveoptions").hide(), $(".mygalupdatesize").hide(), 
                this.updateGalleryItemFlag = !1;
                var g = this.app.getModel().getMyGalObjectVal();
                g.itemid = a.body.Library.Galleries[0].Items[0].ItemGalleryItemID, this.app.getModel().setMyGalObjectVal(g), 
                this.app.getModel().setSelectedGridItem(this.app.getModel().getMyGalObjectVal().itemid), 
                MyGalleriesCore.getModel().galleryItemList = "", this.app.getModel().savetogalleryoption || MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.GET_ALL_GALLERY_ITEMS, {
                    module: ""
                }));
            }
            if (a.type && a.type.fromLoginExternalModule) if (void 0 != window.newProductPage && window.newProductPage) {
                var h = document.createEvent("CustomEvent");
                h.initCustomEvent("LogInEventCallback", !0, !0, !0), window.dispatchEvent(h);
            } else {
                var i = location.href, j = i.indexOf("#");
                j > -1 && (i = i.substring(0, j)), window.location.href = i;
            }
        }
        $(document).off(".lastSavedGalleryMenu"), $(".lastSavedGalleryMenu").unbind("click");
        break;

      case this.app.events.ADD_ITEM_TO_NEW_GALLERY_FAILED:
        var e = a.body.OperationResponse.ResponseMessage;
        $(".commonErrorMsg").text(e), $(".commonErrorMsg").show();
        break;

      case this.app.events.REGISTER_ACCOUNT_SUCCESS:
        this.loginModalClose(), this.modalGalleryLB && this.modalGalleryLB.close(), this.myModalSaveToGallery && (this.myModalSaveToGallery.close(), 
        $("#" + this.myModalSaveToGallery.id).remove());
        try {
            if (MyGalleriesCore.getModule("LoginInvokeComponent").doNotRefreshOnLogin) return void dle_handleLoginSuccess();
        } catch (k) {}
        if ("true" == c && "true" == MyGalleriesCore.getEnvironment().enableCommunityFeatures) return void this.app.RedirectToProfileFlow();
        location.reload(!0);
        break;

      case this.app.events.REGISTER_ACCOUNT_FAILED:
        $(".loginModalErrorMsg").css("display", "block"), "exist" == a.body ? ($.browser.msie && 7 == parseInt($.browser.version) && "myGalleryLogin" != this.id && $(".loginErrorMsg").css("top", "60px"), 
        $(".loginErrorMsg").text(this.app.getString("The email address you entered is already associated with an Art.com account."))) : "invalidemail" == a.body ? $(".loginErrorMsg").text(this.app.getString("Please enter a valid email address.")) : "invalidpassword" == a.body ? $(".loginErrorMsg").text(this.app.getString("Password must be at least 8 characters.")) : "failure" == a.body && ($.browser.msie && ("myGalleryLogin" != this.id ? $(".loginErrorMsg").css("top", "40px") : $(".loginErrorMsg").css("top", "70px")), 
        $(".loginErrorMsg").text(this.app.getString("We were unable to find an account associated with that email address.")));
        break;

      case this.app.events.LOGIN_ACCOUNT_SUCCESS:
        if (a.type.modulename == this.NAME) {
            this.myModalSaveToGallery.close(), $("#" + this.myModalSaveToGallery.id).remove();
            var i = location.href, j = i.indexOf("#");
            return j > -1 && (i = i.substring(0, j)), void this.app.RedirectToProfileFlow();
        }
        break;

      case this.app.events.LOGIN_ACCOUNT_FAILED:
        "failure" == a.body && ($(".loginModalErrorMsg").css("display", "block"), $.browser.msie && ("myGalleryLogin" != this.id ? $(".loginErrorMsg").css("top", "40px") : $(".loginErrorMsg").css("top", "70px")), 
        $(".loginErrorMsg").text(this.app.getString("We were unable to find an account associated with that email address.")));
        break;

      case this.app.events.GET_FRAME_SKU_FAILED:
        break;

      case this.app.events.LOGIN_FACEBOOK_MYGALLERY_SUCCESS:
        if (a.type.modulename == this.NAME) return this.myModalSaveToGallery && (this.myModalSaveToGallery.close(), 
        $("#" + this.myModalSaveToGallery.id).remove()), void this.app.RedirectToProfileFlow();
        break;

      case this.app.events.LOGIN_FACEBOOK_MYGALLERY_FAILED:
        break;

      case this.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY_SUCCESS:
      case this.app.events.MOVE_ADD_ITEM_TO_EXISTING_GALLERY_SUCCESS:
        if (503 == a.body.OperationResponse.ResponseCode) {
            var e = a.body.OperationResponse.ResponseMessage;
            $(".newGalleryErrorMsg").text(e), $(".newGalleryErrorMsg").css("visibility", "visible");
        } else MyGalleriesCore.getModel().savetogalleryoption = !0, this.app.getModel().resetLastSelectedGalleryName(a.body.Library.Galleries[0].Name), 
        this.app.getModel().setLastSelectedGalleryID(a.body.GalleryID), this.app.getModel().setLastSelectedGalleryName(a.body.Library.Galleries[0].Name), 
        this.app.getModel().galleryList = "", $(".mygalmoveoptions").hide(), $(".mygalcopyoptions").hide(), 
        $(".mygalsaveoptions").show(), $(".prd-save-to-gallery").hasClass("moveoption") && ($(".prd-save-to-gallery").removeClass("moveoption"), 
        $(".prd-save-to-gallery").addClass("saveoption")), this.modalAddNewGallery && ($(document).off("#myModalAddNewGallery"), 
        $("#myModalAddNewGallery").unbind("click"), $("#myModalAddNewGallery").remove(), 
        this.modalAddNewGallery.close(), this.newGalleryOptionLB && this.newGalleryOptionLB.close());
        break;

      case this.app.events.DELETE_GALLERY_ITEM_SUCCESS:
        if (this.updateGalleryItemFlag) this.updateGalleryItemToGallery(); else {
            var l = a.body.Library;
            if (null != l) {
                this.modalDeleteArt && this.modalDeleteArt.close(), MyGalleriesCore.getModel().savetogalleryoption = !0, 
                this.app.getModel().resetLastSelectedGalleryName(a.body.Library.Galleries[0].Name), 
                this.app.getModel().setLastSelectedGalleryID(a.body.Library.Galleries[0].GalleryId), 
                this.app.getModel().setLastSelectedGalleryName(a.body.Library.Galleries[0].Name);
                var m = l.Galleries[0].Items;
                this.app.getModel().flattenGalleryItemDetails(m), $(".mygalmoveoptions").hide(), 
                $(".mygalsaveoptions").show(), $(".prd-save-to-gallery").hasClass("moveoption") && ($(".prd-save-to-gallery").removeClass("moveoption"), 
                $(".prd-save-to-gallery").addClass("saveoption")), this.deleteArtLB && this.deleteArtLB.close();
            } else if (607 == a.body.OperationResponse.ResponseCode) {
                $(".modal_header_text").html(this.app.getString("UNABLE TO REMOVE ITEM"));
                var n = this.app.getModel().getGalleryByGalleryId(this.app.getModel().environmentSub.selectedGalleryID), f = unescape(n.GalleryData.Name), o = this.app.getKeyString("unableRemoveGalItemKey");
                $("#deleteArtComponent_Title").html(o);
                a.body.OperationResponse.ResponseMessage;
                $("#deleteArtComponent_Content").html(""), $("#delete").hide(), $("#dontDelete").attr("value", "OK"), 
                $("#dontDelete").css("width", "132px");
            }
        }
        break;

      case this.app.events.DELETE_GALLERY_ITEM_FAILED:    }
}, com.art.myGalleries.modules.ExternalModule.prototype.setBtnStyle = function() {
    $(".MyGalleriesRightContainer").css("visibility", "hidden"), $("#SavetoGalleryConfirm").css("visibility", "visible"), 
    $("#SavetoGalleryConfirm").css("position", "absolute"), $("#SavetoGalleryConfirm").css("margin-top", "10px"), 
    $("#SavetoGalleryConfirm").css("margin-left", "235px;"), $("#SavetoGalleryConfirm").css("margin-bottom", "20px;"), 
    $("#galleryName").text('"' + this.selectedGalleryName + '"'), $("#continue").css("visibility", "hidden"), 
    $("#privacyChk").css("visibility", "hidden"), $("#privacyTxt").css("visibility", "hidden"), 
    $("#doneBtn").css("visibility", "visible"), $("#doneBtn").css("position", "absolute"), 
    $("#doneBtn").css("right", "25px"), $("#doneBtn").css("bottom", "25px"), $.browser.msie && ($("#doneBtn").css("width", "65px"), 
    $("#doneBtn_label").css("height", "32px"), $("#doneBtn_rightcap").css("height", "32px")), 
    $("#visitGallery").css("visibility", "visible"), $("#visitGallery").css("position", "absolute"), 
    $("#visitGallery").css("right", "90px"), $("#visitGallery").css("bottom", "25px"), 
    $.browser.msie && ($("#visitGallery").css("width", "105px"), $("#visitGallery_label").css("height", "32px"), 
    $("#visitGallery_rightcap").css("height", "32px"));
}, com.art.myGalleries.modules.ExternalModule.prototype.getTemplate = function() {
    var a = this.template;
    return a = a.replace(/\[IMAGE_DOMAIN\]/gi, this.imagePath), a = a.replace(/\[$MYGALLERY\]/gi, this.imagePath), 
    a.replace("$NAME", this.NAME);
}, com.art.myGalleries.modules.ExternalModule.prototype.getTarget = function() {
    return this.moduleData.target;
}, com.art.myGalleries.modules.ExternalModule.prototype.template = "", com.art.myGalleries.modules.TrayModule = function(a, b) {
    this.app = b, this.moduleData = a, this.NAME = com.art.myGalleries.modules.TrayModule.NAME, 
    this.menuContainerComponent = new com.art.myGalleries.components.MenuContainerComponent(this.app.getModel().environment.imagePath), 
    this.COOKIE_NAME = "arts", this.COOKIE_KEY = "oneClick", this.menuContainerComp, 
    this.loginLB, this.loginOption = "", this.modalSignUpLB, this.modalGallery, this.selectedGalleryName = "", 
    this.framingStudioCall, this.FSData = {}, this.loginOption = "", this.wishList, 
    this.modalWishList;
}, com.art.myGalleries.modules.TrayModule.NAME = "TrayModule", com.art.myGalleries.modules.TrayModule.prototype.init = function(a) {
    var b = this;
    0 == $("#TrayModule").length && ($(this.getTarget()).append(this.getTemplate()), 
    $(".MyGalleriesTrayModuleTabContainer").append(b.menuContainerComponent.render()), 
    $(document).on("click", ".MyGalleriesTrayModuleTabContainer, .MyGalleriesTrayModuleTabArrow", function() {
        "block" != $(".tray_container").css("display") && ($(".tray_container").slideDown("slow", function() {
            $(".tray_container").css("overflow", "visible");
        }), $(".TraygalleryBadge").hide(), b.showLastSelectedGalleryName()), $(".MyGalleriesTrayModuleTabArrow").addClass("hidden");
    }), $(document).on("mouseenter", ".MyGalleriesTrayModuleTabContainer", function() {
        "block" != $(".tray_container").css("display") && ($(".galleryBadge").hide(), $(".TraygalleryBadge").hide(), 
        $(".tray_container").slideDown("slow", function() {
            $(".tray_container").css("overflow", "visible"), 0 != b.app.getModel().getGalleryIDCountCookie(MyGalleriesCore.getModel().getLastSelectedGalleryKey()) && $(".galleryBadge").show();
        }), $(".MyGalleriesTrayModuleTabArrow").addClass("hidden"), b.showLastSelectedGalleryName());
    }), $(document).on("mouseleave", ".MyGalleriesTrayModuleTabContainer", function() {
        "block" == $(".tray_container").css("display") && ($(".galleryBadge").hide(), $(".tray_container").slideUp("slow"), 
        setTimeout(function() {
            $(".MyGalleriesTrayModuleTabArrow").removeClass("hidden"), $(".tray_container").stop(!0, !0).hide();
        }, 300), 0 != b.app.getModel().getGalleryIDCountCookie(MyGalleriesCore.getModel().getLastSelectedGalleryKey()) ? $(".TraygalleryBadge").show() : $(".TraygalleryBadge").hide());
    }), $(document).on("mouseleave", ".tray_container", function() {
        $(".galleryBadge").hide(), $(".MyGalleriesTrayModuleTabArrow").addClass("hidden"), 
        $(this).slideUp("slow", function() {
            0 != b.app.getModel().getGalleryIDCountCookie(MyGalleriesCore.getModel().getLastSelectedGalleryKey()) && $(".TraygalleryBadge").show();
        }), setTimeout(function() {
            $(".MyGalleriesTrayModuleTabArrow").removeClass("hidden"), $(".tray_container").stop(!0, !0).hide();
        }, 300);
    }), $(document).on("click", ".MyGalleriesTrayModuleTabClose", function() {
        $(".galleryBadge").hide(), $(".tray_container").slideUp("slow"), setTimeout(function() {
            $(".tray_container").stop(!0, !0).hide();
        }, 300), 0 != b.app.getModel().getGalleryIDCountCookie(MyGalleriesCore.getModel().getLastSelectedGalleryKey()) ? $(".TraygalleryBadge").show() : $(".TraygalleryBadge").hide();
    }), $(document).on("click", ".viewGalleryButton", function() {
        window.location.href = "http://" + window.location.hostname + b.app.getModel().environment.profileURL + "gallery/", 
        mygalleriesGA.trackEventWithCategory("View Galleries", b.app.getModel().environment.profileURL + "gallery/"), 
        mygalleriesGA.trackEventWithCategory("View Galleries", "via footer popup");
    }), $(document).on("click", "#lastGalleryName", function() {
        var a = MyGalleriesCore.getModel().getLastSelectedGalleryKey();
        window.location.href = "http://" + window.location.hostname + b.app.getModel().environment.profileURL + "gallery/" + a + "/?vt=gv&mtm=0";
    }), this.toggleGalleryBadge(), "" != MyGalleriesCore.getModel().getLastSelectedGalleryName() ? $(".tray_subSection").show() : $(".tray_subSection").hide(), 
    this.menuContainerComp = new com.art.myGalleries.components.MenuContainerComponent("menuContainerComponent"), 
    this.menuContainerComp.registerEvents(), this.menuContainerComp.registerCallback(com.art.myGalleries.components.MenuContainerComponent.LOGIN_CLICK, function() {
        b.loginOption = com.art.core.components.LoginModal.LOGIN, b.app.getModel().loginSource = b.app.constants.LOGINTRAY, 
        b.app.getModel().registerSource = b.app.constants.LOGINTRAY, b.showLoginModal();
    }), this.menuContainerComp.registerCallback(com.art.myGalleries.components.MenuContainerComponent.REGISTER_CLICK, function() {
        b.loginOption = com.art.core.components.LoginModal.REGISTER, b.app.getModel().loginSource = b.app.constants.LOGINTRAY, 
        b.app.getModel().registerSource = b.app.constants.LOGINTRAY, b.showLoginModal();
    }), $(".viewGalleryButton").mouseover(function() {
        $(".viewGalleryButton").addClass("mg-viewGalleryButtonHover");
    }), $(".viewGalleryButton").mouseout(function() {
        $(".viewGalleryButton").removeClass("mg-viewGalleryButtonHover");
    }));
}, com.art.myGalleries.modules.TrayModule.prototype.showLoginModal = function() {
    var a = new com.art.core.utils.Note(MyGalleriesCore.events.SHOW_GLOBAL_LOGINMODAL, {
        loginOption: this.loginOption
    }, {
        modulename: this.NAME
    });
    MyGalleriesCore.sendNotification(a);
}, com.art.myGalleries.modules.TrayModule.prototype.destroy = function() {}, com.art.myGalleries.modules.TrayModule.prototype.showLastSelectedGalleryName = function() {
    var a = "";
    "" != MyGalleriesCore.getModel().getLastSelectedGalleryName() && null != MyGalleriesCore.getModel().getLastSelectedGalleryName() && (a = MyGalleriesCore.getModel().getLastSelectedGalleryName(), 
    a = com.art.core.utils.StringUtil.autoEllipseText(a, 15), $("#lastGalleryName").html(a));
}, com.art.myGalleries.modules.TrayModule.prototype.getGalleryIdCount = function(a) {
    var b = MyGalleriesCore.getModel().getGalleryIDCountCookie(a);
    return b;
}, com.art.myGalleries.modules.TrayModule.prototype.notify = function() {
    this.app.sendNotification(note);
}, com.art.myGalleries.modules.TrayModule.prototype.listNotificationInterests = function() {
    return [ this.app.events.ADD_ITEM_TO_NEW_GALLERY_SUCCESS, this.app.events.ADD_ITEM_TO_NEW_GALLERY_FAILED, this.app.events.LOGIN_ACCOUNT_TRAY_SUCCESS, this.app.events.LOGIN_ACCOUNT_TRAY_FAILED, this.app.events.REGISTER_ACCOUNT_TRAY_SUCCESS, this.app.events.REGISTER_ACCOUNT_TRAY_FAILED, this.app.events.GET_FRAME_SKU_SUCCESS, this.app.events.GET_FRAME_SKU_FAILED, this.app.events.LOGIN_FACEBOOK_MYGALLERY_SUCCESS, this.app.events.LOGIN_FACEBOOK_MYGALLERY_FAILED, this.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY_SUCCESS, this.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY_FAILED, this.app.events.MOVE_ADD_ITEM_TO_EXISTING_GALLERY_SUCCESS, this.app.events.MOVE_ADD_ITEM_TO_EXISTING_GALLERY_FAILED ];
}, com.art.myGalleries.modules.TrayModule.prototype.handleNotification = function(a) {
    var b = new com.art.core.cookie.Cookie(), c = b.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "isNickNameSystemGenerated");
    switch (a.name) {
      case this.app.events.ADD_ITEM_TO_NEW_GALLERY_SUCCESS:
      case this.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY_SUCCESS:
      case this.app.events.MOVE_ADD_ITEM_TO_EXISTING_GALLERY_SUCCESS:
        if (0 != a.body.OperationResponse.OperationStatus && 503 == a.body.OperationResponse.ResponseCode) return;
        this.app.getModel().setCookieGalleryIDCountCookie(a.body.Library.Galleries[0].ItemKey), 
        this.app.getModel().setLastSelectedGalleryKey(a.body.Library.Galleries[0].ItemKey);
        var d = this.getGalleryIdCount(a.body.Library.Galleries[0].ItemKey);
        this.setGalleryCount(d), this.updateCountWithAjaxSuccess(), $(document).off("click", ".lastSavedGalleryMenu"), 
        $(".lastSavedGalleryMenu").unbind("click");
        break;

      case this.app.events.ADD_ITEM_TO_NEW_GALLERY_FAILED:
      case this.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY_FAILED:
      case this.app.events.MOVE_ADD_ITEM_TO_EXISTING_GALLERY_FAILED:
        break;

      case this.app.events.REGISTER_ACCOUNT_TRAY_SUCCESS:
        _gaq.push([ "t1._setCustomVar", 3, "logged-in", "true", 1 ]), _gaq.push([ "global._setCustomVar", 3, "logged-in", "true", 1 ]);
        var e = this.login.getLoginAccountData();
        if (this.app.getModel().setLoginUserNameCookie(e.username), "true" == c && "true" == MyGalleriesCore.getEnvironment().enableCommunityFeatures) return void this.app.RedirectToProfileFlow();
        this.refreshpage();
        break;

      case this.app.events.REGISTER_ACCOUNT_TRAY_FAILED:
        $(".loginModalErrorMsg").css("display", "block"), "exist" == a.body ? ($.browser.msie && 7 == parseInt($.browser.version) && "myGalleryLogin" != this.id && $(".loginErrorMsg").css("top", "60px"), 
        $(".loginErrorMsg").text(this.app.getString("The email address you entered is already associated with an Art.com account."))) : "invalidemail" == a.body ? $(".loginErrorMsg").text(this.app.getString("Please enter a valid email address.")) : "invalidpassword" == a.body ? $(".loginErrorMsg").text(this.app.getString("Password must be at least 8 characters.")) : "failure" == a.body && ($.browser.msie && ("myGalleryLogin" != this.id ? $(".loginErrorMsg").css("top", "40px") : $(".loginErrorMsg").css("top", "70px")), 
        $(".loginErrorMsg").text(this.app.getString("We were unable to find an account associated with that email address.")));
        break;

      case this.app.events.LOGIN_ACCOUNT_TRAY_SUCCESS:
        if (a.type.modulename == this.NAME) {
            _gaq.push([ "t1._setCustomVar", 3, "logged-in", "true", 1 ]), _gaq.push([ "global._setCustomVar", 3, "logged-in", "true", 1 ]);
            var f = location.href;
            if (f = f.substring(0, f.indexOf("#")), "true" == c && "true" == MyGalleriesCore.getEnvironment().enableCommunityFeatures) return void this.app.RedirectToProfileFlow();
            this.refreshpage(), updateHeaderSignIn("LOGIN_SUCCESS", e);
        }
        break;

      case this.app.events.LOGIN_ACCOUNT_TRAY_FAILED:
        "failure" == a.body && ($(".loginModalErrorMsg").css("display", "block"), $.browser.msie && ("myGalleryLogin" != this.id ? $(".loginErrorMsg").css("top", "40px") : $(".loginErrorMsg").css("top", "70px")), 
        $(".loginErrorMsg").text(this.app.getString("We were unable to find an account associated with that email address.")));
        break;

      case this.app.events.GET_FRAME_SKU_FAILED:
        break;

      case this.app.events.LOGIN_FACEBOOK_MYGALLERY_SUCCESS:
        if (a.type.modulename == this.NAME) {
            if (_gaq.push([ "t1._setCustomVar", 3, "logged-in", "true", 1 ]), _gaq.push([ "global._setCustomVar", 3, "logged-in", "true", 1 ]), 
            this.loginModalClose(), "true" == c && "true" == MyGalleriesCore.getEnvironment().enableCommunityFeatures) return void this.app.RedirectToProfileFlow();
            this.refreshpage(), updateHeaderSignIn("LOGIN_FACEBOOK_SUCCESS", e);
        }
        break;

      case this.app.events.LOGIN_FACEBOOK_MYGALLERY_FAILED:    }
}, com.art.myGalleries.modules.TrayModule.prototype.toggleGalleryBadge = function() {
    var a = this.getGalleryIdCount(MyGalleriesCore.getModel().getLastSelectedGalleryKey());
    0 == a ? "" != MyGalleriesCore.getModel().getLastSelectedGalleryName() || null != MyGalleriesCore.getModel().getLastSelectedGalleryName() ? this.showSubTrayHtml() : this.hideSubTrayHtml() : (this.setGalleryCount(a), 
    this.showSubTrayHtml());
}, com.art.myGalleries.modules.TrayModule.prototype.refreshpage = function() {
    window.location.href = window.location.href.indexOf("?") > -1 ? window.location.href + "&myLoginProduct=true" : window.location.href + "?myLoginProduct=true";
}, com.art.myGalleries.modules.TrayModule.prototype.setGalleryCount = function(a) {
    $(".galleryBadge").text(a), $(".TraygalleryBadge").text(a);
    var b = "(" + a + ") " + this.app.getString("items successfully added to:"), c = "(" + a + ") " + this.app.getString("item successfully added to:");
    1 == a ? $(".labelTrayCount").text(c) : $(".labelTrayCount").text(b);
}, com.art.myGalleries.modules.TrayModule.prototype.updateCountWithAjaxSuccess = function() {
    var a = this.getGalleryIdCount(MyGalleriesCore.getModel().getLastSelectedGalleryKey());
    this.setGalleryCount(a), this.showSubTrayHtml(), this.showContainerHtml();
}, com.art.myGalleries.modules.TrayModule.prototype.showSubTrayHtml = function() {
    var a = this.getGalleryIdCount(MyGalleriesCore.getModel().getLastSelectedGalleryKey());
    0 != a ? ($(".galleryBadge").show(), $(".TraygalleryBadge").show()) : ($(".galleryBadge").hide(), 
    $(".TraygalleryBadge").hide()), "" != MyGalleriesCore.getModel().getLastSelectedGalleryName() && 0 != a ? $(".tray_subSection").show() : $(".tray_subSection").hide(), 
    MyGalleriesCore.getModel().getIfLoggedInCookieNew() ? $(".tray_login").hide() : $(".tray_login").show();
}, com.art.myGalleries.modules.TrayModule.prototype.showContainerHtml = function() {
    var a = this.getGalleryIdCount(MyGalleriesCore.getModel().getLastSelectedGalleryKey());
    this.showLastSelectedGalleryName(), "block" != $(".tray_container").css("display") && ($(".galleryBadge").hide(), 
    $(".TraygalleryBadge").hide(), $(".tray_container").slideDown("slow", function() {
        $(".tray_container").css("overflow", "visible"), 0 != a && $(".galleryBadge").show();
    }), this.showLastSelectedGalleryName()), setTimeout(function() {
        $(".galleryBadge").hide(), $(".TraygalleryBadge").hide(), $(".tray_container").slideUp("slow", function() {
            0 != a && $(".TraygalleryBadge").show();
        }), setTimeout(function() {
            $(".tray_container").stop(!0, !0).hide();
        }, 300);
    }, 5500);
}, com.art.myGalleries.modules.TrayModule.prototype.hideSubTrayHtml = function() {
    $(".galleryBadge").hide(), $(".TraygalleryBadge").hide(), $(".tray_subSection").hide();
}, com.art.myGalleries.modules.TrayModule.prototype.getTemplate = function() {
    var a = this.template;
    return a = a.replace("$NAME", this.NAME), a = a.replace("$TABLOGO", this.app.getKeyString("myGalleryKey"));
}, com.art.myGalleries.modules.TrayModule.prototype.getTarget = function() {
    return this.moduleData.target;
}, com.art.myGalleries.modules.TrayModule.prototype.loginModalClose = function() {
    trace("login closed"), $(document).off("#myModalLogin"), $("#myModalLogin").unbind("click"), 
    $("#myModalLogin").remove(), this.loginLink && this.loginLink.doClose(), this.modalSignUpLB && this.modalSignUpLB.close(), 
    $("#mygallerylogin").unbind("click"), $(document).off("click", "#mygallerylogin"), 
    $("#mygallerylogin").remove(), $("#mygalleryregister").unbind("click"), $(document).off("click", "#mygalleryregister"), 
    $("#mygalleryregister").remove(), $(document).off("#" + this.id), $("#" + this.id).unbind("click"), 
    $("#" + this.id).remove();
}, com.art.myGalleries.modules.TrayModule.prototype.template = "<div id='$NAME' class='MyGalleriesTrayModuleContainer'><div class='MyGalleriesTrayModuleBorderTopContainer'></div><div class='MyGalleriesTrayModuleTabContainer floatRight cPointer'><div class='line-separator-tray floatLeft'></div><div class='TraygalleryBadge gCustomFont'></div><div class='MyGalleriesTrayModuleTabLogo gCustomFont uCase'>$TABLOGO</div><div class='line-separator-tray floatRight'></div><div class='MyGalleriesTrayModuleTabArrow cPointer floatRight'></div></div></div>", 
com.art.myGalleries.commands.ApplicationCommand = function(a, b) {
    this.NAME = com.art.myGalleries.commands.ApplicationCommand.NAME, this.app = b, 
    this.serviceProvider = new com.art.core.services.ServiceProvider(this.app.getEnvironment()), 
    this.model = this.app.getModel(), this.processing = !1, this.pageNumber = 1, this.currentNote, 
    this.username, this.password, this.tempNewCreatedGalleryId, this.tempLastSelectedGalleryId, 
    this.printFileName, this.fromExternalModule = !1, this.fromLoginExternalModule = !1, 
    this.fromGridModule = !1, this.referredModule = "", this.requestfromforb = !1;
}, com.art.myGalleries.commands.ApplicationCommand.NAME = "ApplicationCommand", 
com.art.myGalleries.commands.ApplicationCommand.prototype.init = function() {}, 
com.art.myGalleries.commands.ApplicationCommand.prototype.listNotificationInterests = function() {
    return [ this.app.events.STARTUP, this.app.events.GALLERY_ITEM_LIST_REQUEST, this.app.events.GALLERY_ITEM_LIST_REQUEST_SUCCESS, this.app.events.GALLERY_ITEM_LIST_REQUEST_FAILED, this.app.events.GET_ALL_GALLERY_ITEMS, this.app.events.UPDATE_GALLERY_TITLE_DESC, this.app.events.GALLERY_ITEM_SORT, this.app.events.ADD_ITEM_TO_EXISTING_GALLERY, this.app.events.ADD_ITEM_TO_EXISTING_GALLERY_DP, this.app.events.ADD_GALLERY_TITLE_DESC, this.app.events.GALLERY_ITEM_SORT, this.app.events.GET_SYSTEM_LIBRARY, this.app.events.GET_ALL_GALLERY_ITEMS, this.app.events.UPDATE_GALLERY_TITLE_DESC, this.app.events.GALLERY_ITEM_SORT, this.app.events.ADD_GALLERY_TITLE_DESC, this.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY, this.app.events.MOVE_ADD_ITEM_TO_EXISTING_GALLERY, this.app.events.GET_ALL_GALLERIES, this.app.events.GET_ALL_GALLERIES_USER, this.app.events.ADD_ITEM_TO_NEW_GALLERY, this.app.events.ADD_ITEM_TO_NEW_GALLERY_DP, this.app.events.REGISTER_ACCOUNT, this.app.events.LOGIN_ACCOUNT, this.app.events.LOGOUT_MYGALLERY, this.app.events.CREATE_WALL, this.app.events.UPDATE_WALL_ITEMS, this.app.events.GET_WALLS, this.app.events.ADD_SIMILAR_ARTIST_ITEM, this.app.events.ADD_BARE_WALLS, this.app.events.SHARE_WALL, this.app.events.GET_USER_LIBRARY, this.app.events.DELETE_GALLERY, this.app.events.DELETE_GALLERY_ITEM, this.app.events.UPDATE_BARE_WALL, this.app.events.DELETE_GALLERY_ITEM_DP, this.app.events.UPDATE_PRIVACY_SETTINGS, this.app.events.GET_FRAME_SKU, this.app.events.GET_WALL_BY_ID, this.app.events.GET_WALL_BY_PROFILE_KEY, this.app.events.GET_USER_LIBRARY_BY_PROFILE, this.app.events.LOGIN_FACEBOOK_MYGALLERY, this.app.events.GET_FRAME_ID, this.app.events.FACEBOOK_MERGE_ACCOUNTS, this.app.events.ADD_GALLERY_TO_BOOKMARK, this.app.events.REMOVE_GALLERY_FROM_BOOKMARK, this.app.events.ADD_ROOM_TO_BOOKMARK, this.app.events.REMOVE_ROOM_FROM_BOOKMARK, this.app.events.ADD_FOLLOW_PROFILE, this.app.events.REMOVE_FOLLOW_PROFILE, this.app.events.ADD_ITEM_TO_DEFAULT_GALLERY, this.app.events.SAVE_ROOM, this.app.events.SAVE_EXISTING_ROOM, this.app.events.SAVE_ROOM_AS, this.app.events.GET_PRODUCT_INFO, this.app.events.REMOVE_WALL, this.app.events.SHARE_GALLERY_ITEM, this.app.events.GET_ALL_ITEMS_RECENT_GALLERY, this.app.events.CHECK_EMAIL_MIGRATION, this.app.events.GET_NEXT_GALLERY_ITEMS ];
}, com.art.myGalleries.commands.ApplicationCommand.prototype.handleNotification = function(a) {
    var b = this;
    switch (a.name) {
      case this.app.events.STARTUP:
        break;

      case this.app.events.GET_ALL_GALLERIES:
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&" + this.app.getModel().getGallerySortObjectAsString() + "&" + this.app.getModel().getGalleryPagingOptionObjectAsString();
        this.serviceProvider.galleryAPIService.getUserGalleries({
            command: this,
            app: this.app,
            successHandler: this.getUserGalleriesSuccess,
            errorHandler: this.getUserGalleriesError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.GET_ALL_GALLERIES_USER:
        this.fromGridModule = a.body.fromGridModule ? !0 : !1;
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&" + this.app.getModel().getGallerySortObjectAsString() + "&" + this.app.getModel().getGalleryPagingOptionObjectAsString();
        this.serviceProvider.galleryAPIService.getUserGalleries({
            command: this,
            app: this.app,
            successHandler: this.getUserGalleriesSuccessForWebUser,
            errorHandler: this.getUserGalleriesErrorForWebUser,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.GALLERY_ITEM_SORT:
        this.app.getModel().setPagingOptionsAllItems(!1);
        var d = "gallerySortOption=" + JSON.stringify({
            DefaultSort: !0,
            SortBy: a.body.sortBy,
            SortDirection: a.body.sortOrder
        });
        this.app.getModel().gallerySortBy = a.body.sortBy, this.app.getModel().gallerySortDirection = a.body.sortOrder;
        var e;
        e = "ResultFilterOptions=" + JSON.stringify({
            IncludeGalleryItems: !0,
            IncludeSavedRooms: !1,
            IncludeSavedWalls: !1,
            IncludeSavedWallsItems: !1
        });
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&";
        c += this.app.getModel().getUserProfileObjectAsString() + "&", c += "persona=" + this.app.getModel().environmentSub.profileKey + "&", 
        c += "galleryKey=" + this.app.getModel().environmentSub.galleryKey + "&", c += "galleryAuthToken=" + this.app.getModel().environment.galleryAuthToken + "&", 
        c += d + "&" + this.app.getModel().getGalleryPagingOptionObjectAsString() + "&", 
        c += e, this.serviceProvider.galleryAPIService.getGalleryDetailswithResultFilter({
            command: this,
            app: this.app,
            successHandler: this.galleryItemSortSuccess,
            errorHandler: this.galleryItemSortError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.GET_SYSTEM_LIBRARY:
        if (void 0 != this.app.getUserLibraryProxy().systemLibraryObject) this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_SYSTEM_LIBRARY_SUCCESS, {}, "ajax")); else {
            var d = "gallerySortOption=" + JSON.stringify({
                DefaultSort: !0,
                SortBy: this.app.getModel().gallerySortBy,
                SortDirection: this.app.getModel().gallerySortDirection
            }), c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&galleryId=" + this.app.getModel().environmentSub.selectedGalleryID + "&" + d + "&" + this.app.getModel().getGalleryPagingOptionObjectAsString();
            this.serviceProvider.galleryAPIService.getSystemLibrary({
                command: this,
                app: this.app,
                successHandler: this.getSystemLibrarySuccess,
                errorHandler: this.getSystemLibraryError,
                beforeSendHandler: function() {}
            }, c);
        }
        break;

      case this.app.events.GET_ALL_GALLERY_ITEMS:
        if (this.currentNote = a, this.app.getModel().galleryItemList.length > 0) this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_ALL_GALLERY_ITEMS_SUCCESS, this.currentNote.body)); else {
            this.app.getModel().setPagingOptionsAllItems(!0);
            var d = "gallerySortOption=" + JSON.stringify({
                DefaultSort: !0,
                SortBy: this.app.getModel().gallerySortBy,
                SortDirection: this.app.getModel().gallerySortDirection
            }), e = "ResultFilterOptions=" + JSON.stringify({
                IncludeGalleryItems: !0,
                IncludeUserSavedWalls: !1,
                IncludeAutoSavedWalls: !0,
                IncludeWallItems: !0
            }), c = this.app.getModel().getAccessKeyObjectAsString() + "&";
            c += this.app.getModel().getUserProfileObjectAsString() + "&", c += "persona=" + this.app.getModel().environmentSub.profileKey + "&", 
            c += "galleryKey=" + this.app.getModel().getGalleryKey() + "&", c += "galleryAuthToken=" + this.app.getModel().environment.galleryAuthToken + "&", 
            c += d + "&" + this.app.getModel().getGalleryPagingOptionObjectAsString() + "&", 
            c += e, this.serviceProvider.galleryAPIService.getGalleryDetailswithResultFilter({
                command: this,
                app: this.app,
                successHandler: this.getGalleryWithItemsSuccess,
                errorHandler: this.getGalleryWithItemsError,
                beforeSendHandler: function() {}
            }, c);
        }
        break;

      case this.app.events.GET_NEXT_GALLERY_ITEMS:
        this.app.getModel().setPagingOptionsAllItems(!1), this.app.getModel().galleryItemPageNumber = this.app.getModel().galleryItemNextPage;
        var d = "gallerySortOption=" + JSON.stringify({
            DefaultSort: !0,
            SortBy: this.app.getModel().gallerySortBy,
            SortDirection: this.app.getModel().gallerySortDirection
        }), e = "ResultFilterOptions=" + JSON.stringify({
            IncludeGalleryItems: !0,
            IncludeUserSavedWalls: !1,
            IncludeAutoSavedWalls: !0,
            IncludeWallItems: !0
        }), c = this.app.getModel().getAccessKeyObjectAsString() + "&";
        c += this.app.getModel().getUserProfileObjectAsString() + "&", c += "persona=" + this.app.getModel().environmentSub.profileKey + "&", 
        c += "galleryKey=" + this.app.getModel().getGalleryKey() + "&", c += "galleryAuthToken=" + this.app.getModel().environment.galleryAuthToken + "&", 
        c += d + "&" + this.app.getModel().getGalleryPagingOptionObjectAsString() + "&", 
        c += e, this.serviceProvider.galleryAPIService.getGalleryDetailswithResultFilter({
            command: this,
            app: this.app,
            successHandler: this.getNextGalleryItemsSuccess,
            errorHandler: this.getNextGalleryItemsFailed,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.UPDATE_GALLERY_TITLE_DESC:
        var f = this.app.getModel().getSelectedGalleryClone();
        if (this.app.getModel().isRoomView) {
            var g = this.app.getRoomViewProxy().currentWall.gallery;
            f = {}, f.GalleryId = g.GalleryId, f.ItemKey = g.ItemKey;
        }
        if (this.app.getModel().galleyNameIsAvailable(a.body.title, f.GalleryId)) {
            this.currentNote = a;
            var h = encodeURIComponent(a.body.title);
            f.Name = h, f.LongDescription = encodeURIComponent(a.body.desc), f.GalleryIconURL = "", 
            f.IconUrl = "", f.Icon = null, null != f.GalleryImage && null != f.GalleryImage.LargeImage && null != f.GalleryImage.LargeImage.HttpImageURL && a.body.bannerUrl.length > 0 && (f.GalleryImage.LargeImage.HttpImageURL = encodeURIComponent(escape(a.body.bannerUrl)));
            var i = JSON.stringify(f);
            i = i.replace(/#/g, "");
            var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&gallery=" + i;
            this.serviceProvider.galleryAPIService.updateGallery({
                command: this,
                app: this.app,
                successHandler: this.updateGallerySuccess,
                errorHandler: this.updateGalleryError,
                beforeSendHandler: function() {}
            }, c);
        } else this.app.sendNotification(new com.art.core.utils.Note(this.app.events.UPDATE_GALLERY_TITLE_DESC_FAILED, {
            msg: "duplicate"
        }));
        break;

      case this.app.events.ADD_ITEM_TO_EXISTING_GALLERY:
        var j = [ {} ];
        null != this.app.getModel().getNewItemToGalleryFromFramingStudio().FrameSku || void 0 != this.app.getModel().getNewItemToGalleryFromFramingStudio().FrameSku ? (j[0] = this.app.getModel().getNewItemToGalleryFromFramingStudio(), 
        j[0].Item.Title = escape(this.app.getModel().getNewItemToGalleryFromFramingStudio().Item.Title), 
        j[0].Item.ArtistName = escape(j[0].Item.ArtistName)) : (j[0] = this.app.getModel().getNewItemToGallery(), 
        j[0].Item.Title = escape(this.app.getModel().getNewItemToGallery().Item.Title), 
        j[0].Item.ArtistName = escape(j[0].Item.ArtistName), void 0 != this.app.getModel().selectedImageObject.FrameSku && null != this.app.getModel().selectedImageObject.FrameSku && this.app.getModel().selectedImageObject.FrameSku.length > 0);
        var k = "";
        k = void 0 != this.app.getModel().environmentSub.selectedGalleryID ? this.app.getModel().environmentSub.selectedGalleryID : this.app.getModel().environment.selectedGalleryID, 
        "3" != this.app.getModel().environment.customerZoneId && "4" != this.app.getModel().environment.customerZoneId && "25" != this.app.getModel().environment.customerZoneId && void 0 != a.type && void 0 != a.type.fromLoginExternalModule && (this.fromLoginExternalModule = a.type.fromLoginExternalModule ? !0 : !1), 
        this.app.getModel().apnumTrendGallery = j[0].APNum;
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&galleryItems=" + JSON.stringify(j) + "&galleryID=" + k + "&allowDuplicate=true";
        this.serviceProvider.galleryAPIService.addItemsToGallery({
            command: this,
            app: this.app,
            successHandler: this.addItemsToGallerySuccess,
            errorHandler: this.addItemsToGalleryError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.GET_ALL_ITEMS_RECENT_GALLERY:
        var d = "galleryItemSortOption=" + JSON.stringify({
            DefaultSort: !0,
            SortBy: this.app.getModel().gallerySortBy,
            SortDirection: this.app.getModel().gallerySortDirection
        }), e = "ResultFilterOptions=" + JSON.stringify({
            IncludeGalleryItems: !0,
            IncludeUserSavedWalls: !1,
            IncludeAutoSavedWalls: !1,
            IncludeWallItems: !1
        }), c = this.app.getModel().getAccessKeyObjectAsString() + "&";
        c += this.app.getModel().getUserProfileObjectAsString() + "&", c += "AppID=519BAAC8E607413CA1FC043C92D08AAD&", 
        c += d + "&" + this.app.getModel().getGalleryPagingOptionObjectAsString() + "&", 
        c += e + "&DonotCreate=false&galleryDefaultType=3", this.serviceProvider.galleryAPIService.getUserDefaultGallery({
            command: this,
            app: this.app,
            successHandler: this.getUserRecentlyGallerySuccess,
            errorHandler: this.getUserRecentlyGalleryError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.ADD_ITEM_TO_DEFAULT_GALLERY:
        var j = [ {} ];
        j[0] = this.app.getModel().getNewItemToGallery();
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&galleryItems=" + JSON.stringify(j) + "&GalleryDefaultType=3";
        this.serviceProvider.galleryAPIService.addItemsToDefaultGallery({
            command: this,
            app: this.app,
            successHandler: this.addItemsToDefaultGallerySuccess,
            errorHandler: this.addItemsToDefaultGalleryError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.ADD_ITEM_TO_EXISTING_GALLERY_DP:
        var j = [ {} ];
        null != this.app.getModel().getNewItemToGalleryFromFramingStudio().FrameSku || void 0 != this.app.getModel().getNewItemToGalleryFromFramingStudio().FrameSku ? (j[0] = this.app.getModel().getNewItemToGalleryFromFramingStudio(), 
        j[0].Item.Title = escape(this.app.getModel().getNewItemToGalleryFromFramingStudio().Item.Title), 
        j[0].Item.ArtistName = escape(j[0].Item.ArtistName)) : (j[0] = this.app.getModel().getNewItemToGallery(), 
        j[0].Item.Title = escape(this.app.getModel().getNewItemToGallery().Item.Title), 
        j[0].Item.ArtistName = escape(j[0].Item.ArtistName), void 0 != this.app.getModel().selectedImageObject.FrameSku && null != this.app.getModel().selectedImageObject.FrameSku && this.app.getModel().selectedImageObject.FrameSku.length > 0);
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&galleryItems=" + JSON.stringify(j) + "&galleryID=" + this.app.getModel().environmentSub.selectedGalleryID + "&allowDuplicate=true";
        this.app.getModel().apnumTrendGallery = j.APNum, this.serviceProvider.galleryAPIService.addItemsToGallery({
            command: this,
            app: this.app,
            successHandler: this.detailPageAddItemsToGallerySuccess,
            errorHandler: this.detailPageAddItemsToGalleryError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.ADD_GALLERY_TITLE_DESC:
        var f = this.app.getModel().setCreateGallery(), l = 1, c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&parentGalleryId=" + l + "&gallery=" + JSON.stringify(f);
        this.serviceProvider.galleryAPIService.createGallery({
            command: this,
            app: this.app,
            successHandler: this.addGallerySuccess,
            errorHandler: this.addGalleryError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY:
        var f = this.app.getModel().setCreateGallery(), l = 1, c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&parentGalleryId=" + l + "&gallery=" + JSON.stringify(f);
        this.serviceProvider.galleryAPIService.createGallery({
            command: this,
            app: this.app,
            successHandler: this.moveAddNewItemsToGallerySuccess,
            errorHandler: this.moveAddNewItemsToGalleryError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.MOVE_ADD_ITEM_TO_EXISTING_GALLERY:
        var j = [ {} ];
        j[0] = this.app.getModel().getExisitngItemToGallery(!0);
        var m = [ {} ], f = this.app.getModel().galleryTemplate;
        f.GalleryId = this.app.getModel().getDestinationSelectedGalleryId(), m[0] = f, j[0].ItemURL = "", 
        j[0].Item.Title = escape(j[0].Item.Title), j[0].Item.ArtistName = escape(j[0].Item.ArtistName);
        var n = this.app.getModel().environmentSub.selectedGalleryID;
        if (this.app.getModel().savetogalleryoption || (n = this.app.getModel().getMyGalObjectVal().gid), 
        this.app.getModel().apnumTrendGallery = j[0].APNum, "MOVE" == MyGalleriesCore.getModel().copyormovetogalleryoption) var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&sourceGalleryID=" + n + "&galleryItem=" + JSON.stringify(j) + "&destinationGalleries=" + JSON.stringify(m) + "&" + this.app.getModel().getMoveOptions(); else var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&sourceGalleryID=" + n + "&galleryItem=" + JSON.stringify(j) + "&destinationGalleries=" + JSON.stringify(m) + "&" + this.app.getModel().getCopyOptions();
        this.serviceProvider.galleryAPIService.moveGalleryItem({
            command: this,
            app: this.app,
            successHandler: this.moveExistingItemsToGallerySuccess,
            errorHandler: this.moveExistingItemsToGalleryError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.ADD_ITEM_TO_NEW_GALLERY:
        this.fromLoginExternalModule = a.type.fromLoginExternalModule ? !0 : !1;
        var f = this.app.getModel().setCreateGallery(), l = 1;
        this.printFileName = a.body;
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&parentGalleryId=" + l + "&gallery=" + JSON.stringify(f);
        this.serviceProvider.galleryAPIService.createGallery({
            command: this,
            app: this.app,
            successHandler: this.addNewItemsToGallerySuccess,
            errorHandler: this.addNewItemsToGalleryError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.ADD_ITEM_TO_NEW_GALLERY_DP:
        var f = this.app.getModel().setCreateGallery(), l = 1;
        this.printFileName = a.body;
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&parentGalleryId=" + l + "&gallery=" + JSON.stringify(f);
        this.serviceProvider.galleryAPIService.createGallery({
            command: this,
            app: this.app,
            successHandler: this.detailpageaddNewItemsToGallerySuccess,
            errorHandler: this.detailpageaddNewItemsToGalleryError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.REGISTER_ACCOUNT:
        this.username = a.body.username, this.password = a.body.password, this.registerAccountSuccess(a.body.coreresponse);
        break;

      case this.app.events.LOGIN_ACCOUNT:
        this.fromExternalModule = a.type.fromExternalModule ? !0 : !1, this.referredModule = a.type.modulename, 
        this.requestfromforb = a.type.logintfob, this.username = a.body.username, this.password = a.body.password;
        var c = "account=LoginAccount&usr=" + this.username + "&pwd=" + this.password;
        this.loginAccountSuccess(a.body.coreresponse);
        break;

      case this.app.events.LOGOUT_MYGALLERY:
        var o = new com.art.core.cookie.Cookie(), p = o.getCookieBase("sessionid"), c = "myaccount=LogoutMyGallery&sessionID=" + p;
        this.serviceProvider.galleryAPIService.callMyAccountProxy({
            command: this,
            app: this.app,
            successHandler: this.logoutAccountSuccess,
            errorHandler: this.logoutAccountError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.CREATE_WALL:
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&galleryId=" + this.app.getModel().environmentSub.selectedGalleryID + "&wall=" + this.app.getUserLibraryProxy().getWallObjectAsStringForCreateWall();
        this.serviceProvider.galleryAPIService.createWall({
            command: this,
            app: this.app,
            successHandler: this.createWallSuccess,
            errorHandler: this.createWallError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.UPDATE_WALL:
        var q = (a.body, this.app.getUserLibraryProxy().getSelectedWallId()), r = this.app.getUserLibraryProxy().getWallObjectAsStringForUpdateWall(a.body, q), c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&galleryId=" + this.app.getModel().environmentSub.selectedGalleryID + "&WallID=" + q + "&Wall=" + r;
        this.serviceProvider.galleryAPIService.updateWall({
            command: this,
            app: this.app,
            successHandler: this.updateWallItemsSuccess,
            errorHandler: this.updateWallItemsError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.UPDATE_WALL_ITEMS:
        var q = (a.body, this.app.getUserLibraryProxy().getSelectedWallId()), r = this.app.getUserLibraryProxy().getWallObjectAsStringForUpdateWall(a.body, q), c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString();
        c += "&WallID=" + q + "&Wall=" + r, this.serviceProvider.galleryAPIService.updateWallItems({
            command: this,
            app: this.app,
            successHandler: this.updateWallItemsSuccess,
            errorHandler: this.updateWallItemsError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.ADD_SIMILAR_ARTIST_ITEM:
        var c = {};
        c.Apnum = this.app.getModel().cacheByGalleryItemList[this.app.getModel().environment.selectedGalleryItemId].APNum, 
        c.ImageFilePath = this.app.getModel().cacheByGalleryItemList[this.app.getModel().environment.selectedGalleryItemId].ItemDetails.ImageInformation.LargeImage.HttpImageURL, 
        this.serviceProvider.searchAPIService.getSimilarImagesForImage({
            command: this,
            app: this.app,
            successHandler: this.searchSimilarArtistSuccess,
            errorHandler: this.searchSimilarArtistError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.GET_WALLS:
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString();
        c += '&libraryResultFilter={"IncludeAutoSavedWalls":"true","IncludeBareWalls":"true"}', 
        this.serviceProvider = new com.art.core.services.ServiceProvider(this.app.getEnvironment()), 
        this.serviceProvider.galleryAPIService.getUserLibrary({
            command: this,
            app: this.app,
            successHandler: this.getWallsSuccess,
            errorHandler: this.y,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.ADD_BARE_WALLS:
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&";
        c += this.app.getModel().getUserProfileObjectAsString() + "&", c += "galleryID=" + this.app.getModel().environmentSub.selectedGalleryID + "&", 
        c += "Wall=" + JSON.stringify([ a.body ]), this.serviceProvider.galleryAPIService.addBareWalls({
            command: this,
            app: this.app,
            successHandler: this.addBareWallSuccess,
            errorHandler: this.addBareWallError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.GET_USER_LIBRARY:
        if (void 0 != this.app.getModel().userLibraryObject) return this.app.getModel().userLibraryObject;
        var d = "gallerySortOption=" + JSON.stringify({
            DefaultSort: !1,
            SortBy: "0",
            SortDirection: 1
        }), c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&galleryId=" + this.app.getModel().environmentSub.selectedGalleryID + "&" + d + "&" + this.app.getModel().getGalleryPagingOptionObjectAsString();
        this.serviceProvider.galleryAPIService.getUserLibrary({
            command: this,
            app: this.app,
            successHandler: this.getUserLibrarySuccess,
            errorHandler: this.getUserLibraryError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.SHARE_WALL:
        var s = MyGalleriesCore.getRoomViewProxy();
        s.shareWall(function(a) {
            b.shareWallSuccess(a);
        });
        break;

      case this.app.events.DELETE_GALLERY:
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&gallery=" + JSON.stringify(a.body);
        this.serviceProvider.galleryAPIService.deleteGallery({
            command: this,
            app: this.app,
            successHandler: this.deleteGallerySuccess,
            errorHandler: this.deleteGalleryError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.REMOVE_WALL:
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&wall=" + JSON.stringify(a.body);
        this.serviceProvider.galleryAPIService.removeWall({
            command: this,
            app: this.app,
            successHandler: this.deleteRoomSuccess,
            errorHandler: this.deleteRoomError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.DELETE_GALLERY_ITEM:
        var t = [ {} ];
        t[0].ItemGalleryItemID = a.body.ItemId, t[0].APNum = a.body.APNum, t[0].PODConfigID = a.body.PodConfigId;
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&galleryId=" + this.app.getModel().environmentSub.selectedGalleryID + "&itemstoRemove=" + JSON.stringify(t) + "&removeOptions=1";
        this.serviceProvider.galleryAPIService.deleteGalleryItem({
            command: this,
            app: this.app,
            successHandler: this.deleteGalleryItemSuccess,
            errorHandler: this.deleteGalleryItemError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.DELETE_GALLERY_ITEM_DP:
        var t = [ {} ];
        t[0].ItemGalleryItemID = a.body;
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&galleryId=" + this.app.getModel().environmentSub.selectedGalleryID + "&itemstoRemove=" + JSON.stringify(t) + "&removeOptions=1";
        this.serviceProvider.galleryAPIService.deleteGalleryItem({
            command: this,
            app: this.app,
            successHandler: this.detailPageDeleteGalleryItemSuccess,
            errorHandler: this.detailPageDeleteGalleryItemError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.UPDATE_BARE_WALL:
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&";
        c += "galleryId=" + this.app.getModel().environmentSub.selectedGalleryID + "&", 
        c += "Wall=" + JSON.stringify(this.app.getUserLibraryProxy().getSelectedPersonalBareWallWithUpdates(a.body)), 
        this.serviceProvider.galleryAPIService.updateBareWall({
            command: this,
            app: this.app,
            successHandler: this.updateBareWallSuccess,
            errorHandler: this.updateBareWallError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.UPDATE_PRIVACY_SETTINGS:
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&gallery=" + JSON.stringify(a.body);
        this.serviceProvider.galleryAPIService.updateGallery({
            command: this,
            app: this.app,
            successHandler: this.privacyUpdateGalleryItemSuccess,
            errorHandler: this.privacyUpdateGalleryItemError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.GET_FRAME_SKU:
        var c = "dfeEngineParameters=" + JSON.stringify(a.body);
        this.serviceProvider.dfeAPIService.GetFrameSkuForFrameConfiguration({
            command: this,
            app: this.app,
            successHandler: this.getFrameSKUSuccess,
            errorHandler: this.getFrameSKUError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.GET_WALL_BY_ID:
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&";
        c += "wallId=" + this.app.getUserLibraryProxy().sharedWallId + "&", c += "profileKey=" + this.app.getModel().environmentSub.profileKey + "&", 
        c += "galleryKey=" + this.app.getModel().environmentSub.galleryKey + "&", c += "galleryAccessKey=" + this.app.getModel().environment.galleryAuthToken, 
        this.serviceProvider.galleryAPIService.getWallByWallId({
            command: this,
            app: this.app,
            successHandler: this.getWallByIdSuccess,
            errorHandler: this.getWallByIdError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.GET_WALL_BY_PROFILE_KEY:
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&";
        c += "profileKey=" + this.app.getModel().environmentSub.profileKey + "&", c += "roomKey=" + this.app.getModel().savedRoomKey + "&", 
        this.serviceProvider.galleryAPIService.getWallByProfileKey({
            command: this,
            app: this.app,
            successHandler: this.getWallByProfileKeySuccess,
            errorHandler: this.getWallByProfileKeyError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.GET_USER_LIBRARY_BY_PROFILE:
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&";
        c += this.app.getModel().getGalleryPagingOptionObjectAsString + "&", c += "gallerySortOption=" + JSON.stringify({
            DefaultSort: !1,
            SortBy: "0",
            SortDirection: 1
        }) + "&", c += "profileKey=" + this.app.getModel().environmentSub.profileKey + "&", 
        this.serviceProvider.galleryAPIService.getUserLibraryByProfileKey({
            command: this,
            app: this.app,
            successHandler: this.getUserLibraryByProfileKeySuccess,
            errorHandler: this.getUserLibraryByProfileKeyError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.FACEBOOK_MERGE_ACCOUNTS:
        var u = this.app.getModel().environment.authToken, v = a.body.authToken;
        this.referredModule = a.type.modulename, this.requestfromforb = a.type.logintfob;
        var w = a.type.OrderNumber;
        this.accountMerge(u, v, !0, a, w);
        break;

      case this.app.events.GET_FRAME_ID:
        var c = this.app.getModel(), x = com.art.core.utils.JsonLocalizationManager.determineConvertToCm("", c.environment.currencyCode, "") ? this.app.constants.DFEUNITOFMEASURECM : this.app.constants.DFEUNITOFMEASUREINCH, y = "ui=" + c.environment.sessionId + "&frameSKU=" + a.body.frameConfigurationId + "&imageMaxW=" + this.app.constants.DFEIMAGEMAXW + "&imageMaxH=" + this.app.constants.DFEIMAGEMAXH;
        y += "&unitofmeasure=" + x + "&customerZoneId=" + c.environment.customerZoneId + "&languageId=" + c.environment.languageId + "&currencyId=" + c.environment.currencyId + "&currencyCode=" + c.environment.currencyCode, 
        y += "&IsDFEAjax=Y", this.serviceProvider.framingServiceAPI.getFrameIdForDFE({
            command: this,
            app: this.app,
            successHandler: this.getFrameIdForDFESuccess,
            errorHandler: this.getFrameIdForDFEError,
            beforeSendHandler: function() {}
        }, y);
        break;

      case this.app.events.ADD_DATA_GRAPH:
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getGraphInfoObjectAsString();
        this.serviceProvider.graphServiceAPI.UpdateUserRelationship({
            command: this,
            app: this.app,
            successHandler: this.addItemsToGraphSuccess,
            errorHandler: this.addItemsToGraphError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.ADD_GALLERY_TO_BOOKMARK:
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getBookmarkObjectAsString();
        c = c.replace("placeholder1", com.art.core.services.GraphAPIService.RelationshipChangeAction_ADD), 
        c = c.replace("placeholder2", com.art.core.services.GraphAPIService.UserRelationshipType_BOOKMARK), 
        c = c.replace("placeholder3", a.body), this.serviceProvider.graphServiceAPI.UpdateUserRelationshipForFollowsAndBookmark({
            command: this,
            app: this.app,
            successHandler: this.addGalleryToBookmarkSuccess,
            errorHandler: this.addGalleryToBookmarkError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.REMOVE_GALLERY_FROM_BOOKMARK:
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getBookmarkObjectAsString();
        c = c.replace("placeholder1", com.art.core.services.GraphAPIService.RelationshipChangeAction_REMOVE), 
        c = c.replace("placeholder2", com.art.core.services.GraphAPIService.UserRelationshipType_BOOKMARK), 
        c = c.replace("placeholder3", a.body), this.serviceProvider.graphServiceAPI.UpdateUserRelationshipForFollowsAndBookmark({
            command: this,
            app: this.app,
            successHandler: this.removeGalleryFromBookmarkSuccess,
            errorHandler: this.removeGalleryFromBookmarkError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.ADD_ROOM_TO_BOOKMARK:
        trace("ADD_ROOM_TO_BOOKMARK");
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getBookmarkObjectAsString();
        c = c.replace("placeholder1", com.art.core.services.GraphAPIService.RelationshipChangeAction_ADD), 
        c = c.replace("placeholder2", com.art.core.services.GraphAPIService.UserRelationshipType_BOOKMARK), 
        c = c.replace("GalleryId", "WallId"), c = c.replace("placeholder3", a.body), this.serviceProvider.graphServiceAPI.UpdateUserRelationshipForFollowsAndBookmark({
            command: this,
            app: this.app,
            successHandler: this.addRoomToBookmarkSuccess,
            errorHandler: this.addRoomToBookmarkError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.REMOVE_ROOM_FROM_BOOKMARK:
        trace("REMOVE_ROOM_TO_BOOKMARK");
        var c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getBookmarkObjectAsString();
        c = c.replace("placeholder1", com.art.core.services.GraphAPIService.RelationshipChangeAction_REMOVE), 
        c = c.replace("placeholder2", com.art.core.services.GraphAPIService.UserRelationshipType_BOOKMARK), 
        c = c.replace("GalleryId", "WallId"), c = c.replace("placeholder3", a.body), this.serviceProvider.graphServiceAPI.UpdateUserRelationshipForFollowsAndBookmark({
            command: this,
            app: this.app,
            successHandler: this.removeRoomFromBookmarkSuccess,
            errorHandler: this.removeRoomFromBookmarkError,
            beforeSendHandler: function() {}
        }, c);
        break;

      case this.app.events.ADD_FOLLOW_PROFILE:
        var z = a.body.trim(), A = this.serviceProvider.createHandlers(this.addFollowProfileSuccess, this.addFollowProfileError, function() {});
        this.serviceProvider.ecommerceAPIService.ProfileAddFollow(A, MyGalleriesCore.getModel().environment.apiKey, MyGalleriesCore.getModel().environment.sessionId, MyGalleriesCore.getEnvironment().authToken, "2", z);
        break;

      case this.app.events.REMOVE_FOLLOW_PROFILE:
        var z = a.body.trim(), A = this.serviceProvider.createHandlers(this.removeFollowProfileSuccess, this.removeFollowProfileError, function() {});
        this.serviceProvider.ecommerceAPIService.ProfileRemoveFollow(A, MyGalleriesCore.getModel().environment.apiKey, MyGalleriesCore.getModel().environment.sessionId, MyGalleriesCore.getEnvironment().authToken, "2", z);
        break;

      case this.app.events.CHECK_EMAIL_MIGRATION:
        break;

      case this.app.events.SAVE_ROOM:
        var s = MyGalleriesCore.getRoomViewProxy();
        s.saveRoom(function(a) {
            s.currentWall.id = a.Library.Galleries[0].Walls[0].WallId, s.updateWallItems(s.currentWall, function() {
                b.saveRoomSuccess(a);
            });
        });
        break;

      case this.app.events.SAVE_ROOM_AS:
        var B = "edit";
        a && a.body && a.body.afterSuccess && (B = a.body.afterSuccess);
        var s = MyGalleriesCore.getRoomViewProxy();
        s.saveRoom(function(a) {
            if ("Success" != a.OperationResponse.ResponseMessage) MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.SAVE_ROOM_ERROR, {
                message: a.OperationResponse.ResponseMessage
            })); else {
                var c = a.Library.Galleries[0].Walls[0].WallId;
                s.currentWall.id = c, s.currentWall.name = a.Library.Galleries[0].Walls[0].Name, 
                s.currentWall.description = a.Library.Galleries[0].Walls[0].LongDescription, s.updateWall(s.currentWall, function() {
                    s.updateWallItems(s.currentWall, function(a) {
                        b.saveExistingRoomSuccess(a, B);
                    });
                });
            }
        });
        break;

      case this.app.events.SAVE_EXISTING_ROOM:
        var s = this.app.getRoomViewProxy();
        s.updateWall(s.currentWall, function() {
            s.updateWallItems(s.currentWall, b.saveExistingRoomSuccess);
        });
        break;

      case this.app.events.GET_PRODUCT_INFO:
        var C = "itemId=" + a.body;
        if (C += "&imageId=", C += "&lookupType=ItemNumber", C += "&targetDomain=ArtCom", 
        C += "&CurrencyCode=USD", C += "&languageCode=EN", C += "&includePODServiceOptions=true", 
        C += "&includeRelatedCategories=true", C += "&includeRelatedItems=true", C += "&includeProductContent=true", 
        C += "&includeRatingAndReview=true", !com.art.core.utils.ArtServer.prototype.isART()) {
            var D = art.site.config.getFeatureValue({
                page: "sitewide",
                feature: "IsGeoIpProjectEnabled"
            });
            "undefined" != typeof D && D || (D = ""), "" != D && (D = "true" == D.toLowerCase() ? !0 : !1, 
            D && (C += "&IPCountryCode=" + com.art.core.utils.ArtServer.prototype.GetIPCountryCode()));
        }
        this.serviceProvider.productServiceAPI.GetProductInformation(C, this);
        break;

      case this.app.events.SHARE_GALLERY_ITEM:
        var E = this.app.getModel().environmentSub.selectedGalleryID, c = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&GalleryID=" + E + "&createSnapshot=false";
        this.serviceProvider.galleryAPIService.shareGalleryItem({
            command: this,
            app: this.app,
            successHandler: this.shareGalleryItemSuccess,
            errorHandler: this.shareGalleryItemError,
            beforeSendHandler: function() {}
        }, c);
        break;

      default:
        throw new Error("ApplicationCommand failure! Invalid event: " + a.name);
    }
}, com.art.myGalleries.commands.ApplicationCommand.prototype.facebookLoginAccountSuccess = function(a) {
    trace("success");
}, com.art.myGalleries.commands.ApplicationCommand.prototype.facebookLoginAccountError = function(a) {
    trace("failure");
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getFrameSKUSuccess = function(a) {
    var b = this.app.getModel().selectedImageObject;
    b.ImageUrl = a.d.FrameConfigurations[0].FrameImageUrl, b.FrameSku = a.d.FrameConfigurations[0].FrameSku, 
    b.Height = a.d.FrameConfigurations[0].ImageHeight, b.Width = a.d.FrameConfigurations[0].ImageWidth, 
    b.Price = a.d.FrameConfigurations[0].PriceConfig.Price, b.DisplayPrice = a.d.FrameConfigurations[0].PriceConfig.DisplayPrice, 
    b.Title = a.d.FrameConfigurations[0].Print.Title, b.APNum = a.d.FrameConfigurations[0].Print.APNum, 
    b.ArtistID = a.d.FrameConfigurations[0].Print.ArtistCategoryID, b.Imageid = a.d.FrameConfigurations[0].Print.ImageID, 
    b.ItemDisplayedTypeID = a.d.FrameConfigurations[0].Print.ItemDisplayedTypeID, b.PODConfigID = a.d.FrameConfigurations[0].Print.PODConfigID, 
    b.ArtistName = a.d.FrameConfigurations[0].Print.ArtistLastName + " " + a.d.FrameConfigurations[0].Print.ArtistFirstName;
    var c = a.d.FrameConfigurations[0].Print.FileName;
    c = "http://" + this.app.getModel().environment.ImageDynPath + "/lrg" + c, c = c.replace(/\134/g, "/"), 
    b.FileName = c, b.Source = "FramingStudioPage", this.app.getModel().setSelectedImageObject(b), 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_FRAME_SKU_SUCCESS, b));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getFrameSKUError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_FRAME_SKU_FAILED));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.privacyUpdateGalleryItemSuccess = function(a) {
    window.location.href = window.location.href;
}, com.art.myGalleries.commands.ApplicationCommand.prototype.privacyUpdateGalleryItemError = function(a) {}, 
com.art.myGalleries.commands.ApplicationCommand.prototype.detailPageDeleteGalleryItemSuccess = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.DELETE_GALLERY_ITEM_DP_SUCCESS, a));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.detailPageDeleteGalleryItemError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.DELETE_GALLERY_ITEM_DP_FAILED));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.deleteGallerySuccess = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.DELETE_GALLERY_SUCCESS, a));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.deleteGalleryError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.DELETE_GALLERY_FAILED));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.deleteRoomSuccess = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REMOVE_WALL_SUCCESS, a));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.deleteRoomError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REMOVE_WALL_FAILED));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.deleteGalleryItemSuccess = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.DELETE_GALLERY_ITEM_SUCCESS, a));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.deleteGalleryItemError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.DELETE_GALLERY_ITEM_FAILED));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.logoutAccountSuccess = function(a) {}, 
com.art.myGalleries.commands.ApplicationCommand.prototype.logoutAccountError = function(a) {
    "{'success'}" == a.responseText ? this.app.sendNotification(new com.art.core.utils.Note(this.app.events.LOGOUT_MYGALLERY_SUCCESS)) : this.app.sendNotification(new com.art.core.utils.Note(this.app.events.LOGOUT_MYGALLERY_FAILED));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.loginAccountSuccess = function(a) {
    if ("Success" == a.OperationResponse.ResponseMessage && "200" == a.OperationResponse.ResponseCode) {
        var b = a.AuthenticationToken, c = this.app.getModel().environment.authToken;
        this.app.getModel().environment.authToken = b, this.accountMerge(c, b, !1, a);
    } else this.app.sendNotification(new com.art.core.utils.Note(this.app.events.LOGIN_ACCOUNT_FAILED, "failure"));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.loginAccountError = function(a) {
    if ("{'success'}" == a.responseText) {
        var b = new com.art.core.cookie.Cookie(), c = b.getCookieBase("sessionid"), d = "myaccount=myLoginAccount&usr=" + this.command.username + "&pwd=" + this.command.password + "&sessionID=" + c;
        this.command.serviceProvider.galleryAPIService.callMyAccountProxy({
            command: this.command,
            app: this.app,
            successHandler: this.command.loginMyAccountSuccess,
            errorHandler: this.command.loginMyAccountError,
            beforeSendHandler: function() {}
        }, d);
    } else this.app.sendNotification(new com.art.core.utils.Note(this.app.events.LOGIN_ACCOUNT_FAILED, "failure"));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.loginMyAccountSuccess = function(a) {
    var b = this.app.getModel().environment.authToken;
    this.app.getModel().environment.authToken = this.toAuthToken, this.appCmd.accountMerge(b, this.toAuthToken, !1, a);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.loginMyAccountErrorTest = function(a) {
    trace("Error");
}, com.art.myGalleries.commands.ApplicationCommand.prototype.loginMyAccountSuccessTest = function(a) {
    trace("Success");
}, com.art.myGalleries.commands.ApplicationCommand.prototype.loginMyAccountError = function(a) {
    var b = this.app.getModel().environment.authToken;
    this.app.getModel().environment.authToken = this.toAuthToken, this.appCmd.accountMerge(b, this.toAuthToken, !1, a);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.registerMyAccountSuccess = function(a) {
    "" != this.app.getModel().registerSource ? this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REGISTER_ACCOUNT_TRAY_SUCCESS)) : this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REGISTER_ACCOUNT_SUCCESS));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.registerMyAccountError = function(a) {
    "{'success'}" == a.responseText ? "" != this.app.getModel().registerSource ? this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REGISTER_ACCOUNT_TRAY_SUCCESS)) : this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REGISTER_ACCOUNT_SUCCESS)) : this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REGISTER_ACCOUNT_FAILED, "failure"));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.registerAccountSuccess = function(a) {
    "Success" == a.OperationResponse.ResponseMessage && "200" == a.OperationResponse.ResponseCode ? this.registerMyAccountSuccess() : "exist" == a.OperationResponse.ResponseMessage ? this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REGISTER_ACCOUNT_FAILED, "exist")) : "invalidemail" == a.OperationResponse.ResponseMessage ? this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REGISTER_ACCOUNT_FAILED, "invalidemail")) : "invalidpassword" == a.OperationResponse.ResponseMessage ? this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REGISTER_ACCOUNT_FAILED, "invalidpassword")) : this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REGISTER_ACCOUNT_FAILED, "failure"));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.moveAddNewItemsToGallerySuccess = function(a) {
    if (0 == a.OperationResponse.OperationStatus) {
        var b = [ {} ];
        b[0] = this.app.getModel().getExisitngItemToGallery(!0), b[0].ItemURL = "", b[0].Item.Title = escape(b[0].Item.Title), 
        b[0].Item.ArtistName = escape(b[0].Item.ArtistName);
        var c = [ {} ], d = this.app.getModel().galleryTemplate;
        if (d.GalleryId = a.Library.Galleries[0].GalleryId, this.command.tempNewCreatedGalleryId = a.Library.Galleries[0].ItemKey, 
        this.command.tempLastSelectedGalleryId = a.Library.Galleries[0].GalleryId, c[0] = d, 
        this.app.getModel().apnumTrendGallery = b[0].APNum, "MOVE" == MyGalleriesCore.getModel().copyormovetogalleryoption) var e = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&sourceGalleryID=" + this.app.getModel().environmentSub.selectedGalleryID + "&galleryItem=" + JSON.stringify(b) + "&destinationGalleries=" + JSON.stringify(c) + "&" + this.app.getModel().getMoveOptions(); else var e = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&sourceGalleryID=" + this.app.getModel().environmentSub.selectedGalleryID + "&galleryItem=" + JSON.stringify(b) + "&destinationGalleries=" + JSON.stringify(c) + "&" + this.app.getModel().getCopyOptions();
        this.command.serviceProvider.galleryAPIService.moveGalleryItem({
            command: this.command,
            app: this.app,
            successHandler: this.command.moveAddItemsToGallerySuccess,
            errorHandler: this.command.moveAddItemsToGalleryError,
            beforeSendHandler: function() {}
        }, e);
    } else trace("test12:" + a), this.app.sendNotification(new com.art.core.utils.Note(this.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY_SUCCESS, a));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.accountMerge = function(a, b, c, d, e) {
    var f = this.serviceProvider.createHandlers(this.accountMergeSuccess, this.accountMergeFailure, function() {});
    f.app = this.app, f.appCmd = this, f.facebookLogin = c, f.optionalResponseObject = d, 
    null != e && "undefined" != e && (f.OrderNumber = e);
    var g = this.app.getModel().environment;
    this.serviceProvider.accountAuthorizationAPIService.accountMerge(f, g.apiKey, g.sessionId, a, b);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.accountMergeSuccess = function(a) {
    var b = "LOGGED_IN", c = new com.art.core.cookie.Cookie(), d = c.getCookieBase("PID"), e = c.getCookieDictionary("UTE", "VisitId"), f = MyGalleriesCore.getEnvironment().customerZoneId, g = MyGalleriesCore.getEnvironment().languageIso, h = MyGalleriesCore.getEnvironment().domain, i = a.AuthenticationToken, j = MyGalleriesCore.getEnvironment().sessionId, k = MyGalleriesCore.getEnvironment().apiKey, l = {
        EventType: b,
        CustomerZoneID: f,
        LanguageISOCode: g,
        Domain: h,
        AuthToken: i,
        SessionID: j,
        apiKey: k,
        TrackingInfo: {
            PersistentID: d,
            VisitId: e,
            OrderNumber: this.OrderNumber
        }
    }, m = JSON.stringify(l), n = "objData=" + m, o = this.appCmd.serviceProvider.createHandlers(this.appCmd.EventRecordCallSuccess, this.appCmd.EventRecordCallFailure, function() {});
    o.app = this.app, o.appCmd = this.appCmd, this.appCmd.serviceProvider.ProcessEventAPI.EventRecordMessage(o, n);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.accountMergeFailure = function(a) {}, 
com.art.myGalleries.commands.ApplicationCommand.prototype.EventRecordCallSuccess = function() {
    var a = "", b = new com.art.core.cookie.Cookie(), c = b.getCookieDictionary("ap", "cartkey");
    a = b.getCookieDictionary("ap", "authtoken");
    var d = {}, e = com.art.core.utils.BrowserUtil.getQueryString("orderID"), f = null != c && "" != c || null != e && "" != e, g = "" == c ? $("#cartKeytoAccount").val() : c;
    if (f) d = this.appCmd.serviceProvider.createHandlers(this.appCmd.accountUpdateCartInfoSuccess, this.appCmd.accountUpdateCartInfoFailure, function() {}), 
    d.app = this.app, d.appCmd = this.appCmd, this.appCmd.serviceProvider.accountAuthorizationAPIService.accountUpdateCartInfo(d, MyGalleriesCore.getEnvironment().apiKey, MyGalleriesCore.getEnvironment().sessionId, a, g, !1); else {
        var h = location.href;
        if (h.indexOf(".allposters") > -1) {
            var b = new com.art.core.cookie.Cookie(), i = b.getCookieDictionary("ap", "authtoken"), j = this.appCmd.serviceProvider.createHandlers(this.appCmd.emailMigrationCheckSuccess, this.appCmd.emailMigrationCheckFailure, function() {});
            j.app = this.app, j.appCmd = this.appCmd, this.appCmd.serviceProvider.ecommerceAPIService.galleryMigrateFromFavorites(j, MyGalleriesCore.getModel().environment.apiKey, MyGalleriesCore.getModel().environment.sessionId, i, MyGalleriesCore.getModel().migrationEmail, !1);
        } else {
            var k = this;
            this.facebookLogin ? k.app.sendNotification(new com.art.core.utils.Note(k.app.events.LOGIN_FACEBOOK_MYGALLERY_SUCCESS, {}, {
                modulename: k.appCmd.referredModule,
                reqfromforb: k.appCmd.requestfromforb
            })) : k.app.getModel().loginSource == k.app.constants.LOGINTRAY ? k.app.sendNotification(new com.art.core.utils.Note(k.app.events.LOGIN_ACCOUNT_TRAY_SUCCESS, {}, {
                modulename: k.appCmd.referredModule,
                reqfromforb: k.appCmd.requestfromforb
            })) : k.app.sendNotification(new com.art.core.utils.Note(k.app.events.LOGIN_ACCOUNT_SUCCESS, {
                fromExternalModule: k.appCmd.fromExternalModule
            }, {
                modulename: k.appCmd.referredModule,
                reqfromforb: k.appCmd.requestfromforb
            }));
        }
    }
}, com.art.myGalleries.commands.ApplicationCommand.prototype.EventRecordCallFailure = function() {
    trace("EventRecordCallFailure:failed");
}, com.art.myGalleries.commands.ApplicationCommand.prototype.accountUpdateCartInfoSuccess = function(a) {
    if (trace("accountUpdateCartInfoSuccess"), 200 == a.OperationResponse.ResponseCode) {
        var b = MyGalleriesCore.getModel().getCartInfo(a.Account.ProfileInfo.CartInfo), c = {};
        c = {
            cartKey: b.cartKey,
            cartCount: b.cartCount
        }, null != c.cartKey && "" != c.cartKey && MyGalleriesCore.getModel().updateCartCookie(c);
    }
    var d = location.href;
    if (d.indexOf(".allposters") > -1) {
        var e = new com.art.core.cookie.Cookie(), f = e.getCookieDictionary("ap", "authtoken"), g = this.appCmd.serviceProvider.createHandlers(this.appCmd.emailMigrationCheckSuccess, this.appCmd.emailMigrationCheckFailure, function() {});
        g.app = this.app, g.appCmd = this.appCmd, this.appCmd.serviceProvider.ecommerceAPIService.galleryMigrateFromFavorites(g, MyGalleriesCore.getModel().environment.apiKey, MyGalleriesCore.getModel().environment.sessionId, f, MyGalleriesCore.getModel().migrationEmail, !1);
    } else {
        var h = this;
        this.facebookLogin ? h.app.sendNotification(new com.art.core.utils.Note(h.app.events.LOGIN_FACEBOOK_MYGALLERY_SUCCESS, {}, {
            modulename: h.appCmd.referredModule,
            reqfromforb: h.appCmd.requestfromforb
        })) : h.app.getModel().loginSource == h.app.constants.LOGINTRAY ? h.app.sendNotification(new com.art.core.utils.Note(h.app.events.LOGIN_ACCOUNT_TRAY_SUCCESS, {}, {
            modulename: h.appCmd.referredModule,
            reqfromforb: h.appCmd.requestfromforb
        })) : h.app.sendNotification(new com.art.core.utils.Note(h.app.events.LOGIN_ACCOUNT_SUCCESS, {
            fromExternalModule: h.appCmd.fromExternalModule
        }, {
            modulename: h.appCmd.referredModule,
            reqfromforb: h.appCmd.requestfromforb
        }));
    }
}, com.art.myGalleries.commands.ApplicationCommand.prototype.accountUpdateCartInfoFailure = function() {}, 
com.art.myGalleries.commands.ApplicationCommand.prototype.getUseRecentlyGalleryError = function(a) {
    trace("getitemsfromrecentlygallery failure");
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getUserRecentlyGallerySuccess = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_ALL_ITEMS_RECENT_GALLERY_SUCCESS, a));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.moveAddNewItemsToGalleryError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY_FAILED, a));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.moveAddItemsToGallerySuccess = function(a) {
    var b = [ {} ];
    b = a, this.command.tempNewCreatedGalleryId = a.Library.Galleries[0].ItemKey, this.command.tempLastSelectedGalleryId = a.Library.Galleries[0].GalleryId, 
    b.GalleryName = this.command.tempNewCreatedGalleryId, b.GalleryID = this.command.tempLastSelectedGalleryId, 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY_SUCCESS, b));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.moveAddItemsToGalleryError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY_FAILED, a));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addNewItemsToGallerySuccess = function(a) {
    if (null != a.Library || void 0 != a.Library) {
        var b = [ {} ];
        null != this.app.getModel().getNewItemToGalleryFromFramingStudio().FrameSku || void 0 != this.app.getModel().getNewItemToGalleryFromFramingStudio().FrameSku ? (b[0] = this.app.getModel().getNewItemToGalleryFromFramingStudio(), 
        b[0].Item.Title = escape(this.app.getModel().getNewItemToGalleryFromFramingStudio().Item.Title), 
        b[0].Item.ArtistName = escape(b[0].Item.ArtistName)) : (b[0] = this.app.getModel().getNewItemToGallery(), 
        b[0].Item.Title = escape(this.app.getModel().getNewItemToGallery().Item.Title), 
        b[0].Item.ArtistName = escape(b[0].Item.ArtistName), void 0 != this.app.getModel().selectedImageObject.FrameSku && null != this.app.getModel().selectedImageObject.FrameSku && this.app.getModel().selectedImageObject.FrameSku.length > 0);
        var c = a.Library.Galleries[0].GalleryId;
        this.command.tempNewCreatedGalleryId = a.Library.Galleries[0].ItemKey, this.command.tempLastSelectedGalleryId = a.Library.Galleries[0].GalleryId, 
        this.app.getModel().apnumTrendGallery = b[0].APNum;
        var d = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&galleryItems=" + JSON.stringify(b) + "&galleryID=" + c + "&allowDuplicate=true";
        this.command.serviceProvider.galleryAPIService.addItemsToGallery({
            command: this.command,
            app: this.app,
            successHandler: this.command.addItemsToGallerySuccess,
            errorHandler: this.command.addItemsToGalleryError,
            beforeSendHandler: function() {}
        }, d);
    } else {
        var e = [ {} ];
        e = a, e.GalleryName = this.command.tempNewCreatedGalleryId, e.GalleryID = this.command.tempLastSelectedGalleryId, 
        this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_ITEM_TO_NEW_GALLERY_SUCCESS, e, {
            fromLoginExternalModule: this.command.fromLoginExternalModule
        }));
    }
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addNewItemsToGalleryError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_ITEM_TO_NEW_GALLERY_FAILED, a));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.detailpageaddNewItemsToGallerySuccess = function(a) {
    if (null != a.Library || void 0 != a.Library) {
        var b = [ {} ];
        null != this.app.getModel().getNewItemToGalleryFromFramingStudio().FrameSku || void 0 != this.app.getModel().getNewItemToGalleryFromFramingStudio().FrameSku ? (b[0] = this.app.getModel().getNewItemToGalleryFromFramingStudio(), 
        b[0].Item.Title = escape(this.app.getModel().getNewItemToGalleryFromFramingStudio().Item.Title), 
        b[0].Item.ArtistName = escape(b[0].Item.ArtistName)) : (b[0] = this.app.getModel().getNewItemToGallery(), 
        b[0].Item.Title = escape(this.app.getModel().getNewItemToGallery().Item.Title), 
        b[0].Item.ArtistName = escape(b[0].Item.ArtistName), void 0 != this.app.getModel().selectedImageObject.FrameSku && null != this.app.getModel().selectedImageObject.FrameSku && this.app.getModel().selectedImageObject.FrameSku.length > 0);
        var c = a.Library.Galleries[0].GalleryId;
        this.command.tempNewCreatedGalleryId = a.Library.Galleries[0].ItemKey, this.command.tempLastSelectedGalleryId = a.Library.Galleries[0].GalleryId;
        var d = this.app.getModel().getAccessKeyObjectAsString() + "&" + this.app.getModel().getUserProfileObjectAsString() + "&galleryItems=" + JSON.stringify(b) + "&galleryID=" + c + "&allowDuplicate=true";
        this.command.serviceProvider.galleryAPIService.addItemsToGallery({
            command: this.command,
            app: this.app,
            successHandler: this.command.detailpageaddItemsToGallerySuccess,
            errorHandler: this.command.detailpageaddItemsToGalleryError,
            beforeSendHandler: function() {}
        }, d);
    } else {
        var e = [ {} ];
        e = a, e.GalleryName = this.command.tempNewCreatedGalleryId, e.GalleryID = this.command.tempLastSelectedGalleryId, 
        this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_ITEM_TO_NEW_GALLERY_DP_SUCCESS, e));
    }
}, com.art.myGalleries.commands.ApplicationCommand.prototype.detailpageaddNewItemsToGalleryError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_ITEM_TO_NEW_GALLERY_DP_FAILED, a));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.moveExistingItemsToGallerySuccess = function(a) {
    var b = "";
    "ProductPage" == this.app.getModel().selectedImageObject.Source ? b = "Product Page Add - Completed" : "GalleryPage" == this.app.getModel().selectedImageObject.Source ? b = "Gallery Page Add - Completed" : "ServicesPage" == this.app.getModel().selectedImageObject.Source ? b = "Services Page Add - Completed" : "FramingStudioPage" == this.app.getModel().selectedImageObject.Source && (b = "Framing Studio Page Add - Completed"), 
    "" != b && mygalleriesGA.trackEventWithCategory(b, b);
    var c = [ {} ];
    c = a, this.command.tempNewCreatedGalleryId = a.Library.Galleries[0].ItemKey, this.command.tempLastSelectedGalleryId = a.Library.Galleries[0].GalleryId, 
    c.GalleryName = this.command.tempNewCreatedGalleryId, c.GalleryID = this.command.tempLastSelectedGalleryId, 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.MOVE_ADD_ITEM_TO_EXISTING_GALLERY_SUCCESS, c));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.moveExistingItemsToGalleryError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.MOVE_ADD_ITEM_TO_EXISTING_GALLERY_FAILED));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addItemsToGalleryError = function(a) {
    this.app.sendNotification(this.app.events.MOVE_ADD_ITEM_TO_EXISTING_GALLERY_FAILED);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addItemsToGallerySuccess = function(a) {
    var b = "", c = "Save to Gallery";
    this.app.getModel().apnumTrendGallery;
    "ProductPage" == this.app.getModel().selectedImageObject.Source ? b = "Product Page Add - Completed" : "GalleryPage" == this.app.getModel().selectedImageObject.Source ? b = "Gallery Page Add - Completed" : "ServicesPage" == this.app.getModel().selectedImageObject.Source ? b = "Services Page Add - Completed" : "FramingStudioPage" == this.app.getModel().selectedImageObject.Source && (b = "Framing Studio Page Add - Completed"), 
    "" != b && mygalleriesGA.trackEventWithCategory(c, b);
    var d = [ {} ];
    d = a, this.command.tempNewCreatedGalleryId = a.Library.Galleries[0].ItemKey, this.command.tempLastSelectedGalleryId = a.Library.Galleries[0].GalleryId, 
    d.GalleryName = this.command.tempNewCreatedGalleryId, d.GalleryID = this.command.tempLastSelectedGalleryId, 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_ITEM_TO_NEW_GALLERY_SUCCESS, d, {
        fromLoginExternalModule: this.command.fromLoginExternalModule
    }));
    var e = this.app.getModel(), f = "galid=" + a.Library.Galleries[0].GalleryId;
    f = f + "&customerZoneId=" + e.environment.customerZoneId + "&languageId=" + e.environment.languageId + "&currencyId=" + e.environment.currencyId + "&currencyCode=" + e.environment.currencyCode + "&apnum=" + this.app.getModel().apnumTrendGallery, 
    this.command.serviceProvider.galleryAPIService.callAccountProxy({
        command: this.command,
        app: this.app,
        successHandler: this.command.loginMyAccountSuccessTest,
        errorHandler: this.command.loginMyAccountErrorTest,
        beforeSendHandler: function() {}
    }, f);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addItemsToDefaultGallerySuccess = function(a) {
    var b = new com.art.core.cookie.Cookie(), c = b.getCookieDictionary("ap", "RV");
    if (null != c) {
        var d = c.split(",");
        d.length > 0 && this.app.getModel().updateMigrationCount();
    }
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addItemsToDefaultGalleryError = function(a) {}, 
com.art.myGalleries.commands.ApplicationCommand.prototype.addItemsToGalleryError = function(a) {
    this.app.sendNotification(this.app.events.ADD_ITEM_TO_EXISTING_GALLERY_FAILED);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.detailPageAddItemsToGallerySuccess = function(a) {
    var b = "", c = "Save to Gallery";
    "ProductPage" == this.app.getModel().selectedImageObject.Source ? b = "Product Page Add - Completed" : "GalleryPage" == this.app.getModel().selectedImageObject.Source ? b = "Gallery Page Add - Completed" : "ServicesPage" == this.app.getModel().selectedImageObject.Source ? b = "Services Page Add - Completed" : "FramingStudioPage" == this.app.getModel().selectedImageObject.Source && (b = "Framing Studio Page Add - Completed"), 
    "" != b && mygalleriesGA.trackEventWithCategory(c, b);
    var d = [ {} ];
    d = a, this.command.tempNewCreatedGalleryId = a.Library.Galleries[0].ItemKey, this.command.tempLastSelectedGalleryId = a.Library.Galleries[0].GalleryId, 
    d.GalleryName = this.command.tempNewCreatedGalleryId, d.GalleryID = this.command.tempLastSelectedGalleryId, 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_ITEM_TO_NEW_GALLERY_DP_SUCCESS, d));
    var e = "galid=" + a.Library.Galleries[0].GalleryId;
    e = e + "&customerZoneId=" + data.environment.customerZoneId + "&languageId=" + data.environment.languageId + "&currencyId=" + data.environment.currencyId + "&currencyCode=" + data.environment.currencyCode + "&apnum=" + this.app.getModel().apnumTrendGallery, 
    this.command.serviceProvider.galleryAPIService.callAccountProxy({
        command: this.command,
        app: this.app,
        successHandler: this.command.loginMyAccountSuccessTest,
        errorHandler: this.command.loginMyAccountErrorTest,
        beforeSendHandler: function() {}
    }, e);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.detailPageAddItemsToGalleryError = function(a) {
    this.app.sendNotification(this.app.events.ADD_ITEM_TO_NEW_GALLERY_DP_FAILED);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.detailpageaddItemsToGallerySuccess = function(a) {
    var b = "", c = "Save to Gallery";
    "ProductPage" == this.app.getModel().selectedImageObject.Source ? b = "Product Page Add - Completed" : "GalleryPage" == this.app.getModel().selectedImageObject.Source ? b = "Gallery Page Add - Completed" : "ServicesPage" == this.app.getModel().selectedImageObject.Source ? b = "Services Page Add - Completed" : "FramingStudioPage" == this.app.getModel().selectedImageObject.Source && (b = "Framing Studio Page Add - Completed"), 
    "" != b && mygalleriesGA.trackEventWithCategory(c, b);
    var d = [ {} ];
    d = a, this.command.tempNewCreatedGalleryId = a.Library.Galleries[0].ItemKey, this.command.tempLastSelectedGalleryId = a.Library.Galleries[0].GalleryId, 
    d.GalleryName = this.command.tempNewCreatedGalleryId, d.GalleryID = this.command.tempLastSelectedGalleryId, 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_ITEM_TO_NEW_GALLERY_DP_SUCCESS, d));
    var e = "galid=" + a.Library.Galleries[0].GalleryId;
    e = e + "&customerZoneId=" + data.environment.customerZoneId + "&languageId=" + data.environment.languageId + "&currencyId=" + data.environment.currencyId + "&currencyCode=" + data.environment.currencyCode + "&apnum=" + this.app.getModel().apnumTrendGallery, 
    this.command.serviceProvider.galleryAPIService.callAccountProxy({
        command: this.command,
        app: this.app,
        successHandler: this.command.loginMyAccountSuccessTest,
        errorHandler: this.command.loginMyAccountErrorTest,
        beforeSendHandler: function() {}
    }, e);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.detailpageaddItemsToGalleryError = function(a) {
    this.app.sendNotification(this.app.events.ADD_ITEM_TO_NEW_GALLERY_DP_FAILED);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.updateGallerySuccess = function(a) {
    var b = a.Library.Galleries;
    return this.app.getModel().setCookieGalleryIDCountCookie(a.Library.Galleries[0].ItemKey), 
    this.app.getModel().setLastSelectedGalleryKey(a.Library.Galleries[0].ItemKey), this.app.getModel().setLastSelectedGalleryName(a.Library.Galleries[0].Name), 
    this.app.getModel().isRoomView ? void (location.href += "") : (location.href = "http://" + location.host + b[0].VanityURL, 
    this.app.getModel().setSelectedGalleryTitle(this.command.currentNote.body.title), 
    this.app.getModel().setSelectedGalleryDesc(this.command.currentNote.body.desc), 
    void this.app.sendNotification(new com.art.core.utils.Note(this.app.events.UPDATE_GALLERY_TITLE_DESC_SUCCESS, a)));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.updateGalleryError = function(a) {
    this.app.sendNotification(this.app.events.UPDATE_GALLERY_TITLE_DESC_FAILED, a);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addGallerySuccess = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_GALLERY_TITLE_DESC_SUCCESS, a));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addGalleryError = function(a) {
    this.app.sendNotification(this.app.events.ADD_GALLERY_TITLE_DESC_FAILED);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getGalleryWithItemsSuccess = function(a) {
    if (null == a.Library && null == a.Library.Galleries && void 0 == a.Library.Galleries[0]) throw new Error("ApplicationCommand.getGalleryWithItemsSuccess failed! response.Library.Galleries is undefined.");
    this.app.getModel().savetogalleryoption ? (this.app.getModel().setGalleryItems(a.Library.Galleries[0].Items), 
    this.app.getUserLibraryProxy().flatten(a.Library.Galleries[0].Walls), this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_ALL_GALLERY_ITEMS_SUCCESS, this.command.currentNote.body)), 
    this.processing = !1) : (this.app.getModel().flattenGalleryItemDetails(a.Library.Galleries[0].Items), 
    this.app.getModel().galleryItemList = a.Library.Galleries[0].Items, this.processing = !1);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getGalleryWithItemsError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_ALL_GALLERY_ITEMS_FAILED, error, "ajax")), 
    this.processing = !1;
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getNextGalleryItemsSuccess = function(a) {
    if (null == a.Library && null == a.Library.Galleries && void 0 == a.Library.Galleries[0]) throw new Error("ApplicationCommand.getGalleryWithItemsSuccess failed! response.Library.Galleries is undefined.");
    var b = a.Library.Galleries[0].Items;
    this.app.getModel().flattenGalleryItemDetailsNext(b), this.app.getModel().galleryItemList = [], 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_NEXT_GALLERY_ITEMS_SUCCESS, a)), 
    this.command.processing = !1;
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getNextGalleryItemsFailed = function(a) {
    this.processing = !1;
}, com.art.myGalleries.commands.ApplicationCommand.prototype.galleryItemSortSuccess = function(a) {
    var b = a.Library.Galleries[0].Items;
    this.app.getModel().flattenGalleryItemDetails(b), this.app.getModel().galleryItemList = [], 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GALLERY_ITEM_SORT_SUCCESS, a)), 
    this.command.processing = !1;
}, com.art.myGalleries.commands.ApplicationCommand.prototype.galleryItemSortError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GALLERY_ITEM_LIST_REQUEST_FAILED, error, "ajax")), 
    this.processing = !1;
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getSystemLibrarySuccess = function(a) {
    null != a.Library ? (this.app.getUserLibraryProxy().setSystemLibrary(a.Library), 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_SYSTEM_LIBRARY_SUCCESS, {}, "ajax"))) : this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_SYSTEM_LIBRARY_FAILED, {}, "ajax"));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getSystemLibraryError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_SYSTEM_LIBRARY_FAILED, {}, "ajax"));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getUserGalleriesSuccess = function(a) {
    if (null == a.Library || 0 == a.Library.Galleries.length) this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_ALL_GALLERIES_FAILED)); else {
        var b = this.app.getModel().filterGalleries(a.Library.Galleries);
        this.app.getModel().setGalleryList(b), this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_ALL_GALLERIES_SUCCESS)), 
        this.processing = !1;
    }
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getUserGalleriesError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_ALL_GALLERIES_FAILED, error, "ajax")), 
    this.processing = !1;
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getUserGalleriesSuccessForWebUser = function(a) {
    if (null == a.Library || 0 == a.Library.Galleries.length) this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_ALL_GALLERIES_FAILED_FOR_WEBUSER, {
        fromGridModule: this.command.fromGridModule
    })); else {
        var b = this.app.getModel().filterGalleries(a.Library.Galleries);
        this.app.getModel().setGalleryListForWebUser(b), this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_ALL_GALLERIES_SUCCESS_FOR_WEBUSER, {
            fromGridModule: this.command.fromGridModule
        })), this.processing = !1;
    }
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getUserGalleriesErrorForWebUser = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_ALL_GALLERIES_FAILED_FOR_WEBUSER, error, "ajax")), 
    this.processing = !1;
}, com.art.myGalleries.commands.ApplicationCommand.prototype.createWallSuccess = function(a) {
    if (!a.Library) throw new Error("ApplicationCommand createWallSuccess Error! Response does not have wallid.");
    var b = a.Library.Galleries[0].Walls[0], c = this.app.getUserLibraryProxy().selectedWallName.indexOf("hex") > -1 ? this.app.getUserLibraryProxy().selectedWallGalleryName : this.app.getUserLibraryProxy().selectedWallName;
    b.WallDetails.Name = c, this.app.getUserLibraryProxy().wallsObject.push(b), this.app.getUserLibraryProxy().flatten(this.app.getUserLibraryProxy().wallsObject), 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.CREATE_WALL_SUCCESS));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.createWallError = function(a) {
    this.sendNotification(new com.art.core.utils.Note(this.app.events.CREATE_WALL_FAILED));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.updateWallItemsSuccess = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.UPDATE_WALL_ITEMS_SUCCESS)), 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_WALLS));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.updateWallItemsError = function(a) {
    this.sendNotification(new com.art.core.utils.Note(this.app.events.UPDATE_WALL_FAILED));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.searchSimilarArtistSuccess = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_SIMILAR_ARTIST_ITEM_SUCCESS, a)), 
    this.processing = !1;
}, com.art.myGalleries.commands.ApplicationCommand.prototype.searchSimilarArtistError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_SIMILAR_ARTIST_ITEM_FAILED, "ajax")), 
    this.processing = !1;
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getWallsSuccess = function(a) {
    a.Library ? (this.app.getUserLibraryProxy().setLastUpdatedWall(a.Library.Walls), 
    this.app.getUserLibraryProxy().wallsObject = a.Library.Walls, this.app.getModel().isEditingSavedRoom || this.app.getUserLibraryProxy().flatten(a.Library.Walls), 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_WALLS_SUCCESS, {}, "ajax"))) : this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_WALLS_SUCCESS, {}, "ajax"));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getWallsError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_WALLS_FAILED, {}, "ajax"));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addBareWallSuccess = function(a) {
    a.Library && (a.Library.BareWallGalleries.length > 0 && this.command.setBareWallNamesLibrary(a.Library), 
    this.app.getUserLibraryProxy().refreshUserBareWalls(a.Library.BareWallGalleries[0]), 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_BARE_WALLS_SUCCESS, {}, "ajax")));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addBareWallError = function(a) {}, 
com.art.myGalleries.commands.ApplicationCommand.prototype.getUserLibrarySuccess = function(a) {
    if (!a.Library) throw new Error("ApplicationCommand.getUserLibrary failed! UserLibrary is null.");
    a.Library.BareWallGalleries.length > 0 && this.command.setBareWallNamesLibrary(a.Library), 
    this.app.getUserLibraryProxy().userLibraryObject = a.Library, this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_USER_LIBRARY_SUCCESS, {}, "ajax"));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getUserLibraryError = function(a) {}, 
com.art.myGalleries.commands.ApplicationCommand.prototype.updateBareWallSuccess = function(a) {
    if (void 0 != a) {
        for (var b = 0; b < this.app.getUserLibraryProxy().userLibraryObject.BareWallGalleries[0].BareWalls.length; b++) {
            var c = this.app.getUserLibraryProxy().userLibraryObject.BareWallGalleries[0].BareWalls[b];
            if (c.BareWallId == a.Library.BareWalls[0].BareWallId) return this.command.setBareWallName(a.Library.BareWalls[0]), 
            void (this.app.getUserLibraryProxy().userLibraryObject.BareWallGalleries[0].BareWalls[b] = a.Library.BareWalls[0]);
        }
        this.app.sendNotification(new com.art.core.utils.Note(this.app.events.UPDATE_BARE_WALL_SUCCESS));
    } else this.app.sendNotification(new com.art.core.utils.Note(this.app.events.UPDATE_BARE_WALL_ERROR));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.updateBareWallError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.UPDATE_BARE_WALL_ERROR));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.shareWallSuccess = function(a) {
    var b = this;
    if (void 0 == a.Library.Galleries[0]) throw new Error("ApplicationCommand.shareWallSuccess failed! Galleries is undefined.");
    b.app.getModel().environmentSub.selectedGalleryID = a.Library.Galleries[0].GalleryId;
    var c = MyGalleriesCore.getRoomViewProxy(), d = "undefined" != typeof c.currentWall, e = null;
    e = d ? c.currentWall.gallery : b.app.getModel().cacheByGalleryList[b.app.getModel().environmentSub.selectedGalleryID].ItemCount;
    var f = new com.art.myGalleries.vos.ShareRequestVO();
    f.viewMode = this.app.constants.ROOM_VIEW, f.title = e.Name, f.additionalArgs = b.app.getModel().cacheByGalleryList[b.app.getModel().environmentSub.selectedGalleryID].ItemCount, 
    f.imageURL = a.SharedItemImageURL.MediumImage.HttpImageURL;
    var g = "";
    g = d ? "hex" == c.currentWall.bareWall.roomType ? "/" + c.currentWall.name : "" : this.app.getUserLibraryProxy().selectedWallName.indexOf("hex") > -1 ? "/" + this.app.getUserLibraryProxy().selectedWallName : "", 
    d ? f.galleryURL = "http://" + window.location.host + a.Library.Galleries[0].VanityURL + "room/" + c.currentWall.key + "/?mode=view&type=" + c.currentWall.saveType : f.galleryURL = "http://" + window.location.host + a.Library.Galleries[0].VanityURL + "?viewmode=" + this.app.constants.ROOM_VIEW + "/" + a.Library.Galleries[0].Walls[0].WallId + g, 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.SHARE_ACTION_SUCCESS, {
        rvo: f
    }));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getWallByIdSuccess = function(a) {
    a.Library && (this.app.getUserLibraryProxy().wallsObject = a.Library.Galleries[0].Walls, 
    this.app.getUserLibraryProxy().flatten(a.Library.Galleries[0].Walls), this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_WALL_BY_ID_SUCCESS, {}, "ajax")));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getWallByIdError = function(a) {
    throw new Error("ApplicationCommand.getWallByIdError bad response.");
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getWallByProfileKeySuccess = function(a) {
    a.Library && (this.app.getUserLibraryProxy().savedWallsObject = a.Library.Galleries[0].Walls, 
    this.app.getUserLibraryProxy().flatten(a.Library.Galleries[0].Walls), this.app.getModel().setGalleryItems(a.Library.Galleries[0].Walls[0].WallItems), 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_WALL_BY_PROFILE_KEY_SUCCESS, {
        response: a
    }, "ajax")));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getWallByProfileKeyError = function(a) {
    throw new Error("ApplicationCommand.getWallByProfileKeyError bad response.");
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getUserLibraryByProfileKeySuccess = function(a) {
    a.Library && (a.Library.BareWallGalleries.length > 0 && this.command.setBareWallNamesLibrary(a.Library), 
    this.command.setBareWallNames(a.Library), this.app.getUserLibraryProxy().userLibraryObject = a.Library, 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_USER_LIBRARY_BY_PROFILE_SUCCESS, {}, "ajax")));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getUserLibraryByProfileKeyError = function(a) {
    throw new Error("ApplicationCommand.getUserLibraryByProfileKeyError bad response.");
}, com.art.myGalleries.commands.ApplicationCommand.prototype.setBareWallNamesLibrary = function(a) {
    if (void 0 == a.BareWallGalleries || void 0 == a.BareWallGalleries[0] || void 0 == a.BareWallGalleries[0].BareWalls) throw new Error("ApplicationCommand.setBareWallNames failed! BareWallGalleries is undefined.");
    var b = a.BareWallGalleries[0].BareWalls;
    this.setBareWallNames(b);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.setBareWallNames = function(a) {
    for (var b = 0; b < a.length; b++) this.setBareWallName(a[b]);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.setBareWallName = function(a) {
    if (void 0 == a.Name) throw new Error("ApplicationCommand.setBareWallName failed! Name property is undefined.");
    -1 == a.Name.indexOf(this.app.getUserLibraryProxy().userBareWallNamePrefix) && (a.Name = this.app.getUserLibraryProxy().userBareWallNamePrefix + a.BareWallId);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getFrameIdForDFESuccess = function(a) {
    if (null != a && a.trim().length > 1) {
        var b = this.app.getModel().cacheByGalleryItemList[this.app.getModel().selectedItemId].APNum;
        this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_FRAME_ID_SUCCESS, {
            frameid: a,
            apNum: b
        }));
    } else this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_FRAME_ID_FAILED, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addGalleryToBookmarkSuccess = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_GALLERY_TO_BOOKMARK_SUCCESS, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addGalleryToBookmarkError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_GALLERY_TO_BOOKMARK_FAILED, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.removeGalleryFromBookmarkSuccess = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REMOVE_GALLERY_FROM_BOOKMARK_SUCCESS, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.removeGalleryFromBookmarkError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REMOVE_GALLERY_FROM_BOOKMARK_FAILED, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addRoomToBookmarkSuccess = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_ROOM_TO_BOOKMARK_SUCCESS, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addRoomToBookmarkError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.ADD_ROOM_TO_BOOKMARK_FAILED, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.removeRoomFromBookmarkSuccess = function(a) {
    trace("REMOVE_ROOM_TO_BOOKMARK_SUCCESS"), this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REMOVE_ROOM_FROM_BOOKMARK_SUCCESS, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.removeRoomFromBookmarkError = function(a) {
    trace("REMOVE_ROOM_TO_BOOKMARK_ERROR"), this.app.sendNotification(new com.art.core.utils.Note(this.app.events.REMOVE_ROOM_FROM_BOOKMARK_FAILED, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addFollowProfileSuccess = function(a) {
    MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.ADD_FOLLOW_PROFILE_SUCCESS, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.addFollowProfileError = function(a) {
    MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.ADD_FOLLOW_PROFILE_FAILED, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.removeFollowProfileSuccess = function(a) {
    MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.REMOVE_FOLLOW_PROFILE_SUCCESS, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.removeFollowProfileError = function(a) {
    MyGalleriesCore.app.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.REMOVE_FOLLOW_PROFILE_FAILED, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.saveRoomSuccess = function(a) {
    if ("Success" != a.OperationResponse.ResponseMessage) MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.SAVE_ROOM_ERROR, {
        message: a.OperationResponse.ResponseMessage
    })); else {
        var b = a.Library.Galleries[0].Walls[0].VanityURL;
        "" != b && (b += "?mode=edit&type=user", window.location = b), MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.SAVE_ROOM_SUCCESS, {}));
    }
}, com.art.myGalleries.commands.ApplicationCommand.prototype.saveRoomError = function(a) {
    MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.SAVE_ROOM_ERROR, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.saveExistingRoomSuccess = function(a, b) {
    var c = a.Library.Galleries[0].Walls[0].VanityURL;
    "" != c && (b ? (c += c.indexOf("?") > -1 ? "&mode=" + b : "?mode=" + b, c += "&type=user") : c += "?mode=edit&type=user", 
    window.location = c), MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.SAVE_ROOM_SUCCESS, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.saveExistingRoomError = function(a) {
    MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.SAVE_ROOM_ERROR, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getFrameIdForDFEError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_FRAME_ID_FAILED, {}));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getProductInfoSuccess = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_PRODUCT_INFO_SUCCESS, a));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getProductInfoError = function(a) {
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_PRODUCT_INFO_FAILED));
}, com.art.myGalleries.commands.ApplicationCommand.prototype.getProductInfoBeforeSend = function(a) {}, 
com.art.myGalleries.commands.ApplicationCommand.prototype.emailMigrationCheckSuccess = function(a) {
    MyGalleriesCore.getModel().MigrationDone = !0;
    var b = this;
    b.facebookLogin ? b.app.sendNotification(new com.art.core.utils.Note(b.app.events.LOGIN_FACEBOOK_MYGALLERY_SUCCESS, {}, {
        modulename: b.appCmd.referredModule,
        reqfromforb: b.appCmd.requestfromforb
    })) : b.app.getModel().loginSource == b.app.constants.LOGINTRAY ? b.app.sendNotification(new com.art.core.utils.Note(b.app.events.LOGIN_ACCOUNT_TRAY_SUCCESS, {}, {
        modulename: b.appCmd.referredModule,
        reqfromforb: b.appCmd.requestfromforb
    })) : b.app.sendNotification(new com.art.core.utils.Note(b.app.events.LOGIN_ACCOUNT_SUCCESS, {
        fromExternalModule: b.appCmd.fromExternalModule
    }, {
        modulename: b.appCmd.referredModule,
        reqfromforb: b.appCmd.requestfromforb
    })), trace(a);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.emailMigrationCheckFailure = function(a) {
    MyGalleriesCore.getModel().MigrationDone = !0, trace(a);
}, com.art.myGalleries.commands.ApplicationCommand.prototype.shareGalleryItemSuccess = function(a) {
    if (void 0 == a.Library.Galleries[0]) throw new Error("ApplicationCommand.shareGalleryItemSuccess failed! Galleries is undefined.");
    this.app.getModel().environmentSub.selectedGalleryID = a.Library.Galleries[0].GalleryId;
    var b = null;
    b = this.app.getModel().cacheByGalleryList[this.app.getModel().environmentSub.selectedGalleryID];
    var c = new com.art.myGalleries.vos.ShareRequestVO();
    c.viewMode = this.app.getModel().currentViewMode, c.shareType = this.app.getModel().shareType, 
    c.title = b.Name, c.additionalArgs = this.app.getModel().cacheByGalleryList[this.app.getModel().environmentSub.selectedGalleryID].ItemCount, 
    "Success" == a.OperationResponse.ResponseMessage ? (c.imageURL = a.SharedItemImageURL.MediumImage.HttpImageURL, 
    c.galleryURL = "http://" + window.location.host + a.SharedOGURL + "&viewmode=" + this.app.getModel().currentViewMode, 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.SHARE_REQUEST, c))) : (c.imageURL = b.GalleryIconURL, 
    c.galleryURL = window.location.href + "?viewmode=" + this.app.getModel().currentViewMode, 
    this.app.sendNotification(new com.art.core.utils.Note(this.app.events.SHARE_REQUEST, c))), 
    this.app.getModel().shareRequestObject = c, this.app.getModel().shareRequestFlag = !0;
}, com.art.myGalleries.commands.ApplicationCommand.prototype.shareGalleryItemError = function(a) {}, 
com.art.myGalleries.components.MenuContainerComponent = function(a) {
    this.id = "MenuContainerComponent", this.data, this.LOGIN_CLICK = com.art.myGalleries.components.MenuContainerComponent.LOGIN_CLICK, 
    this.REGISTER_CLICK = com.art.myGalleries.components.MenuContainerComponent.REGISTER_CLICK, 
    this.imagePath = a, this.callbacks = {};
}, com.art.myGalleries.components.MenuContainerComponent.LOGIN_CLICK = "loginClick", 
com.art.myGalleries.components.MenuContainerComponent.REGISTER_CLICK = "registerClick", 
com.art.myGalleries.components.MenuContainerComponent.prototype.init = function() {
}, com.art.myGalleries.components.MenuContainerComponent.prototype.render = function() {
    return this.init(), this.getTemplate();
}, com.art.myGalleries.components.MenuContainerComponent.prototype.registerCallback = function(a, b) {
    this.callbacks[a] = b;
}, com.art.myGalleries.components.MenuContainerComponent.prototype.registerEvents = function() {
    var a = this;
    $("#loginTray").click(function() {
        a.callbacks[com.art.myGalleries.components.MenuContainerComponent.LOGIN_CLICK]();
    }), $("#registerTray").click(function() {
        a.callbacks[com.art.myGalleries.components.MenuContainerComponent.REGISTER_CLICK]();
    }), $("#loginTray, #registerTray, #lastGalleryName").hover(function() {
        $(this).addClass("loginhover");
    }, function() {
        $(this).removeClass("loginhover");
    });
}, com.art.myGalleries.components.MenuContainerComponent.prototype.getTemplate = function() {
    var a = MyGalleriesCore.getString("View All");
    ("3" == MyGalleriesCore.getModel().environment.customerZoneId || "4" == MyGalleriesCore.getModel().environment.customerZoneId || "25" == MyGalleriesCore.getModel().environment.customerZoneId) && (a = MyGalleriesCore.getKeyString("viewGalleryKey"));
    var b = this.template;
    return b = b.replace("$ID", this.id), b = b.replace(/\[IMAGE_DOMAIN\]/gi, this.imagePath), 
    b = b.replace("$HEADER", a), b = b.replace("$LINETEXT", MyGalleriesCore.getString("[LOGIN] or [SIGNUP] [LINEBREAK] to collect and share art.")), 
    b = b.replace("[LOGIN]", "<span id ='loginTray' class='login'>" + MyGalleriesCore.getString("Log In") + "</span>"), 
    b = b.replace("[SIGNUP]", "<span id ='registerTray' class='login'>" + MyGalleriesCore.getString("Sign Up") + "</span>"), 
    b = b.replace("[LINEBREAK]", "<br/>");
}, com.art.myGalleries.components.MenuContainerComponent.prototype.template = "<div id='$ID' class='tray_container'><div class='tray'><div class='galleryBadge gCustomFont'></div><div class='MenuContainerComponent_TopRow'><div class='MyGalleriesTrayModuleTopRowLeft'><img src='[IMAGE_DOMAIN]/images/mygallery/trayLogo.gif'></div><div class='MyGalleriesTrayModuleTabClose'></div></div><div class='clear'></div><div class='tray_subSection'><div class='labelSaveSuccess'><span class='labelTrayCount'></span></div><span id='lastGalleryName' name='lastGalleryName' class='lastGalleryName gCustomFont uCase'></span></div>			<div class='viewGalleryButton gCustomFont cPointer'>$HEADER</div></div><div class='tray_login'>$LINETEXT</div></div>", 
com.art.myGalleries.components.SaveMenuContainer = function(a) {
    return this.init(), null == a || void 0 == a ? !1 : (this.id = a.id, this.modal = a, 
    this.data, this.selectedGalleryId, this.RECENTLYSAVEDGALLERY_CLICKED = com.art.myGalleries.components.SaveMenuContainer.RECENTLYSAVEDGALLERY_CLICKED, 
    this.GALLERIES_CLICKED = com.art.myGalleries.components.SaveMenuContainer.GALLERIES_CLICKED, 
    this.NEW_GALLERY_CLICKED = com.art.myGalleries.components.SaveMenuContainer.NEW_GALLERY_CLICKED, 
    this.LOGINTEXT_CLICKED = com.art.myGalleries.components.SaveMenuContainer.LOGINTEXT_CLICKED, 
    void (this.callbacks = {}));
}, com.art.myGalleries.components.SaveMenuContainer.RECENTLYSAVEDGALLERY_CLICKED = "recentlysavedgalleryclicked", 
com.art.myGalleries.components.SaveMenuContainer.GALLERIES_CLICKED = "galleriesclicked", 
com.art.myGalleries.components.SaveMenuContainer.NEW_GALLERY_CLICKED = "newgalleryclicked", 
com.art.myGalleries.components.SaveMenuContainer.LOGINTEXT_CLICKED = "logintextclicked", 
com.art.myGalleries.components.SaveMenuContainer.prototype.init = function() {
}, com.art.myGalleries.components.SaveMenuContainer.prototype.render = function() {
    return this.getTemplate();
}, com.art.myGalleries.components.SaveMenuContainer.prototype.position = function() {
    var a = this;
    $("#" + a.id).css("left", MyGalleriesCore.getModel().saveMenuPosition.left + "px"), 
    void 0 != window.newProductPageDekstop && window.newProductPageDekstop || $("#" + a.id).css("top", MyGalleriesCore.getModel().saveMenuPosition.top - 35 + "px");
}, com.art.myGalleries.components.SaveMenuContainer.prototype.renderGalleriesList = function() {
    var a = "", b = "";
    if (this.modal.galleryList.length > 0) {
        for (var c = 0; c < this.modal.galleryList.length; c++) 50 != this.modal.galleryList[c].Permissions && (galleryName = com.art.core.utils.StringUtil.autoEllipseText(this.modal.galleryList[c].Name, 15), 
        a += '<li class="drpDownLstItemSaveMenu" id="' + this.modal.galleryList[c].GalleryId + '">' + unescape(galleryName) + "</li>");
        b = '<ul id="drpDownLstGalleryForSaveMenu" class="drpDownLstGalleryForSaveMenu hidden">' + a + "</ul>";
    }
    $(".allMyGalleiresListContainer").html(b);
}, com.art.myGalleries.components.SaveMenuContainer.prototype.registerCallback = function(a, b) {
    this.callbacks[a] = b;
}, com.art.myGalleries.components.SaveMenuContainer.prototype.registerEvents = function() {
    var a = this;
    $(document).on("mouseenter", ".newGalleryMenu, .lastSavedGalleryMenu, .allMyGalleiresTextContainer, .drpDownLstGalleryForSaveMenu li, .loginSaveGalleryMenuText", function() {
        $(this).addClass("saveMenuHover");
    }), $(document).on("mouseleave", ".newGalleryMenu, .lastSavedGalleryMenu, .allMyGalleiresTextContainer,.drpDownLstGalleryForSaveMenu li , .loginSaveGalleryMenuText", function() {
        $(this).removeClass("saveMenuHover");
    }), $(document).on("click", ".newGalleryMenu", function() {
        $(document).off("click", "#" + a.id), $(document).off("click", ".newGalleryMenu"), 
        $("#" + a.id).unbind("click"), $("#" + a.id).remove(), void 0 != a.callbacks[a.NEW_GALLERY_CLICKED] && a.callbacks[a.NEW_GALLERY_CLICKED]();
    }), $(document).off("click", ".allMyGalleiresTextContainer"), $(document).off("click", ".drpDownLstGalleryForSaveMenu"), 
    $(document).on("click", ".allMyGalleiresTextContainer", function() {
        $(".allMyGalleiresText").removeClass("allMyGalleiresTextHover"), $(".drpDownLstGalleryForSaveMenu").slideToggle("slow", function() {
            $(".allMyGalleiresText").addClass("allMyGalleiresTextHover");
        });
    }), $(".loginSaveGalleryMenuText").click(function() {
        $(document).off("click", ".newGalleryMenu");
        var a = com.art.core.components.LoginModal.LOGIN, b = new com.art.core.utils.Note(MyGalleriesCore.events.SHOW_GLOBAL_LOGINMODAL, {
            loginOption: a
        }, {
            modulename: "NEW_GALLERY_CLICKED"
        });
        MyGalleriesCore.sendNotification(b);
    }), com.art.core.utils.BrowserUtil.isiOSDevice() ? $(document).on("touchstart", function(b) {
        $(b.target).closest(".SaveMenuContainer").length || "SaveMenuContainer" == b.target.className || ($(document).off("click", ".lastSavedGalleryMenu"), 
        $(".lastSavedGalleryMenu").unbind("click"), $(document).off("click", ".drpDownLstGalleryForSaveMenu li"), 
        $(".drpDownLstGalleryForSaveMenu li").unbind("click"), $(document).off("click", "#" + a.id), 
        $("#" + a.id).unbind("click"), $("#" + a.id).remove());
    }) : $(document).on("click", function(b) {
        $(b.target).hasClass("allMyGalleiresTextContainer") || $(b.target).hasClass("allMyGalleiresText") || $(b.target).hasClass("nav-down-arrow") || MyGalleriesCore.getModel().saveMenuSourceClick == b.target.id || $(b.target).hasClass("mygalmoveoptioncommon") || $(b.target).hasClass("mygalcopyoptioncommon") || (trace("unbinding events"), 
        $(b.target).hasClass("loginSaveGalleryMenuText") || $(b.target).hasClass("newGalleryMenu") || null != MyGalleriesEnvironmentVariablesDynamic && null != MyGalleriesEnvironmentVariablesDynamic.sourcePageForLogin && "" != MyGalleriesEnvironmentVariablesDynamic.sourcePageForLogin && (MyGalleriesEnvironmentVariablesDynamic.sourcePageForLogin = ""), 
        $(document).off("click", ".lastSavedGalleryMenu"), $(document).off("click", ".drpDownLstGalleryForSaveMenu"), 
        $(document).off("click", ".drpDownLstGalleryForSaveMenu li"), $(document).off("click", "#" + a.id), 
        $("#" + a.id).unbind("click"), $("#" + a.id).remove());
    }), $(document).off("click", ".lastSavedGalleryMenu"), $(document).on("click", ".lastSavedGalleryMenu", function() {
        void 0 != a.callbacks[a.RECENTLYSAVEDGALLERY_CLICKED] && a.callbacks[a.RECENTLYSAVEDGALLERY_CLICKED]();
    }), $(document).on("click", ".drpDownLstGalleryForSaveMenu li", function() {
        a.selectedGalleryId = $(this).attr("id"), void 0 != a.callbacks[a.GALLERIES_CLICKED] && a.callbacks[a.GALLERIES_CLICKED]();
    });
}, com.art.myGalleries.components.SaveMenuContainer.prototype.GetGalleryID = function() {
    return "" != this.selectedGalleryId && void 0 != this.selectedGalleryId ? this.selectedGalleryId : void 0;
}, com.art.myGalleries.components.SaveMenuContainer.prototype.getTemplate = function() {
    var a = this.template;
    return a = a.replace("$ID", this.id), a = a.replace("$New", MyGalleriesCore.getKeyString("newGalleryKey") + "..."), 
    a = a.replace("$All", MyGalleriesCore.getKeyString("allMyCollectionsKey")), a = a.replace("$Login", MyGalleriesCore.getKeyString("saveMenuloginkey"));
}, com.art.myGalleries.components.SaveMenuContainer.prototype.template = "<div id='$ID' class='SaveMenuContainer'><div class='SaveMenuMarginTop'></div><div class='newGalleryMenu'>$New</div><div class='SaveMenuMarginTop'></div><div class='SaveMenuLine'></div><div class='lastSaveMenuGap SaveMenuMarginTop hidden'></div><div class='lastSavedGalleryMenu hidden'></div><div class='lastSaveMenuGap SaveMenuMarginTop hidden'></div><div class='lastSavedMenuLine SaveMenuLine hidden'></div><div class='allMyGalleriesSaveMenuMarginTop SaveMenuMarginTop hidden'></div><div class='allMyGalleriesContainer hidden'>   <div class='allMyGalleiresTextContainer'>       <span class='allMyGalleiresText'>$All</span>       <span class='nav-down-arrow nav-sprite'></span>   </div>   <div class='clear'></div>   <div class='allMyGalleiresListContainer'></div></div><div class='allMyGalleriesSaveMenuMarginTop SaveMenuMarginTop hidden'></div><div class='allMyGalleriesSaveMenuLine SaveMenuLine hidden'></div><div class='loginSaveMenuGap SaveMenuMarginTop'></div><div class='loginSaveGalleryMenuText cPointer'>$Login</div><div class='loginSaveMenuGap SaveMenuMarginTop'></div></div>", 
com.art.myGalleries.vos.RequestVO = function(a) {
    this.properties = a, this.NAME = com.art.myGalleries.vos.RequestVO.NAME, this.sessionid = !1, 
    this.authToken = !1, this.apiKey = !1, this.accountid = !1, this.pageNumber = -1;
}, com.art.myGalleries.vos.RequestVO.NAME = "RequestVO", com.art.myGalleries.vos.RequestVO.prototype.init = function(a, b, c, d) {
    this.pageNumber = d;
}, com.art.myGalleries.vos.GalleryItemVO = function(a) {
    void 0 != a && (this.ItemId = a.ItemGalleryItemID, this.ItemStatus = a.ItemDetails.ItemStatus || 0, 
    this.AvailableInOtherSizes = a.AvailableInOtherSizes || !1, this.APNum = a.ItemDetails.APNum || "", 
    this.ItemDisplayedType = a.ItemDetails.ItemDisplayType || "", this.Imageid = a.ItemDetails.ImageId || "", 
    a.FrameSku && "" != a.FrameSku && (this.FrameSku = a.FrameSku || ""), this.Sku = a.ItemDetails.Sku || "", 
    this.Title = a.ItemDetails.Title || "", this.ArtistName = a.ItemDetails.Artist.FirstName || "", 
    this.ArtistUrl = "", this.ImageUrl = "", this.Height = a.ItemDetails.ImageInformation.LargeImage.Dimensions.Height, 
    this.Width = a.ItemDetails.ImageInformation.LargeImage.Dimensions.Width, this.PhysicalDimensionHeight = a.ItemDetails.PhysicalDimensions.Height, 
    this.PhysicalDimensionWidth = a.ItemDetails.PhysicalDimensions.Width, this.Price = a.ItemDetails.ItemPrice.DisplayPrice, 
    this.DisplayMSRP = a.ItemDetails.ItemPrice.DisplayMSRP, this.MarkDownPrice = a.ItemDetails.ItemPrice.MarkDownPrice, 
    this.ShowMarkDownPrice = a.ItemDetails.ItemPrice.ShowMarkDownPrice, this.CanFrame = a.ItemDetails.ServiceFlags.CanFrame || !1, 
    this.AppendShadow = a.ItemDetails.AppendShadow, this.DateCreated = a.DateCreated, 
    this.DateCreated = a.DateUpdated, this.ZoomUrl = "", this.CropperUrl = "", this.AddToCartUrl = "", 
    this.ProductPageUrl = "", this.PODConfigID = a.PODConfigID || 0, this.VanityURL = a.VanityURL || "", 
    this.ItemDetails = a.ItemDetails || null, null != a.SpecialHandlingID && void 0 != a.SpecialHandlingID && (this.SpecialHandlingID = a.SpecialHandlingID));
}, com.art.myGalleries.vos.GalleryVO = function(a) {
    this.GalleryId = a.GalleryId, this.Name = a.Name, this.ShortDescription = a.ShortDescription, 
    this.LongDescription = a.LongDescription, this.Visibility = a.Visibility, this.GalleryItems = a.GalleryItems, 
    this.WallImages = a.WallImages, this.DateCreated = a.DateCreated, this.DateModified = a.DateModified, 
    this.galleryItemCount = a.GalleryItemCount, this.LastGalleryImageUrl = a.LastGalleryImageUrl;
}, com.art.myGalleries.vos.ShareRequestVO = function(a, b, c, d, e, f) {
    this.viewMode = a, this.shareType = b, this.title = c, this.imageURL = d, this.galleryURL = e, 
    this.additionalArgs = f;
}, com.art.myGalleries.vos.WallItemVO = function(a, b, c, d, e) {
    this.Item = {
        ItemGalleryItemID: a
    }, this.ProductCenterPositionX = b, this.ProductCenterPositionY = c, this.ProductTargetAreaPosX = d, 
    this.ProductTargetAreaPosY = e;
}, com.art.myGalleries.components.CommonComponent = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    this.init(), this.id = a, this.contentTitle = b, this.width = c, this.height = d, 
    this.galleryList = o, this.galleryId = e, this.galleryTitle = f, this.galleryDesc = g, 
    this.privacy = h, this.contentName = i, this.content = j, this.imageURL = k, this.skuName = l, 
    this.artistName = m, this.price = n, this.data, this.UPDATE_GALLERY_TITLE = com.art.myGalleries.components.CommonComponent.UPDATE_GALLERY_TITLE, 
    this.NEW_GALLERY_SUBMIT = com.art.myGalleries.components.SaveMenuContainer.NEW_GALLERY_SUBMIT, 
    this.callbacks = {};
}, com.art.myGalleries.components.CommonComponent.NAME = "CommonComponent", com.art.myGalleries.components.CommonComponent.CLICK = "click", 
com.art.myGalleries.components.CommonComponent.UPDATE_GALLERY_TITLE = "CommonComponentUpdateGalleryTitle", 
com.art.myGalleries.components.CommonComponent.prototype.render = function() {
    return this.getTemplate();
}, com.art.myGalleries.components.CommonComponent.prototype.setData = function(a) {
    $(".modalGallerytxtTitle").val(a);
}, com.art.myGalleries.components.CommonComponent.prototype.setBannerValue = function(a) {
    $(".modalGalleryBanner").val(a);
}, com.art.myGalleries.components.CommonComponent.prototype.registerCallback = function(a, b) {
    this.callbacks[a] = b;
}, com.art.myGalleries.components.CommonComponent.prototype.registerEvents = function() {
    var a = this;
    this.galleryTitle == MyGalleriesCore.getString("Enter title") && $("input:text").css("color", "#666666"), 
    this.galleryDesc == MyGalleriesCore.getString("Enter a Description") && $("#editGalleryTitle_txtDesc").css("color", "#666666");
    var b = "#" + this.id + "_rdGallery", c = "#" + this.id + "_txtNewGallery";
    $("input:radio").change(function() {
        "Existing" == $("input[@name='" + b + "']:checked").val() ? ($(c).val(""), $(c).attr("disabled", !0), 
        $(document).on("click", "#txtExistingDrpDownGallery", function() {
            $("#drpDownLstGallery").css("visibility", "visible");
        }), $(document).on("click", ".ExistingGalleryLI", function() {
            $("#drpdownSelection").text($("#drpdownSelection").text().replace($("#drpdownSelection").text(), $(this).attr("id"))), 
            $("#drpDownLstGallery").css("visibility", "hidden");
        })) : "New" == $("input[@name='" + b + "']:checked").val() && ($("input[@name='" + c + "']:input").removeAttr("disabled"), 
        $("#drpdownSelection").text($("#drpdownSelection").text().replace($("#drpdownSelection").text(), "Select Existing Gallery")), 
        $("#txtExistingDrpDownGallery").unbind("live"), $("#txtExistingDrpDownGallery").unbind("click"), 
        $("#txtExistingDrpDownGallery").unbind("mouseenter"), $(document).off("#txtExistingDrpDownGallery"), 
        $("#drpDownLstGallery").css("visibility", "hidden"));
    }), $(document).on("click", "txtExistingDrpDownGallery", function() {
        "New" == $("input[@name='" + b + "']:checked").val() && $("#drpDownLstGallery").css("visibility", "hidden");
    }), $("#existingDrpDownGalleries").mouseleave(function() {
        $("#drpDownLstGallery").css("visibility", "hidden");
    }), $("#existingDrpDownGalleries").mouseenter(function() {
        "New" == $("input[@name='" + b + "']:checked").val() && $("#drpDownLstGallery").css("visibility", "hidden");
    }), $("#" + this.id + "_txtTitle").focus(function() {
        $(this).css("color", "#333333"), $(this).css("background-color", "#fff");
        var a = $(this).val();
        a == MyGalleriesCore.getModel().saveDefaultGalleryTitle && $(this).val("");
    }), $("#" + this.id + "_txtTitle").blur(function() {
        $(this).css("color", "#666666"), $(this).css("background-color", "#F1F1F1"), "" == $(this).val() && $(this).val(MyGalleriesCore.getModel().saveDefaultGalleryTitle);
    }), $("textarea[maxlength]").keyup(function() {
        var a = parseInt($(this).attr("maxlength"));
        $(this).val().length > a && $(this).val($(this).val().substr(0, $(this).attr("maxlength")));
    }), $("#" + this.id + "_txtDesc").focus(function() {
        $(this).css("color", "#333333"), $(this).css("background-color", "#fff");
        var a = $(this).val();
        ("" == a || a == MyGalleriesCore.getString("Enter a Description")) && $(this).val("");
    }), $("#" + this.id + "_txtDesc").blur(function() {
        $(this).css("color", "#666666"), $(this).css("background-color", "#F1F1F1"), "" == $(this).val() && $(this).val(MyGalleriesCore.getString("Enter a Description"));
    }), $("#addNewGallery_txtTitle").keypress(function(b) {
        (13 == b.which || 13 == b.keyCode) && void 0 != a.callbacks[a.NEW_GALLERY_SUBMIT] && a.callbacks[a.NEW_GALLERY_SUBMIT]();
    });
}, com.art.myGalleries.components.CommonComponent.prototype.existingGalleryEvent = function() {
    _this = this;
}, com.art.myGalleries.components.CommonComponent.prototype.validateTitle = function() {
    var a = !0;
    $("#" + this.id + "_txtTitle").val() == MyGalleriesCore.getString("Enter title") && $("#" + this.id + "_txtTitle").val(""), 
    $("#" + this.id + "_txtDesc").val() == MyGalleriesCore.getString("Enter a Description") && $("#" + this.id + "_txtDesc").val("");
    var b = $("#" + this.id + "_txtTitle").val();
    b = b.trim();
    var c = b.length;
    return 0 >= c && (a = !1, $("#" + this.id + "_txtTitle").css("border", "1px solid red"), 
    $(".newGalleryErrorMsg").text(""), $("#showErrorMsgContainer").show(), $("#showErrorMsg").text("Please provide a unique gallery name.")), 
    $("#" + this.id + "_txtTitle").keypress(function() {
        $("#" + this.id).css("border", "1px solid #9E9E9E"), $("#showErrorMsgContainer").hide(), 
        $("#showErrorMsg").text("");
    }), a;
}, com.art.myGalleries.components.CommonComponent.prototype.getAddTitleData = function() {
    var a = $("#addGalleryTitle_txtTitle").val();
    a = $.trim(a);
    var b = $("#addGalleryTitle_txtDesc").val();
    b = $.trim(b);
    var c = $("#addGalleryTitle_txtGalleryBanner").val();
    return c = $.trim(c), {
        title: a,
        desc: b,
        banner: c
    };
}, com.art.myGalleries.components.CommonComponent.prototype.getEditTitleData = function() {
    var a = $("#editGalleryTitle_txtTitle").val();
    a = $.trim(a);
    var b = $("#editGalleryTitle_txtDesc").val();
    b = $.trim(b);
    var c = "";
    return c = $("#editGalleryTitle_txtGalleryBanner").val(), c = $.trim(c), {
        title: a,
        desc: b,
        bannerUrl: c
    };
}, com.art.myGalleries.components.CommonComponent.prototype.ContinueToMove = function() {}, 
com.art.myGalleries.components.CommonComponent.prototype.getTemplate = function() {
    var a;
    if ("editGalleryTitle" == this.id) "" == this.galleryTitle && (this.galleryTitle = ""), 
    "" == this.galleryDesc && (this.galleryDesc = MyGalleriesCore.getString("Enter a Description")), 
    a = this.editGalleryTemplate.replace(/\$NAME/g, this.id).replace("$CONTENTTITLE", this.contentTitle).replace("$GDESC", this.galleryDesc).replace("$DESCTITLE", MyGalleriesCore.getString("Enter a Description")).replace("$EnterGalleryBannerUrl", MyGalleriesCore.getString("Enter Gallery Banner Url")).replace("$RequiredField", MyGalleriesCore.getString("Required field")); else if ("addGalleryTitle" == this.id) a = this.addGalleryTemplate.replace(/\$NAME/g, this.id).replace("$CONTENTTITLE", this.contentTitle).replace("$EnterGalleryBannerUrl", MyGalleriesCore.getString("Enter Gallery Banner Url")).replace("$RequiredField", MyGalleriesCore.getString("Required field")).replace("$EnterDescription", MyGalleriesCore.getString("Enter a Description")); else if ("deleteArtComponent" == this.id) a = this.deleteArtTemplate.replace(/\$NAME/g, this.id).replace("$CONTENTTITLE", this.contentTitle).replace("$ARTNAME", this.contentName).replace("$CONTENT", this.content); else if ("deleteGalleryComponent" == this.id) a = this.deleteGalleryTemplate.replace(/\$NAME/g, this.id).replace("$CONTENTTITLE", this.contentTitle).replace("$GALLERYNAME", this.contentName).replace("$CONTENT", this.content); else if ("deleteRoomComponent" == this.id) a = this.deleteGalleryTemplate.replace(/\$NAME/g, this.id).replace("$CONTENTTITLE", this.contentTitle).replace("$GALLERYNAME", this.contentName).replace("$CONTENT", this.content); else if ("wishlistMyAccount" == this.id) a = this.wishlistMyAccountTemplate.replace(/\$NAME/g, this.id).replace("$CONTENTTITLE", this.contentTitle).replace("$CONTENT", this.content).replace("$TXT", MyGalleriesCore.getString("Wish lists are now called My Galleries. Items saved to your galleries can be organized, compared, viewed in a room, and shared with friends via email or Facebook.")); else if ("moveToGalleryComponent" == this.id) {
        for (var b = "<ul class='ExistingGallery' style='background-color:#FFFFFF;font-family:verdana;font-size:11x;'>", c = "", d = 0; d < this.galleryList.length; d++) c += "<li class='ExistingGalleryLI' id='" + this.galleryList[d].galleryName + "'><a href='#'>" + this.galleryList[d].galleryName + "</a></li>";
        b = b + c + "</ul>";
        var e = this.existingGalleryItemsTemplate.replace("$existingListItems", b).replace("$SelectExistingGallery", MyGalleriesCore.getString("Select Existing Gallery"));
        a = this.moveToGalleryTemplate.replace(/\$NAME/g, this.id).replace("$CONTENTTITLE", this.contentTitle).replace("$SKUNAME", this.skuName).replace("$ARTISTNAME", this.artistName).replace("$PRICE", this.price).replace("$EXISTINGITEMSNAME", e).replace("$CONTENT", this.content).replace("$IMAGEURL", this.imageURL).replace("$EXISTINGGALLERY", MyGalleriesCore.getString("Existing Gallery")).replace("$NEWGALLERY", MyGalleriesCore.getKeyString("newGalleryKey"));
    } else "shareWithoutLoggedIn" == this.id ? a = this.shareWithoutLoggedInTemplate.replace(/\$NAME/g, this.id).replace("$CONTENTTITLE", this.contentTitle).replace("$CONTENT", this.content) : "addNewGallery" == this.id && (a = this.addNewGalleryTemplate.replace(/\$NAME/g, this.id).replace("$CONTENTTITLE", this.contentTitle).replace("$GTITLE", this.galleryTitle));
    return a;
}, com.art.myGalleries.components.CommonComponent.prototype.moveToGalleryTemplate = "<div id='$NAME' class='MainMoveToGalleryContainer'><div id='$NAME_LeftModalContainer' class='LeftModalContainer'><div id='$NAME_LeftInnerContainer' class='LeftInnerContainer'><div style='1px solid #B7B7B7;margin-bottom:10px;'><img src='$IMAGEURL' width='160px' style='1px solid red;' height='300px' alt='' title='' /> </div><div><span>SKU Name</span><span>$SKUNAME</span></div><div><span>Artist Name</span><span>$ARTISTNAME</span></div><div><span>Price</span><span>$PRICE</span></div></div></div><div id='$NAME_RightModalContainer' class='RightModalContainer'><div id='$NAME_RightInnerContainer' class='RightInnerContainer'><div id='$NAME_Title' class='MoveToGalleryTitle'>$CONTENTTITLE</div><div id='$NAME_GallerySpliter' class='MovetoGallerySpliter'><div class='MoveToExistingItems'><div style='margin-bottom:10px;'><input type='radio' id='$NAME_rdGallery' name='$NAME_rdGallery' value='Existing' class='radioModal' /><span id='spMsg' class='spRdMsg'>$EXISTINGGALLERY</div>$EXISTINGITEMSNAME</div><div class='MoveToNewItems'><div style='margin-bottom:10px;'><input type='radio' id='$NAME_rdGallery' name='$NAME_rdGallery' value='New' class='radioModal' /><span id='spMsg' class='spRdMsg'>$NEWGALLERY</div><div><input type='text' id='$NAME_txtNewGallery' name='$NAME_txtNewGallery' class='modalGallerytxtTitle' disabled='true' /></div></div></div></div><div style='font-family:verdana;font-size:11px;margin-top:280px;margin-right:30px'>$CONTENT</div></div><div class='clear'></div></div>", 
com.art.myGalleries.components.CommonComponent.prototype.existingGalleryItemsTemplate = '<div id="existingDrpDownGalleries"><div id="txtExistingDrpDownGallery" style="display:inline-block;float:left;width:175px;height:24px;padding-left:20px;padding-top:6px;color:#FFFFFF;font-size:13px;font-family:arial,sans-serif;background-image:url(http://cache1.artprintimages.com/images/coreimages/core-components-sprites.png); background-position:0px 0px;background-repeat:no-repeat;"><label id="drpdownSelection">$SelectExistingGallery</label></div><div id="txtExistingDrpDownGallery" style="display:inline-block;float:left;height:30px; width:20px;background-image:url(http://cache1.artprintimages.com/images/coreimages/core-components-sprites.png); background-position:-280px 0px;background-repeat:no-repeat;"></div><div id="drpDownLstGallery" style="visibility:hidden;">$existingListItems</div></div>', 
com.art.myGalleries.components.CommonComponent.prototype.editGalleryTemplate = "<div id='$NAME'><div id='$NAME_Title'>$CONTENTTITLE<span id='spError' class='ErrorMsg'> *</span></div><div style='float:left;display:none;' class='ErrorMsg dErrorMessage' id='showErrorMsgContainer'><div class='loginModalErrorMsgImg floatLeft'></div><div class='floatLeft galErrorMsg' id='showErrorMsg'></div></div><div style='margin-top:1px;width:222px;padding-bottom: 10px;height:27px;float:left;'><input type='text' id='$NAME_txtTitle' name='$NAME_txtTitle' class='modalGallerytxtTitle' maxlength='25' value='' /></div><div id='$NAME_Title'>$DESCTITLE</div><div style='margin-top:2px;float:left;'><pre><textarea id='$NAME_txtDesc' rows='6' cols='20' class='modalGallerytxtDesc' maxlength='500'>$GDESC</textarea></pre></div><div class='clear'></div><div class='bannerContainerEdit' style='display:none'><div id='$NAME_Title'>$EnterGalleryBannerUrl</div><div style='margin-top:1px;width:222px;padding-bottom: 10px;height:27px;float:left;'><input type='text' id='$NAME_txtGalleryBanner' name='$NAME_txtGalleryBanner' class='modalGalleryBanner' maxlength='150' value='' /></div></div><div class='clear'></div><div style='float:left' class='ErrorMsg'>*<span id='ErrorMsg'>$RequiredField</span></div><br/><div class='clear'></div></div>", 
com.art.myGalleries.components.CommonComponent.prototype.shareWithoutLoggedInTemplate = "<div id='$NAME' style='margin-left:25px;margin-right:20px;'><div id='$NAME_Title' class='MainModalTitle'>$CONTENTTITLE</div><div id='txtContent' class='MyGalleriesLoginContainer' style='margin-top:10px;'>$CONTENT</div><div class='clear'></div></div>", 
com.art.myGalleries.components.CommonComponent.prototype.wishlistMyAccountTemplate = "<div id='$NAME' style='margin-left:25px;margin-top:60px;margin-right:20px;'><div id='$NAME_Title' class='MainModalTitle'>$CONTENTTITLE</div><div id='txtContent' class='MyGalleriesLoginContainer' style='margin-top:10px;'>$TXT</div><div class='clear'></div></div>", 
com.art.myGalleries.components.CommonComponent.prototype.addGalleryTemplate = "<div id='$NAME'><div id='$NAME_Title'>$CONTENTTITLE<span id='spError' class='ErrorMsg'> *</span></div><div style='float:left;display:none;' class='ErrorMsg dErrorMessage' id='showErrorMsgContainer'><div class='loginModalErrorMsgImg floatLeft'></div><div class='floatLeft galErrorMsg' id='showErrorMsg'></div></div><div style='margin-top:1px;width:222px;padding-bottom: 10px;height:27px;'><input type='text' id='$NAME_txtTitle' name='$NAME_txtTitle' class='modalGallerytxtTitle' style='color:#666666;' maxlength='25' value='' /></div><div id='$NAME_Title'>$EnterDescription</div><div style='margin-top:2px;float:left;'><pre><textarea id='$NAME_txtDesc' rows='6' cols='20' class='modalGallerytxtDesc' style='color:#666666;' maxlength='500'></textarea></pre></div><div class='clear'></div><div class='bannerContainer' style='display:none'><div id='$NAME_Title'>$EnterGalleryBannerUrl</div><div style='margin-top:1px;width:222px;padding-bottom: 10px;height:27px;float:left;'><input type='text' id='$NAME_txtGalleryBanner' name='$NAME_txtGalleryBanner' class='modalGalleryBanner' maxlength='150' value='' /></div></div><div class='clear'></div><div style='float:left' class='ErrorMsg'>*<span id='ErrorMsg'>$RequiredField</span></div><br><div class='clear'></div></div>", 
com.art.myGalleries.components.CommonComponent.prototype.deleteArtTemplate = "<div id='$NAME'><div id='$NAME_Title'>$CONTENTTITLE \"$ARTNAME\"?</div><div id='$NAME_Content' class='modalContent'>$CONTENT</div><div class='clear'></div></div>", 
com.art.myGalleries.components.CommonComponent.prototype.deleteGalleryTemplate = "<div id='$NAME'><div id='$NAME_Title'>$CONTENTTITLE  $GALLERYNAME</div><div id='$NAME_Content' class='modalContent'>$CONTENT</div><div class='clear'></div></div>", 
com.art.myGalleries.components.CommonComponent.prototype.addNewGalleryTemplate = "<div id='$NAME'><div id='$NAME_Title'>$CONTENTTITLE</div><div class='mgNewGallery'><input type='text' id='$NAME_txtTitle' name='$NAME_txtTitle' class='modalGallerytxtTitle' style='color:#666666;' maxlength='25' value='$GTITLE' /></div><div style='float:left;display:none;' class='ErrorMsg dErrorMessage' id='showErrorMsgContainer'><div class='floatLeft'></div><div class='floatLeft galErrorMsg' id='showErrorMsg'></div></div><div class='newGalleryErrorMsg'></div><div class='clear'></div></div>", 
com.art.core.components.BaseComponent.extend(com.art.myGalleries.components.CommonComponent.prototype), 
com.art.myGalleries.components.MyGalleriesModal = function(a) {
    return this.init(), null == a || void 0 == a ? !1 : (this.id = a.id, this.modal = a, 
    this.selectedGalleryId, this.btn, this.LOGIN_CLICKED = com.art.myGalleries.components.MyGalleriesModal.LOGIN_CLICKED, 
    void (this.REGISTER_CLICKED = com.art.myGalleries.components.MyGalleriesModal.REGISTER_CLICKED));
}, com.art.myGalleries.components.MyGalleriesModal.NAME = "MyGalleriesModal", com.art.myGalleries.components.MyGalleriesModal.CLICK = "click", 
com.art.myGalleries.components.MyGalleriesModal.UPDATE_GALLERY_TITLE = "MyGalleriesModalUpdateGalleryTitle", 
com.art.myGalleries.components.MyGalleriesModal.LOGIN_CLICKED = "LoginClicked", 
com.art.myGalleries.components.MyGalleriesModal.REGISTER_CLICKED = "RegisterClicked", 
com.art.myGalleries.components.MyGalleriesModal.prototype.render = function() {
    return this.getTemplate();
}, com.art.myGalleries.components.MyGalleriesModal.prototype.registerEvents = function() {
    $("#doneBtn").css("visibility", "hidden"), $("#visitGallery").css("visibility", "hidden"), 
    $.browser.msie && $("#continue").css("width", "155px");
    var a = "#" + this.modal.id + "_rdGallery", b = ("#" + this.modal.id + "_rdNewGalery", 
    "#" + this.modal.id + "_txtNewGallery"), c = this;
    if ("" != MyGalleriesCore.getModel().getLastSelectedGalleryName() && null != MyGalleriesCore.getModel().getLastSelectedGalleryName() && "SaveToGallery" == this.modal.id) {
        var d = MyGalleriesCore.getModel().getLastSelectedGalleryName();
        d = com.art.core.utils.StringUtil.autoEllipseText(d, 15), c.selectedGalleryId = MyGalleriesCore.getModel().getLastSelectedGalleryID(), 
        $("#drpdownSelection").text($("#drpdownSelection").text().replace($("#drpdownSelection").text(), d));
    }
    $.browser.msie && 7 == parseInt($.browser.version) && ("MoveToGallery" == this.modal.id ? $(".MyGalleriesLeftContainer").css("height", "365") : $(".MyGalleriesLeftContainer").css("height", "385")), 
    $.browser.msie && 8 == parseInt($.browser.version) && "MoveToGallery" == this.modal.id && $("#baseModalButtonBarRight_myModalMoveToGallery").css("height", "0px");
    var e = !1;
    if (this.modal.galleryList.length > 0) for (var f = 0; f < this.modal.galleryList.length; f++) 50 != this.modal.galleryList[f].Permissions && (e = !0);
    if (e) $("[class=radioModal]").removeAttr("checked"), $("[class=radioModal]").filter("[value=Existing]").attr("checked", "checked"), 
    $(b).attr("disabled", "true"), $("#existingDrpDownGalleries").removeClass("existingDrpDownGalleriesOpacity"); else {
        $("[class=radioModal]").removeAttr("checked"), $("[class=radioModal]").filter("[value=New]").attr("checked", "checked"), 
        $("input[@name='" + b + "']:input").removeAttr("disabled"), $(a).attr("disabled", "disabled"), 
        $("#existingDrpDownGalleries").addClass("existingDrpDownGalleriesOpacity");
        var g = .3;
        $("#txtExistingDrpDownGallery").css({
            filter: "alpha (opacity=" + 100 * g + ")",
            filter: "progid:DXImageTransform.Microsoft.Alpha(style=0, opacity=" + 100 * g + ")",
            "-moz-opacity": g,
            opacity: g,
            "-khtml-opacity": g
        });
    }
    $("#privacyChk").css("visibility", "hidden"), $("#privacyTxt").css("visibility", "hidden"), 
    $("input:radio").change(function() {
        if ("Existing" == $("input[name='SaveToGallery_rdGallery']:checked").val() || "Existing" == $("input[name='MoveToGallery_rdGallery']:checked").val()) $(b).val(MyGalleriesCore.getKeyString("defaultGallerynameKey")), 
        $(b).attr("disabled", "true"), $("#privacyChk").css("visibility", "hidden"), $("#privacyTxt").css("visibility", "hidden"), 
        $(".commonErrorMsg").text(""), $(".commonErrorMsg").hide(); else if ("New" == $("input[name='SaveToGallery_rdGallery']:checked").val() || "New" == $("input[name='MoveToGallery_rdGallery']:checked").val()) {
            $("input[@name='" + b + "']:input").removeAttr("disabled"), $("#drpdownSelection").text($("#drpdownSelection").text().replace($("#drpdownSelection").text(), MyGalleriesCore.getString("Select Gallery")));
            var a = new com.art.core.cookie.Cookie(), d = a.getCookieDictionary("ap", "accounttype");
            "1" != d && ($("#privacyChk").css("visibility", "visible"), $("#privacyTxt").css("visibility", "visible")), 
            $("#txtExistingDrpDownGallery").unbind("live"), $("#txtExistingDrpDownGallery").unbind("click"), 
            $("#txtExistingDrpDownGallery").unbind("mouseenter"), $(document).off("#txtExistingDrpDownGallery"), 
            $(".commonErrorMsg").text(""), $(".commonErrorMsg").hide(), $("#drpDownLstGallery").hide();
        }
        if ("" != MyGalleriesCore.getModel().getLastSelectedGalleryName() && null != MyGalleriesCore.getModel().getLastSelectedGalleryName() && "SaveToGallery" == c.modal.id) {
            var e = MyGalleriesCore.getModel().getLastSelectedGalleryName();
            e = com.art.core.utils.StringUtil.autoEllipseText(e, 15), c.selectedGalleryId = MyGalleriesCore.getModel().getLastSelectedGalleryID(), 
            $("#drpdownSelection").text($("#drpdownSelection").text().replace($("#drpdownSelection").text(), e));
        }
    }), $(document).on("click", "#txtExistingDrpDownGallery", function() {
        "New" == $("input[@name='" + a + "']:checked").val() && $("#drpDownLstGallery").hide();
    }), $("#drpDownLstGallery").mouseenter(function() {
        $(this).show(), $(".commonErrorMsg").hide();
    }), $("#existingDrpDownGalleries, #drpDownLstGallery").mouseleave(function() {
        $("#drpDownLstGallery").hide(), $(".commonErrorMsg").show();
    }), $("#existingDrpDownGalleries").click(function() {
        $(".commonErrorMsg").text(""), "New" == $("input[name='SaveToGallery_rdGallery']:checked").val() || "New" == $("input[name='MoveToGallery_rdGallery']:checked").val() ? $("#drpDownLstGallery").hide() : ("Existing" == $("input[name='SaveToGallery_rdGallery']:checked").val() || "Existing" == $("input[name='MoveToGallery_rdGallery']:checked").val()) && $("#drpDownLstGallery").show();
    }), $(document).on("click", ".drpDownLstItem", function() {
        c.selectedGalleryId = $(this).attr("id");
        var a = $("#drpdownSelection").text().replace($("#drpdownSelection").text(), $(this).text()), b = com.art.core.utils.StringUtil.autoEllipseText(a, 15);
        $("#drpdownSelection").text(b), $("#drpDownLstGallery").hide();
    }), $("#" + this.modal.id + "_txtNewGallery").keypress(function() {
        $(".commonErrorMsg").text(""), $(".commonErrorMsg").hide();
    }), $("#" + this.modal.id + "_txtNewGallery").focus(function() {
        $(this).css("color", "#333333"), $(this).css("background-color", "#fff");
        var a = $(this).val();
        ("" == a || a == MyGalleriesCore.getKeyString("defaultGallerynameKey")) && $(this).val("");
    }), $("#" + this.modal.id + "_txtNewGallery").blur(function() {
        $(this).css("color", "#666666"), $(this).css("background-color", "#F1F1F1"), "" == $(this).val() && $(this).val(MyGalleriesCore.getKeyString("defaultGallerynameKey"));
    }), $(document).on("click", "#registerSavetogallery", function() {
        void 0 != c.callbacks[c.REGISTER_CLICKED] && c.callbacks[c.REGISTER_CLICKED]();
    });
}, com.art.myGalleries.components.MyGalleriesModal.prototype.GetGalleryID = function() {
    return "" != this.selectedGalleryId && void 0 != this.selectedGalleryId ? this.selectedGalleryId : void 0;
}, com.art.myGalleries.components.MyGalleriesModal.prototype.ContinueToMove = function() {
    if (void 0 == $("input[name=" + this.modal.id + "_rdGallery]:checked").val()) $(".commonErrorMsg").text(MyGalleriesCore.getString("Please select a option.")), 
    $(".commonErrorMsg").show(); else {
        var a = $("input[name=" + this.modal.id + "_rdGallery]:checked").val();
        switch (a) {
          case "New":
            if (!($("#" + this.modal.id + "_txtNewGallery").val().trim().length <= 0)) return "New";
            $(".commonErrorMsg").text(MyGalleriesCore.getString("Please enter a gallery name. ")), 
            $(".commonErrorMsg").show();
            break;

          case "Existing":
            if ("Select Gallery" != $("#drpdownSelection").text()) return "Existing";
            $(".commonErrorMsg").text(MyGalleriesCore.getString("Please select an existing gallery from the dropdown menu.")), 
            $(".commonErrorMsg").show();
            break;

          default:
            return a;
        }
    }
}, com.art.myGalleries.components.MyGalleriesModal.prototype.getAddTitleData = function() {
    var a = "#" + this.modal.id + "_txtNewGallery";
    return {
        title: $(a).val()
    };
}, com.art.myGalleries.components.MyGalleriesModal.prototype.getTemplate = function() {
    var a = "";
    switch (this.modal.id) {
      case "MoveToGallery":
      case "SaveToGallery":
        a = this.getTemplateForMoveToGallery();
        break;

      case "DeleteGallery":
        a = this.getTemplateForDeleteGallery();
        break;

      default:
        throw new Error("Modal Failure! Unknown note.name");
    }
    return a;
}, com.art.myGalleries.components.MyGalleriesModal.prototype.getTemplateForMoveToGallery = function() {
    var a = "<div id='" + this.modal.id + "' class='MyGalleriesModalContainer'>" + this.ModalLeftContainer() + this.ModalRightContainer() + this.ModalConfirmContainer() + "</div><div class='clear'></div>";
    return a;
}, com.art.myGalleries.components.MyGalleriesModal.prototype.getTemplateForDeleteGallery = function() {
    var a = "<div id='" + this.modal.id + "' class='MyGalleriesModalContainer'>" + this.ModalLeftContainer() + this.ModalRightContainer() + "</div><div class='clear'></div>";
    return a;
}, com.art.myGalleries.components.MyGalleriesModal.prototype.ModalLeftContainer = function() {
    var a = this, b = "", c = "", d = "", e = "", f = "", g = "";
    MyGalleriesCore.getModel().environmentSub.isExternalPage ? (e = a.modal.galleryItem.ImageUrl, 
    g = void 0 != a.modal.galleryItem.ArtistName ? a.modal.galleryItem.ArtistName : "", 
    f = a.modal.galleryItem.Title) : (e = a.modal.galleryItem.ItemDetails.ImageInformation.LargeImage.HttpImageURL, 
    g = (a.modal.galleryItem.ItemDetails.Artist.FirstName || "") + " " + (a.modal.galleryItem.ItemDetails.Artist.LastName || ""), 
    f = a.modal.galleryItem.ItemDetails.Title);
    var h = a.modal.galleryItem.Width, i = a.modal.galleryItem.Height, j = 180, k = 0, l = 0, m = 0, n = 0, o = h / i;
    o > 1 ? (k = j, l = j / o, m = (k - l) / 2) : (k = j * o, l = j, n = (l - k) / 2), 
    i = Math.floor(l), h = Math.floor(k);
    var p, q, r, s = 220 - i, t = 220 - h;
    s > 0 && (p = s / 2, bp = s - p), t > 0 && (q = t / 2, r = t - q), r = Math.floor(r), 
    p = Math.floor(p) + 41, c = '<img style="position:absolute;left:' + r + 'px;margin-top:20px" width="' + h + '" height="' + i + '" class="mg-modalImage mg-shadow" alt="" title="" src="' + e + '" />';
    if ("NaN" == h) ; else ;
    var u = '<div id="mg-modalSkuName" class="MyGalleriesText SiteFont"  >' + f + "</div>";
    if ("" != g) var v = '<div id="mg-modalArtistName" class="MyGalleriesText SiteFont gTxtPrimary">' + decodeURI(g) + "</div>"; else var v = "";
    if (void 0 != a.modal.galleryItem.DisplayPrice) var w = "<div id='mg-modalItemPrice' class='MyGalleriesText SiteFont'>" + a.modal.galleryItem.DisplayPrice + "</div>"; else var w = "<div id='mg-modalItemPrice' class='MyGalleriesText SiteFont'>" + a.modal.galleryItem.Price + "</div>";
    return b = '<div class=\'MyGalleriesLeftContainer\'><div class="MyGalleriesLeftImgContainer" style="width:' + h + "px;height:" + i + 'px;">' + c + d + "</div><div class='MyGalleriesLeftItemDetailsContainer' >" + u + v + w + "</div></div>";
}, com.art.myGalleries.components.MyGalleriesModal.prototype.ModalRightContainer = function() {
    var a = ("<div class='MainModalTitle'>" + this.modal.Title + "</div>", this.getTemplateForGalleryContent()), b = "<div class='MyGalleriesRightContainer'>" + a + "</div>";
    return b;
}, com.art.myGalleries.components.MyGalleriesModal.prototype.getTemplateForGalleryContent = function() {
    var a, b = "", c = "", d = this.getExistingDropDownTextBox(), e = this.getExistingDropDownList(), f = new com.art.core.cookie.Cookie(), g = f.getCookieDictionary("ap", "accounttype");
    a = "SaveToGallery" == this.modal.id && "1" == g ? "<div class='MyGalleriesLoginContainer'>" + MyGalleriesCore.getString("Don't see your existing galleries? ") + "<br><div id ='loginSavetogallery'>" + MyGalleriesCore.getString("Close this dialog and login to your account.") + "</div></div>" : "", 
    c = "SaveToGallery" == this.modal.id ? "" : "hidden";
    var h = "<div class='ModalExistingGallery'><input type='radio' id='" + this.modal.id + "_rdGallery' name='" + this.modal.id + "_rdGallery' value='Existing' class='radioModal' style='vertical-align:top;margin-right:10px;margin-left:0px;' /><span id='ModalExistingGalleryLabel' class='ModalExistingGalleryLabel gCustomFont'>" + MyGalleriesCore.getString("Existing Gallery") + "</span><div class='clear'></div>" + d + "<div class='clear'></div>" + e + "<div class='clear'></div>" + a + "<div class='commonErrorMsg fontsize12'></div></div>", i = "<div class='ModalNewGallery floatRight'><input type='radio' id='" + this.modal.id + "_rdNewGallery' name='" + this.modal.id + "_rdGallery' value='New' class='radioModal' style='vertical-align:top;margin-right:10px;margin-left:0;' /><span id='ModalNewGalleryLabel' class='ModalNewGalleryLabel gCustomFont'>" + MyGalleriesCore.getKeyString("newGalleryKey") + "</span><div id='mg-newGallery' class='newGalleryTextBox'><input type='text' id='" + this.modal.id + "_txtNewGallery' name='" + this.modal.id + "_txtNewGallery' class='modalGallerytxtTitle SiteFont' maxlength='25'  value=" + MyGalleriesCore.getKeyString("defaultGallerynameKey") + "/></div></div>";
    return b = "<div class='MyGalleriesModalGalleryContainer floatLeft'>" + h + i + "</div>";
}, com.art.myGalleries.components.MyGalleriesModal.prototype.ModalConfirmContainer = function() {
    if ("SaveToGallery" == this.modal.id) {
        var a, b = "<div class='MainModalTitle gCustomFont uCase' style='margin-bottom:20px;'>" + MyGalleriesCore.getString("Successfully Saved!") + "</div>", c = "<div id='txtConfirmationMessage' class='MyGalleriesText'>\"" + this.modal.galleryItem.Title + '"' + MyGalleriesCore.getString(" was added to your") + " <span id='galleryName'></span>&nbsp;" + MyGalleriesCore.getString("gallery. You can access your gallery at any time from the My Galleries link at the top of each page, or by selecting Visit Gallery below.") + "</div>", d = new com.art.core.cookie.Cookie(), e = d.getCookieDictionary("ap", "accounttype");
        a = "SaveToGallery" == this.modal.id && "1" == e ? "<hr/><div id='txtLoginConfirm' class='MyGalleriesText'>" + MyGalleriesCore.getString("To take full advantage of gallery features, including accessing your saved items from any computer and sharing with friends, please") + " <span id ='loginSavetogallery'>" + MyGalleriesCore.getString("Login") + "</span> " + MyGalleriesCore.getString("or") + " <span id ='registerSavetogallery'>" + MyGalleriesCore.getString("Sign Up.") + "</span></div>" : "";
        var f = "<div id='btnContainer'></div>", g = "<div id='SavetoGalleryConfirm' style='visibility:hidden;' class='MyGalleriesConfirmRightContainer'>" + b + c + a + f + "</div>";
    } else var b = "<div class='MainModalTitle gCustomFont uCase'  style='margin-bottom:20px;'>" + MyGalleriesCore.getString("Successfully Saved!") + "</div>", c = "<div id='txtConfirmationMessage' class='MyGalleriesText'>\"" + this.modal.galleryItem.Title + '"' + MyGalleriesCore.getString(" was added to your") + " <span id='galleryName'></span>&nbsp;" + MyGalleriesCore.getString("gallery. You can access your gallery at any time from the My Galleries link at the top of each page, or by selecting Visit Gallery below.") + "</div>", f = "<div id='btnContainer'></div>", g = "<div id='MoveToGalleryConfirm' style='visibility:hidden;' class='MyGalleriesConfirmRightContainer'>" + b + c + f + "</div>";
    return g;
}, com.art.myGalleries.components.MyGalleriesModal.prototype.getExistingDropDownTextBox = function() {
    var a = new com.art.core.cookie.Cookie(), b = a.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, this.modal.id), c = "";
    if (this.modal.galleryList.length > 0) for (var d = 0; d < this.modal.galleryList.length; d++) if (50 != this.modal.galleryList[d].Permissions && this.modal.galleryList[d].ItemKey == b) {
        c = unescape(this.modal.galleryList[d].Name), c = com.art.core.utils.StringUtil.autoEllipseText(c, 15), 
        this.selectedGalleryId = this.modal.galleryList[d].GalleryId;
        break;
    }
    if ("" == c ? c = "Select Gallery" : "" != MyGalleriesCore.getModel().getLastSelectedGalleryName() && null != MyGalleriesCore.getModel().getLastSelectedGalleryName() && "SaveToGallery" == this.modal.id && (c = MyGalleriesCore.getModel().getLastSelectedGalleryName(), 
    c = com.art.core.utils.StringUtil.autoEllipseText(c, 15), this.selectedGalleryId = MyGalleriesCore.getModel().getLastSelectedGalleryID()), 
    "SaveToGallery" == this.modal.id) var e = '<div id="existingDrpDownGalleries"><div id="txtExistingDrpDownGallery"><div id="txtExistingDrpDownGallery_label" class=""><div id="drpdownSelection" class="floatLeft">' + c + '</div><div style="float: left; background-image: url(&quot;http://cache1.artprintimages.com/images/coreimages/core-components-sprites.png&quot;); background-repeat: no-repeat; width: 20px; height: 25px;#height: 18px; background-position: -315px -73px;"></div></div></div></div>'; else var e = '<div id="existingDrpDownGalleries"><div id="txtExistingDrpDownGallery"><div id="txtExistingDrpDownGallery_label"><div style="float: left;width:150px;" id="drpdownSelection">' + c + '</div><div style="float: left; background-image: url(&quot;http://cache1.artprintimages.com/images/coreimages/core-components-sprites.png&quot;); background-repeat: no-repeat; width: 20px; height: 25px; background-position: -315px -73px;"></div></div></div></div>';
    return e;
}, com.art.myGalleries.components.MyGalleriesModal.prototype.getExistingDropDownList = function() {
    var a = "", b = "";
    if (this.modal.galleryList.length > 0) {
        for (var c = 0; c < this.modal.galleryList.length; c++) 50 != this.modal.galleryList[c].Permissions && (galleryName = com.art.core.utils.StringUtil.autoEllipseText(this.modal.galleryList[c].Name, 15), 
        a += '<li class="drpDownLstItem" id="' + this.modal.galleryList[c].GalleryId + '">' + unescape(galleryName) + "</li>");
        b = '<ul id="drpDownLstGallery" class="floatLeft">' + a + "</ul>";
    }
    return b;
}, com.art.myGalleries.components.MyGalleriesModal.prototype.getDestinationSelectedGalleryId = function() {
    return this.selectedGalleryId;
}, com.art.core.components.BaseComponent.extend(com.art.myGalleries.components.MyGalleriesModal.prototype), 
com.art.myGalleries.components.LoginInvokeComponent = function(a, b, c) {
    this.id = "LoginInvokeComponent", this.NAME = com.art.myGalleries.components.LoginInvokeComponent.NAME, 
    this.LOGIN_CLICK = com.art.myGalleries.components.LoginInvokeComponent.LOGIN_CLICK, 
    this.REGISTER_CLICK = com.art.myGalleries.components.LoginInvokeComponent.REGISTER_CLICK, 
    this.imagePath = "", this.callbacks = {}, this.loginOption = com.art.core.components.LoginModal.LOGIN, 
    this.app = b, this.calledmodule = "", this.loginclickedFForB = !1, this.modalAddNewGallery, 
    this.newGalleryOptionLB, this.migration = !1;
}, com.art.myGalleries.components.LoginInvokeComponent.NAME = "LoginInvokeComponent", 
com.art.myGalleries.components.LoginInvokeComponent.prototype.init = function() {}, 
com.art.myGalleries.components.LoginInvokeComponent.prototype.showLoginModal = function(a, b) {
    var c = this, d = !1;
    window.location.host.indexOf(".co.jp") > -1 && (d = !0);
    var e = "";
    trace("showloginval" + b.body), void 0 != b.body.migrationEmail && b.body.migrationEmail && (e = b.body.migrationEmail, 
    this.migration = !0), this.loginLB = new com.art.core.components.LightBox("myLoginLB", "body", .7), 
    this.loginLB.zindex = this.app.getModel().getNextHighestZIndex();
    var f = b ? b.body.message : "", g = !1;
    ("3" == this.app.getModel().environment.customerZoneId || "4" == this.app.getModel().environment.customerZoneId || "25" == this.app.getModel().environment.customerZoneId) && (g = !0);
    var h = {
        defaultFacebookAccountId: this.app.getModel().environment.facebookAccountId,
        cdnPath: this.app.getModel().environment.cdnPath,
        cdnVersionNumber: this.app.getModel().environment.versionNumber,
        doTranslate: g
    }, i = {};
    g || "undefined" == typeof $serverSideConfig || (i = {
        loginIntro: $serverSideConfig.loginIntro || "",
        registerIntro: $serverSideConfig.registerIntro || ""
    }), this.login = new com.art.core.components.LoginModal("myGalleryLogin", MyGalleriesCore.getString("Login to your Art.com account"), MyGalleriesCore.getString("Sign up for a new Art.com account "), {}, this.loginOption, i, {}, h, f, d);
    var j = {
        serviceUrlAccountAuthenticationApi: this.app.getModel().environment.serviceUrlAccountAuthenticationApi,
        apiKey: this.app.getModel().environment.apiKey,
        sessionId: this.app.getModel().environment.sessionId,
        socialPlugin: "true" == window.MyGalleriesEnvironmentVariables.useSocialPlugins ? this.login.socialLogin.Gigya : null
    };
    this.login.setServiceDetails(j), $("body").append(this.login.render(this.app.getModel().getNextHighestZIndex() + 1)), 
    this.login.close(function() {
        c.loginLB && c.loginLB.close();
    }), this.app.getModel().migrationEmail = e, setTimeout(function() {
        e.length > 0 && ($("#regEmail").val(e), $("#regConfirmEmail").val(e));
    }, 500), this.login.login(function(a) {
        if (c.invokeGAforLoginSuccess("login"), a.success) {
            void 0 != a.facebookResponse ? a.artComResponse : a;
            if (void 0 != a.facebookResponse && null != a.facebookResponse) {
                var b = a.artComResponse.AuthenticationToken;
                a.artComResponse.Account.ProfileInfo.ProfileKey, a.artComResponse.Account.ProfileInfo.AccountId;
                if ("" == MyGalleriesCore.getModel().migrationEmail && (MyGalleriesCore.getModel().migrationEmail = a.artComResponse.Account.ProfileInfo.EmailAddress), 
                void 0 != window.newProductPage && window.newProductPage && (dataLayer[2].user.profile.profileInfo.email = a.artComResponse.Account.ProfileInfo.EmailAddress), 
                null != a.artComResponse.Account.ProfileInfo.CartInfo) {
                    var d = new com.art.core.cookie.Cookie(), e = d.getCookieDictionary("ap", "cartkey"), f = d.getCookieDictionary("ap", "ct"), g = MyGalleriesCore.getModel().getCartInfo(a.artComResponse.Account.ProfileInfo.CartInfo), h = {};
                    h = {
                        cartKey: e || g.cartKey,
                        cartCount: f || g.cartCount
                    }, null != h.cartKey && "" != h.cartKey && MyGalleriesCore.getModel().updateCartCookie(h);
                }
                c.app.setNickNameGeneratedCookie(a.artComResponse.Account.ProfileInfo), c.app.sendNotification(new com.art.core.utils.Note(c.app.events.FACEBOOK_MERGE_ACCOUNTS, {
                    authToken: b
                }, {
                    modulename: c.calledmodule,
                    logintfob: c.loginclickedFForB
                }));
            } else {
                var b = a.AuthenticationToken;
                a.Account.ProfileInfo.ProfileKey, a.Account.ProfileInfo.AccountId;
                if ("" == MyGalleriesCore.getModel().migrationEmail && (MyGalleriesCore.getModel().migrationEmail = a.Account.ProfileInfo.EmailAddress), 
                void 0 != window.newProductPage && window.newProductPage && (dataLayer[2].user.profile.profileInfo.email = a.Account.ProfileInfo.EmailAddress), 
                null != a.Account.ProfileInfo.CartInfo) {
                    var d = new com.art.core.cookie.Cookie(), e = d.getCookieDictionary("ap", "cartkey"), f = d.getCookieDictionary("ap", "ct"), g = MyGalleriesCore.getModel().getCartInfo(a.Account.ProfileInfo.CartInfo), h = {};
                    h = {
                        cartKey: e || g.cartKey,
                        cartCount: f || g.cartCount
                    }, null != h.cartKey && "" != h.cartKey && MyGalleriesCore.getModel().updateCartCookie(h);
                }
                if (c.app.setNickNameGeneratedCookie(a.Account.ProfileInfo), trace("Login Invoke Component"), 
                null != a.ClientCookies && a.ClientCookies.length > 0) {
                    var i = a.ClientCookies[0], j = i.Name, k = i.Value, l = i.Domain, m = i.Path;
                    c.app.setAccountProviderCookieInfo(j, k, m, l);
                }
                var n = c.login.getLoginAccountData(), o = new com.art.core.utils.Note(c.app.events.LOGIN_ACCOUNT, {
                    username: n.username,
                    password: n.password,
                    coreresponse: a
                }, {
                    fromExternalModule: !1,
                    modulename: c.calledmodule,
                    logintfob: c.loginclickedFForB
                });
                c.app.sendNotification(o);
            }
        } else c.app.sendNotification(new com.art.core.utils.Note(c.app.events.REGISTER_ACCOUNT_FAILED, "failure"));
    }), this.login.register(function(a) {
        c.invokeGAforLoginSuccess("register");
        a.AuthenticationToken, a.Account.ProfileInfo.ProfileKey, a.Account.ProfileInfo.AccountId;
        if ("" == MyGalleriesCore.getModel().migrationEmail && (MyGalleriesCore.getModel().migrationEmail = a.Account.ProfileInfo.EmailAddress), 
        void 0 != window.newProductPage && window.newProductPage && (dataLayer[2].user.profile.profileInfo.email = a.Account.ProfileInfo.EmailAddress), 
        null != a.ClientCookies && a.ClientCookies.length > 0) {
            var b = a.ClientCookies[0], d = b.Name, e = b.Value, f = b.Domain, g = b.Path;
            c.app.setAccountProviderCookieInfo(d, e, g, f);
        }
        var h = c.login.getLoginAccountData();
        c.app.setNickNameGeneratedCookie(a.Account.ProfileInfo);
        var i = new com.art.core.utils.Note(c.app.events.LOGIN_ACCOUNT, {
            username: h.username,
            password: h.password,
            coreresponse: a
        }, {
            fromExternalModule: !1,
            modulename: c.calledmodule,
            logintfob: c.loginclickedFForB
        });
        c.app.sendNotification(i);
    }), this.login.close(function() {
        c.loginLB && c.loginLB.close();
    });
}, com.art.myGalleries.components.LoginInvokeComponent.prototype.invokeGAforLoginSuccess = function(a) {
    var b = "Account registration";
    "login" == a && (b = "Account login"), MyGalleriesCore.getModel().environment.accountType == MyGalleriesCore.constants.ANONYMOUS && null != MyGalleriesEnvironmentVariablesDynamic && (null != MyGalleriesEnvironmentVariablesDynamic.sourcePageForLogin && "" != MyGalleriesEnvironmentVariablesDynamic.sourcePageForLogin ? (myaccountGA.trackEventWithCategory(b, MyGalleriesEnvironmentVariablesDynamic.sourcePageForLogin), 
    MyGalleriesEnvironmentVariablesDynamic.sourcePageForLogin = "") : myaccountGA.trackEventWithCategory(b, "Global header"));
}, com.art.myGalleries.components.LoginInvokeComponent.prototype.notify = function() {
    this.app.sendNotification(note);
}, com.art.myGalleries.components.LoginInvokeComponent.prototype.listNotificationInterests = function() {
    return [ this.app.events.SHOW_GLOBAL_LOGINMODAL, this.app.events.REGISTER_ACCOUNT_SUCCESS, this.app.events.REGISTER_ACCOUNT_FAILED, this.app.events.LOGIN_ACCOUNT_SUCCESS, this.app.events.LOGIN_ACCOUNT_FAILED, this.app.events.LOGOUT_MYGALLERY_SUCCESS, this.app.events.LOGOUT_MYGALLERY_FAILED, this.app.events.LOGIN_FACEBOOK_MYGALLERY_SUCCESS, this.app.events.LOGIN_FACEBOOK_MYGALLERY_FAILED, this.app.events.ADD_ITEM_TO_EXISTING_GALLERY_SUCCESS, this.app.events.ADD_ITEM_TO_NEW_GALLERY_SUCCESS, this.app.events.ADD_ITEM_TO_NEW_GALLERY_FAILED, this.app.events.GET_ALL_GALLERIES_SUCCESS_FOR_WEBUSER ];
}, com.art.myGalleries.components.LoginInvokeComponent.prototype.refreshpage = function() {
    var a = location.href, b = a.indexOf("#");
    if (b > -1 && (a = a.substring(0, b)), void 0 != window.newProductPage && window.newProductPage) {
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent("LogInEventCallback", !0, !0, !0), window.dispatchEvent(c);
    } else window.location.href = a;
}, com.art.myGalleries.components.LoginInvokeComponent.prototype.handleNotification = function(a) {
    var b = this, c = new com.art.core.cookie.Cookie(), d = c.getCookieDictionary(MyGalleriesCore.getModel().SESSIONCOOKIENAME, "isNickNameSystemGenerated");
    b = this;
    var e = /iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase());
    switch (a.name) {
      case this.app.events.ADD_ITEM_TO_EXISTING_GALLERY_SUCCESS:
        this.modalAddNewGallery && this.modalAddNewGallery.close(), this.newGalleryOptionLB && this.newGalleryOptionLB.close();
        break;

      case this.app.events.GET_ALL_GALLERIES_SUCCESS_FOR_WEBUSER:
        a.body.fromGridModule || this.UpdateItemToDefaultGallery();
        break;

      case this.app.events.ADD_ITEM_TO_NEW_GALLERY_SUCCESS:
        if (0 != a.body.OperationResponse.OperationStatus) if (1 == this.app.getModel().saveMenuBoolean) {
            var f = a.body.OperationResponse.ResponseMessage;
            $("#showErrorMsgContainer").show(), $(".newGalleryErrorMsg").text(f), $(".newGalleryErrorMsg").css("display", "block"), 
            $(".newGalleryErrorMsg").css("visibility", "visible");
        } else if (503 == a.body.OperationResponse.ResponseCode) $(".commonErrorMsg").css("width", "450px"), 
        $(".commonErrorMsg").css("top", "165px"), $(".commonErrorMsg").text(this.app.getString("You have an existing gallery with this name. Please enter a new name or select your existing gallery from the dropdown menu.")), 
        $(".commonErrorMsg").show(); else {
            var f = a.body.OperationResponse.ResponseMessage;
            $(".commonErrorMsg").text(f), $(".commonErrorMsg").show();
        } else this.modalAddNewGallery && this.modalAddNewGallery.close(), this.newGalleryOptionLB && this.newGalleryOptionLB.close();
        break;

      case this.app.events.SHOW_GLOBAL_LOGINMODAL:
        this.loginOption = a.body.loginOption, this.calledmodule = a.type.modulename, a.type.clickedLoginThroughFollowOrBookMark && (this.loginclickedFForB = a.type.clickedLoginThroughFollowOrBookMark), 
        this.showLoginModal(null, a);
        break;

      case this.app.events.REGISTER_ACCOUNT_SUCCESS:
        if ("GlobalHeader" == a.type.modulename) {
            if (a.body && a.body.fromExternalModule) return;
            if (_gaq.push([ "t1._setCustomVar", 3, "logged-in", "true", 1 ]), _gaq.push([ "global._setCustomVar", 3, "logged-in", "true", 1 ]), 
            "true" == d && "true" == MyGalleriesCore.getEnvironment().enableCommunityFeatures && !e) return void ShowProfile();
            if (this.doNotRefreshOnLogin) {
                try {
                    dle_handleLoginSuccess();
                } catch (g) {}
                return;
            }
            var c = new com.art.core.cookie.Cookie();
            if ((location.href.indexOf("/secure/your_account/") > -1 || location.href.indexOf("OrderTracking.aspx") > -1) && "" != c.getCookieDictionary("ap", "profileURL")) {
                var h = c.getCookieDictionary("ap", "profileURL");
                return void (window.location.href = h + "?pagetype=oh");
            }
            if ((location.href.indexOf("/me/") > -1 || location.href.indexOf("mygalleries.asp") > -1 || location.href.indexOf("~/youplusart/") > -1) && location.href.indexOf("/me/community") < 0) {
                if ("" != c.getCookieDictionary("ap", "profileURL")) {
                    var h = c.getCookieDictionary("ap", "profileURL");
                    "true" == MyGalleriesCore.getEnvironment().enableCommunityFeatures ? window.location.href = h : window.location.href = h + "?ac=true";
                }
            } else this.refreshpage();
        } else "NEW_GALLERY_CLICKED" == a.type.modulename && this.showNewGalleryPopUp();
        break;

      case this.app.events.REGISTER_ACCOUNT_FAILED:
        window.location.href = window.location.href, $(".loginModalErrorMsg").css("display", "block"), 
        "exist" == a.body ? ($.browser.msie && 7 == parseInt($.browser.version) ? "myGalleryLogin" != this.id && $(".loginErrorMsg").css("top", "60px") : $(".loginErrorMsg").css("top", "70px"), 
        $(".loginErrorMsg").text(MyGalleriesCore.getString("The email address you entered is already associated with an Art.com account."))) : "invalidemail" == a.body ? $(".loginErrorMsg").text(MyGalleriesCore.getString("Please enter a valid email address.")) : "invalidpassword" == a.body ? $(".loginErrorMsg").text(MyGalleriesCore.getString("Password must be at least 8 characters.")) : "failure" == a.body && ($.browser.msie && ("myGalleryLogin" != this.id ? $(".loginErrorMsg").css("top", "40px") : $(".loginErrorMsg").css("top", "70px")), 
        $(".loginErrorMsg").text(MyGalleriesCore.getString("We were unable to find an account associated with that email address.")));
        break;

      case this.app.events.LOGIN_ACCOUNT_SUCCESS:
        if ("GlobalHeader" == a.type.modulename || "GlobalHeaderInCommunity" == a.type.modulename) {
            if (Controller.notify("LoginAccountSuccess"), this.login && this.login.close(), 
            "true" == d && "true" == MyGalleriesCore.getEnvironment().enableCommunityFeatures && !e) return void ShowProfile();
            if ("true" == d && "GlobalHeaderInCommunity" == a.type.modulename && "true" == MyGalleriesCore.getEnvironment().enableCommunityFeatures && e) return void ShowProfile();
            trace("logging ga for login success"), _gaq.push([ "t1._setCustomVar", 3, "logged-in", "true", 1 ]), 
            _gaq.push([ "global._setCustomVar", 3, "logged-in", "true", 1 ]);
            var c = new com.art.core.cookie.Cookie();
            if ((location.href.indexOf("/secure/your_account/") > -1 || location.href.indexOf("OrderTracking.aspx") > -1) && "" != c.getCookieDictionary("ap", "profileURL")) {
                var h = c.getCookieDictionary("ap", "profileURL");
                return void (window.location.href = h + "?pagetype=oh");
            }
            if ((location.href.indexOf("/me/") > -1 || location.href.indexOf("mygalleries.asp") > -1 || location.href.indexOf("~/youplusart/") > -1) && location.href.indexOf("/me/community") < 0) {
                if ("" != c.getCookieDictionary("ap", "profileURL")) {
                    var h = c.getCookieDictionary("ap", "profileURL");
                    "true" == MyGalleriesCore.getEnvironment().enableCommunityFeatures ? window.location.href = h : window.location.href = h + "?ac=true";
                }
            } else {
                if (this.doNotRefreshOnLogin) {
                    try {
                        dle_handleLoginSuccess();
                    } catch (g) {}
                    return;
                }
                this.refreshpage();
            }
        } else "NEW_GALLERY_CLICKED" == a.type.modulename && ("3" == this.app.getModel().environment.customerZoneId || "4" == this.app.getModel().environment.customerZoneId || "25" == this.app.getModel().environment.customerZoneId ? this.showNewGalleryPopUp() : this.saveToDefaultGallery());
        break;

      case this.app.events.LOGIN_ACCOUNT_FAILED:
        "failure" == a.body && ($(".loginModalErrorMsg").css("display", "block"), $.browser.msie && $(".loginErrorMsg").css("top", "70px"), 
        $(".loginErrorMsg").text(MyGalleriesCore.getString("We were unable to find an account associated with that email address.")));
        break;

      case this.app.events.LOGOUT_MYGALLERY_SUCCESS:
        var i = MyGalleriesCore.getModel().getLastSelectedGalleryKey();
        MyGalleriesCore.getModel().resetGalleryIDCountCookie(i), MyGalleriesCore.getModel().resetLastSelectedGalleryName(""), 
        FB.getLoginStatus(function(a) {
            if ("connected" === a.status) {
                FB.logout(function(a) {});
                var b = "http://" + location.host + _this.app.getModel().environment.profileURL + "?logout=yes";
                location.href = "https://www.facebook.com/logout.php?next=" + b + "&access_token=" + FB._authResponse.accessToken;
            } else {
                var c = new com.art.core.cookie.Cookie();
                if ("" != c.getCookieDictionary("ap", "profileURL")) {
                    var d = c.getCookieDictionary("ap", "profileURL");
                    window.location.href = d + "?logout=yes";
                } else window.location.href = "http://" + location.host + _this.app.getModel().environment.profileURL + "?logout=yes";
            }
        });
        break;

      case this.app.events.LOGOUT_MYGALLERY_FAILED:
        window.location.href = window.location.href;
        break;

      case this.app.events.LOGIN_FACEBOOK_MYGALLERY_SUCCESS:
        if (_gaq.push([ "t1._setCustomVar", 3, "logged-in", "true", 1 ]), _gaq.push([ "global._setCustomVar", 3, "logged-in", "true", 1 ]), 
        Controller.notify("LoginAccountSuccess"), this.doNotRefreshOnLogin) {
            try {
                dle_handleLoginSuccess();
            } catch (g) {}
            return;
        }
        if ("GlobalHeader" == a.type.modulename) {
            var c = new com.art.core.cookie.Cookie();
            if ("true" == d && "true" == MyGalleriesCore.getEnvironment().enableCommunityFeatures && !e) return void ShowProfile();
            if ((location.href.indexOf("/secure/your_account/") > -1 || location.href.indexOf("OrderTracking.aspx") > -1) && "" != c.getCookieDictionary("ap", "profileURL")) {
                var h = c.getCookieDictionary("ap", "profileURL");
                return void (window.location.href = h + "?pagetype=oh");
            }
            if (location.href.indexOf("/me/") > -1 || location.href.indexOf("mygalleries.asp") > -1 || location.href.indexOf("~/youplusart/") > -1) {
                if ("" != c.getCookieDictionary("ap", "profileURL")) {
                    var h = c.getCookieDictionary("ap", "profileURL");
                    "true" == MyGalleriesCore.getEnvironment().enableCommunityFeatures ? window.location.href = h : window.location.href = h + "?ac=true";
                }
            } else window.location.href = window.location.href;
        } else if ("NEW_GALLERY_CLICKED" == a.type.modulename) "3" == this.app.getModel().environment.customerZoneId || "4" == this.app.getModel().environment.customerZoneId || "25" == this.app.getModel().environment.customerZoneId ? this.showNewGalleryPopUp() : this.saveToDefaultGallery(); else {
            var c = new com.art.core.cookie.Cookie();
            if ((location.href.indexOf("/secure/your_account/") > -1 || location.href.indexOf("OrderTracking.aspx") > -1) && "" != c.getCookieDictionary("ap", "profileURL")) {
                var h = c.getCookieDictionary("ap", "profileURL");
                return void (window.location.href = h + "?pagetype=oh");
            }
            this.refreshpage();
        }
        break;

      case this.app.events.LOGIN_FACEBOOK_MYGALLERY_FAILED:
        break;

      case this.app.events.ADD_ITEM_TO_NEW_GALLERY_FAILED:
        var f = a.body.OperationResponse.ResponseMessage;
        $(".commonErrorMsg").text(f), $(".commonErrorMsg").show();
    }
}, com.art.myGalleries.components.LoginInvokeComponent.prototype.saveToDefaultGallery = function() {
    0 == this.app.getModel().galleryListForWebUser.length && this.app.sendNotification(new com.art.core.utils.Note(this.app.events.GET_ALL_GALLERIES_USER, {
        fromGridModule: !1
    }));
}, com.art.myGalleries.components.LoginInvokeComponent.prototype.UpdateItemToDefaultGallery = function() {
    1 == this.app.getModel().galleryListForWebUser.length && MyGalleriesCore.getModel().galleryListForWebUser[0].Name == this.app.getKeyString("galleries") ? (MyGalleriesCore.getModel().environmentSub.selectedGalleryID = MyGalleriesCore.getModel().galleryListForWebUser[0].GalleryId, 
    MyGalleriesCore.getModel().savetogalleryoption && MyGalleriesCore.sendNotification(new com.art.core.utils.Note(MyGalleriesCore.events.ADD_ITEM_TO_EXISTING_GALLERY, MyGalleriesCore.getModel().galleryListForWebUser[0].GalleryId, {
        fromLoginExternalModule: !0
    }))) : 1 == this.app.getModel().galleryListForWebUser.length && MyGalleriesCore.getModel().galleryListForWebUser[0].Name != this.app.getKeyString("galleries") ? MyGalleriesCore.getModel().createDefaultGallery() : 0 == this.app.getModel().galleryListForWebUser.length ? MyGalleriesCore.getModel().createDefaultGallery() : this.app.getModel().galleryListForWebUser.length >= 2 && this.refreshpage();
}, com.art.myGalleries.components.LoginInvokeComponent.prototype.showNewGalleryPopUp = function() {
    var a = this;
    $("#myModalAddNewGallery").length > 0 && ($("#myModalAddNewGallery").die(), $("#myModalAddNewGallery").unbind("click"), 
    $("#myModalAddNewGallery").remove()), a.login && a.login.close(), a.newGalleryOptionLB = new com.art.core.components.LightBox("newGalleryOptionLB", "body", .7), 
    a.newGalleryOptionLB.show();
    var b = new com.art.myGalleries.components.CommonComponent("addNewGallery", "", 340, 196, "", MyGalleriesCore.getModel().saveDefaultGalleryTitle);
    a.modalAddNewGallery = new com.art.core.components.BaseModal("myModalAddNewGallery", 340, "#ffffff", !0), 
    a.modalAddNewGallery.setContents(b.render()), $("body").append(a.modalAddNewGallery.render(a.newGalleryOptionLB.getLightBoxZIndex() + 1)), 
    a.modalAddNewGallery.registerEvents(), $(".modal_header_text").html(a.app.getKeyString("newGalleryKey")), 
    $(".modal_header_text").addClass("uCase gCustomFont"), a.modalAddNewGallery.registerButton("savetomygallery", com.art.core.components.ArtButton.ART_ORANGE, a.app.getModel().getButtonTextForNewGallery(), function() {
        if (b.validateTitle()) {
            var c = $("#addNewGallery_txtTitle").val(), d = a.app.getString("Found invalid characters in title"), e = com.art.core.utils.StringUtil.findInvalidChars(c, "-@#$%^&*()_+<>!~,.?/[]{}|=", "<p>" + d + " {~listOfInvalidChars~}</p>");
            if ("" != e) return $("#showErrorMsg").text(""), $(".newGalleryErrorMsg").text(a.app.getString("Found invalid characters in title")), 
            void $(".newGalleryErrorMsg").css("visibility", "visible");
            a.app.getModel().setAddedGalleryTitle(c), a.app.getModel().savetogalleryoption ? a.app.sendNotification(new com.art.core.utils.Note(a.app.events.ADD_ITEM_TO_NEW_GALLERY, {}, {
                fromLoginExternalModule: !0
            })) : a.app.sendNotification(new com.art.core.utils.Note(a.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY));
        }
    }), a.modalAddNewGallery.registerCallback(com.art.core.components.BaseModal.CLOSE_CLICKED, function() {
        $("#myModalAddNewGallery").die(), $("#myModalAddNewGallery").unbind("click"), $("#myModalAddNewGallery").remove(), 
        a.modalAddNewGallery && a.modalAddNewGallery.close(), a.newGalleryOptionLB && a.newGalleryOptionLB.close(), 
        window.location.reload();
    }), b.registerCallback(com.art.myGalleries.components.CommonComponent.NEW_GALLERY_SUBMIT, function() {
        if (b.validateTitle()) {
            var c = $("#addNewGallery_txtTitle").val(), d = a.app.getString("Found invalid characters in title"), e = com.art.core.utils.StringUtil.findInvalidChars(c, "-@#$%^&*()_+<>!~,.?/[]{}|=", "<p>" + d + " {~listOfInvalidChars~}</p>");
            if ("" != e) return $(".newGalleryErrorMsg").text(a.app.getString("Found invalid characters in title")), 
            void $(".newGalleryErrorMsg").css("visibility", "visible");
            a.app.getModel().setAddedGalleryTitle(c), a.app.getModel().savetogalleryoption ? a.app.sendNotification(new com.art.core.utils.Note(a.app.events.ADD_ITEM_TO_NEW_GALLERY, {}, {
                fromLoginExternalModule: !0
            })) : a.app.sendNotification(new com.art.core.utils.Note(a.app.events.MOVE_ADD_ITEM_TO_NEW_GALLERY));
        }
    }), b.registerEvents();
}, com.art.myGalleries.modules.RecentlyViewedModule = function(a, b) {
    this.app = b, this.moduleData = a, this.NAME = com.art.myGalleries.modules.RecentlyViewedModule.NAME, 
    this.ImageCount = 0, this.MaxImageCount = 30;
}, com.art.myGalleries.modules.RecentlyViewedModule.NAME = "RecentlyViewedModule", 
com.art.myGalleries.modules.RecentlyViewedModule.ImageCount = "RecentlyViewedModule", 
com.art.myGalleries.modules.RecentlyViewedModule.prototype.init = function(a) {
    var b = location.href, c = !1;
    (b.indexOf("/OrderConfirmation.aspx") > 0 || b.indexOf("/OrderConfirm.aspx") > 0) && (c = !0);
    if (0 != $("#RecentlyViewedModule").length || c || $(this.getTarget()).append(this.getTemplate()), 
    com.art.core.utils.BrowserUtil.isiOSDevice() && !c) {
        var d = new com.art.core.utils.Note(MyGalleriesCore.events.GET_ALL_ITEMS_RECENT_GALLERY, {
            modulename: "RecentlyViewedModule"
        });
        MyGalleriesCore.sendNotification(d);
    }
}, com.art.myGalleries.modules.RecentlyViewedModule.prototype.destroy = function() {}, 
com.art.myGalleries.modules.RecentlyViewedModule.prototype.trackEventWithCategory = function(a) {
    if ("undefined" != typeof _gaq) {
        var b = "recently viewed";
        return trace("GA Category Name : " + b + ", GA Action Name : " + a), _gaq.push([ "t1._trackEvent", b, a ]), 
        !0;
    }
    throw Error("GA is not setup; art.core.GoogleAnalytics");
}, com.art.myGalleries.modules.RecentlyViewedModule.prototype.PopulateRecentlyViewed = function(a) {
    var b = this, c = location.host, d = !1, e = !1;
    c.indexOf("art.") > -1 && c.indexOf("art.fr") > 0 && (e = !0), c.indexOf(".allposters") > -1 && (d = !0), 
    $(document).on("click", "#RecentlyViewedModule .jcarousel-prev", function() {
        b.trackEventWithCategory("recently viewed left arrow");
    }), $(document).on("click", "#RecentlyViewedModule .jcarousel-next", function() {
        b.trackEventWithCategory("recently viewed right arrow");
    }), $(document).on("click", ".imageItem", function() {});
    var f, g = "", h = 0;
    if (null != a.body.Library && null != a.body.Library.Galleries[0] && (f = a.body.Library.Galleries[0].Items), 
    h = this.ImageCount, this.ImageCount > 30 && (h = 30), this.ImageCount > 0) {
        mygalleriesGA.trackEventWithNonInteraction("recently viewed", "recently viewed loaded", ""), 
        g = "";
        for (var i = 0; h > i; i++) {
            var j = 0, k = 0, l = f[i].ItemDetails.ImageInformation.LargeImage.Dimensions.Width, m = f[i].ItemDetails.ImageInformation.LargeImage.Dimensions.Height, n = 135, o = 0, p = 0, q = 5, r = 0, s = l / m;
            s > 1 ? (o = n, p = n / s, q = n - p, q = Math.floor(q)) : (o = n * s, p = n - 5, 
            r = (160 - o) / 2, r = Math.floor(r)), j = Math.floor(o), k = Math.floor(p);
            var t = f[i].ItemDetails.AdditonalUrls.ProductPageUrl, u = "";
            u = "/" == t.substring(0, 1) ? t.substring(1, t.length) : f[i].ItemDetails.AdditonalUrls.ProductPageUrl, 
            g += "<li> <div class='imgParentContainer-rv-site'>", g += "<div style='width:" + j + "px; height:" + k + "px;margin-top:" + q + "px;margin-left:" + r + "px;'>", 
            g += "<a href= http://" + location.host + "/" + u + ">", g += "<img width='" + j + "'height='" + k + "'src=" + f[i].ItemDetails.ImageInformation.LargeImage.HttpImageURL + " class='imageItem shadow'/>", 
            g += "</a>", g += "</div></div></li>";
        }
        $("ul.jcarousel-skin-rv-site").html(g), e ? $("#RecentlyViewedModule").insertAfter("#pageContainer") : $("#RecentlyViewedModule").insertBefore("#ftr");
    } else g = "", g += "<div class='innerText'>" + b.app.getString("Once you begin exploring Art.com, your recently viewed items will appear here.") + "</div>", 
    c.indexOf("allposters.") > -1 ? (g += "<div class='innerText' style='padding-bottom:40px;'><a class='rvlink' href='/nav/fr/catalogue/decoration-murale/'>" + b.app.getString("Browse Now") + "</a>", 
    g += " " + b.app.getString("OR") + " <a class='rvlink' href='/nav/fr/inspiration/'>" + b.app.getString("GET INSPIRED") + "</a>", 
    g += "</div>", $("#RecentlyViewedModule").hide()) : e ? (g += "<div class='innerText' style='margin-bottom:40px;'><a class='rvlink' href='/nav/fr/catalogue/decoration-murale/'>" + b.app.getString("Browse Now") + "</a>", 
    g += " " + b.app.getString("OR") + " <a class='rvlink' href='/nav/fr/inspiration/'>" + b.app.getString("GET INSPIRED") + "</a>", 
    g += "</div>", $(".innerContent").html(""), $(".innerContent").html(g), $("#RecentlyViewedModule").insertAfter("#pageContainer")) : (g += "<div class='innerText' style='margin-bottom:40px;'><a style='text-transform: capitalize;' class='rvlink' href='/shop/wall-art/'>" + b.app.getString("Browse Now") + "</a>", 
    g += " " + b.app.getString("OR").toLowerCase() + " <a style='text-transform: capitalize;' class='rvlink' href='/~/design-inspiration/'>" + b.app.getString("GET INSPIRED").toLowerCase() + "</a>", 
    g += "</div>", $(".innerContent").html(""), $(".innerContent").html(g), $("#RecentlyViewedModule").insertBefore("#ftr"));
    e || $("#RecentlyViewedModule").insertAfter("#main");
}, com.art.myGalleries.modules.RecentlyViewedModule.prototype.ApplyCarousel = function() {
    trace("this.ImageCount" + this.ImageCount);
    try {
        if (jQuery(".jcarousel-skin-rv-site").jcarousel({
            initCallback: this.carousel_callback,
            size: this.MaxImageCount,
            visible: 6,
            scroll: 6,
            buttonNextCallback: this.mycarousel_buttonCallback,
            buttonPrevCallback: this.mycarousel_buttonCallback
        }), this.ImageCount < 6) {
            var a = 160 * this.ImageCount, b = (960 - a) / 2;
            $("#RecentlyViewedModule .jcarousel-list").css("left", b + "px");
        }
    } catch (c) {
        warn("mygalleries > RecentlyViewedModule.ApplyCarousel > failed. e.message=" + c.message);
    }
}, com.art.myGalleries.modules.RecentlyViewedModule.prototype.mycarousel_buttonCallback = function(a, b, c) {}, 
com.art.myGalleries.modules.RecentlyViewedModule.prototype.carousel_callback = function(a, b) {
    if ($("#RecentlyViewedModule").touchwipe({
        wipeLeft: function() {
            a.next();
        },
        wipeRight: function() {
            a.prev();
        },
        wipeUp: function() {
            trace("up");
        },
        wipeDown: function() {
            trace("down");
        },
        min_move_x: 20,
        min_move_y: 20,
        preventDefaultEvents: !0
    }), this.ImageCount < 6) {
        var c = 160 * this.ImageCount, d = (960 - c) / 2;
        $("#RecentlyViewedModule .jcarousel-list").css("left", d + "px");
    }
}, com.art.myGalleries.modules.RecentlyViewedModule.prototype.notify = function() {
    this.app.sendNotification(note);
}, com.art.myGalleries.modules.RecentlyViewedModule.prototype.listNotificationInterests = function() {
    return [ this.app.events.GET_ALL_ITEMS_RECENT_GALLERY_SUCCESS ];
}, com.art.myGalleries.modules.RecentlyViewedModule.prototype.handleNotification = function(a) {
    switch (null != a.body.Library && null != a.body.Library.Galleries[0] && (this.ImageCount = a.body.Library.Galleries[0].Items.length, 
    this.MaxImageCount = a.body.Library.Galleries[0].Items.length, this.ImageCount > 30 && (this.MaxImageCount = 30)), 
    a.name) {
      case this.app.events.GET_ALL_ITEMS_RECENT_GALLERY_SUCCESS:
        if (0 != a.body.OperationResponse.OperationStatus && 503 == a.body.OperationResponse.ResponseCode) return;
        trace(a);
        var b = !0, c = window.location;
        if (c = c.toString().toLowerCase(), -1 !== c.indexOf("/framestep/") || -1 !== c.indexOf("/photostoart")) return b = !1, 
        void $("#RecentlyViewedModule").hide();
        if (b = !0, "undefined" != typeof pageName && "HomePage" == pageName && (b = !1), 
        0 == this.ImageCount && !b) return void $("#RecentlyViewedModule").hide();
        this.PopulateRecentlyViewed(a), this.ApplyCarousel();
        break;

      case this.app.events.ADD_ITEM_TO_NEW_GALLERY_FAILED:    }
}, com.art.myGalleries.modules.RecentlyViewedModule.prototype.getTemplate = function() {
    var a = this.template.replace("$NAME", this.NAME);
    return a = a.replace("$HEADER", this.app.getString("Recently Viewed"));
}, com.art.myGalleries.modules.RecentlyViewedModule.prototype.getTarget = function() {
    return this.moduleData.target;
}, com.art.myGalleries.modules.RecentlyViewedModule.prototype.template = "<div id='$NAME' class='track-group'><div class='containerDiv' class='SiteFont'><div class='headerTxt gCustomFont'>$HEADER</div><div class='innerContent'><ul class='jcarousel-skin-rv-site'></ul><div class='clear'></div></div></div></div>";

var gItemCount = 0;

com.art.myGalleries.modules.TremulaRvModule = function(a, b) {
    this.app = b, this.moduleData = a, this.NAME = com.art.myGalleries.modules.TremulaRvModule.NAME, 
    this.ImageCount = 0, this.MaxImageCount = 30, this.tremula = {}, this.currentObj = {};
}, com.art.myGalleries.modules.TremulaRvModule.NAME = "RecentlyViewedModule";

var currentObj = this;

com.art.myGalleries.modules.TremulaRvModule.prototype.init = function(a) {
    var b = location.href, c = !1;
    (b.indexOf("/OrderConfirmation.aspx") > 0 || b.indexOf("/OrderConfirm.aspx") > 0) && (c = !0);
    0 != $("#RecentlyViewedModuleT").length || c || $(this.getTarget()).append(this.getTemplate()), 
    trace("ImageCount in Init" + this.ImageCount), this.tremula = new Tremula(), that = this;
    var d = {
        data: null,
        adapter: null,
        itemConstraint: 135,
        itemMargins: [ 15, 15 ],
        staticAxisOffset: 0,
        scrollAxisOffset: 0,
        scrollAxis: "x",
        staticAxisCount: 0,
        isLooping: !1,
        ignoreUserEvents: !1,
        defaultLayout: this.tremula.layouts.basicGridLayout,
        surfaceMap: this.tremula.projections.streamHorizontal,
        itemPreloading: !0,
        itemEasing: !1,
        onChangePub: that.rvScrollEvents,
        itemEasingParams: {
            touchCurve: this.tremula.easings.easeOutCubic,
            swipeCurve: this.tremula.easings.easeOutCubic,
            transitionCurve: this.tremula.easings.easeOutElastic,
            easeTime: 500,
            springLimit: 40
        }
    };
    MyGalleriesEnvironmentVariablesDynamic.isnewProductPage || $("#RecentlyViewedModuleT").insertAfter("#main");
    var e = $("#RecentlyViewedModuleT .innerContent"), f = $("#RecentlyViewedModuleT");
    if (this.tremula.init(e, d, this), !c) {
        var g = new com.art.core.utils.Note(MyGalleriesCore.events.GET_ALL_ITEMS_RECENT_GALLERY, {
            modulename: "RecentlyViewedModule"
        });
        MyGalleriesCore.sendNotification(g);
    }
    trace("ImageCount after Tremula Init" + this.ImageCount), $(".jcarousel-prevT", f).on("click", function(a) {
        var b = that.tremula.Grid;
        a.stopPropagation(), b.options.steppedScrolling ? b.easeToPrevStepItem() : h("back");
    }), $(".jcarousel-nextT", f).on("click", function(a) {
        var b = that.tremula.Grid;
        a.stopPropagation(), b.options.steppedScrolling ? b.easeToNextStepItem() : h();
    });
    var h = function(a, b) {
        var c = that.tremula.Grid;
        b || (b = 600), "back" == a && (a = -1 * c.getScrollViewDim()), a = a ? -1 * a + c.getScrollPos() : c.getScrollPos() - c.getScrollViewDim(), 
        c.setLastTouchOrigin(c.gridDims[c.si] / 2), c.easeTo(a, b);
    };
}, com.art.myGalleries.modules.TremulaRvModule.prototype.listNotificationInterests = function() {
    return [ this.app.events.GET_ALL_ITEMS_RECENT_GALLERY_SUCCESS ];
}, com.art.myGalleries.modules.TremulaRvModule.prototype.rvScrollEvents = _.debounce(function(a) {
    if (trace(gItemCount), trace("before rvScrollEvents"), 0 === gItemCount || "0" === gItemCount) return void trace("no data so return");
    trace("after rvScrollEvents" + gItemCount), $(".jcarousel-prevT").fadeIn("fast"), 
    $(".jcarousel-nextT").fadeIn("fast");
    var b = 0;
    b = a.scrollProgress, b = 1e4 * b, trace(b), .4 > b && gItemCount > 7 && ($(".jcarousel-prevT").fadeOut("fast"), 
    $(".jcarousel-nextT").fadeIn("fast")), b > 9990 && gItemCount > 7 && ($(".jcarousel-nextT").fadeOut("fast"), 
    $(".jcarousel-prevT").fadeIn("fast")), trace("inside rvScrollEvents ImageCount" + gItemCount), 
    (0 === gItemCount || "0" === gItemCount) && ($(".jcarousel-nextT").hide(), $(".jcarousel-prevT").hide());
}, 500), com.art.myGalleries.modules.TremulaRvModule.prototype.handleNotification = function(a) {
    switch (null != a.body.Library && null != a.body.Library.Galleries[0] ? (this.ImageCount = a.body.Library.Galleries[0].Items.length, 
    this.MaxImageCount = a.body.Library.Galleries[0].Items.length, gItemCount = this.ImageCount, 
    this.ImageCount > 30 && (this.MaxImageCount = 30, itemCount = this.MaxImageCount, 
    gItemCount = this.MaxImageCount)) : (trace("making ImageCount 0" + this.ImageCount), 
    this.ImageCount = 0, gItemCount = this.ImageCount), a.name) {
      case this.app.events.GET_ALL_ITEMS_RECENT_GALLERY_SUCCESS:
        if (0 != a.body.OperationResponse.OperationStatus && 503 == a.body.OperationResponse.ResponseCode) return trace("error"), 
        this.ImageCount = 0, void (gItemCount = this.ImageCount);
        trace(a);
        var b = !0, c = window.location;
        if (c = c.toString().toLowerCase(), -1 !== c.indexOf("/photostoart") || -1 !== c.indexOf("/livechat") || -1 !== c.indexOf("/place_order")) {
            if (-1 === c.indexOf("/place_order")) return b = !1, void $("#RecentlyViewedModuleT").hide();
            b = !0;
        } else b = !0;
        if ("undefined" != typeof pageName && "HomePage" == pageName && (b = !1), 0 == this.ImageCount && !b) return void $("#RecentlyViewedModuleT").hide();
        $("#RecentlyViewedModuleT").show(), this.PopulateRecentlyViewed(a);
        break;

      case this.app.events.ADD_ITEM_TO_NEW_GALLERY_FAILED:    }
}, com.art.myGalleries.modules.TremulaRvModule.prototype.rvDataAdapter = function(a, b) {
    trace("envobj"), trace(b), this.data = a;
    var c = a.ItemDetails.ImageInformation.LargeImage.Dimensions.Width, d = a.ItemDetails.ImageInformation.LargeImage.Dimensions.Height, e = a.ItemDetails.AdditonalUrls.ProductPageUrl, f = "";
    this.h = this.height = b.itemConstraint, this.w = this.width = Math.floor(this.h * c / d), 
    this.w > 135 && (this.w = this.width = 135), this.imgUrl = a.ItemDetails.ImageInformation.SmallImage.HttpImageURL, 
    f = "/" == e.substring(0, 1) ? e.substring(1, e.length) : recentItems[i].ItemDetails.AdditonalUrls.ProductPageUrl;
    var g = "<a  href= http://" + location.host + "/" + f + ">";
    g += "<img src=" + this.imgUrl + " class='moneyShot' draggable='false'/>", g += "</a>", 
    this.template = this.data.template || g, this.auxClassList = "rvRS";
}, com.art.myGalleries.modules.TremulaRvModule.prototype.destroy = function() {}, 
com.art.myGalleries.modules.TremulaRvModule.prototype.PopulateRecentlyViewed = function(a) {
    _this = this;
    var b = 0, c = {};
    if (null != a.body.Library && null != a.body.Library.Galleries[0] && (console.log("response", a.body.Library.Galleries[0].Items.length), 
    c = a.body.Library.Galleries[0].Items, b = a.body.Library.Galleries[0].Items.length, 
    gItemCount = b), b > 0) this.tremula.appendData(c, this.rvDataAdapter), b >= 8 && $(".jcarousel-nextT").show(); else {
        $("#RecentlyViewedModuleT").css("height", "auto"), $(".innerContent").css("height", "auto"), 
        $(".jcarousel-prevT,.jcarousel-nextT").hide(), $(".innerText").css("margin-bottom", ""), 
        $(".innerContent").css("text-align", "center");
        var d = "";
        d += "<div class='innerText'>" + _this.app.getString("Once you begin exploring Art.com, your recently viewed items will appear here.") + "</div>", 
        d += "<div class='innerText'><a style='text-transform: capitalize;' class='rvlink' href='/shop/wall-art/'>" + _this.app.getString("Browse Now") + "</a>", 
        d += " " + _this.app.getString("OR").toLowerCase() + " <a style='text-transform: capitalize;' class='rvlink' href='/~/design-inspiration/'>" + _this.app.getString("GET INSPIRED").toLowerCase() + "</a>", 
        d += "</div>", $(".innerContent").html(""), $(".innerContent").html(d), $("#RecentlyViewedModuleT").insertAfter("#main");
    }
}, com.art.myGalleries.modules.TremulaRvModule.prototype.getTemplate = function() {
    var a = this.template.replace("$NAME", this.NAME);
    return a = a.replace("$HEADER", this.app.getString("Recently Viewed"));
}, com.art.myGalleries.modules.TremulaRvModule.prototype.getTarget = function() {
    return this.moduleData.target;
}, com.art.myGalleries.modules.TremulaRvModule.prototype.template = "<div id='RecentlyViewedModuleT' class='responsiveArtWidget track-group'><span class='jcarousel-prevT'></span><span class='jcarousel-nextT'></span><div class='headerTxt gCustomFont'>Recently Viewed</div><div class='innerContent' style='overflow-x:hidden'></div></div>", 
com.art.myGalleries.modules.TrendingModule = function(a, b) {
    this.NAME = com.art.myGalleries.modules.TrendingModule.NAME, this.app = b, this.moduleData = a, 
    this.queries = [], this.bfound = !1, this.count = 0;
}, com.art.myGalleries.modules.TrendingModule.NAME = "TrendingModule", com.art.myGalleries.modules.TrendingModule.lrgImageWidth = "", 
com.art.myGalleries.modules.TrendingModule.lrgImageHeight = "", com.art.myGalleries.modules.TrendingModule.idCount = 0, 
com.art.myGalleries.modules.TrendingModule.prototype.init = function(a) {
    this.count = 0, this.queries = [];
}, com.art.myGalleries.modules.TrendingModule.prototype.destroy = function() {}, 
com.art.myGalleries.modules.TrendingModule.prototype.listen = function(serverName, portNumber) {
    this.queries = [], this.bfound = !1, this.count = 0;
    var _this = this, socket = new io.connect(serverName, {
        port: portNumber
    });
    socket.on("connect", function() {}), socket.on("disconnect", function() {}), socket.on("aggSearches", function(data) {
        var searchData = eval("(" + data + ")");
        if (trace(data), _this.bfound = !1, _this.count < 1) _this.bfound = !1, _this.count++; else for (q in _this.queries) ;
        _this.bfound || (_this.queries.push(searchData), _this.queries.length > 5 && _this.queries.splice(0, 1), 
        _this.calculateImgHeightWidth(searchData.ImageWidth, searchData.ImageHeight), _this.addNewItem(searchData.VanityUrl, searchData.LargeImageUrl, searchData.GalleryTitle, searchData.ProfileKey, searchData.NickName, searchData.ProfilePic, searchData.Dt, searchData.ItemTitle, searchData.ProductPageUrl, searchData.ImageUrl, searchData.ProductImageUrl, searchData.Name), 
        _this.removeItem());
    });
}, com.art.myGalleries.modules.TrendingModule.prototype.addNewItem = function(a, b, c, d, e, f, g, h, i, j, k, l) {
    this.idCount = this.idCount++;
    var m = f.indexOf("fbcdn"), n = e || l, o = !1;
    0 == e.length && 0 == l.length && (n = "anonymous", o = !0), 0 == f.length && (f = "http://cache1.artprintimages.com/images/youart/blank_avatar.jpg");
    var p = i.indexOf("frameSku");
    p >= 0 && (b = k), h = com.art.core.utils.StringUtil.autoEllipseText(h, 14), c = com.art.core.utils.StringUtil.autoEllipseText(c, 14), 
    this.lrgImageWidth > 175 && (this.lrgImageWidth = 175), this.lrgImageHeight > 200 && (this.lrgImageHeight = 200);
    var q = 200 - this.lrgImageHeight;
    if (m > -1) {
        var r = f.replace(/(?:\\){4}/g, "\\\\");
        f = r;
    }
    var s, t = g;
    s = 1 == t ? t + " minute ago" : t + " minutes ago";
    var u;
    u = $('<div id="box-module" class="floatLeft"><div class="img-cell"><div class="test" style=line-height:' + q + 'px;>  t </div><div><a href="/' + i + '"><img title="' + h + '" class="shake shadowGal" height="' + this.lrgImageHeight + '" width="' + this.lrgImageWidth + '" src="' + b + '"></a></div><a href="' + a + '"><img title="' + c + '" class="galleryImgT shake" height="60" width="60" src="' + j + '"></a></div><div class="img-detail-container"><div id="TfirstCell" class="floatLeft"><div class="img-price floatLeft"><a href="' + d + '"><img width="50" height="50" class="shake" src ="' + f + '"/></a></div></div><div class="btRightContainer floatLeft"><div style="text-align:left" class="itemTitle"><a title="' + h + '" href="' + i + '">' + h + '</a></div><div class="img-desc floatLeft"><div class="img-title">in <a href="' + a + '"><span title="' + c + '" class="tgalTitle itemTitle">' + c + '</span></a></div><div class="img-artist byname" id ="' + this.idCount + '"> <span class="img-artistby">by</span> <a href="' + d + '">' + n + '</a></div></div></div><div style="clear:both"></div><div class="just-now" style="display:none;">just now</div><div class="img-add-time" style="display:none;"><span class="minutes">' + s + "</span> </div></div></div>"), 
    $ul = $("#now"), $("<li>").html(u).prependTo($ul).hide().fadeIn("slow"), $ul.css("margin-left", "-50px"), 
    $ul.animate({
        marginLeft: "0"
    }, 500, function() {}), 0 == t ? $("#now li:first-child .just-now").show() : t > 100 ? $("#now li:first-child .img-add-time").hide() : $("#now li:first-child .img-add-time").show(), 
    o && $("#" + this.idCount).hide();
}, com.art.myGalleries.modules.TrendingModule.prototype.removeItem = function(a, b) {
    for (;$("#now li").size() > 5; ) $("#now li:last-child").remove();
}, com.art.myGalleries.modules.TrendingModule.prototype.calculateImgHeightWidth = function(a, b) {
    var c, d = 0, e = 0, f = 175, g = 195;
    d = a, e = b, d >= e ? (c = e / d, this.lrgImageWidth = f, this.lrgImageHeight = Math.round(this.lrgImageWidth * c)) : (c = d / e, 
    this.lrgImageHeight = g, this.lrgImageWidth = Math.round(this.lrgImageHeight * c));
}, com.art.myGalleries.modules.TrendingModule.prototype.startListeningandPopulateHtml = function(a, b) {
    setInterval(function() {
        for (var a = new Array(), b = new Array(), c = 0; 5 > c; ) a[c] = $(".minutes").eq(c), 
        b[c] = Number($(".minutes").eq(c).text().split(" ")[0]) + 1, 1 == b[c] ? (a[c].parents(".img-detail-container").find("div.just-now").css("display", "none"), 
        a[c].parent().css("display", "block"), a[c].text(b[c] + " minute ago")) : b[c] > 100 ? a[c].css("display", "none") : a[c].text(b[c] + " minutes ago"), 
        c++;
    }, 6e4);
}, com.art.myGalleries.modules.TrendingModule.prototype.notify = function() {
    this.app.sendNotification(note);
}, com.art.myGalleries.modules.TrendingModule.prototype.listNotificationInterests = function() {
    return [];
}, com.art.myGalleries.modules.TrendingModule.prototype.handleNotification = function(a) {
    switch (a.name) {}
}, com.art.myGalleries.modules.TrendingModule.prototype.getTemplate = function() {
    var a = this.template.replace("$NAME", this.NAME);
    return a = a.replace("$HEADER", this.app.getString("Trending Module"));
}, com.art.myGalleries.modules.TrendingModule.prototype.getTarget = function() {
    return this.moduleData.target;
}, com.art.myGalleries.modules.TrendingModule.prototype.template = "<div class='track-group' id='people-buying-now'><ul id='now'></ul></div>";

var mygalleriesGA = {}, isMygalleriesMainLoaded = !1, isTranslationsLoaded = !1, gbllocalizationManager = {}, viewMode = "", appidForTranslations = "21", apicallDoneForMygalleries = !1;

$(document).ready(function() {
    "clear" == com.art.core.utils.BrowserUtil.getQueryString("st") && (store.remove("languagekey_21"), 
    store.remove("languagekey_22")), jQuery.curCSS = jQuery.css, mygalleriesGA = new com.art.core.tracking.GoogleAnalytics("My Galleries");
    var loc = window.location.href;
    if (loc.indexOf("item/") > -1) viewMode = MyGalleriesCore.constants.DETAIL_VIEW; else {
        var regex = /gallery\/.+/;
        viewMode = void 0 == loc.match(regex) || com.art.core.utils.BrowserUtil.getQueryString("logout") ? MyGalleriesCore.constants.GALLERY_HOME : MyGalleriesCore.constants.GRID_VIEW;
    }
    "undefined" == typeof MyGalleriesEnvironmentVariables && eval("MyGalleriesEnvironmentVariables={};"), 
    "undefined" == typeof MyGalleriesEnvironmentVariablesDynamic && eval("MyGalleriesEnvironmentVariablesDynamic={};"), 
    MyGalleriesEnvironmentVariablesDynamic.selectedGalleryID = "";
    var urlValue = location.href;
    if (urlValue.indexOf("/gallery/") > -1 && $(".mg-selected").length > 0) {
        var getId = $(".mg-selected").attr("id");
        getId = getId.split("_"), MyGalleriesEnvironmentVariablesDynamic.selectedGalleryID = getId[1];
    }
    if ($(".MyGalleriesDefault").length > 0) {
        var getId = $(".MyGalleriesDefault").attr("id");
        getId = getId.split("_"), MyGalleriesEnvironmentVariablesDynamic.selectedGalleryID = getId[1];
    }
    "" == MyGalleriesEnvironmentVariablesDynamic.selectedGalleryID && "undefined" != typeof mygalPageInfo && (MyGalleriesEnvironmentVariablesDynamic.selectedGalleryID = mygalPageInfo.UserModeGalleryId), 
    "undefined" != typeof MyGalleriesEnvironmentVariables && void 0 != MyGalleriesEnvironmentVariables && void 0 != MyGalleriesEnvironmentVariables.customerZoneId && "3" != MyGalleriesEnvironmentVariables.customerZoneId && "4" != MyGalleriesEnvironmentVariables.customerZoneId && "25" != MyGalleriesEnvironmentVariables.customerZoneId && "undefined" != typeof mygalPageInfo && 1 == mygalPageInfo.RightNavThem && (MyGalleriesEnvironmentVariablesDynamic.selectedGalleryID = mygalPageInfo.UserModeGalleryId);
    var doInitializegaScript = "true";
    "undefined" != typeof MyGalleriesEnvironmentVariables && void 0 != MyGalleriesEnvironmentVariables && void 0 != MyGalleriesEnvironmentVariables.includegascriptfromcore && (doInitializegaScript = MyGalleriesEnvironmentVariables.includegascriptfromcore), 
    "true" == doInitializegaScript && mygalleriesGA.includeGAScript();
    var sid = MyGalleriesEnvironmentVariables.sessionId;
    gbllocalizationManager = new com.art.core.utils.JsonLocalizationManager(MyGalleriesEnvironmentVariables, ""), 
    "undefined" != typeof MyGalleriesEnvironmentVariables && void 0 != MyGalleriesEnvironmentVariables.languageId && "1" != MyGalleriesEnvironmentVariables.languageId ? (gbllocalizationManager.setLanguageDictionary(MyGalleriesEnvironmentVariables.apiKey, sid, appidForTranslations), 
    gbllocalizationManager.setLocalStorage(!0), gbllocalizationManager.load(), gbllocalizationManager.registerCallback(com.art.core.utils.JsonLocalizationManager.LOADED, function() {
        registerMyGalleryModules();
    }), gbllocalizationManager.registerCallback(com.art.core.utils.JsonLocalizationManager.ERROR, function(a) {}), 
    store.get("languagekey_" + appidForTranslations) && registerMyGalleryModules()) : registerMyGalleryModules();
});