// Build: 2023/6/8 23:12:22
(()=>{console.time=function(e){this._times=this._times||{},this._times[e]=Date.now()};console.timeEnd=function(e){if(this._times&&this._times[e]){let t=Date.now()-this._times[e];console.log(`${e}: ${t}ms`),delete this._times[e]}else console.log(`Timer with label ${e} does not exist.`)};function n(e){$done({body:JSON.stringify(e)})}function o(e){e.data.item=e.data.item.filter(t=>!t.linktype.endsWith("_ad")),n(e)}function s(e){let t=["account","event_list","preload","show"],l={max_time:0,min_interval:31536e3,pull_interval:31536e3},c={duration:0,enable_pre_download:!1,end_time:2209046399,begin_time:220896e4};if(e.data&&(t.forEach(i=>delete obj.data[i]),Object.entries(l).forEach(([i,d])=>{obj.data[i]&&(obj.data[i]=d)}),e.data.list))for(let i of obj.data.list)Object.assign(i,c);n(e)}function r(e){e.data.item=e.data.item.filter(t=>!/banner|cm/.test(t.card_type)),n(e)}var f=$request.url,p=$response.body,a={search:o,"feed/index":r,splash:s};for(let e in a)if(f.includes(e)){a[e](p);break}$done({});})();
