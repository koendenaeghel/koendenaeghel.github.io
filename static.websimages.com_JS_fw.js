var Class=function(properties){var klass=function(){for(var p in this){if(this[p])this[p]._proto_=this;}
if(arguments[0]!='noinit'&&this.initialize)return this.initialize.apply(this,arguments);};klass.extend=this.extend;klass.implement=this.implement;klass.prototype=properties;return klass;};Class.empty=function(){};Class.create=function(){return function(){this.initialize.apply(this,arguments);}};if(!fw){var fw={};fw.addLoadListener=function(fn){if(window.addEventListener)window.addEventListener('load',fn,false);else if(window.attachEvent)window.attachEvent('onload',fn);}
fw.Instances={list:[],add:function(self,cID,type,parent){this.list.push({'self':self,'cID':cID||self.containerID,'type':type||self.type,'parent':parent||self.options.parent});return this.list[this.list.length-1];},get:function(cID){for(var i=0;i<this.list.length;i++){if(this.list[i].cID==cID)return this.list[i].self;}
return null;},getAll:function(type){var all=[];for(var i=0;i<this.list.length;i++){if(this.list[i].type==type||!type)all.push(this.list[i]);}
return all;}};fw.Libs={loaded:'',load:function(libs){this.libs=libs;while(this.libs.length>0){var loc=this.libs.shift();loc=loc.replace(/^http:/g,"https:");if(this.loaded.indexOf(loc+'|')>-1)continue;this.loaded+=loc+'|';document.write('<script type="text/javascript" src="'+loc+'"><'+'/script>');}}};fw.Css={loaded:'',load:function(href,options){options=options||{};if(this.loaded.indexOf(href)>-1)return;if(options.draw)document.write('<link rel="stylesheet" type="text/css" href="'+href+'">');else{var l=document.createElement('link');l.rel='stylesheet';l.type='text/css';l.href=href;(options.el||document.getElementsByTagName('head')[0]||document.body).appendChild(l);}
this.loaded+=href;}};fw.jjax={req:function(url,options){this.url='';this.options=options||{};for(var i in this.options.postBody)this.url+=((this.url=='')?'':'&')+i+'='+this.options.postBody[i];this.url=url+(this.options.postBody?'?':'')+this.url;this.send();},send:function(){var script=document.createElement('script');script.src=this.url;script.type="text/javascript";this.options.appendTo?this.options.appendTo.appendChild(script):document.body.appendChild(script);}};fw.Request={getParameter:function(name){var s=window.location.search;if(!s)return '';var param=s.split(name+'=')[1];if(!param)return '';return param.split('&')[0].replace(/\+/g,' ').replace(/&amp;/g,'&');}};fw.getElementsByClassName=function(testClassName,beginningNodeID){var tag="*";if(beginningNodeID!=null){if(typeof beginningNodeID=="string")var elements=document.getElementById(beginningNodeID).getElementsByTagName(tag);else var elements=beginningNodeID.getElementsByTagName(tag);}else var elements=(document.all)?document.all:document.getElementsByTagName(tag);var returnElements=[];var current;for(var i=0;i<elements.length;i++){var classes=elements[i].className.split(" ");for(var t=0;t<classes.length;t++){if(classes[t]==testClassName)returnElements.push(elements[i]);}}
return returnElements;};fw.CompatExtend=function(obj1,obj2){for(var fw_property in obj2)obj1[fw_property]=obj2[fw_property];return obj1;};}
if(!jjax)var jjax=fw.jjax;if(!CompatClass){var CompatClass=function(properties){var klass=function(){for(var p in this){if(this[p])this[p]._proto_=this;}
if(arguments[0]!='noinit'&&this.initialize)return this.initialize.apply(this,arguments);};klass.extend=this.extend;klass.implement=this.implement;klass.prototype=properties||{};return klass;};}
if(!CompatClass.empty)CompatClass.empty=function(){};if(!CompatClass.create)CompatClass.create=function(){return function(){this.initialize.apply(this,arguments);}};if(!CompatClass.prototype.extend&&!CompatClass.prototype.implement){CompatClass.prototype={extend:function(properties){var pr0t0typ3=new this('noinit');for(var property in properties){var previous=pr0t0typ3[property].current=properties[property];if(previous&&previous!=current)current=previous.parentize(current)||current;pr0t0typ3[property]=current;}
return new CompatClass(pr0t0typ3);},implement:function(properties){for(var property in properties)this.prototype[property]=properties[property];}};}
if(!Function.prototype.CompatBind){Function.prototype.CompatBind=function(bind){var fn=this;return function(){return fn.apply(bind,arguments);};};}
if(!Function.prototype.CompatBindAsEventListener){Function.prototype.CompatBindAsEventListener=function(bind){var fn=this;return function(event){fn.call(bind,event||window.event);};};}
if(!String.prototype.makeSafe)String.prototype.makeSafe=function(){return this.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/\n/g,'<BR>');}