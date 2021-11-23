(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[162],{"6ohZ":function(e,t,n){"use strict"
n.d(t,"a",(function(){return v}))
var i=n("An8g")
var o=n("Ff2n")
var a=n("q1tI")
var s=n.n(a)
n("17x9")
var r=n("Mmr1")
var l=n("msMH")
var d=n("HGxv")
var c=n("8WeW")
Object(c["a"])(JSON.parse('{"ar":{"close_d634289d":"إغلاق"},"ca":{"close_d634289d":"Tanca"},"cy":{"close_d634289d":"Cau"},"da":{"close_d634289d":"Luk"},"da-x-k12":{"close_d634289d":"Luk"},"de":{"close_d634289d":"Schließen"},"el":{"close_d634289d":"Κλείσιμο"},"en-AU":{"close_d634289d":"Close"},"en-AU-x-unimelb":{"close_d634289d":"Close"},"en-CA":{"close_d634289d":"Close"},"en-GB":{"close_d634289d":"Close"},"en-GB-x-lbs":{"close_d634289d":"Close"},"en-GB-x-ukhe":{"close_d634289d":"Close"},"es":{"close_d634289d":"Cerrar"},"fa":{"close_d634289d":"بستن"},"fi":{"close_d634289d":"Sulje"},"fr":{"close_d634289d":"Fermer"},"fr-CA":{"close_d634289d":"Fermer"},"he":{"close_d634289d":"סגירה"},"ht":{"close_d634289d":"Fèmen"},"hu":{"close_d634289d":"Bezárás"},"hy":{"close_d634289d":"Փակել"},"is":{"close_d634289d":"Loka"},"it":{"close_d634289d":"Chiudi"},"ja":{"close_d634289d":"閉じる"},"ko":{"close_d634289d":"닫기"},"mi":{"close_d634289d":"Katia"},"nb":{"close_d634289d":"Lukk"},"nb-x-k12":{"close_d634289d":"Lukk"},"nl":{"close_d634289d":"Sluiten"},"nn":{"close_d634289d":"Lukk"},"pl":{"close_d634289d":"Zamknij"},"pt":{"close_d634289d":"Fechar"},"pt-BR":{"close_d634289d":"Fechar"},"ru":{"close_d634289d":"Закрыть"},"sl":{"close_d634289d":"Zapri"},"sv":{"close_d634289d":"Stäng"},"sv-x-k12":{"close_d634289d":"Stäng"},"tr":{"close_d634289d":"Kapat"},"uk":{"close_d634289d":"Закрити"},"zh-Hans":{"close_d634289d":"关闭"},"zh-Hant":{"close_d634289d":"關閉"}}'))
n("jQeR")
n("0sPK")
var p=d["default"].scoped("modal")
var f=n("Dibh")
const h=["label","closeButtonLabel","onDismiss","children"]
function u(){return document.getElementById("flash_screenreader_holder")}function v(e){let t=e.label,n=e.closeButtonLabel,a=e.onDismiss,d=e.children,c=Object(o["a"])(e,h)
return s.a.createElement(f["a"],Object.assign({liveRegion:u},c,{label:t,onDismiss:a}),Object(i["a"])(f["a"].Header,{},void 0,Object(i["a"])(r["a"],{"data-testid":"instui-modal-close",placement:"end",offset:"medium",onClick:a},void 0,n||p.t("Close")),Object(i["a"])(l["a"],{},void 0,t)),d)}["Header","Body","Footer"].forEach(e=>v[e]=f["a"][e])
v.defaultProps={closeButtonLabel:void 0}},E7jo:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
n("MIhX")
n("dJId")
n("dGUw")
n("oa+I")
o.a.widget("ui.droppable",{version:"@VERSION",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var e=this.options,t=e.accept
this.isover=0
this.isout=1
this.accept=o.a.isFunction(t)?t:function(e){return e.is(t)}
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
o.a.ui.ddmanager.droppables[e.scope]=o.a.ui.ddmanager.droppables[e.scope]||[]
o.a.ui.ddmanager.droppables[e.scope].push(this)
e.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var e=o.a.ui.ddmanager.droppables[this.options.scope]
for(var t=0;t<e.length;t++)e[t]==this&&e.splice(t,1)
this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,t){"accept"==e&&(this.accept=o.a.isFunction(t)?t:function(e){return e.is(t)})
o.a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var t=o.a.ui.ddmanager.current
this.options.activeClass&&this.element.addClass(this.options.activeClass)
t&&this._trigger("activate",e,this.ui(t))},_deactivate:function(e){var t=o.a.ui.ddmanager.current
this.options.activeClass&&this.element.removeClass(this.options.activeClass)
t&&this._trigger("deactivate",e,this.ui(t))},_over:function(e){var t=o.a.ui.ddmanager.current
if(!t||(t.currentItem||t.element)[0]==this.element[0])return
if(this.accept.call(this.element[0],t.currentItem||t.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass)
this._trigger("over",e,this.ui(t))}},_out:function(e){var t=o.a.ui.ddmanager.current
if(!t||(t.currentItem||t.element)[0]==this.element[0])return
if(this.accept.call(this.element[0],t.currentItem||t.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
this._trigger("out",e,this.ui(t))}},_drop:function(e,t){var n=t||o.a.ui.ddmanager.current
if(!n||(n.currentItem||n.element)[0]==this.element[0])return false
var i=false
this.element.find(":data(droppable)").not(".ui-draggable-dragging").each((function(){var e=o.a.data(this,"droppable")
if(e.options.greedy&&!e.options.disabled&&e.options.scope==n.options.scope&&e.accept.call(e.element[0],n.currentItem||n.element)&&o.a.ui.intersect(n,o.a.extend(e,{offset:e.element.offset()}),e.options.tolerance)){i=true
return false}}))
if(i)return false
if(this.accept.call(this.element[0],n.currentItem||n.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass)
this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
this._trigger("drop",e,this.ui(n))
return this.element}return false},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}})
o.a.ui.intersect=function(e,t,n){if(!t.offset)return false
var i=(e.positionAbs||e.position.absolute).left,a=i+e.helperProportions.width,s=(e.positionAbs||e.position.absolute).top,r=s+e.helperProportions.height
var l=t.offset.left,d=l+t.proportions.width,c=t.offset.top,p=c+t.proportions.height
switch(n){case"fit":return l<=i&&a<=d&&c<=s&&r<=p
case"intersect":return l<i+e.helperProportions.width/2&&a-e.helperProportions.width/2<d&&c<s+e.helperProportions.height/2&&r-e.helperProportions.height/2<p
case"pointer":var f=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,h=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,u=o.a.ui.isOver(h,f,c,l,t.proportions.height,t.proportions.width)
return u
case"touch":return(s>=c&&s<=p||r>=c&&r<=p||s<c&&r>p)&&(i>=l&&i<=d||a>=l&&a<=d||i<l&&a>d)
default:return false}}
o.a.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(e,t){var n=o.a.ui.ddmanager.droppables[e.options.scope]||[]
var i=t?t.type:null
var a=(e.currentItem||e.element).find(":data(droppable)").andSelf()
e:for(var s=0;s<n.length;s++){if(n[s].options.disabled||e&&!n[s].accept.call(n[s].element[0],e.currentItem||e.element))continue
for(var r=0;r<a.length;r++)if(a[r]==n[s].element[0]){n[s].proportions.height=0
continue e}n[s].visible="none"!=n[s].element.css("display")
if(!n[s].visible)continue
"mousedown"==i&&n[s]._activate.call(n[s],t)
n[s].offset=n[s].element.offset()
n[s].proportions={width:n[s].element[0].offsetWidth,height:n[s].element[0].offsetHeight}}},drop:function(e,t){var n=false
o.a.each(o.a.ui.ddmanager.droppables[e.options.scope]||[],(function(){if(!this.options)return
!this.options.disabled&&this.visible&&o.a.ui.intersect(e,this,this.options.tolerance)&&(n=this._drop.call(this,t)||n)
if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)){this.isout=1
this.isover=0
this._deactivate.call(this,t)}}))
return n},dragStart:function(e,t){e.element.parentsUntil("body").bind("scroll.droppable",(function(){e.options.refreshPositions||o.a.ui.ddmanager.prepareOffsets(e,t)}))},drag:function(e,t){e.options.refreshPositions&&o.a.ui.ddmanager.prepareOffsets(e,t)
o.a.each(o.a.ui.ddmanager.droppables[e.options.scope]||[],(function(){if(this.options.disabled||this.greedyChild||!this.visible)return
var n=o.a.ui.intersect(e,this,this.options.tolerance)
var i=n||1!=this.isover?n&&0==this.isover?"isover":null:"isout"
if(!i)return
var a
if(this.options.greedy){var s=this.element.parents(":data(droppable):eq(0)")
if(s.length){a=o.a.data(s[0],"droppable")
a.greedyChild="isover"==i?1:0}}if(a&&"isover"==i){a["isover"]=0
a["isout"]=1
a._out.call(a,t)}this[i]=1
this["isout"==i?"isover":"isout"]=0
this["isover"==i?"_over":"_out"].call(this,t)
if(a&&"isout"==i){a["isout"]=0
a["isover"]=1
a._over.call(a,t)}}))},dragStop:function(e,t){e.element.parentsUntil("body").unbind("scroll.droppable")
e.options.refreshPositions||o.a.ui.ddmanager.prepareOffsets(e,t)}}},TvTI:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
var a=n("gI0r")
n("8JEM")
o.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=o()(this)
o.a.each(["name","id","class"],(n,i)=>{t.attr(i)&&t.attr(i,t.attr(i).replace(/-iterator-/,e.iterator))})}))
e.id&&this.attr("id",e.id)
let i=false
if(e.data)for(var t in e.data){if(e.except&&-1!=o.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=o.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const s=this.find("."+t)
var n=e.avoid||""
s.each((function(){const s=o()(this)
if(s.length>0&&0===s.closest(n).length){"undefined"!==typeof e.data[t]&&null!==e.data[t]||(e.data[t]="")
if(e.htmlValues&&-1!=o.a.inArray(t,e.htmlValues)){s.html(o.a.raw(e.data[t].toString()))
if(s.hasClass("user_content")){i=true
s.removeClass("enhanced")
s.data("unenhanced_content_html",e.data[t].toString())}}else if("INPUT"==s[0].tagName.toUpperCase())s.val(e.data[t])
else try{const n=e.data[t].toString()
s.html(Object(a["a"])(n))}catch(e){}}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,n,i,a=o()(this)
for(const s in e.hrefValues){if(!e.hrefValues.hasOwnProperty(s))continue
const r=e.hrefValues[s]
if(t=a.attr("href")){const n=o.a.replaceTags(t,r,encodeURIComponent(e.data[r]))
const i=a.text()===a.html()?a.text():null
if(t!==n){a.attr("href",n)
i&&a.text(i)}}(n=a.attr("rel"))&&a.attr("rel",o.a.replaceTags(n,r,e.data[r]));(i=a.attr("name"))&&a.attr("name",o.a.replaceTags(i,r,e.data[r]))}}))
i&&o()(document).triggerHandler("user_content_change")}return this}
o.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
o.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,n={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const a=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
i=o.a.trim(a.text())
"&nbsp;"===a.html()&&(i="")
1===i.length&&160===i.charCodeAt(0)&&(i="")
n[e]=i})}if(e.dataValues)for(t in e.dataValues){var i=this.data(e.dataValues[t])
i&&(n[e.dataValues[t]]=i)}if(e.htmlValues)for(t in e.htmlValues){const a=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
i=null
i=a.hasClass("user_content")&&a.data("unenhanced_content_html")?a.data("unenhanced_content_html"):o.a.trim(a.html())
n[e.htmlValues[t]]=i}return n}
o.a.fn.getTemplateValue=function(e,t){const n=o.a.extend({},t,{textValues:[e]})
return this.getTemplateData(n)[e]}},aoKV:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
n("Y/W1")
var a=n("gI0r")
n("oa+I")
n("E7jo")
o.a.fn.instTree=function(e){return o()(this).each((function(){let t=false
let n=o()(this)
const i=this
let s=null
i.options={autoclose:true,overrideEvents:false,multi:true,dragdrop:true,onClick:false,onDblClick:false,onExpand:false,onCollapse:false,onAddNode:false,onEditNode:false,onDeleteNode:false,onDrag:false,onDrop:false}
i.opts=o.a.extend({},i.options,e)
o.a.fn.instTree.InitInstTree=function(e){n=o()(e)
const a='<li class="separator"></li>'
n.find("li:not(.separator)").filter((function(){return!(o()(this).prev("li.separator").get(0)||o()(this).parents("ul.non-instTree").get(0))})).each((function(){o()(this).before(a)}))
n.find("li > span").not(".sign").not(".clr").addClass("text").attr("unselectable","on")
n.find("li:not(.separator)").filter((function(){return!o()(this).parents("ul.non-instTree").get(0)})).filter(":has(ul)").addClass("node").end().filter(":not(.node)").addClass("leaf")
i.IeSetStyles()
i.Clean()
i.AddSigns()
t||i.BindEvents(e)
if(i.opts.dragdrop){i.CancelDragDrop(e)
i.InitDragDrop(e)}}
i.InitDragDrop=function(e){n=o()(e)
n.find("span.text").draggable({cursor:o.a.browser.msie?"default":"move",distance:3,helper(){return o()('<div id="instTree-drag"><span>'+o()(this).html()+"</span></div>")},appendTo:n})
n.find("li.separator").droppable({accept:"span.text",hoverClass:"dd-hover"})
n.find("span.text").bind("dragstart",(function(e,t){n=o()(this).parents("ul.instTree:first")
const a=o()(this).parent("li")
const s=o()("div#instTree-drag")
o.a.browser.msie&&n.find("li.separator").removeClass("dd-hover")
o.a.browser.opera&&s.css("margin-top","10px")
if(a.is(".leaf")){s.addClass("leaf")
o.a.browser.msie&&s.css("background","#C3E1FF url("+i.opts.imgFolder+"leaf-drag.gif) left 3px no-repeat")}else a.is(".node")&&s.addClass("node")
a.prev("li.separator").addClass("alt").end().addClass("alt")
"function"===typeof i.opts.onDrag&&i.opts.onDrag(e,a)}))
n.find("li.separator").bind("dropover",(function(e,t){s=o()(this)}))
n.find("li.separator").bind("dropout",(e,t)=>{s=null})
n.find("span.text").bind("dragstop",(t,a)=>{let r=true
if(s){var l=n.find("li.alt:not(.separator):eq(0)")
const e=s.parents("li.node:eq(0)")
l.is(".node")&&e.is(".fixedLevel")&&(r=false)}if(s&&r){s.before(n.find("li.alt").remove().removeClass("alt"))
s=null
"function"===typeof i.opts.onDrop&&i.opts.onDrop(t,l)
o.a.fn.instTree.InitInstTree(e)}else n.find("li.alt").removeClass("alt")})}
i.CancelDragDrop=function(e){n=o()(e)
n.find("span.text").draggable("destroy")
n.find("li.separator").droppable("destroy")
n.find("li.separator").unbind()
n.find("span.text").unbind()}
o.a.fn.instTree.AddNode=function(e,t){n=o()(e)
const a=n.find("span.active").get(0)
if(a){const n=o()(a).parents("li:first")
const s=o()(a).parents("li.node:first")
if(!s.is(".fixedLevel")||"node"!=t){const s="leaf"==t?"":' class="node"'
const r='<li class="separator"></li>'
const l="<li"+s+'><span class="text">&nbsp;</span><input type="text" value="New item" /></li>'
const d=r+l
let c=false
let p,f,h
if(n.is(".leaf")){n.after(d)
p=n.nextAll("li:not(.separator):first")
h=n.parent()
c=true}else if(n.is(".node")){f=n.children("ul").get(0)
if(f){o()(f).append(d)
p=o()(f).children("li:not(.separator):last")}else{n.append("<ul>"+d+"</ul>")
f=n.children("ul").get(0)
p=o()(f).children("li:not(.separator):last")}i.ExpandNode(e,n)
h=n
c=true}if(c){o()(a).removeClass("active")
h.find("input:text").focus().select().blur((function(){i.SaveInput(e,o()(this))}))}o.a.fn.instTree.InitInstTree(e)
"function"===typeof i.opts.onAddNode&&i.opts.onAddNode(p)}}}
o.a.fn.instTree.EditNode=function(e){n=o()(e)
const t=n.find("span.active").get(0)
if(t){const n=o()(t).parents("li:first")
o()(t).replaceWith('<span class="text">&nbsp;</span><input type="text" value="'+Object(a["a"])(o()(t).text())+'" />')
n.find("input:text").focus().select().blur((function(){i.SaveInput(e,o()(this))}))
"function"===typeof i.opts.onEditNode&&i.opts.onEditNode(n)}}
o.a.fn.instTree.DeleteNode=function(e){n=o()(e)
const t=n.find("span.active").get(0)
if(t){const n=o()(t).parents("li:first")
const a=n.parents("li.node:first")
n.prev("li.separator").remove().end().remove()
o.a.fn.instTree.InitInstTree(e)
"function"===typeof i.opts.onDeleteNode&&i.opts.onDeleteNode(n,a)}}
i.SaveInput=function(e,t){t.prev("span.text").remove()
const n=""!==o.a.trim(t.get(0).value)?t.get(0).value:"_____"
t.replaceWith('<span class="active text">'+Object(a["a"])(n)+"</span>")
o.a.fn.instTree.InitInstTree(e)}
i.IeSetStyles=function(){if(o.a.browser.msie){n.find("li.node:not(.open) > ul").hide()
n.find("li.node.open > ul").css("margin-bottom","1px")}}
i.Clean=function(){n.find("li:not(.separator)").each((function(){o()(this).removeClass("last")
o()(this).next("li").length&&!o()(this).find("ul").length||o()(this).addClass("last")}))}
i.AddSigns=function(){n.find("li.node").each((function(){o()(this).hasClass("open")?o()(this).find("span.sign").remove().end().append('<span class="sign minus"></span>'):o()(this).find("span.sign").remove().end().append('<span class="sign plus"></span>')}))}
i.BindEvents=function(e){n.on("keydown",(function(t){const a=n.find('[aria-selected="true"]')
const s=o()("#file_list_container")
switch(t.which){case 38:t.preventDefault()
t.stopPropagation()
var r=i.FindNode(a,"up")
i.SelectNode(r)
s.scrollTop(i.FileScrollOffset(r,s))
break
case 40:t.preventDefault()
t.stopPropagation()
var l=i.FindNode(a,"down")
i.SelectNode(l)
s.scrollTop(i.FileScrollOffset(l,s))
break
case 37:t.preventDefault()
t.stopPropagation()
var d=a.attr("aria-expanded")
if(a.hasClass("node")&&"true"===d)i.CollapseNode(a)
else if("undefined"===typeof d||false===d||"false"===d){const e=a.parents(".node").eq(0)
i.SelectNode(e)
s.scrollTop(i.FileScrollOffset(e,s))}break
case 39:t.preventDefault()
t.stopPropagation()
d=a.attr("aria-expanded")
if(a.hasClass("node")&&"true"!==d)i.ExpandNode(e,a)
else if("true"===d){l=i.FindNode(a,"down")
i.SelectNode(l)
s.scrollTop(i.FileScrollOffset(l,s))}break
case 13:t.preventDefault()
t.stopPropagation()
var c=a
"function"===typeof i.opts.onEnter&&i.opts.onEnter.call(this,t,c)
break
case 35:t.preventDefault()
t.stopPropagation()
var p=o()('[role="treeitem"]:visible')
var f=p.last()
i.SelectNode(f)
s.scrollTop(i.FileScrollOffset(f,s))
break
case 36:t.preventDefault()
t.stopPropagation()
p=o()('[role="treeitem"]:visible')
var h=p.first()
i.SelectNode(h)
s.scrollTop(i.FileScrollOffset(h,s))}}))
n.click((function(t){const n=o()(this).closest(".instTree")
const a=o()(t.target)
let s
if(a.is("span.sign")){s=a.parents("li:eq(0)")
i.ToggleNode(e,s)}else if(a.is("span.text")){s=a.closest("li")
if("function"===typeof i.opts.onClick){if(!i.opts.overrideEvents){i.opts.multi&&t.ctrlKey||n.find(".active").removeClass("active").end().find(".active-leaf").removeClass("active-leaf").end().find(".active-node").removeClass("active-node")
a.addClass("active")
s.hasClass("leaf")?s.addClass("active-leaf"):s.addClass("active-node")}i.opts.onClick.call(s,t,s)}else{i.opts.multi&&t.ctrlKey||n.find(".active").removeClass("active").end().find(".active-leaf").removeClass("active-leaf").end().find(".active-node").removeClass("active-node")
a.addClass("active")
s.hasClass("leaf")?s.addClass("active-leaf"):s.addClass("active-node")}}}))
n.dblclick(t=>{const n=o()(t.target)
if(n.is("span.text")){const o=n.parents("li:eq(0)")
if("function"===typeof i.opts.onDblClick){!i.opts.overrideEvents&&o.is(".node")&&i.ToggleNode(e,o)
i.opts.onDblClick.call(o,t,o)}else o.is(".node")&&i.ToggleNode(e,o)}})
t=true}
i.ToggleNode=function(e,t){t.hasClass("open")?i.CollapseNode(t):i.ExpandNode(e,t)
i.Clean()}
i.ExpandNode=function(e,t){t.addClass("open")
t.attr("aria-expanded",true)
i.opts.autoclose&&t.siblings(".open").each((function(){i.CollapseNode(o()(this))}))
if(o.a.browser.msie){t.children("ul").show().css({"margin-bottom":"1px",visibility:"visible"})
t.children("ul").find("li.node:not(.open) > ul").each((function(){o()(this).css("visibility","hidden")}))}const n=t.find("span.sign:last")
n.removeClass("plus").addClass("minus")
i.opts.multi&&o.a.fn.instTree.InitInstTree(e)
"function"===typeof i.opts.onExpand&&i.opts.onExpand(t)}
i.CollapseNode=function(e){e.removeClass("open")
e.attr("aria-expanded",false)
o.a.browser.msie&&e.children("ul").hide()
const t=e.find("span.sign:last")
t.removeClass("minus").addClass("plus")
"function"===typeof i.opts.onCollapse&&i.opts.onCollapse(e)}
i.SelectNode=function(e){if(e.length){n.attr("aria-activedescendant",e.attr("id"))
n.find('[aria-selected="true"]').attr("aria-selected","false")
e.attr("aria-selected","true")}}
i.FindNode=function(e,t){const n=o()('[role="treeitem"]:visible')
const i=n.index(e)
let a=i
"up"==t?a--:a++
const s=a>=0?n.get(a):n.get(i)
const r=o()(s).data("indexPosition",a)
return r}
i.FileScrollOffset=function(e,t){const n=e.data("indexPosition")
const i=t.find(".leaf").first().height()||20
const o=e.siblings(".separator").first().height()||2
const a=o*n
const s=i*n
const r=t.height()/2
return s+a-r}
if(o()(this).is("ul")){n=o()(this)
n.addClass("instTree")
o.a.fn.instTree.InitInstTree(i)}}))}},msMH:function(e,t,n){"use strict"
n.d(t,"a",(function(){return Q}))
var i=n("rePB")
var o=n("Ff2n")
var a=n("1OyB")
var s=n("vuIU")
var r=n("Ji7U")
var l=n("LK+K")
var d=n("q1tI")
var c=n.n(d)
var p=n("17x9")
var f=n.n(p)
var h=n("TSYQ")
var u=n.n(h)
var v=n("n12J")
var m=n("J2CL")
function g(e,t,n){if("input"===e.as){if("children"===t&&e.children||void 0==e.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(n,' as="input"`'))}else{if("value"===t&&void 0!=e.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(n,' as="input"`'))
if(!e.children)return new Error("Prop `children` should be supplied unless `".concat(n,' as="input"`.'))}return}var b=n("nAyT")
var C=n("KgFQ")
var _=n("jtGx")
var y=n("oXx0")
function F(e){var t=e.borders,n=e.colors,i=e.spacing,o=e.typography
return{lineHeight:o.lineHeightFit,h1FontSize:o.fontSizeXXLarge,h1FontWeight:o.fontWeightLight,h1FontFamily:o.fontFamily,h2FontSize:o.fontSizeXLarge,h2FontWeight:o.fontWeightNormal,h2FontFamily:o.fontFamily,h3FontSize:o.fontSizeLarge,h3FontWeight:o.fontWeightBold,h3FontFamily:o.fontFamily,h4FontSize:o.fontSizeMedium,h4FontWeight:o.fontWeightBold,h4FontFamily:o.fontFamily,h5FontSize:o.fontSizeSmall,h5FontWeight:o.fontWeightNormal,h5FontFamily:o.fontFamily,primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,borderPadding:i.xxxSmall,borderColor:n.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}F.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"]}}
F["instructure"]=function(e){var t=e.typography
return{h1FontFamily:t.fontFamilyHeading,h2FontFamily:t.fontFamilyHeading,h3FontWeight:t.fontWeightBold,h3FontSize:"2.125rem",h4FontWeight:t.fontWeightBold,h4FontSize:t.fontSizeLarge,h5FontWeight:t.fontWeightBold,h5FontSize:t.fontSizeMedium}}
var x={fontFamily:["h1FontFamily","h2FontFamily","h3FontFamily","h4FontFamily","h5FontFamily"]}
var S=Object(m["e"])({map:x,version:"8.0.0"})
var A,k,T,w,I,O
var N={componentId:"blnAQ",template:function(e){return"\n\n.blnAQ_bGBk{line-height:".concat(e.lineHeight||"inherit",";margin:0}\n\ninput.blnAQ_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-0.375rem 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.blnAQ_bGBk[type]{text-align:left}\n\n[dir=rtl] input.blnAQ_bGBk[type]{text-align:right}\n\ninput.blnAQ_bGBk[type]:focus{outline:none}\n\n.blnAQ_fCtg{font-family:").concat(e.h1FontFamily||"inherit",";font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.blnAQ_cVrl{font-family:").concat(e.h2FontFamily||"inherit",";font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.blnAQ_dnfM{font-family:").concat(e.h3FontFamily||"inherit",";font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.blnAQ_KGwv{font-family:").concat(e.h4FontFamily||"inherit",";font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.blnAQ_eYKA{font-family:").concat(e.h5FontFamily||"inherit",";font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.blnAQ_dbSc{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.blnAQ_bACI{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.blnAQ_kWwi{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.blnAQ_drOs{color:inherit}\n\n.blnAQ_eCSh{color:").concat(e.primaryColor||"inherit","}\n\n.blnAQ_buuG{color:").concat(e.secondaryColor||"inherit","}\n\n.blnAQ_bFtJ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.blnAQ_dsSB{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.blnAQ_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"blnAQ_bGBk","level--h1":"blnAQ_fCtg","level--h2":"blnAQ_cVrl","level--h3":"blnAQ_dnfM","level--h4":"blnAQ_KGwv","level--h5":"blnAQ_eYKA","level--reset":"blnAQ_dbSc","border--top":"blnAQ_bACI","border--bottom":"blnAQ_kWwi","color--inherit":"blnAQ_drOs","color--primary":"blnAQ_eCSh","color--secondary":"blnAQ_buuG","color--primary-inverse":"blnAQ_bFtJ","color--secondary-inverse":"blnAQ_dsSB",ellipsis:"blnAQ_bOQC"}
var Q=(A=Object(b["a"])("8.0.0",{ellipsis:"<TruncateText />"}),k=Object(y["a"])(),T=Object(m["l"])(F,N,S),A(w=k(w=T(w=(O=I=function(e){Object(r["a"])(n,e)
var t=Object(l["a"])(n)
function n(){Object(a["a"])(this,n)
return t.apply(this,arguments)}Object(s["a"])(n,[{key:"render",value:function(){var e
var t=this.props,a=t.border,s=t.children,r=t.color,l=t.level,d=t.margin,p=t.elementRef,f=t.ellipsis,h=Object(o["a"])(t,["border","children","color","level","margin","elementRef","ellipsis"])
var m=Object(C["a"])(n,this.props,(function(){return"reset"===l?"span":l}))
return c.a.createElement(v["a"],Object.assign({},Object(_["b"])(h),{className:u()((e={},Object(i["a"])(e,N.root,true),Object(i["a"])(e,N["level--".concat(l)],true),Object(i["a"])(e,N["color--".concat(r)],r),Object(i["a"])(e,N["border--".concat(a)],"none"!==a),Object(i["a"])(e,N.ellipsis,f),e)),as:m,margin:d,elementRef:p}),s)}}])
n.displayName="Heading"
return n}(d["Component"]),I.propTypes={border:f.a.oneOf(["none","top","bottom"]),children:g,color:f.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:f.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:f.a.elementType,margin:m["c"].spacing,elementRef:f.a.func,ellipsis:f.a.bool},I.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2"},O))||w)||w)||w)}}])

//# sourceMappingURL=162-c-668363a95a.js.map