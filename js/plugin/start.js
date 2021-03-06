/**
 * 用于快速使用butterfly
 * @author qijun.weiqj
 */
may.config({
	root: 'http://wpstatic.china.alibaba.com/js'
});


define('PageContext', ['jQuery', 'Context', 'Executor'], function($, Context, Executor) {

var executor = new Executor();
	
return new Context('PageContext', {
	query: function(name) {
		if (/^[.#]/) {
			return $(name, 'body');
		}
	},

	bind: function(node, event, module) {
		var config = node.data('modConfig');
		executor.execute(module, true, [node, config]);
	}
	
});
		
});

define(['jQuery', 'PageContext', 'ui.Autowire'], 

function($, PageContext, Autowire) {

var Start = {
	init: function() {
		PageContext.start();
		new Autowire('body');
	}
};

$($.proxy(Start, 'init'));
		
});
