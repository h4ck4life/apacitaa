/*
 * Geddy JavaScript Web development framework
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

var Main = function () {
  
  var fs = require('fs');
  var youtubedl = require('youtube-dl');
  
  this.index = function (req, resp, params) {
    this.respond({params: params}, {
      format: 'html'
    , template: 'app/views/main/index'
    });
  };
  
  this.video = function (req, resp, params) {
    var self = this;
    var urlx = 'https://www.youtube.com/watch?v=' + params.vid;
    youtubedl.getInfo(urlx, function(err, info) {
      var infox;
      if (err) {
        self.redirect();
      } else {
        infox = info;
      };
        self.respond({params: infox}, {
          format: 'html'
        , template: 'app/views/main/video'
        });
    });

    //youtube_parser('https://www.youtube.com/watch?v=' + params.vid);

  };
  
   var youtube_parser = function(url){
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = url.match(regExp);
      if (match&&match[7].length==11){
          return match[7];
      }else{
          console.log("Url incorrecta");
      }
   };
  
};

exports.Main = Main;


