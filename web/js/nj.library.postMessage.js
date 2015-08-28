/*
*
* NJLibrary - version 1.00.00  
* 
* Feature(s)
* ----------
* postMessage
*
* Copyright (c) 2015, Ninjoe
* Dual licensed under the MIT or GPL Version 2 licenses.
* https://en.wikipedia.org/wiki/MIT_License
* https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
*
*/
(function() {

    var proto_methods = {
        analyse: function() {
            var node = this.node;

            console.log(node);
        },
        loaded: function () {
            var node = this.node;
            
            if (typeof node == 'undefined') { return; }
            
            /* Set Loaded Flag */
            node.setAttribute('frame_loaded',true);
        },
        call: function (options) {
            var node = this.node;
            
            if (typeof node == 'undefined') { return; }
            
            var post = function () {
                /* post message to iframe */
                node.contentWindow.postMessage({'auth' : options.auth, 'data' : options.data},'*');
            };
            
            var loaded = node.getAttribute('frame_loaded');
                                
            if (loaded == 'true') {
                post();
            } else {
                node.addEventListener('load', function () {
                    post();
                });
            }
        },
        listen: function (options) {

            var receiveMessage = function (event) {
                options.callback(event.data);
            }
            window.addEventListener("message", receiveMessage, false);
            
        }
    }, nj, _nj;
    
    

    _nj = function(selector) { this.node = typeof selector == 'object' ? selector: document.querySelector(selector); };
    _nj.prototype = proto_methods;

    this.nj = function(selector) { return new _nj(selector); };
    
    this.nj.fn = proto_methods;
    
}());