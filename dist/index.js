"use strict";var y=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var l=y(function(D,g){"use strict";var q=require("@stdlib/assert-is-plain-object"),s=require("@stdlib/assert-has-own-property"),f=require("@stdlib/assert-is-ndarray-like"),p=require("@stdlib/assert-is-integer"),h=require("@stdlib/ndarray-base-assert-is-order"),w=require("@stdlib/ndarray-shape"),v=require("@stdlib/ndarray-order"),O=require("@stdlib/ndarray-strides"),b=require("@stdlib/ndarray-base-data-buffer"),c=require("@stdlib/ndarray-base-dtype"),T=require("@stdlib/ndarray-base-shape2strides"),E=require("@stdlib/ndarray-base-strides2order"),j=require("@stdlib/ndarray-base-flatten-shape-from"),F=require("@stdlib/ndarray-base-assign"),S=require("@stdlib/ndarray-base-ctor"),L=require("@stdlib/ndarray-empty-like"),n=require("@stdlib/string-format"),m="row-major",R="column-major";function V(e,i,a){var o,r,t,d,u;if(!f(e))throw new TypeError(n("invalid argument. First argument must be an ndarray. Value: `%s`.",e));if(!p(i))throw new TypeError(n("invalid argument. Second argument must be an integer. Value: `%s`.",i));if(t=w(e),t.length<1)throw new TypeError(n("invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.",t.length));if(r={order:m,dtype:c(e)},arguments.length>2){if(!q(a))throw new TypeError(n("invalid argument. Options argument must be an object. Value: `%s`.",a));if(s(a,"order"))if(a.order==="any")d=E(O(e)),d===1?r.order=m:d===2?r.order=R:r.order=v(e);else if(a.order==="same")r.order=v(e);else if(h(a.order))r.order=a.order;else throw new TypeError(n("invalid option. `%s` option must be a recognized order. Option: `%s`.","order",a.order));s(a,"dtype")&&(r.dtype=a.dtype)}return u=L(e,{shape:j(t,i),order:r.order,dtype:r.dtype}),o=new S(r.dtype,b(u),t,T(t,r.order),0,r.order),F([e,o]),u}g.exports=V});var k=l();module.exports=k;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
