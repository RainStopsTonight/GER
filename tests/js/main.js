window.onerror = function (){
    // console.log(arguments);
    return true;
};
/*var error_report = new GER({
    url:'https://www.pre.gomeplus.com/ajax/log/index?err_msg=',
    repeat:5,
    delay: 1000,
    validTime : 3,
    proxyConsole: true
});
error_report.on('beforeReport', function(){
    return false;
});*/
// setTimeout(function (){
//     console.log(aa);
// }, 1000);
// console.log(asdfghjkl);
ccc;



//自定义方法的劫持
/*var fn2 = error_report.proxyCustomFn(fn1);
function fn1(){
    aaa;
    console.log('asdgf');

}
fn2();*/

//多个自定义方法的劫持
/*function fn1 (){
    aa;  //error
    console.log('111');
}
function fn2 (){
    console.log('222');
}
function fn3 (){
    console.log('333');
}
var obj = error_report.proxyCustomObj({
    a: fn1,
    b: fn2,
    c: fn3
});
obj.a();*/


//e://www-eepre.gomeplus.com/ajax/log/index?err_msg=msg=evalxxxxxx

//log, debug, info, warn, error 

// error_report.log('attachEvent is not defined ---------- report from log');
// error_report.debug('new new this item report from debug');
// error_report.info('new new this item report from info');
// error_report.warn('new new this item report from warn');
// error_report.error('new new this item report from error');

/*var error_report = new GER({
    url:'https://www.gomeplus.com/ajax/log/index?err_msg=',
    repeat:5,
    delay: 1000,
    validTime : 3,
    proxyAll: true
});

$('a').on('click', function(){
	setTimeout(function (){
        console.log('aaaaaa');
    }, 1000);
    alert(1);
    console.log(1);
});*/




