/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/*var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        zebra.ready(init);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};*/

var canvas = null;

function init() {
    //Create a stage by getting a reference to the canvas
    stage = new createjs.Stage("gameCanvas");
    //Create a Shape DisplayObject.
    circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawRoundRect(0, 0, stage.canvas.width, stage.canvas.height, 50); // 100, 100, stage.canvas.width - 200, stage.canvas.height - 200);
    //Add Shape instance to stage display list.
    stage.addChild(circle);
    //Update stage will render next frame
    stage.update();
    
   /* var FocusMarkerComponent = zebra.Class(zebra.ui.Panel, [
        function canHaveFocus() { return true; },
        
        function focused() {
            this.$super();
            this.repaint();
        },
        
        function setMarkerColor(c) {
            this.markerColor = c;
            this.repaint();
        },
        
        function paint(g) {
            if(!this.hasFocus())
                return;
            
            g.setColor(this.markerColor || "red");
            g.rect(3,3, this.width-6, this.height-6);
            g.stroke();
        }
    ]);
    
    canvas = new zebra.ui.zCanvas("gameCanvas");
    
    canvas.root.properties({
        layout: new zebra.layout.BorderLayout,
        kids: {
            CENTER: new FocusMarkerComponent,
            BOTTOM: new zebra.ui.Button("test")
        }
    });*/
    
    fScale();
}

// TODO: Fix
fScale = function() {
    var canvas = document.getElementById("gameCanvas");
    
    var w = $(window).width(),
        h = $(window).height();
    
    var oldWidth = canvas.width;
    var oldHeight = canvas.height;
    
    var widthRatio = w / oldWidth;
    var heightRatio = h / oldHeight;
    
    console.log(widthRatio, heightRatio);
    
    var ratio = Math.min(widthRatio, heightRatio);
    
    var newWidth = oldWidth * ratio;
    var newHeight = oldHeight * ratio;
    
    canvas.style.width = newWidth+'px';
    canvas.style.height = newHeight+'px';
};