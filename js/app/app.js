/*jshint esversion: 6 */

/*
*  BASE MODULE
*
* All the app parts as modules w functional variables (JS object version)
* are saved to a specific app JS-object, to be imported in the app files
* to access the functionality of the app.
*
*/
// Base
import {winDisp} from './winDisp.js'; // window display
import {firstDisp} from './firstDisp.js'; // window display
import {cover} from './cover.js'; // cover
import {menu} from './menu.js'; // menu
import {setTxt} from './setTxt.js'; // set text
import {ajax} from './ajax.js'; // ajax
import {ajaxInterface} from './ajaxInterface.js'; // ajax
import {ajaxView} from './ajaxView.js'; // ajax
import {ajaxSample} from './sections/ajaxSample.js'; // ajax

// Extra functionality
import {newsApi} from './newsAPI/newsApi.js'; // mapTest
import {page1} from './sections/page1.js'; // section

/*
* THE APP OBJECT
*
* Returns all imported js modules
*
*/
var app = (function() {
    console.log('Building the app ');
    

    return {
        cover: cover,
        winDisp: winDisp,
        firstDisp: firstDisp,
        menu: menu,
        ajax: ajax,
        setTxt: setTxt,
        page1: page1,
        ajaxInterface: ajaxInterface,
        ajaxView: ajaxView,
        ajaxSample: ajaxSample,
        newsApi: newsApi,
      };
  }(app));


/*
* START THE APP
*
*/

app.winDisp.setDisplay();

app.page1.showPage();

// -- Export the app --
export {app};
