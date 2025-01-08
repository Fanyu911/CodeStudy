/** 
* 1. 介绍一下lodash的用法
* _(data).map or _.map(data)   历史原因，使用习惯保留 $()
* 2. 无 new 实例化
* 3. 扩展方法，map ，由于使用习惯，支持 _.map(data, cb), _(data).map(cb)
*  解决问题 1. 如何让这两种方法调用上生效 _.map = func, _.prototype = func， 调用同一个方法 _.mixin
*  解决问题 2. _(data), 初始化数据 this.wrapper = data;
*  解决问题 3. _(data).map(传入一个cb), _.map(传入一个data，一个cb) 参数数量对不上, 调用的规律无非data参数被移动到前面了
*      const decon = [this.wrapper];
       [].push.apply(decon, arguments)
   解决问题 4. 每个方法的参数数量是不定的
   
   3.chain调用，因为要这样使用_.chain ,所以一定有 _.chain = function() {}, _(data).chain调用的是原型链上的方法，所以要区分是不是开启了chain，用model
     特殊的 instance._chain
*/

(function (root) {
  //初始化并且挂在window上
  var _ = function (data) {
    console.log(this);
    if (!(this instanceof _)) {
      let newInst = new _(data);
      return newInst; // 返回一个实例对象 {this,wrapper = [1,2,3]}
    }
    this.wrapper = data;
  };

  _.map = function (data, callback) {
    return data.map(callback);
  };

  _.filter = function (data, callback) {
    return data.filter(callback);
  };

  _.chain = function (data) {
    console.log('开始chain');

    var instance = _(data); // 调用他的对象 也是一个实例
    instance._chian = true;
    console.log(instance);
    return instance;
  };

  _.prototype.value = function () {
    return this.wrapper;
  };

  var beforeHook = function (keys, callback) {
    keys.forEach(callback);
  };

  var dispose = function (instance, result) {
    if (instance._chian) {
      instance.wrapper = result;
      return instance;
    }
    return result;
  };

  _.mixin = function (target) {
    //[ 'map', 'filter', 'chain', 'mixin' ]
    beforeHook(Object.keys(target), function (curKey) {
      var func = target[curKey];

      target.prototype[curKey] = function () {
        var decon = [this.wrapper];
        [].push.apply(decon, arguments);
        var result = func.apply(this, decon);
        return dispose(this, result);
      };
    });
  };

  _.mixin(_); // 调用mixin传入自己
  root._ = _;
})(this); // window

_.chain([1, 2, 3])
  .unique()
  .map((item) => item * 2)
  .value();
