/*! For license information please see 177.a4c38fe3.chunk.js.LICENSE.txt */
(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[177],{731:function(e,i,t){!function(e){"use strict";var i="stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),t="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_"),a=[/^sty/i,/^lut/i,/^mar/i,/^kwi/i,/^maj/i,/^cze/i,/^lip/i,/^sie/i,/^wrz/i,/^pa\u017a/i,/^lis/i,/^gru/i];function s(e){return e%10<5&&e%10>1&&~~(e/10)%10!==1}function r(e,i,t){var a=e+" ";switch(t){case"ss":return a+(s(e)?"sekundy":"sekund");case"m":return i?"minuta":"minut\u0119";case"mm":return a+(s(e)?"minuty":"minut");case"h":return i?"godzina":"godzin\u0119";case"hh":return a+(s(e)?"godziny":"godzin");case"ww":return a+(s(e)?"tygodnie":"tygodni");case"MM":return a+(s(e)?"miesi\u0105ce":"miesi\u0119cy");case"yy":return a+(s(e)?"lata":"lat")}}e.defineLocale("pl",{months:function(e,a){return e?/D MMMM/.test(a)?t[e.month()]:i[e.month()]:i},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),monthsParse:a,longMonthsParse:a,shortMonthsParse:a,weekdays:"niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_\u015br_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dzi\u015b o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedziel\u0119 o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W \u015brod\u0119 o] LT";case 6:return"[W sobot\u0119 o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zesz\u0142\u0105 niedziel\u0119 o] LT";case 3:return"[W zesz\u0142\u0105 \u015brod\u0119 o] LT";case 6:return"[W zesz\u0142\u0105 sobot\u0119 o] LT";default:return"[W zesz\u0142y] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:r,m:r,mm:r,h:r,hh:r,d:"1 dzie\u0144",dd:"%d dni",w:"tydzie\u0144",ww:r,M:"miesi\u0105c",MM:r,y:"rok",yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t(676))}}]);
//# sourceMappingURL=177.a4c38fe3.chunk.js.map