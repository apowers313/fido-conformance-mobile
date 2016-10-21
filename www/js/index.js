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
var app = {
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
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        console.log ("now running: UAF Discover!");

        var regMsg = [{"header":{"upv":{"major":1,"minor":0},"op":"Reg","appID":"https://api-rp.identityx-cloud.com/martin/facets"},"challenge":"IR9celOoUv1BuEsThdwNVQ","username":"do@it.con","policy":{"accepted":[[{"aaid":["53EC#C002"]}],[{"aaid":["D409#0101"]}],[{"aaid":["D409#0201"]}],[{"aaid":["D409#0501"]}],[{"aaid":["D409#0301"]}],[{"aaid":["D409#0601"]}],[{"aaid":["D409#0701"]}],[{"aaid":["D409#0801"]}]]}}];
        var channelBindings = {"serverEndPoint":null,"tlsServerCertificate":null,"tlsUnique":null,"cid_pubkey":null};
        fido.uafOperation(
                regMsg, 
                channelBindings
            )
            .then(function(ret) {
                console.log (ret);
            })
            .catch(function(err) {
                console.log (err);
            });

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();
