/*! For license information please see main.js.LICENSE.txt */
( () => {
	var t = {
			4065: () => {
				window.history.scrollRestoration && ( window.history.scrollRestoration =
					"manual" )
			},
			6955: () => {
				"serviceWorker" in navigator && navigator.serviceWorker.register(
					"/service-worker.js" )
			},
			1663: t => {
				"use strict";
				t.exports = ( t, {
					include: e,
					exclude: i
				} = {} ) => {
					const r = t => {
						const r = e => "string" == typeof e ? t === e : e.test( t );
						return e ? e.some( r ) : !i || !i.some( r )
					};
					for ( const [ e, i ] of ( t => {
							const e = new Set;
							do {
								for ( const i of Reflect.ownKeys( t ) ) e.add( [ t, i ] )
							} while ( ( t = Reflect.getPrototypeOf( t ) ) && t !== Object.prototype );
							return e
						} )( t.constructor.prototype ) ) {
						if ( "constructor" === i || !r( i ) ) continue;
						const s = Reflect.getOwnPropertyDescriptor( e, i );
						s && "function" == typeof s.value && ( t[ i ] = t[ i ].bind( t ) )
					}
					return t
				}
			},
			1590: t => {
				"use strict";
				var e, i = "object" == typeof Reflect ? Reflect : null,
					r = i && "function" == typeof i.apply ? i.apply : function( t, e, i ) {
						return Function.prototype.apply.call( t, e, i )
					};
				e = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ?
					function( t ) {
						return Object.getOwnPropertyNames( t ).concat( Object.getOwnPropertySymbols(
							t ) )
					} : function( t ) {
						return Object.getOwnPropertyNames( t )
					};
				var s = Number.isNaN || function( t ) {
					return t != t
				};

				function n() {
					n.init.call( this )
				}
				t.exports = n, t.exports.once = function( t, e ) {
						return new Promise( ( function( i, r ) {
							function s() {
								void 0 !== n && t.removeListener( "error", n ), i( [].slice.call(
									arguments ) )
							}
							var n;
							"error" !== e && ( n = function( i ) {
								t.removeListener( e, s ), r( i )
							}, t.once( "error", n ) ), t.once( e, s )
						} ) )
					}, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._eventsCount =
					0, n.prototype._maxListeners = void 0;
				var o = 10;

				function a( t ) {
					if ( "function" != typeof t ) throw new TypeError(
						'The "listener" argument must be of type Function. Received type ' +
						typeof t )
				}

				function h( t ) {
					return void 0 === t._maxListeners ? n.defaultMaxListeners : t._maxListeners
				}

				function l( t, e, i, r ) {
					var s, n, o, l;
					if ( a( i ), void 0 === ( n = t._events ) ? ( n = t._events = Object.create(
							null ), t._eventsCount = 0 ) : ( void 0 !== n.newListener && ( t.emit(
								"newListener", e, i.listener ? i.listener : i ), n = t._events ), o =
							n[ e ] ), void 0 === o ) o = n[ e ] = i, ++t._eventsCount;
					else if ( "function" == typeof o ? o = n[ e ] = r ? [ i, o ] : [ o, i ] :
						r ? o.unshift( i ) : o.push( i ), ( s = h( t ) ) > 0 && o.length > s &&
						!o.warned ) {
						o.warned = !0;
						var u = new Error( "Possible EventEmitter memory leak detected. " + o.length +
							" " + String( e ) +
							" listeners added. Use emitter.setMaxListeners() to increase limit" );
						u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count =
							o.length, l = u, console && console.warn && console.warn( l )
					}
					return t
				}

				function u() {
					if ( !this.fired ) return this.target.removeListener( this.type, this.wrapFn ),
						this.fired = !0, 0 === arguments.length ? this.listener.call( this.target ) :
						this.listener.apply( this.target, arguments )
				}

				function c( t, e, i ) {
					var r = {
							fired: !1,
							wrapFn: void 0,
							target: t,
							type: e,
							listener: i
						},
						s = u.bind( r );
					return s.listener = i, r.wrapFn = s, s
				}

				function d( t, e, i ) {
					var r = t._events;
					if ( void 0 === r ) return [];
					var s = r[ e ];
					return void 0 === s ? [] : "function" == typeof s ? i ? [ s.listener ||
						s
					] : [ s ] : i ? function( t ) {
						for ( var e = new Array( t.length ), i = 0; i < e.length; ++i ) e[ i ] =
							t[ i ].listener || t[ i ];
						return e
					}( s ) : f( s, s.length )
				}

				function p( t ) {
					var e = this._events;
					if ( void 0 !== e ) {
						var i = e[ t ];
						if ( "function" == typeof i ) return 1;
						if ( void 0 !== i ) return i.length
					}
					return 0
				}

				function f( t, e ) {
					for ( var i = new Array( e ), r = 0; r < e; ++r ) i[ r ] = t[ r ];
					return i
				}
				Object.defineProperty( n, "defaultMaxListeners", {
						enumerable: !0,
						get: function() {
							return o
						},
						set: function( t ) {
							if ( "number" != typeof t || t < 0 || s( t ) ) throw new RangeError(
								'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
								t + "." );
							o = t
						}
					} ), n.init = function() {
						void 0 !== this._events && this._events !== Object.getPrototypeOf( this )
							._events || ( this._events = Object.create( null ), this._eventsCount =
								0 ), this._maxListeners = this._maxListeners || void 0
					}, n.prototype.setMaxListeners = function( t ) {
						if ( "number" != typeof t || t < 0 || s( t ) ) throw new RangeError(
							'The value of "n" is out of range. It must be a non-negative number. Received ' +
							t + "." );
						return this._maxListeners = t, this
					}, n.prototype.getMaxListeners = function() {
						return h( this )
					}, n.prototype.emit = function( t ) {
						for ( var e = [], i = 1; i < arguments.length; i++ ) e.push( arguments[
							i ] );
						var s = "error" === t,
							n = this._events;
						if ( void 0 !== n ) s = s && void 0 === n.error;
						else if ( !s ) return !1;
						if ( s ) {
							var o;
							if ( e.length > 0 && ( o = e[ 0 ] ), o instanceof Error ) throw o;
							var a = new Error( "Unhandled error." + ( o ? " (" + o.message + ")" :
								"" ) );
							throw a.context = o, a
						}
						var h = n[ t ];
						if ( void 0 === h ) return !1;
						if ( "function" == typeof h ) r( h, this, e );
						else {
							var l = h.length,
								u = f( h, l );
							for ( i = 0; i < l; ++i ) r( u[ i ], this, e )
						}
						return !0
					}, n.prototype.addListener = function( t, e ) {
						return l( this, t, e, !1 )
					}, n.prototype.on = n.prototype.addListener, n.prototype.prependListener =
					function( t, e ) {
						return l( this, t, e, !0 )
					}, n.prototype.once = function( t, e ) {
						return a( e ), this.on( t, c( this, t, e ) ), this
					}, n.prototype.prependOnceListener = function( t, e ) {
						return a( e ), this.prependListener( t, c( this, t, e ) ), this
					}, n.prototype.removeListener = function( t, e ) {
						var i, r, s, n, o;
						if ( a( e ), void 0 === ( r = this._events ) ) return this;
						if ( void 0 === ( i = r[ t ] ) ) return this;
						if ( i === e || i.listener === e ) 0 == --this._eventsCount ? this._events =
							Object.create( null ) : ( delete r[ t ], r.removeListener && this.emit(
								"removeListener", t, i.listener || e ) );
						else if ( "function" != typeof i ) {
							for ( s = -1, n = i.length - 1; n >= 0; n-- )
								if ( i[ n ] === e || i[ n ].listener === e ) {
									o = i[ n ].listener, s = n;
									break
								}
							if ( s < 0 ) return this;
							0 === s ? i.shift() : function( t, e ) {
									for ( ; e + 1 < t.length; e++ ) t[ e ] = t[ e + 1 ];
									t.pop()
								}( i, s ), 1 === i.length && ( r[ t ] = i[ 0 ] ), void 0 !== r.removeListener &&
								this.emit( "removeListener", t, o || e )
						}
						return this
					}, n.prototype.off = n.prototype.removeListener, n.prototype.removeAllListeners =
					function( t ) {
						var e, i, r;
						if ( void 0 === ( i = this._events ) ) return this;
						if ( void 0 === i.removeListener ) return 0 === arguments.length ? (
								this._events = Object.create( null ), this._eventsCount = 0 ) : void 0 !==
							i[ t ] && ( 0 == --this._eventsCount ? this._events = Object.create(
								null ) : delete i[ t ] ), this;
						if ( 0 === arguments.length ) {
							var s, n = Object.keys( i );
							for ( r = 0; r < n.length; ++r ) "removeListener" !== ( s = n[ r ] ) &&
								this.removeAllListeners( s );
							return this.removeAllListeners( "removeListener" ), this._events =
								Object.create( null ), this._eventsCount = 0, this
						}
						if ( "function" == typeof( e = i[ t ] ) ) this.removeListener( t, e );
						else if ( void 0 !== e )
							for ( r = e.length - 1; r >= 0; r-- ) this.removeListener( t, e[ r ] );
						return this
					}, n.prototype.listeners = function( t ) {
						return d( this, t, !0 )
					}, n.prototype.rawListeners = function( t ) {
						return d( this, t, !1 )
					}, n.listenerCount = function( t, e ) {
						return "function" == typeof t.listenerCount ? t.listenerCount( e ) : p.call(
							t, e )
					}, n.prototype.listenerCount = p, n.prototype.eventNames = function() {
						return this._eventsCount > 0 ? e( this._events ) : []
					}
			},
			7778: t => {
				! function() {
					function e( t, e ) {
						document.addEventListener ? t.addEventListener( "scroll", e, !1 ) : t.attachEvent(
							"scroll", e )
					}

					function i( t ) {
						this.a = document.createElement( "div" ), this.a.setAttribute(
								"aria-hidden", "true" ), this.a.appendChild( document.createTextNode(
								t ) ), this.b = document.createElement( "span" ), this.c = document.createElement(
								"span" ), this.h = document.createElement( "span" ), this.f =
							document.createElement( "span" ), this.g = -1, this.b.style.cssText =
							"max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
							this.c.style.cssText =
							"max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
							this.f.style.cssText =
							"max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
							this.h.style.cssText =
							"display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",
							this.b.appendChild( this.h ), this.c.appendChild( this.f ), this.a.appendChild(
								this.b ), this.a.appendChild( this.c )
					}

					function r( t, e ) {
						t.a.style.cssText =
							"max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
							e + ";"
					}

					function s( t ) {
						var e = t.a.offsetWidth,
							i = e + 100;
						return t.f.style.width = i + "px", t.c.scrollLeft = i, t.b.scrollLeft =
							t.b.scrollWidth + 100, t.g !== e && ( t.g = e, !0 )
					}

					function n( t, i ) {
						function r() {
							var t = n;
							s( t ) && t.a.parentNode && i( t.g )
						}
						var n = t;
						e( t.b, r ), e( t.c, r ), s( t )
					}

					function o( t, e ) {
						var i = e || {};
						this.family = t, this.style = i.style || "normal", this.weight = i.weight ||
							"normal", this.stretch = i.stretch || "normal"
					}
					var a = null,
						h = null,
						l = null,
						u = null;

					function c() {
						return null === u && ( u = !!document.fonts ), u
					}

					function d() {
						if ( null === l ) {
							var t = document.createElement( "div" );
							try {
								t.style.font = "condensed 100px sans-serif"
							} catch ( t ) {}
							l = "" !== t.style.font
						}
						return l
					}

					function p( t, e ) {
						return [ t.style, t.weight, d() ? t.stretch : "", "100px", e ].join(
							" " )
					}
					o.prototype.load = function( t, e ) {
						var s = this,
							o = t || "BESbswy",
							l = 0,
							u = e || 3e3,
							d = ( new Date ).getTime();
						return new Promise( ( function( t, e ) {
							if ( c() && ! function() {
									if ( null === h )
										if ( c() && /Apple/.test( window.navigator.vendor ) ) {
											var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
												window.navigator.userAgent );
											h = !!t && 603 > parseInt( t[ 1 ], 10 )
										} else h = !1;
									return h
								}() ) {
								var f = new Promise( ( function( t, e ) {
										! function i() {
											( new Date ).getTime() - d >= u ? e( Error( u +
												"ms timeout exceeded" ) ) : document.fonts.load( p( s, '"' +
												s.family + '"' ), o ).then( ( function( e ) {
												1 <= e.length ? t() : setTimeout( i, 25 )
											} ), e )
										}()
									} ) ),
									m = new Promise( ( function( t, e ) {
										l = setTimeout( ( function() {
											e( Error( u + "ms timeout exceeded" ) )
										} ), u )
									} ) );
								Promise.race( [ m, f ] ).then( ( function() {
									clearTimeout( l ), t( s )
								} ), e )
							} else ! function( t ) {
								document.body ? t() : document.addEventListener ? document.addEventListener(
									"DOMContentLoaded", ( function e() {
										document.removeEventListener( "DOMContentLoaded", e ), t()
									} ) ) : document.attachEvent( "onreadystatechange", ( function e() {
									"interactive" != document.readyState && "complete" !=
										document.readyState || ( document.detachEvent(
											"onreadystatechange", e ), t() )
								} ) )
							}( ( function() {
								function h() {
									var e;
									( e = -1 != g && -1 != v || -1 != g && -1 != _ || -1 != v &&
										-1 != _ ) && ( ( e = g != v && g != _ && v != _ ) || ( null ===
										a && ( e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
											window.navigator.userAgent ), a = !!e && ( 536 > parseInt(
												e[ 1 ], 10 ) || 536 === parseInt( e[ 1 ], 10 ) && 11 >=
											parseInt( e[ 2 ], 10 ) ) ), e = a && ( g == y && v == y &&
											_ == y || g == w && v == w && _ == w || g == x && v == x &&
											_ == x ) ), e = !e ), e && ( b.parentNode && b.parentNode.removeChild(
										b ), clearTimeout( l ), t( s ) )
								}
								var c = new i( o ),
									f = new i( o ),
									m = new i( o ),
									g = -1,
									v = -1,
									_ = -1,
									y = -1,
									w = -1,
									x = -1,
									b = document.createElement( "div" );
								b.dir = "ltr", r( c, p( s, "sans-serif" ) ), r( f, p( s,
										"serif" ) ), r( m, p( s, "monospace" ) ), b.appendChild( c.a ),
									b.appendChild( f.a ), b.appendChild( m.a ), document.body.appendChild(
										b ), y = c.a.offsetWidth, w = f.a.offsetWidth, x = m.a.offsetWidth,
									function t() {
										if ( ( new Date ).getTime() - d >= u ) b.parentNode && b.parentNode
											.removeChild( b ), e( Error( u + "ms timeout exceeded" ) );
										else {
											var i = document.hidden;
											!0 !== i && void 0 !== i || ( g = c.a.offsetWidth, v = f.a.offsetWidth,
												_ = m.a.offsetWidth, h() ), l = setTimeout( t, 50 )
										}
									}(), n( c, ( function( t ) {
										g = t, h()
									} ) ), r( c, p( s, '"' + s.family + '",sans-serif' ) ), n( f,
										( function( t ) {
											v = t, h()
										} ) ), r( f, p( s, '"' + s.family + '",serif' ) ), n( m, (
										function( t ) {
											_ = t, h()
										} ) ), r( m, p( s, '"' + s.family + '",monospace' ) )
							} ) )
						} ) )
					}, t.exports = o
				}()
			},
			9940: ( t, e, i ) => {
				var r = i( 3203 )( i( 4362 ), "DataView" );
				t.exports = r
			},
			1979: ( t, e, i ) => {
				var r = i( 9129 ),
					s = i( 7644 ),
					n = i( 3486 ),
					o = i( 4786 ),
					a = i( 6444 );

				function h( t ) {
					var e = -1,
						i = null == t ? 0 : t.length;
					for ( this.clear(); ++e < i; ) {
						var r = t[ e ];
						this.set( r[ 0 ], r[ 1 ] )
					}
				}
				h.prototype.clear = r, h.prototype.delete = s, h.prototype.get = n, h.prototype
					.has = o, h.prototype.set = a, t.exports = h
			},
			2768: ( t, e, i ) => {
				var r = i( 3708 ),
					s = i( 6993 ),
					n = i( 286 ),
					o = i( 1678 ),
					a = i( 9743 );

				function h( t ) {
					var e = -1,
						i = null == t ? 0 : t.length;
					for ( this.clear(); ++e < i; ) {
						var r = t[ e ];
						this.set( r[ 0 ], r[ 1 ] )
					}
				}
				h.prototype.clear = r, h.prototype.delete = s, h.prototype.get = n, h.prototype
					.has = o, h.prototype.set = a, t.exports = h
			},
			4804: ( t, e, i ) => {
				var r = i( 3203 )( i( 4362 ), "Map" );
				t.exports = r
			},
			8423: ( t, e, i ) => {
				var r = i( 6977 ),
					s = i( 7474 ),
					n = i( 727 ),
					o = i( 3653 ),
					a = i( 6140 );

				function h( t ) {
					var e = -1,
						i = null == t ? 0 : t.length;
					for ( this.clear(); ++e < i; ) {
						var r = t[ e ];
						this.set( r[ 0 ], r[ 1 ] )
					}
				}
				h.prototype.clear = r, h.prototype.delete = s, h.prototype.get = n, h.prototype
					.has = o, h.prototype.set = a, t.exports = h
			},
			7114: ( t, e, i ) => {
				var r = i( 3203 )( i( 4362 ), "Promise" );
				t.exports = r
			},
			689: ( t, e, i ) => {
				var r = i( 3203 )( i( 4362 ), "Set" );
				t.exports = r
			},
			9832: ( t, e, i ) => {
				var r = i( 8423 ),
					s = i( 9911 ),
					n = i( 7447 );

				function o( t ) {
					var e = -1,
						i = null == t ? 0 : t.length;
					for ( this.__data__ = new r; ++e < i; ) this.add( t[ e ] )
				}
				o.prototype.add = o.prototype.push = s, o.prototype.has = n, t.exports =
					o
			},
			959: ( t, e, i ) => {
				var r = i( 2768 ),
					s = i( 7553 ),
					n = i( 6038 ),
					o = i( 2397 ),
					a = i( 2421 ),
					h = i( 2936 );

				function l( t ) {
					var e = this.__data__ = new r( t );
					this.size = e.size
				}
				l.prototype.clear = s, l.prototype.delete = n, l.prototype.get = o, l.prototype
					.has = a, l.prototype.set = h, t.exports = l
			},
			2773: ( t, e, i ) => {
				var r = i( 4362 ).Symbol;
				t.exports = r
			},
			2496: ( t, e, i ) => {
				var r = i( 4362 ).Uint8Array;
				t.exports = r
			},
			5284: ( t, e, i ) => {
				var r = i( 3203 )( i( 4362 ), "WeakMap" );
				t.exports = r
			},
			4111: t => {
				t.exports = function( t, e ) {
					for ( var i = -1, r = null == t ? 0 : t.length; ++i < r && !1 !== e( t[
							i ], i, t ); );
					return t
				}
			},
			6523: t => {
				t.exports = function( t, e ) {
					for ( var i = -1, r = null == t ? 0 : t.length, s = 0, n = []; ++i < r; ) {
						var o = t[ i ];
						e( o, i, t ) && ( n[ s++ ] = o )
					}
					return n
				}
			},
			8083: ( t, e, i ) => {
				var r = i( 5094 ),
					s = i( 9246 ),
					n = i( 3670 ),
					o = i( 2343 ),
					a = i( 4782 ),
					h = i( 1589 ),
					l = Object.prototype.hasOwnProperty;
				t.exports = function( t, e ) {
					var i = n( t ),
						u = !i && s( t ),
						c = !i && !u && o( t ),
						d = !i && !u && !c && h( t ),
						p = i || u || c || d,
						f = p ? r( t.length, String ) : [],
						m = f.length;
					for ( var g in t ) !e && !l.call( t, g ) || p && ( "length" == g || c &&
						( "offset" == g || "parent" == g ) || d && ( "buffer" == g ||
							"byteLength" == g || "byteOffset" == g ) || a( g, m ) ) || f.push( g );
					return f
				}
			},
			9258: t => {
				t.exports = function( t, e ) {
					for ( var i = -1, r = null == t ? 0 : t.length, s = Array( r ); ++i < r; )
						s[ i ] = e( t[ i ], i, t );
					return s
				}
			},
			8421: t => {
				t.exports = function( t, e ) {
					for ( var i = -1, r = e.length, s = t.length; ++i < r; ) t[ s + i ] = e[
						i ];
					return t
				}
			},
			4481: t => {
				t.exports = function( t, e ) {
					for ( var i = -1, r = null == t ? 0 : t.length; ++i < r; )
						if ( e( t[ i ], i, t ) ) return !0;
					return !1
				}
			},
			6213: ( t, e, i ) => {
				var r = i( 7950 );
				t.exports = function( t, e ) {
					for ( var i = t.length; i--; )
						if ( r( t[ i ][ 0 ], e ) ) return i;
					return -1
				}
			},
			5806: ( t, e, i ) => {
				var r = i( 5645 ),
					s = i( 3978 )( r );
				t.exports = s
			},
			7079: ( t, e, i ) => {
				var r = i( 7924 )();
				t.exports = r
			},
			5645: ( t, e, i ) => {
				var r = i( 7079 ),
					s = i( 3225 );
				t.exports = function( t, e ) {
					return t && r( t, e, s )
				}
			},
			5974: ( t, e, i ) => {
				var r = i( 6883 ),
					s = i( 7102 );
				t.exports = function( t, e ) {
					for ( var i = 0, n = ( e = r( e, t ) ).length; null != t && i < n; ) t =
						t[ s( e[ i++ ] ) ];
					return i && i == n ? t : void 0
				}
			},
			891: ( t, e, i ) => {
				var r = i( 8421 ),
					s = i( 3670 );
				t.exports = function( t, e, i ) {
					var n = e( t );
					return s( t ) ? n : r( n, i( t ) )
				}
			},
			1185: ( t, e, i ) => {
				var r = i( 2773 ),
					s = i( 3888 ),
					n = i( 2299 ),
					o = r ? r.toStringTag : void 0;
				t.exports = function( t ) {
					return null == t ? void 0 === t ? "[object Undefined]" :
						"[object Null]" : o && o in Object( t ) ? s( t ) : n( t )
				}
			},
			5529: t => {
				t.exports = function( t, e ) {
					return null != t && e in Object( t )
				}
			},
			1075: ( t, e, i ) => {
				var r = i( 1185 ),
					s = i( 4939 );
				t.exports = function( t ) {
					return s( t ) && "[object Arguments]" == r( t )
				}
			},
			9856: ( t, e, i ) => {
				var r = i( 1829 ),
					s = i( 4939 );
				t.exports = function t( e, i, n, o, a ) {
					return e === i || ( null == e || null == i || !s( e ) && !s( i ) ? e !=
						e && i != i : r( e, i, n, o, t, a ) )
				}
			},
			1829: ( t, e, i ) => {
				var r = i( 959 ),
					s = i( 3426 ),
					n = i( 1402 ),
					o = i( 4572 ),
					a = i( 2417 ),
					h = i( 3670 ),
					l = i( 2343 ),
					u = i( 1589 ),
					c = "[object Arguments]",
					d = "[object Array]",
					p = "[object Object]",
					f = Object.prototype.hasOwnProperty;
				t.exports = function( t, e, i, m, g, v ) {
					var _ = h( t ),
						y = h( e ),
						w = _ ? d : a( t ),
						x = y ? d : a( e ),
						b = ( w = w == c ? p : w ) == p,
						M = ( x = x == c ? p : x ) == p,
						T = w == x;
					if ( T && l( t ) ) {
						if ( !l( e ) ) return !1;
						_ = !0, b = !1
					}
					if ( T && !b ) return v || ( v = new r ), _ || u( t ) ? s( t, e, i, m,
						g, v ) : n( t, e, w, i, m, g, v );
					if ( !( 1 & i ) ) {
						var A = b && f.call( t, "__wrapped__" ),
							E = M && f.call( e, "__wrapped__" );
						if ( A || E ) {
							var S = A ? t.value() : t,
								P = E ? e.value() : e;
							return v || ( v = new r ), g( S, P, i, m, v )
						}
					}
					return !!T && ( v || ( v = new r ), o( t, e, i, m, g, v ) )
				}
			},
			4656: ( t, e, i ) => {
				var r = i( 959 ),
					s = i( 9856 );
				t.exports = function( t, e, i, n ) {
					var o = i.length,
						a = o,
						h = !n;
					if ( null == t ) return !a;
					for ( t = Object( t ); o--; ) {
						var l = i[ o ];
						if ( h && l[ 2 ] ? l[ 1 ] !== t[ l[ 0 ] ] : !( l[ 0 ] in t ) ) return !
							1
					}
					for ( ; ++o < a; ) {
						var u = ( l = i[ o ] )[ 0 ],
							c = t[ u ],
							d = l[ 1 ];
						if ( h && l[ 2 ] ) {
							if ( void 0 === c && !( u in t ) ) return !1
						} else {
							var p = new r;
							if ( n ) var f = n( c, d, u, t, e, p );
							if ( !( void 0 === f ? s( d, c, 3, n, p ) : f ) ) return !1
						}
					}
					return !0
				}
			},
			4106: ( t, e, i ) => {
				var r = i( 3626 ),
					s = i( 9249 ),
					n = i( 71 ),
					o = i( 1214 ),
					a = /^\[object .+?Constructor\]$/,
					h = Function.prototype,
					l = Object.prototype,
					u = h.toString,
					c = l.hasOwnProperty,
					d = RegExp( "^" + u.call( c ).replace( /[\\^$.*+?()[\]{}|]/g, "\\$&" ).replace(
							/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?" ) +
						"$" );
				t.exports = function( t ) {
					return !( !n( t ) || s( t ) ) && ( r( t ) ? d : a ).test( o( t ) )
				}
			},
			3638: ( t, e, i ) => {
				var r = i( 1185 ),
					s = i( 7100 ),
					n = i( 4939 ),
					o = {};
				o[ "[object Float32Array]" ] = o[ "[object Float64Array]" ] = o[
						"[object Int8Array]" ] = o[ "[object Int16Array]" ] = o[
						"[object Int32Array]" ] = o[ "[object Uint8Array]" ] = o[
						"[object Uint8ClampedArray]" ] = o[ "[object Uint16Array]" ] = o[
						"[object Uint32Array]" ] = !0, o[ "[object Arguments]" ] = o[
						"[object Array]" ] = o[ "[object ArrayBuffer]" ] = o[
						"[object Boolean]" ] = o[ "[object DataView]" ] = o[ "[object Date]" ] =
					o[ "[object Error]" ] = o[ "[object Function]" ] = o[ "[object Map]" ] =
					o[ "[object Number]" ] = o[ "[object Object]" ] = o[ "[object RegExp]" ] =
					o[ "[object Set]" ] = o[ "[object String]" ] = o[ "[object WeakMap]" ] = !
					1, t.exports = function( t ) {
						return n( t ) && s( t.length ) && !!o[ r( t ) ]
					}
			},
			9047: ( t, e, i ) => {
				var r = i( 8334 ),
					s = i( 5941 ),
					n = i( 1559 ),
					o = i( 3670 ),
					a = i( 8886 );
				t.exports = function( t ) {
					return "function" == typeof t ? t : null == t ? n : "object" == typeof t ?
						o( t ) ? s( t[ 0 ], t[ 1 ] ) : r( t ) : a( t )
				}
			},
			7521: ( t, e, i ) => {
				var r = i( 2803 ),
					s = i( 3865 ),
					n = Object.prototype.hasOwnProperty;
				t.exports = function( t ) {
					if ( !r( t ) ) return s( t );
					var e = [];
					for ( var i in Object( t ) ) n.call( t, i ) && "constructor" != i && e.push(
						i );
					return e
				}
			},
			5901: ( t, e, i ) => {
				var r = i( 5806 ),
					s = i( 6175 );
				t.exports = function( t, e ) {
					var i = -1,
						n = s( t ) ? Array( t.length ) : [];
					return r( t, ( function( t, r, s ) {
						n[ ++i ] = e( t, r, s )
					} ) ), n
				}
			},
			8334: ( t, e, i ) => {
				var r = i( 4656 ),
					s = i( 2811 ),
					n = i( 4248 );
				t.exports = function( t ) {
					var e = s( t );
					return 1 == e.length && e[ 0 ][ 2 ] ? n( e[ 0 ][ 0 ], e[ 0 ][ 1 ] ) :
						function( i ) {
							return i === t || r( i, t, e )
						}
				}
			},
			5941: ( t, e, i ) => {
				var r = i( 9856 ),
					s = i( 643 ),
					n = i( 9059 ),
					o = i( 837 ),
					a = i( 3631 ),
					h = i( 4248 ),
					l = i( 7102 );
				t.exports = function( t, e ) {
					return o( t ) && a( e ) ? h( l( t ), e ) : function( i ) {
						var o = s( i, t );
						return void 0 === o && o === e ? n( i, t ) : r( e, o, 3 )
					}
				}
			},
			3184: t => {
				t.exports = function( t ) {
					return function( e ) {
						return null == e ? void 0 : e[ t ]
					}
				}
			},
			886: ( t, e, i ) => {
				var r = i( 5974 );
				t.exports = function( t ) {
					return function( e ) {
						return r( e, t )
					}
				}
			},
			5094: t => {
				t.exports = function( t, e ) {
					for ( var i = -1, r = Array( t ); ++i < t; ) r[ i ] = e( i );
					return r
				}
			},
			8257: ( t, e, i ) => {
				var r = i( 2773 ),
					s = i( 9258 ),
					n = i( 3670 ),
					o = i( 4655 ),
					a = r ? r.prototype : void 0,
					h = a ? a.toString : void 0;
				t.exports = function t( e ) {
					if ( "string" == typeof e ) return e;
					if ( n( e ) ) return s( e, t ) + "";
					if ( o( e ) ) return h ? h.call( e ) : "";
					var i = e + "";
					return "0" == i && 1 / e == -1 / 0 ? "-0" : i
				}
			},
			9081: t => {
				t.exports = function( t ) {
					return function( e ) {
						return t( e )
					}
				}
			},
			3159: t => {
				t.exports = function( t, e ) {
					return t.has( e )
				}
			},
			3183: ( t, e, i ) => {
				var r = i( 1559 );
				t.exports = function( t ) {
					return "function" == typeof t ? t : r
				}
			},
			6883: ( t, e, i ) => {
				var r = i( 3670 ),
					s = i( 837 ),
					n = i( 376 ),
					o = i( 2049 );
				t.exports = function( t, e ) {
					return r( t ) ? t : s( t, e ) ? [ t ] : n( o( t ) )
				}
			},
			1741: ( t, e, i ) => {
				var r = i( 4362 )[ "__core-js_shared__" ];
				t.exports = r
			},
			3978: ( t, e, i ) => {
				var r = i( 6175 );
				t.exports = function( t, e ) {
					return function( i, s ) {
						if ( null == i ) return i;
						if ( !r( i ) ) return t( i, s );
						for ( var n = i.length, o = e ? n : -1, a = Object( i );
							( e ? o-- : ++o < n ) && !1 !== s( a[ o ], o, a ); );
						return i
					}
				}
			},
			7924: t => {
				t.exports = function( t ) {
					return function( e, i, r ) {
						for ( var s = -1, n = Object( e ), o = r( e ), a = o.length; a--; ) {
							var h = o[ t ? a : ++s ];
							if ( !1 === i( n[ h ], h, n ) ) break
						}
						return e
					}
				}
			},
			3426: ( t, e, i ) => {
				var r = i( 9832 ),
					s = i( 4481 ),
					n = i( 3159 );
				t.exports = function( t, e, i, o, a, h ) {
					var l = 1 & i,
						u = t.length,
						c = e.length;
					if ( u != c && !( l && c > u ) ) return !1;
					var d = h.get( t ),
						p = h.get( e );
					if ( d && p ) return d == e && p == t;
					var f = -1,
						m = !0,
						g = 2 & i ? new r : void 0;
					for ( h.set( t, e ), h.set( e, t ); ++f < u; ) {
						var v = t[ f ],
							_ = e[ f ];
						if ( o ) var y = l ? o( _, v, f, e, t, h ) : o( v, _, f, t, e, h );
						if ( void 0 !== y ) {
							if ( y ) continue;
							m = !1;
							break
						}
						if ( g ) {
							if ( !s( e, ( function( t, e ) {
									if ( !n( g, e ) && ( v === t || a( v, t, i, o, h ) ) ) return g.push(
										e )
								} ) ) ) {
								m = !1;
								break
							}
						} else if ( v !== _ && !a( v, _, i, o, h ) ) {
							m = !1;
							break
						}
					}
					return h.delete( t ), h.delete( e ), m
				}
			},
			1402: ( t, e, i ) => {
				var r = i( 2773 ),
					s = i( 2496 ),
					n = i( 7950 ),
					o = i( 3426 ),
					a = i( 8961 ),
					h = i( 6983 ),
					l = r ? r.prototype : void 0,
					u = l ? l.valueOf : void 0;
				t.exports = function( t, e, i, r, l, c, d ) {
					switch ( i ) {
						case "[object DataView]":
							if ( t.byteLength != e.byteLength || t.byteOffset != e.byteOffset )
								return !1;
							t = t.buffer, e = e.buffer;
						case "[object ArrayBuffer]":
							return !( t.byteLength != e.byteLength || !c( new s( t ), new s( e ) ) );
						case "[object Boolean]":
						case "[object Date]":
						case "[object Number]":
							return n( +t, +e );
						case "[object Error]":
							return t.name == e.name && t.message == e.message;
						case "[object RegExp]":
						case "[object String]":
							return t == e + "";
						case "[object Map]":
							var p = a;
						case "[object Set]":
							var f = 1 & r;
							if ( p || ( p = h ), t.size != e.size && !f ) return !1;
							var m = d.get( t );
							if ( m ) return m == e;
							r |= 2, d.set( t, e );
							var g = o( p( t ), p( e ), r, l, c, d );
							return d.delete( t ), g;
						case "[object Symbol]":
							if ( u ) return u.call( t ) == u.call( e )
					}
					return !1
				}
			},
			4572: ( t, e, i ) => {
				var r = i( 5788 ),
					s = Object.prototype.hasOwnProperty;
				t.exports = function( t, e, i, n, o, a ) {
					var h = 1 & i,
						l = r( t ),
						u = l.length;
					if ( u != r( e ).length && !h ) return !1;
					for ( var c = u; c--; ) {
						var d = l[ c ];
						if ( !( h ? d in e : s.call( e, d ) ) ) return !1
					}
					var p = a.get( t ),
						f = a.get( e );
					if ( p && f ) return p == e && f == t;
					var m = !0;
					a.set( t, e ), a.set( e, t );
					for ( var g = h; ++c < u; ) {
						var v = t[ d = l[ c ] ],
							_ = e[ d ];
						if ( n ) var y = h ? n( _, v, d, e, t, a ) : n( v, _, d, t, e, a );
						if ( !( void 0 === y ? v === _ || o( v, _, i, n, a ) : y ) ) {
							m = !1;
							break
						}
						g || ( g = "constructor" == d )
					}
					if ( m && !g ) {
						var w = t.constructor,
							x = e.constructor;
						w == x || !( "constructor" in t ) || !( "constructor" in e ) ||
							"function" == typeof w && w instanceof w && "function" == typeof x &&
							x instanceof x || ( m = !1 )
					}
					return a.delete( t ), a.delete( e ), m
				}
			},
			8556: ( t, e, i ) => {
				var r = "object" == typeof i.g && i.g && i.g.Object === Object && i.g;
				t.exports = r
			},
			5788: ( t, e, i ) => {
				var r = i( 891 ),
					s = i( 6918 ),
					n = i( 3225 );
				t.exports = function( t ) {
					return r( t, n, s )
				}
			},
			404: ( t, e, i ) => {
				var r = i( 9008 );
				t.exports = function( t, e ) {
					var i = t.__data__;
					return r( e ) ? i[ "string" == typeof e ? "string" : "hash" ] : i.map
				}
			},
			2811: ( t, e, i ) => {
				var r = i( 3631 ),
					s = i( 3225 );
				t.exports = function( t ) {
					for ( var e = s( t ), i = e.length; i--; ) {
						var n = e[ i ],
							o = t[ n ];
						e[ i ] = [ n, o, r( o ) ]
					}
					return e
				}
			},
			3203: ( t, e, i ) => {
				var r = i( 4106 ),
					s = i( 7338 );
				t.exports = function( t, e ) {
					var i = s( t, e );
					return r( i ) ? i : void 0
				}
			},
			3888: ( t, e, i ) => {
				var r = i( 2773 ),
					s = Object.prototype,
					n = s.hasOwnProperty,
					o = s.toString,
					a = r ? r.toStringTag : void 0;
				t.exports = function( t ) {
					var e = n.call( t, a ),
						i = t[ a ];
					try {
						t[ a ] = void 0;
						var r = !0
					} catch ( t ) {}
					var s = o.call( t );
					return r && ( e ? t[ a ] = i : delete t[ a ] ), s
				}
			},
			6918: ( t, e, i ) => {
				var r = i( 6523 ),
					s = i( 4043 ),
					n = Object.prototype.propertyIsEnumerable,
					o = Object.getOwnPropertySymbols,
					a = o ? function( t ) {
						return null == t ? [] : ( t = Object( t ), r( o( t ), ( function( e ) {
							return n.call( t, e )
						} ) ) )
					} : s;
				t.exports = a
			},
			2417: ( t, e, i ) => {
				var r = i( 9940 ),
					s = i( 4804 ),
					n = i( 7114 ),
					o = i( 689 ),
					a = i( 5284 ),
					h = i( 1185 ),
					l = i( 1214 ),
					u = "[object Map]",
					c = "[object Promise]",
					d = "[object Set]",
					p = "[object WeakMap]",
					f = "[object DataView]",
					m = l( r ),
					g = l( s ),
					v = l( n ),
					_ = l( o ),
					y = l( a ),
					w = h;
				( r && w( new r( new ArrayBuffer( 1 ) ) ) != f || s && w( new s ) != u ||
					n && w( n.resolve() ) != c || o && w( new o ) != d || a && w( new a ) !=
					p ) && ( w = function( t ) {
					var e = h( t ),
						i = "[object Object]" == e ? t.constructor : void 0,
						r = i ? l( i ) : "";
					if ( r ) switch ( r ) {
						case m:
							return f;
						case g:
							return u;
						case v:
							return c;
						case _:
							return d;
						case y:
							return p
					}
					return e
				} ), t.exports = w
			},
			7338: t => {
				t.exports = function( t, e ) {
					return null == t ? void 0 : t[ e ]
				}
			},
			4727: ( t, e, i ) => {
				var r = i( 6883 ),
					s = i( 9246 ),
					n = i( 3670 ),
					o = i( 4782 ),
					a = i( 7100 ),
					h = i( 7102 );
				t.exports = function( t, e, i ) {
					for ( var l = -1, u = ( e = r( e, t ) ).length, c = !1; ++l < u; ) {
						var d = h( e[ l ] );
						if ( !( c = null != t && i( t, d ) ) ) break;
						t = t[ d ]
					}
					return c || ++l != u ? c : !!( u = null == t ? 0 : t.length ) && a( u ) &&
						o( d, u ) && ( n( t ) || s( t ) )
				}
			},
			9129: ( t, e, i ) => {
				var r = i( 6326 );
				t.exports = function() {
					this.__data__ = r ? r( null ) : {}, this.size = 0
				}
			},
			7644: t => {
				t.exports = function( t ) {
					var e = this.has( t ) && delete this.__data__[ t ];
					return this.size -= e ? 1 : 0, e
				}
			},
			3486: ( t, e, i ) => {
				var r = i( 6326 ),
					s = Object.prototype.hasOwnProperty;
				t.exports = function( t ) {
					var e = this.__data__;
					if ( r ) {
						var i = e[ t ];
						return "__lodash_hash_undefined__" === i ? void 0 : i
					}
					return s.call( e, t ) ? e[ t ] : void 0
				}
			},
			4786: ( t, e, i ) => {
				var r = i( 6326 ),
					s = Object.prototype.hasOwnProperty;
				t.exports = function( t ) {
					var e = this.__data__;
					return r ? void 0 !== e[ t ] : s.call( e, t )
				}
			},
			6444: ( t, e, i ) => {
				var r = i( 6326 );
				t.exports = function( t, e ) {
					var i = this.__data__;
					return this.size += this.has( t ) ? 0 : 1, i[ t ] = r && void 0 === e ?
						"__lodash_hash_undefined__" : e, this
				}
			},
			4782: t => {
				var e = /^(?:0|[1-9]\d*)$/;
				t.exports = function( t, i ) {
					var r = typeof t;
					return !!( i = null == i ? 9007199254740991 : i ) && ( "number" == r ||
						"symbol" != r && e.test( t ) ) && t > -1 && t % 1 == 0 && t < i
				}
			},
			837: ( t, e, i ) => {
				var r = i( 3670 ),
					s = i( 4655 ),
					n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
					o = /^\w*$/;
				t.exports = function( t, e ) {
					if ( r( t ) ) return !1;
					var i = typeof t;
					return !( "number" != i && "symbol" != i && "boolean" != i && null != t &&
						!s( t ) ) || o.test( t ) || !n.test( t ) || null != e && t in Object(
						e )
				}
			},
			9008: t => {
				t.exports = function( t ) {
					var e = typeof t;
					return "string" == e || "number" == e || "symbol" == e || "boolean" ==
						e ? "__proto__" !== t : null === t
				}
			},
			9249: ( t, e, i ) => {
				var r, s = i( 1741 ),
					n = ( r = /[^.]+$/.exec( s && s.keys && s.keys.IE_PROTO || "" ) ) ?
					"Symbol(src)_1." + r : "";
				t.exports = function( t ) {
					return !!n && n in t
				}
			},
			2803: t => {
				var e = Object.prototype;
				t.exports = function( t ) {
					var i = t && t.constructor;
					return t === ( "function" == typeof i && i.prototype || e )
				}
			},
			3631: ( t, e, i ) => {
				var r = i( 71 );
				t.exports = function( t ) {
					return t == t && !r( t )
				}
			},
			3708: t => {
				t.exports = function() {
					this.__data__ = [], this.size = 0
				}
			},
			6993: ( t, e, i ) => {
				var r = i( 6213 ),
					s = Array.prototype.splice;
				t.exports = function( t ) {
					var e = this.__data__,
						i = r( e, t );
					return !( i < 0 || ( i == e.length - 1 ? e.pop() : s.call( e, i, 1 ), --
						this.size, 0 ) )
				}
			},
			286: ( t, e, i ) => {
				var r = i( 6213 );
				t.exports = function( t ) {
					var e = this.__data__,
						i = r( e, t );
					return i < 0 ? void 0 : e[ i ][ 1 ]
				}
			},
			1678: ( t, e, i ) => {
				var r = i( 6213 );
				t.exports = function( t ) {
					return r( this.__data__, t ) > -1
				}
			},
			9743: ( t, e, i ) => {
				var r = i( 6213 );
				t.exports = function( t, e ) {
					var i = this.__data__,
						s = r( i, t );
					return s < 0 ? ( ++this.size, i.push( [ t, e ] ) ) : i[ s ][ 1 ] = e,
						this
				}
			},
			6977: ( t, e, i ) => {
				var r = i( 1979 ),
					s = i( 2768 ),
					n = i( 4804 );
				t.exports = function() {
					this.size = 0, this.__data__ = {
						hash: new r,
						map: new( n || s ),
						string: new r
					}
				}
			},
			7474: ( t, e, i ) => {
				var r = i( 404 );
				t.exports = function( t ) {
					var e = r( this, t ).delete( t );
					return this.size -= e ? 1 : 0, e
				}
			},
			727: ( t, e, i ) => {
				var r = i( 404 );
				t.exports = function( t ) {
					return r( this, t ).get( t )
				}
			},
			3653: ( t, e, i ) => {
				var r = i( 404 );
				t.exports = function( t ) {
					return r( this, t ).has( t )
				}
			},
			6140: ( t, e, i ) => {
				var r = i( 404 );
				t.exports = function( t, e ) {
					var i = r( this, t ),
						s = i.size;
					return i.set( t, e ), this.size += i.size == s ? 0 : 1, this
				}
			},
			8961: t => {
				t.exports = function( t ) {
					var e = -1,
						i = Array( t.size );
					return t.forEach( ( function( t, r ) {
						i[ ++e ] = [ r, t ]
					} ) ), i
				}
			},
			4248: t => {
				t.exports = function( t, e ) {
					return function( i ) {
						return null != i && i[ t ] === e && ( void 0 !== e || t in Object( i ) )
					}
				}
			},
			5933: ( t, e, i ) => {
				var r = i( 104 );
				t.exports = function( t ) {
					var e = r( t, ( function( t ) {
							return 500 === i.size && i.clear(), t
						} ) ),
						i = e.cache;
					return e
				}
			},
			6326: ( t, e, i ) => {
				var r = i( 3203 )( Object, "create" );
				t.exports = r
			},
			3865: ( t, e, i ) => {
				var r = i( 5290 )( Object.keys, Object );
				t.exports = r
			},
			1985: ( t, e, i ) => {
				t = i.nmd( t );
				var r = i( 8556 ),
					s = e && !e.nodeType && e,
					n = s && t && !t.nodeType && t,
					o = n && n.exports === s && r.process,
					a = function() {
						try {
							return n && n.require && n.require( "util" ).types || o && o.binding &&
								o.binding( "util" )
						} catch ( t ) {}
					}();
				t.exports = a
			},
			2299: t => {
				var e = Object.prototype.toString;
				t.exports = function( t ) {
					return e.call( t )
				}
			},
			5290: t => {
				t.exports = function( t, e ) {
					return function( i ) {
						return t( e( i ) )
					}
				}
			},
			4362: ( t, e, i ) => {
				var r = i( 8556 ),
					s = "object" == typeof self && self && self.Object === Object && self,
					n = r || s || Function( "return this" )();
				t.exports = n
			},
			9911: t => {
				t.exports = function( t ) {
					return this.__data__.set( t, "__lodash_hash_undefined__" ), this
				}
			},
			7447: t => {
				t.exports = function( t ) {
					return this.__data__.has( t )
				}
			},
			6983: t => {
				t.exports = function( t ) {
					var e = -1,
						i = Array( t.size );
					return t.forEach( ( function( t ) {
						i[ ++e ] = t
					} ) ), i
				}
			},
			7553: ( t, e, i ) => {
				var r = i( 2768 );
				t.exports = function() {
					this.__data__ = new r, this.size = 0
				}
			},
			6038: t => {
				t.exports = function( t ) {
					var e = this.__data__,
						i = e.delete( t );
					return this.size = e.size, i
				}
			},
			2397: t => {
				t.exports = function( t ) {
					return this.__data__.get( t )
				}
			},
			2421: t => {
				t.exports = function( t ) {
					return this.__data__.has( t )
				}
			},
			2936: ( t, e, i ) => {
				var r = i( 2768 ),
					s = i( 4804 ),
					n = i( 8423 );
				t.exports = function( t, e ) {
					var i = this.__data__;
					if ( i instanceof r ) {
						var o = i.__data__;
						if ( !s || o.length < 199 ) return o.push( [ t, e ] ), this.size = ++i
							.size, this;
						i = this.__data__ = new n( o )
					}
					return i.set( t, e ), this.size = i.size, this
				}
			},
			376: ( t, e, i ) => {
				var r = i( 5933 ),
					s =
					/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
					n = /\\(\\)?/g,
					o = r( ( function( t ) {
						var e = [];
						return 46 === t.charCodeAt( 0 ) && e.push( "" ), t.replace( s, (
							function( t, i, r, s ) {
								e.push( r ? s.replace( n, "$1" ) : i || t )
							} ) ), e
					} ) );
				t.exports = o
			},
			7102: ( t, e, i ) => {
				var r = i( 4655 );
				t.exports = function( t ) {
					if ( "string" == typeof t || r( t ) ) return t;
					var e = t + "";
					return "0" == e && 1 / t == -1 / 0 ? "-0" : e
				}
			},
			1214: t => {
				var e = Function.prototype.toString;
				t.exports = function( t ) {
					if ( null != t ) {
						try {
							return e.call( t )
						} catch ( t ) {}
						try {
							return t + ""
						} catch ( t ) {}
					}
					return ""
				}
			},
			6270: ( t, e, i ) => {
				t.exports = i( 9982 )
			},
			7950: t => {
				t.exports = function( t, e ) {
					return t === e || t != t && e != e
				}
			},
			9982: ( t, e, i ) => {
				var r = i( 4111 ),
					s = i( 5806 ),
					n = i( 3183 ),
					o = i( 3670 );
				t.exports = function( t, e ) {
					return ( o( t ) ? r : s )( t, n( e ) )
				}
			},
			643: ( t, e, i ) => {
				var r = i( 5974 );
				t.exports = function( t, e, i ) {
					var s = null == t ? void 0 : r( t, e );
					return void 0 === s ? i : s
				}
			},
			9059: ( t, e, i ) => {
				var r = i( 5529 ),
					s = i( 4727 );
				t.exports = function( t, e ) {
					return null != t && s( t, e, r )
				}
			},
			1559: t => {
				t.exports = function( t ) {
					return t
				}
			},
			9246: ( t, e, i ) => {
				var r = i( 1075 ),
					s = i( 4939 ),
					n = Object.prototype,
					o = n.hasOwnProperty,
					a = n.propertyIsEnumerable,
					h = r( function() {
						return arguments
					}() ) ? r : function( t ) {
						return s( t ) && o.call( t, "callee" ) && !a.call( t, "callee" )
					};
				t.exports = h
			},
			3670: t => {
				var e = Array.isArray;
				t.exports = e
			},
			6175: ( t, e, i ) => {
				var r = i( 3626 ),
					s = i( 7100 );
				t.exports = function( t ) {
					return null != t && s( t.length ) && !r( t )
				}
			},
			2343: ( t, e, i ) => {
				t = i.nmd( t );
				var r = i( 4362 ),
					s = i( 3444 ),
					n = e && !e.nodeType && e,
					o = n && t && !t.nodeType && t,
					a = o && o.exports === n ? r.Buffer : void 0,
					h = ( a ? a.isBuffer : void 0 ) || s;
				t.exports = h
			},
			3626: ( t, e, i ) => {
				var r = i( 1185 ),
					s = i( 71 );
				t.exports = function( t ) {
					if ( !s( t ) ) return !1;
					var e = r( t );
					return "[object Function]" == e || "[object GeneratorFunction]" == e ||
						"[object AsyncFunction]" == e || "[object Proxy]" == e
				}
			},
			7100: t => {
				t.exports = function( t ) {
					return "number" == typeof t && t > -1 && t % 1 == 0 && t <=
						9007199254740991
				}
			},
			71: t => {
				t.exports = function( t ) {
					var e = typeof t;
					return null != t && ( "object" == e || "function" == e )
				}
			},
			4939: t => {
				t.exports = function( t ) {
					return null != t && "object" == typeof t
				}
			},
			4655: ( t, e, i ) => {
				var r = i( 1185 ),
					s = i( 4939 );
				t.exports = function( t ) {
					return "symbol" == typeof t || s( t ) && "[object Symbol]" == r( t )
				}
			},
			1589: ( t, e, i ) => {
				var r = i( 3638 ),
					s = i( 9081 ),
					n = i( 1985 ),
					o = n && n.isTypedArray,
					a = o ? s( o ) : r;
				t.exports = a
			},
			3225: ( t, e, i ) => {
				var r = i( 8083 ),
					s = i( 7521 ),
					n = i( 6175 );
				t.exports = function( t ) {
					return n( t ) ? r( t ) : s( t )
				}
			},
			7976: ( t, e, i ) => {
				var r = i( 9258 ),
					s = i( 9047 ),
					n = i( 5901 ),
					o = i( 3670 );
				t.exports = function( t, e ) {
					return ( o( t ) ? r : n )( t, s( e, 3 ) )
				}
			},
			104: ( t, e, i ) => {
				var r = i( 8423 );

				function s( t, e ) {
					if ( "function" != typeof t || null != e && "function" != typeof e )
						throw new TypeError( "Expected a function" );
					var i = function() {
						var r = arguments,
							s = e ? e.apply( this, r ) : r[ 0 ],
							n = i.cache;
						if ( n.has( s ) ) return n.get( s );
						var o = t.apply( this, r );
						return i.cache = n.set( s, o ) || n, o
					};
					return i.cache = new( s.Cache || r ), i
				}
				s.Cache = r, t.exports = s
			},
			8886: ( t, e, i ) => {
				var r = i( 3184 ),
					s = i( 886 ),
					n = i( 837 ),
					o = i( 7102 );
				t.exports = function( t ) {
					return n( t ) ? r( o( t ) ) : s( t )
				}
			},
			4043: t => {
				t.exports = function() {
					return []
				}
			},
			3444: t => {
				t.exports = function() {
					return !1
				}
			},
			2049: ( t, e, i ) => {
				var r = i( 8257 );
				t.exports = function( t ) {
					return null == t ? "" : r( t )
				}
			},
			6349: () => {
				window.NodeList && !NodeList.prototype.forEach && ( NodeList.prototype.forEach =
					function( t, e ) {
						e = e || window;
						for ( var i = 0; i < this.length; i++ ) t.call( e, this[ i ], i, this )
					} )
			},
			7320: ( t, e, i ) => {
				t.exports = i( 1045 )
			},
			7230: t => {
				"use strict";
				var e = !( "undefined" == typeof window || !window.document || !window.document
						.createElement ),
					i = {
						canUseDOM: e,
						canUseWorkers: "undefined" != typeof Worker,
						canUseEventListeners: e && !( !window.addEventListener && !window.attachEvent ),
						canUseViewport: e && !!window.screen,
						isInWorker: !e
					};
				t.exports = i
			},
			2907: t => {
				var e, i, r, s, n, o, a, h, l, u, c, d, p, f, m, g = !1;

				function v() {
					if ( !g ) {
						g = !0;
						var t = navigator.userAgent,
							v =
							/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/
							.exec( t ),
							_ = /(Mac OS X)|(Windows)|(Linux)/.exec( t );
						if ( d = /\b(iPhone|iP[ao]d)/.exec( t ), p = /\b(iP[ao]d)/.exec( t ), u =
							/Android/i.exec( t ), f = /FBAN\/\w+;/i.exec( t ), m = /Mobile/i.exec(
								t ), c = !!/Win64/.exec( t ), v ) {
							( e = v[ 1 ] ? parseFloat( v[ 1 ] ) : v[ 5 ] ? parseFloat( v[ 5 ] ) :
								NaN ) && document && document.documentMode && ( e = document.documentMode );
							var y = /(?:Trident\/(\d+.\d+))/.exec( t );
							o = y ? parseFloat( y[ 1 ] ) + 4 : e, i = v[ 2 ] ? parseFloat( v[ 2 ] ) :
								NaN, r = v[ 3 ] ? parseFloat( v[ 3 ] ) : NaN, ( s = v[ 4 ] ?
									parseFloat( v[ 4 ] ) : NaN ) ? ( v = /(?:Chrome\/(\d+\.\d+))/.exec(
									t ), n = v && v[ 1 ] ? parseFloat( v[ 1 ] ) : NaN ) : n = NaN
						} else e = i = r = n = s = NaN;
						if ( _ ) {
							if ( _[ 1 ] ) {
								var w = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec( t );
								a = !w || parseFloat( w[ 1 ].replace( "_", "." ) )
							} else a = !1;
							h = !!_[ 2 ], l = !!_[ 3 ]
						} else a = h = l = !1
					}
				}
				var _ = {
					ie: function() {
						return v() || e
					},
					ieCompatibilityMode: function() {
						return v() || o > e
					},
					ie64: function() {
						return _.ie() && c
					},
					firefox: function() {
						return v() || i
					},
					opera: function() {
						return v() || r
					},
					webkit: function() {
						return v() || s
					},
					safari: function() {
						return _.webkit()
					},
					chrome: function() {
						return v() || n
					},
					windows: function() {
						return v() || h
					},
					osx: function() {
						return v() || a
					},
					linux: function() {
						return v() || l
					},
					iphone: function() {
						return v() || d
					},
					mobile: function() {
						return v() || d || p || u || m
					},
					nativeApp: function() {
						return v() || f
					},
					android: function() {
						return v() || u
					},
					ipad: function() {
						return v() || p
					}
				};
				t.exports = _
			},
			4480: ( t, e, i ) => {
				"use strict";
				var r, s = i( 7230 );
				s.canUseDOM && ( r = document.implementation && document.implementation.hasFeature &&
						!0 !== document.implementation.hasFeature( "", "" ) ), t.exports =
					function( t, e ) {
						if ( !s.canUseDOM || e && !( "addEventListener" in document ) ) return !
							1;
						var i = "on" + t,
							n = i in document;
						if ( !n ) {
							var o = document.createElement( "div" );
							o.setAttribute( i, "return;" ), n = "function" == typeof o[ i ]
						}
						return !n && r && "wheel" === t && ( n = document.implementation.hasFeature(
							"Events.wheel", "3.0" ) ), n
					}
			},
			1045: ( t, e, i ) => {
				"use strict";
				var r = i( 2907 ),
					s = i( 4480 );

				function n( t ) {
					var e = 0,
						i = 0,
						r = 0,
						s = 0;
					return "detail" in t && ( i = t.detail ), "wheelDelta" in t && ( i = -t.wheelDelta /
							120 ), "wheelDeltaY" in t && ( i = -t.wheelDeltaY / 120 ),
						"wheelDeltaX" in t && ( e = -t.wheelDeltaX / 120 ), "axis" in t && t.axis ===
						t.HORIZONTAL_AXIS && ( e = i, i = 0 ), r = 10 * e, s = 10 * i, "deltaY" in
						t && ( s = t.deltaY ), "deltaX" in t && ( r = t.deltaX ), ( r || s ) &&
						t.deltaMode && ( 1 == t.deltaMode ? ( r *= 40, s *= 40 ) : ( r *= 800,
							s *= 800 ) ), r && !e && ( e = r < 1 ? -1 : 1 ), s && !i && ( i = s <
							1 ? -1 : 1 ), {
							spinX: e,
							spinY: i,
							pixelX: r,
							pixelY: s
						}
				}
				n.getEventType = function() {
					return r.firefox() ? "DOMMouseScroll" : s( "wheel" ) ? "wheel" :
						"mousewheel"
				}, t.exports = n
			},
			2273: t => {
				var e = "undefined" != typeof document ? document.createElement( "p" ).style : {},
					i = [ "O", "ms", "Moz", "Webkit" ],
					r = /([A-Z])/g,
					s = {};

				function n( t ) {
					if ( t = t.replace( /-([a-z])/g, ( function( t, e ) {
							return e.toUpperCase()
						} ) ), void 0 !== e[ t ] ) return t;
					for ( var r = t.charAt( 0 ).toUpperCase() + t.slice( 1 ), s = i.length; s--; ) {
						var n = i[ s ] + r;
						if ( void 0 !== e[ n ] ) return n
					}
					return t
				}
				t.exports = function( t ) {
					return t in s ? s[ t ] : s[ t ] = n( t )
				}, t.exports.dash = function( t ) {
					return t = n( t ), r.test( t ) && ( t = "-" + t.replace( r, "-$1" ), r.lastIndex =
						0 ), t.toLowerCase()
				}
			},
			3044: function( t ) {
				var e;
				t.exports = ( ( e = function() {
					function t( t ) {
						return s.appendChild( t.dom ), t
					}

					function i( t ) {
						for ( var e = 0; e < s.children.length; e++ ) s.children[ e ].style.display =
							e === t ? "block" : "none";
						r = t
					}
					var r = 0,
						s = document.createElement( "div" );
					s.style.cssText =
						"position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",
						s.addEventListener( "click", ( function( t ) {
							t.preventDefault(), i( ++r % s.children.length )
						} ), !1 );
					var n = ( performance || Date ).now(),
						o = n,
						a = 0,
						h = t( new e.Panel( "FPS", "#0ff", "#002" ) ),
						l = t( new e.Panel( "MS", "#0f0", "#020" ) );
					if ( self.performance && self.performance.memory ) var u = t( new e.Panel(
						"MB", "#f08", "#201" ) );
					return i( 0 ), {
						REVISION: 16,
						dom: s,
						addPanel: t,
						showPanel: i,
						begin: function() {
							n = ( performance || Date ).now()
						},
						end: function() {
							a++;
							var t = ( performance || Date ).now();
							if ( l.update( t - n, 200 ), t > o + 1e3 && ( h.update( 1e3 * a /
									( t - o ), 100 ), o = t, a = 0, u ) ) {
								var e = performance.memory;
								u.update( e.usedJSHeapSize / 1048576, e.jsHeapSizeLimit /
									1048576 )
							}
							return t
						},
						update: function() {
							n = this.end()
						},
						domElement: s,
						setMode: i
					}
				} ).Panel = function( t, e, i ) {
					var r = 1 / 0,
						s = 0,
						n = Math.round,
						o = n( window.devicePixelRatio || 1 ),
						a = 80 * o,
						h = 48 * o,
						l = 3 * o,
						u = 2 * o,
						c = 3 * o,
						d = 15 * o,
						p = 74 * o,
						f = 30 * o,
						m = document.createElement( "canvas" );
					m.width = a, m.height = h, m.style.cssText = "width:80px;height:48px";
					var g = m.getContext( "2d" );
					return g.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif", g.textBaseline =
						"top", g.fillStyle = i, g.fillRect( 0, 0, a, h ), g.fillStyle = e, g.fillText(
							t, l, u ), g.fillRect( c, d, p, f ), g.fillStyle = i, g.globalAlpha =
						.9, g.fillRect( c, d, p, f ), {
							dom: m,
							update: function( h, v ) {
								r = Math.min( r, h ), s = Math.max( s, h ), g.fillStyle = i, g.globalAlpha =
									1, g.fillRect( 0, 0, a, d ), g.fillStyle = e, g.fillText( n( h ) +
										" " + t + " (" + n( r ) + "-" + n( s ) + ")", l, u ), g.drawImage(
										m, c + o, d, p - o, f, c, d, p - o, f ), g.fillRect( c + p - o,
										d, o, f ), g.fillStyle = i, g.globalAlpha = .9, g.fillRect( c +
										p - o, d, o, n( ( 1 - h / v ) * f ) )
							}
						}
				}, e )
			}
		},
		e = {};

	function i( r ) {
		if ( e[ r ] ) return e[ r ].exports;
		var s = e[ r ] = {
			id: r,
			loaded: !1,
			exports: {}
		};
		return t[ r ].call( s.exports, s, s.exports, i ), s.loaded = !0, s.exports
	}
	i.n = t => {
			var e = t && t.__esModule ? () => t.default : () => t;
			return i.d( e, {
				a: e
			} ), e
		}, i.d = ( t, e ) => {
			for ( var r in e ) i.o( e, r ) && !i.o( t, r ) && Object.defineProperty( t,
				r, {
					enumerable: !0,
					get: e[ r ]
				} )
		}, i.g = function() {
			if ( "object" == typeof globalThis ) return globalThis;
			try {
				return this || new Function( "return this" )()
			} catch ( t ) {
				if ( "object" == typeof window ) return window
			}
		}(), i.o = ( t, e ) => Object.prototype.hasOwnProperty.call( t, e ), i.nmd =
		t => ( t.paths = [], t.children || ( t.children = [] ), t ), ( () => {
			"use strict";
			i( 6349 ), i( 4065 ), i( 6955 );
			var t = i( 1663 ),
				e = i.n( t ),
				r = i( 7778 ),
				s = i.n( r );

			function n( t ) {
				if ( void 0 === t ) throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called" );
				return t
			}

			function o( t, e ) {
				t.prototype = Object.create( e.prototype ), t.prototype.constructor = t,
					t.__proto__ = e
			}
			var a, h, l, u, c, d, p, f, m, g, v, _, y, w, x, b, M, T, A, E, S, P, O, L,
				C, k, F, R, z = {
					autoSleep: 120,
					force3D: "auto",
					nullTargetWarn: 1,
					units: {
						lineHeight: ""
					}
				},
				D = {
					duration: .5,
					overwrite: !1,
					delay: 0
				},
				I = 1e8,
				U = 1e-8,
				j = 2 * Math.PI,
				B = j / 4,
				N = 0,
				V = Math.sqrt,
				q = Math.cos,
				W = Math.sin,
				Y = function( t ) {
					return "string" == typeof t
				},
				X = function( t ) {
					return "function" == typeof t
				},
				G = function( t ) {
					return "number" == typeof t
				},
				$ = function( t ) {
					return void 0 === t
				},
				H = function( t ) {
					return "object" == typeof t
				},
				Z = function( t ) {
					return !1 !== t
				},
				Q = function() {
					return "undefined" != typeof window
				},
				K = function( t ) {
					return X( t ) || Y( t )
				},
				J = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
				tt = Array.isArray,
				et = /(?:-?\.?\d|\.)+/gi,
				it = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
				rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
				st = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
				nt = /[+-]=-?[.\d]+/,
				ot = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
				at = /[\d.+\-=]+(?:e[-+]\d*)*/i,
				ht = {},
				lt = {},
				ut = function( t ) {
					return ( lt = Dt( t, ht ) ) && wi
				},
				ct = function( t, e ) {
					return console.warn( "Invalid property", t, "set to", e,
						"Missing plugin? gsap.registerPlugin()" )
				},
				dt = function( t, e ) {
					return !e && console.warn( t )
				},
				pt = function( t, e ) {
					return t && ( ht[ t ] = e ) && lt && ( lt[ t ] = e ) || ht
				},
				ft = function() {
					return 0
				},
				mt = {},
				gt = [],
				vt = {},
				_t = {},
				yt = {},
				wt = 30,
				xt = [],
				bt = "",
				Mt = function( t ) {
					var e, i, r = t[ 0 ];
					if ( H( r ) || X( r ) || ( t = [ t ] ), !( e = ( r._gsap || {} ).harness ) ) {
						for ( i = xt.length; i-- && !xt[ i ].targetTest( r ); );
						e = xt[ i ]
					}
					for ( i = t.length; i--; ) t[ i ] && ( t[ i ]._gsap || ( t[ i ]._gsap =
						new Ye( t[ i ], e ) ) ) || t.splice( i, 1 );
					return t
				},
				Tt = function( t ) {
					return t._gsap || Mt( ue( t ) )[ 0 ]._gsap
				},
				At = function( t, e, i ) {
					return ( i = t[ e ] ) && X( i ) ? t[ e ]() : $( i ) && t.getAttribute &&
						t.getAttribute( e ) || i
				},
				Et = function( t, e ) {
					return ( t = t.split( "," ) ).forEach( e ) || t
				},
				St = function( t ) {
					return Math.round( 1e5 * t ) / 1e5 || 0
				},
				Pt = function( t, e ) {
					for ( var i = e.length, r = 0; t.indexOf( e[ r ] ) < 0 && ++r < i; );
					return r < i
				},
				Ot = function( t, e, i ) {
					var r, s = G( t[ 1 ] ),
						n = ( s ? 2 : 1 ) + ( e < 2 ? 0 : 1 ),
						o = t[ n ];
					if ( s && ( o.duration = t[ 1 ] ), o.parent = i, e ) {
						for ( r = o; i && !( "immediateRender" in r ); ) r = i.vars.defaults || {},
							i = Z( i.vars.inherit ) && i.parent;
						o.immediateRender = Z( r.immediateRender ), e < 2 ? o.runBackwards = 1 :
							o.startAt = t[ n - 1 ]
					}
					return o
				},
				Lt = function() {
					var t, e, i = gt.length,
						r = gt.slice( 0 );
					for ( vt = {}, gt.length = 0, t = 0; t < i; t++ )( e = r[ t ] ) && e._lazy &&
						( e.render( e._lazy[ 0 ], e._lazy[ 1 ], !0 )._lazy = 0 )
				},
				Ct = function( t, e, i, r ) {
					gt.length && Lt(), t.render( e, i, r ), gt.length && Lt()
				},
				kt = function( t ) {
					var e = parseFloat( t );
					return ( e || 0 === e ) && ( t + "" ).match( ot ).length < 2 ? e : Y( t ) ?
						t.trim() : t
				},
				Ft = function( t ) {
					return t
				},
				Rt = function( t, e ) {
					for ( var i in e ) i in t || ( t[ i ] = e[ i ] );
					return t
				},
				zt = function( t, e ) {
					for ( var i in e ) i in t || "duration" === i || "ease" === i || ( t[ i ] =
						e[ i ] )
				},
				Dt = function( t, e ) {
					for ( var i in e ) t[ i ] = e[ i ];
					return t
				},
				It = function t( e, i ) {
					for ( var r in i ) "__proto__" !== r && "constructor" !== r &&
						"prototype" !== r && ( e[ r ] = H( i[ r ] ) ? t( e[ r ] || ( e[ r ] = {} ),
							i[ r ] ) : i[ r ] );
					return e
				},
				Ut = function( t, e ) {
					var i, r = {};
					for ( i in t ) i in e || ( r[ i ] = t[ i ] );
					return r
				},
				jt = function( t ) {
					var e = t.parent || h,
						i = t.keyframes ? zt : Rt;
					if ( Z( t.inherit ) )
						for ( ; e; ) i( t, e.vars.defaults ), e = e.parent || e._dp;
					return t
				},
				Bt = function( t, e, i, r ) {
					void 0 === i && ( i = "_first" ), void 0 === r && ( r = "_last" );
					var s = e._prev,
						n = e._next;
					s ? s._next = n : t[ i ] === e && ( t[ i ] = n ), n ? n._prev = s : t[ r ] ===
						e && ( t[ r ] = s ), e._next = e._prev = e.parent = null
				},
				Nt = function( t, e ) {
					t.parent && ( !e || t.parent.autoRemoveChildren ) && t.parent.remove( t ),
						t._act = 0
				},
				Vt = function( t, e ) {
					if ( t && ( !e || e._end > t._dur || e._start < 0 ) )
						for ( var i = t; i; ) i._dirty = 1, i = i.parent;
					return t
				},
				qt = function( t ) {
					for ( var e = t.parent; e && e.parent; ) e._dirty = 1, e.totalDuration(),
						e = e.parent;
					return t
				},
				Wt = function t( e ) {
					return !e || e._ts && t( e.parent )
				},
				Yt = function( t ) {
					return t._repeat ? Xt( t._tTime, t = t.duration() + t._rDelay ) * t : 0
				},
				Xt = function( t, e ) {
					var i = Math.floor( t /= e );
					return t && i === t ? i - 1 : i
				},
				Gt = function( t, e ) {
					return ( t - e._start ) * e._ts + ( e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() :
						e._tDur )
				},
				$t = function( t ) {
					return t._end = St( t._start + ( t._tDur / Math.abs( t._ts || t._rts ||
						U ) || 0 ) )
				},
				Ht = function( t, e ) {
					var i = t._dp;
					return i && i.smoothChildTiming && t._ts && ( t._start = St( i._time - (
						t._ts > 0 ? e / t._ts : ( ( t._dirty ? t.totalDuration() : t._tDur ) -
							e ) / -t._ts ) ), $t( t ), i._dirty || Vt( i, t ) ), t
				},
				Zt = function( t, e ) {
					var i;
					if ( ( e._time || e._initted && !e._dur ) && ( i = Gt( t.rawTime(), e ),
							( !e._dur || oe( 0, e.totalDuration(), i ) - e._tTime > U ) && e.render(
								i, !0 ) ), Vt( t, e )._dp && t._initted && t._time >= t._dur && t._ts ) {
						if ( t._dur < t.duration() )
							for ( i = t; i._dp; ) i.rawTime() >= 0 && i.totalTime( i._tTime ), i =
								i._dp;
						t._zTime = -1e-8
					}
				},
				Qt = function( t, e, i, r ) {
					return e.parent && Nt( e ), e._start = St( i + e._delay ), e._end = St(
							e._start + ( e.totalDuration() / Math.abs( e.timeScale() ) || 0 ) ),
						function( t, e, i, r, s ) {
							void 0 === i && ( i = "_first" ), void 0 === r && ( r = "_last" );
							var n, o = t[ r ];
							if ( s )
								for ( n = e[ s ]; o && o[ s ] > n; ) o = o._prev;
							o ? ( e._next = o._next, o._next = e ) : ( e._next = t[ i ], t[ i ] =
									e ), e._next ? e._next._prev = e : t[ r ] = e, e._prev = o, e.parent =
								e._dp = t
						}( t, e, "_first", "_last", t._sort ? "_start" : 0 ), t._recent = e, r ||
						Zt( t, e ), t
				},
				Kt = function( t, e ) {
					return ( ht.ScrollTrigger || ct( "scrollTrigger", e ) ) && ht.ScrollTrigger
						.create( e, t )
				},
				Jt = function( t, e, i, r ) {
					return Ke( t, e ), t._initted ? !i && t._pt && ( t._dur && !1 !== t.vars
						.lazy || !t._dur && t.vars.lazy ) && p !== ke.frame ? ( gt.push( t ),
						t._lazy = [ e, r ], 1 ) : void 0 : 1
				},
				te = function t( e ) {
					var i = e.parent;
					return i && i._ts && i._initted && !i._lock && ( i.rawTime() < 0 || t( i ) )
				},
				ee = function( t, e, i, r ) {
					var s = t._repeat,
						n = St( e ) || 0,
						o = t._tTime / t._tDur;
					return o && !r && ( t._time *= n / t._dur ), t._dur = n, t._tDur = s ? s <
						0 ? 1e10 : St( n * ( s + 1 ) + t._rDelay * s ) : n, o && !r ? Ht( t, t._tTime =
							t._tDur * o ) : t.parent && $t( t ), i || Vt( t.parent, t ), t
				},
				ie = function( t ) {
					return t instanceof Ge ? Vt( t ) : ee( t, t._dur )
				},
				re = {
					_start: 0,
					endTime: ft
				},
				se = function t( e, i ) {
					var r, s, n = e.labels,
						o = e._recent || re,
						a = e.duration() >= I ? o.endTime( !1 ) : e._dur;
					return Y( i ) && ( isNaN( i ) || i in n ) ? "<" === ( r = i.charAt( 0 ) ) ||
						">" === r ? ( "<" === r ? o._start : o.endTime( o._repeat >= 0 ) ) + (
							parseFloat( i.substr( 1 ) ) || 0 ) : ( r = i.indexOf( "=" ) ) < 0 ? (
							i in n || ( n[ i ] = a ), n[ i ] ) : ( s = +( i.charAt( r - 1 ) + i.substr(
							r + 1 ) ), r > 1 ? t( e, i.substr( 0, r - 1 ) ) + s : a + s ) : null ==
						i ? a : +i
				},
				ne = function( t, e ) {
					return t || 0 === t ? e( t ) : e
				},
				oe = function( t, e, i ) {
					return i < t ? t : i > e ? e : i
				},
				ae = function( t ) {
					if ( "string" != typeof t ) return "";
					var e = at.exec( t );
					return e ? t.substr( e.index + e[ 0 ].length ) : ""
				},
				he = [].slice,
				le = function( t, e ) {
					return t && H( t ) && "length" in t && ( !e && !t.length || t.length - 1 in
						t && H( t[ 0 ] ) ) && !t.nodeType && t !== l
				},
				ue = function( t, e ) {
					return !Y( t ) || e || !u && Fe() ? tt( t ) ? function( t, e, i ) {
						return void 0 === i && ( i = [] ), t.forEach( ( function( t ) {
							var r;
							return Y( t ) && !e || le( t, 1 ) ? ( r = i ).push.apply( r, ue( t ) ) :
								i.push( t )
						} ) ) || i
					}( t, e ) : le( t ) ? he.call( t, 0 ) : t ? [ t ] : [] : he.call( c.querySelectorAll(
						t ), 0 )
				},
				ce = function( t ) {
					return t.sort( ( function() {
						return .5 - Math.random()
					} ) )
				},
				de = function( t ) {
					if ( X( t ) ) return t;
					var e = H( t ) ? t : {
							each: t
						},
						i = Be( e.ease ),
						r = e.from || 0,
						s = parseFloat( e.base ) || 0,
						n = {},
						o = r > 0 && r < 1,
						a = isNaN( r ) || o,
						h = e.axis,
						l = r,
						u = r;
					return Y( r ) ? l = u = {
							center: .5,
							edges: .5,
							end: 1
						}[ r ] || 0 : !o && a && ( l = r[ 0 ], u = r[ 1 ] ),
						function( t, o, c ) {
							var d, p, f, m, g, v, _, y, w, x = ( c || e ).length,
								b = n[ x ];
							if ( !b ) {
								if ( !( w = "auto" === e.grid ? 0 : ( e.grid || [ 1, I ] )[ 1 ] ) ) {
									for ( _ = -I; _ < ( _ = c[ w++ ].getBoundingClientRect().left ) && w <
										x; );
									w--
								}
								for ( b = n[ x ] = [], d = a ? Math.min( w, x ) * l - .5 : r % w, p =
									a ? x * u / w - .5 : r / w | 0, _ = 0, y = I, v = 0; v < x; v++ ) f =
									v % w - d, m = p - ( v / w | 0 ), b[ v ] = g = h ? Math.abs( "y" ===
										h ? m : f ) : V( f * f + m * m ), g > _ && ( _ = g ), g < y && ( y =
										g );
								"random" === r && ce( b ), b.max = _ - y, b.min = y, b.v = x = (
									parseFloat( e.amount ) || parseFloat( e.each ) * ( w > x ? x - 1 :
										h ? "y" === h ? x / w : w : Math.max( w, x / w ) ) || 0 ) * (
									"edges" === r ? -1 : 1 ), b.b = x < 0 ? s - x : s, b.u = ae( e.amount ||
									e.each ) || 0, i = i && x < 0 ? Ue( i ) : i
							}
							return x = ( b[ t ] - b.min ) / b.max || 0, St( b.b + ( i ? i( x ) : x ) *
								b.v ) + b.u
						}
				},
				pe = function( t ) {
					var e = t < 1 ? Math.pow( 10, ( t + "" ).length - 2 ) : 1;
					return function( i ) {
						var r = Math.round( parseFloat( i ) / t ) * t * e;
						return ( r - r % 1 ) / e + ( G( i ) ? 0 : ae( i ) )
					}
				},
				fe = function( t, e ) {
					var i, r, s = tt( t );
					return !s && H( t ) && ( i = s = t.radius || I, t.values ? ( t = ue( t.values ),
						( r = !G( t[ 0 ] ) ) && ( i *= i ) ) : t = pe( t.increment ) ), ne( e,
						s ? X( t ) ? function( e ) {
							return r = t( e ), Math.abs( r - e ) <= i ? r : e
						} : function( e ) {
							for ( var s, n, o = parseFloat( r ? e.x : e ), a = parseFloat( r ? e.y :
									0 ), h = I, l = 0, u = t.length; u--; )( s = r ? ( s = t[ u ].x - o ) *
								s + ( n = t[ u ].y - a ) * n : Math.abs( t[ u ] - o ) ) < h && ( h =
								s, l = u );
							return l = !i || h <= i ? t[ l ] : e, r || l === e || G( e ) ? l : l +
								ae( e )
						} : pe( t ) )
				},
				me = function( t, e, i, r ) {
					return ne( tt( t ) ? !e : !0 === i ? !!( i = 0 ) : !r, ( function() {
						return tt( t ) ? t[ ~~( Math.random() * t.length ) ] : ( i = i ||
								1e-5 ) && ( r = i < 1 ? Math.pow( 10, ( i + "" ).length - 2 ) : 1 ) &&
							Math.floor( Math.round( ( t - i / 2 + Math.random() * ( e - t + .99 *
								i ) ) / i ) * i * r ) / r
					} ) )
				},
				ge = function( t, e, i ) {
					return ne( i, ( function( i ) {
						return t[ ~~e( i ) ]
					} ) )
				},
				ve = function( t ) {
					for ( var e, i, r, s, n = 0, o = ""; ~( e = t.indexOf( "random(", n ) ); )
						r = t.indexOf( ")", e ), s = "[" === t.charAt( e + 7 ), i = t.substr( e +
							7, r - e - 7 ).match( s ? ot : et ), o += t.substr( n, e - n ) + me( s ?
							i : +i[ 0 ], s ? 0 : +i[ 1 ], +i[ 2 ] || 1e-5 ), n = r + 1;
					return o + t.substr( n, t.length - n )
				},
				_e = function( t, e, i, r, s ) {
					var n = e - t,
						o = r - i;
					return ne( s, ( function( e ) {
						return i + ( ( e - t ) / n * o || 0 )
					} ) )
				},
				ye = function( t, e, i ) {
					var r, s, n, o = t.labels,
						a = I;
					for ( r in o )( s = o[ r ] - e ) < 0 == !!i && s && a > ( s = Math.abs(
						s ) ) && ( n = r, a = s );
					return n
				},
				we = function( t, e, i ) {
					var r, s, n = t.vars,
						o = n[ e ];
					if ( o ) return r = n[ e + "Params" ], s = n.callbackScope || t, i && gt
						.length && Lt(), r ? o.apply( s, r ) : o.call( s )
				},
				xe = function( t ) {
					return Nt( t ), t.progress() < 1 && we( t, "onInterrupt" ), t
				},
				be = function( t ) {
					var e = ( t = !t.name && t.default || t ).name,
						i = X( t ),
						r = e && !i && t.init ? function() {
							this._props = []
						} : t,
						s = {
							init: ft,
							render: ci,
							add: Ze,
							kill: pi,
							modifier: di,
							rawVars: 0
						},
						n = {
							targetTest: 0,
							get: 0,
							getSetter: ai,
							aliases: {},
							register: 0
						};
					if ( Fe(), t !== r ) {
						if ( _t[ e ] ) return;
						Rt( r, Rt( Ut( t, s ), n ) ), Dt( r.prototype, Dt( s, Ut( t, n ) ) ),
							_t[ r.prop = e ] = r, t.targetTest && ( xt.push( r ), mt[ e ] = 1 ), e =
							( "css" === e ? "CSS" : e.charAt( 0 ).toUpperCase() + e.substr( 1 ) ) +
							"Plugin"
					}
					pt( e, r ), t.register && t.register( wi, r, gi )
				},
				Me = 255,
				Te = {
					aqua: [ 0, Me, Me ],
					lime: [ 0, Me, 0 ],
					silver: [ 192, 192, 192 ],
					black: [ 0, 0, 0 ],
					maroon: [ 128, 0, 0 ],
					teal: [ 0, 128, 128 ],
					blue: [ 0, 0, Me ],
					navy: [ 0, 0, 128 ],
					white: [ Me, Me, Me ],
					olive: [ 128, 128, 0 ],
					yellow: [ Me, Me, 0 ],
					orange: [ Me, 165, 0 ],
					gray: [ 128, 128, 128 ],
					purple: [ 128, 0, 128 ],
					green: [ 0, 128, 0 ],
					red: [ Me, 0, 0 ],
					pink: [ Me, 192, 203 ],
					cyan: [ 0, Me, Me ],
					transparent: [ Me, Me, Me, 0 ]
				},
				Ae = function( t, e, i ) {
					return ( 6 * ( t = t < 0 ? t + 1 : t > 1 ? t - 1 : t ) < 1 ? e + ( i - e ) *
						t * 6 : t < .5 ? i : 3 * t < 2 ? e + ( i - e ) * ( 2 / 3 - t ) * 6 : e
					) * Me + .5 | 0
				},
				Ee = function( t, e, i ) {
					var r, s, n, o, a, h, l, u, c, d, p = t ? G( t ) ? [ t >> 16, t >> 8 &
						Me, t & Me
					] : 0 : Te.black;
					if ( !p ) {
						if ( "," === t.substr( -1 ) && ( t = t.substr( 0, t.length - 1 ) ), Te[
								t ] ) p = Te[ t ];
						else if ( "#" === t.charAt( 0 ) ) {
							if ( t.length < 6 && ( r = t.charAt( 1 ), s = t.charAt( 2 ), n = t.charAt(
									3 ), t = "#" + r + r + s + s + n + n + ( 5 === t.length ? t.charAt(
									4 ) + t.charAt( 4 ) : "" ) ), 9 === t.length ) return [ ( p =
									parseInt( t.substr( 1, 6 ), 16 ) ) >> 16, p >> 8 & Me, p & Me,
								parseInt( t.substr( 7 ), 16 ) / 255
							];
							p = [ ( t = parseInt( t.substr( 1 ), 16 ) ) >> 16, t >> 8 & Me, t & Me ]
						} else if ( "hsl" === t.substr( 0, 3 ) )
							if ( p = d = t.match( et ), e ) {
								if ( ~t.indexOf( "=" ) ) return p = t.match( it ), i && p.length < 4 &&
									( p[ 3 ] = 1 ), p
							} else o = +p[ 0 ] % 360 / 360, a = +p[ 1 ] / 100, r = 2 * ( h = +p[ 2 ] /
									100 ) - ( s = h <= .5 ? h * ( a + 1 ) : h + a - h * a ), p.length >
								3 && ( p[ 3 ] *= 1 ), p[ 0 ] = Ae( o + 1 / 3, r, s ), p[ 1 ] = Ae( o,
									r, s ), p[ 2 ] = Ae( o - 1 / 3, r, s );
						else p = t.match( et ) || Te.transparent;
						p = p.map( Number )
					}
					return e && !d && ( r = p[ 0 ] / Me, s = p[ 1 ] / Me, n = p[ 2 ] / Me, h =
							( ( l = Math.max( r, s, n ) ) + ( u = Math.min( r, s, n ) ) ) / 2, l ===
							u ? o = a = 0 : ( c = l - u, a = h > .5 ? c / ( 2 - l - u ) : c / ( l +
								u ), o = l === r ? ( s - n ) / c + ( s < n ? 6 : 0 ) : l === s ? ( n -
								r ) / c + 2 : ( r - s ) / c + 4, o *= 60 ), p[ 0 ] = ~~( o + .5 ), p[
								1 ] = ~~( 100 * a + .5 ), p[ 2 ] = ~~( 100 * h + .5 ) ), i && p.length <
						4 && ( p[ 3 ] = 1 ), p
				},
				Se = function( t ) {
					var e = [],
						i = [],
						r = -1;
					return t.split( Oe ).forEach( ( function( t ) {
						var s = t.match( rt ) || [];
						e.push.apply( e, s ), i.push( r += s.length + 1 )
					} ) ), e.c = i, e
				},
				Pe = function( t, e, i ) {
					var r, s, n, o, a = "",
						h = ( t + a ).match( Oe ),
						l = e ? "hsla(" : "rgba(",
						u = 0;
					if ( !h ) return t;
					if ( h = h.map( ( function( t ) {
							return ( t = Ee( t, e, 1 ) ) && l + ( e ? t[ 0 ] + "," + t[ 1 ] +
								"%," + t[ 2 ] + "%," + t[ 3 ] : t.join( "," ) ) + ")"
						} ) ), i && ( n = Se( t ), ( r = i.c ).join( a ) !== n.c.join( a ) ) )
						for ( o = ( s = t.replace( Oe, "1" ).split( rt ) ).length - 1; u < o; u++ )
							a += s[ u ] + ( ~r.indexOf( u ) ? h.shift() || l + "0,0,0,0)" : ( n.length ?
								n : h.length ? h : i ).shift() );
					if ( !s )
						for ( o = ( s = t.split( Oe ) ).length - 1; u < o; u++ ) a += s[ u ] +
							h[ u ];
					return a + s[ o ]
				},
				Oe = function() {
					var t, e =
						"(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
					for ( t in Te ) e += "|" + t + "\\b";
					return new RegExp( e + ")", "gi" )
				}(),
				Le = /hsl[a]?\(/,
				Ce = function( t ) {
					var e, i = t.join( " " );
					if ( Oe.lastIndex = 0, Oe.test( i ) ) return e = Le.test( i ), t[ 1 ] =
						Pe( t[ 1 ], e ), t[ 0 ] = Pe( t[ 0 ], e, Se( t[ 1 ] ) ), !0
				},
				ke = ( b = Date.now, M = 500, T = 33, A = b(), E = A, P = S = 1e3 / 240,
					L = function t( e ) {
						var i, r, s, n, o = b() - E,
							a = !0 === e;
						if ( o > M && ( A += o - T ), ( ( i = ( s = ( E += o ) - A ) - P ) > 0 ||
								a ) && ( n = ++y.frame, w = s - 1e3 * y.time, y.time = s /= 1e3, P +=
								i + ( i >= S ? 4 : S - i ), r = 1 ), a || ( g = v( t ) ), r )
							for ( x = 0; x < O.length; x++ ) O[ x ]( s, w, n, e )
					}, y = {
						time: 0,
						frame: 0,
						tick: function() {
							L( !0 )
						},
						deltaRatio: function( t ) {
							return w / ( 1e3 / ( t || 60 ) )
						},
						wake: function() {
							d && ( !u && Q() && ( l = u = window, c = l.document || {}, ht.gsap =
								wi, ( l.gsapVersions || ( l.gsapVersions = [] ) ).push( wi.version ),
								ut( lt || l.GreenSockGlobals || !l.gsap && l || {} ), _ = l.requestAnimationFrame
							), g && y.sleep(), v = _ || function( t ) {
								return setTimeout( t, P - 1e3 * y.time + 1 | 0 )
							}, m = 1, L( 2 ) )
						},
						sleep: function() {
							( _ ? l.cancelAnimationFrame : clearTimeout )( g ), m = 0, v = ft
						},
						lagSmoothing: function( t, e ) {
							M = t || 1e8, T = Math.min( e, M, 0 )
						},
						fps: function( t ) {
							S = 1e3 / ( t || 240 ), P = 1e3 * y.time + S
						},
						add: function( t ) {
							O.indexOf( t ) < 0 && O.push( t ), Fe()
						},
						remove: function( t ) {
							var e;
							~( e = O.indexOf( t ) ) && O.splice( e, 1 ) && x >= e && x--
						},
						_listeners: O = []
					} ),
				Fe = function() {
					return !m && ke.wake()
				},
				Re = {},
				ze = /^[\d.\-M][\d.\-,\s]/,
				De = /["']/g,
				Ie = function( t ) {
					for ( var e, i, r, s = {}, n = t.substr( 1, t.length - 3 ).split( ":" ),
							o = n[ 0 ], a = 1, h = n.length; a < h; a++ ) i = n[ a ], e = a !== h -
						1 ? i.lastIndexOf( "," ) : i.length, r = i.substr( 0, e ), s[ o ] =
						isNaN( r ) ? r.replace( De, "" ).trim() : +r, o = i.substr( e + 1 ).trim();
					return s
				},
				Ue = function( t ) {
					return function( e ) {
						return 1 - t( 1 - e )
					}
				},
				je = function t( e, i ) {
					for ( var r, s = e._first; s; ) s instanceof Ge ? t( s, i ) : !s.vars.yoyoEase ||
						s._yoyo && s._repeat || s._yoyo === i || ( s.timeline ? t( s.timeline,
							i ) : ( r = s._ease, s._ease = s._yEase, s._yEase = r, s._yoyo = i ) ),
						s = s._next
				},
				Be = function( t, e ) {
					return t && ( X( t ) ? t : Re[ t ] || function( t ) {
						var e, i, r, s, n = ( t + "" ).split( "(" ),
							o = Re[ n[ 0 ] ];
						return o && n.length > 1 && o.config ? o.config.apply( null, ~t.indexOf(
								"{" ) ? [ Ie( n[ 1 ] ) ] : ( e = t, i = e.indexOf( "(" ) + 1, r =
								e.indexOf( ")" ), s = e.indexOf( "(", i ), e.substring( i, ~s && s <
									r ? e.indexOf( ")", r + 1 ) : r ) ).split( "," ).map( kt ) ) : Re._CE &&
							ze.test( t ) ? Re._CE( "", t ) : o
					}( t ) ) || e
				},
				Ne = function( t, e, i, r ) {
					void 0 === i && ( i = function( t ) {
						return 1 - e( 1 - t )
					} ), void 0 === r && ( r = function( t ) {
						return t < .5 ? e( 2 * t ) / 2 : 1 - e( 2 * ( 1 - t ) ) / 2
					} );
					var s, n = {
						easeIn: e,
						easeOut: i,
						easeInOut: r
					};
					return Et( t, ( function( t ) {
						for ( var e in Re[ t ] = ht[ t ] = n, Re[ s = t.toLowerCase() ] = i,
								n ) Re[ s + ( "easeIn" === e ? ".in" : "easeOut" === e ? ".out" :
							".inOut" ) ] = Re[ t + "." + e ] = n[ e ]
					} ) ), n
				},
				Ve = function( t ) {
					return function( e ) {
						return e < .5 ? ( 1 - t( 1 - 2 * e ) ) / 2 : .5 + t( 2 * ( e - .5 ) ) /
							2
					}
				},
				qe = function t( e, i, r ) {
					var s = i >= 1 ? i : 1,
						n = ( r || ( e ? .3 : .45 ) ) / ( i < 1 ? i : 1 ),
						o = n / j * ( Math.asin( 1 / s ) || 0 ),
						a = function( t ) {
							return 1 === t ? 1 : s * Math.pow( 2, -10 * t ) * W( ( t - o ) * n ) +
								1
						},
						h = "out" === e ? a : "in" === e ? function( t ) {
							return 1 - a( 1 - t )
						} : Ve( a );
					return n = j / n, h.config = function( i, r ) {
						return t( e, i, r )
					}, h
				},
				We = function t( e, i ) {
					void 0 === i && ( i = 1.70158 );
					var r = function( t ) {
							return t ? --t * t * ( ( i + 1 ) * t + i ) + 1 : 0
						},
						s = "out" === e ? r : "in" === e ? function( t ) {
							return 1 - r( 1 - t )
						} : Ve( r );
					return s.config = function( i ) {
						return t( e, i )
					}, s
				};
			Et( "Linear,Quad,Cubic,Quart,Quint,Strong", ( function( t, e ) {
					var i = e < 5 ? e + 1 : e;
					Ne( t + ",Power" + ( i - 1 ), e ? function( t ) {
						return Math.pow( t, i )
					} : function( t ) {
						return t
					}, ( function( t ) {
						return 1 - Math.pow( 1 - t, i )
					} ), ( function( t ) {
						return t < .5 ? Math.pow( 2 * t, i ) / 2 : 1 - Math.pow( 2 * ( 1 -
							t ), i ) / 2
					} ) )
				} ) ), Re.Linear.easeNone = Re.none = Re.Linear.easeIn, Ne( "Elastic", qe(
					"in" ), qe( "out" ), qe() ), C = 7.5625, F = 1 / ( k = 2.75 ), Ne(
					"Bounce", ( function( t ) {
						return 1 - R( 1 - t )
					} ), R = function( t ) {
						return t < F ? C * t * t : t < .7272727272727273 ? C * Math.pow( t -
								1.5 / k, 2 ) + .75 : t < .9090909090909092 ? C * ( t -= 2.25 / k ) *
							t + .9375 : C * Math.pow( t - 2.625 / k, 2 ) + .984375
					} ), Ne( "Expo", ( function( t ) {
					return t ? Math.pow( 2, 10 * ( t - 1 ) ) : 0
				} ) ), Ne( "Circ", ( function( t ) {
					return -( V( 1 - t * t ) - 1 )
				} ) ), Ne( "Sine", ( function( t ) {
					return 1 === t ? 1 : 1 - q( t * B )
				} ) ), Ne( "Back", We( "in" ), We( "out" ), We() ), Re.SteppedEase = Re.steps =
				ht.SteppedEase = {
					config: function( t, e ) {
						void 0 === t && ( t = 1 );
						var i = 1 / t,
							r = t + ( e ? 0 : 1 ),
							s = e ? 1 : 0;
						return function( t ) {
							return ( ( r * oe( 0, .99999999, t ) | 0 ) + s ) * i
						}
					}
				}, D.ease = Re[ "quad.out" ], Et(
					"onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (
						function( t ) {
							return bt += t + "," + t + "Params,"
						} ) );
			var Ye = function( t, e ) {
					this.id = N++, t._gsap = this, this.target = t, this.harness = e, this.get =
						e ? e.get : At, this.set = e ? e.getSetter : ai
				},
				Xe = function() {
					function t( t, e ) {
						var i = t.parent || h;
						this.vars = t, this._delay = +t.delay || 0, ( this._repeat = t.repeat ===
							1 / 0 ? -2 : t.repeat || 0 ) && ( this._rDelay = t.repeatDelay || 0,
							this._yoyo = !!t.yoyo || !!t.yoyoEase ), this._ts = 1, ee( this, +t.duration,
							1, 1 ), this.data = t.data, m || ke.wake(), i && Qt( i, this, e || 0 ===
							e ? e : i._time, 1 ), t.reversed && this.reverse(), t.paused && this.paused( !
							0 )
					}
					var e = t.prototype;
					return e.delay = function( t ) {
						return t || 0 === t ? ( this.parent && this.parent.smoothChildTiming &&
							this.startTime( this._start + t - this._delay ), this._delay = t,
							this ) : this._delay
					}, e.duration = function( t ) {
						return arguments.length ? this.totalDuration( this._repeat > 0 ? t + (
								t + this._rDelay ) * this._repeat : t ) : this.totalDuration() &&
							this._dur
					}, e.totalDuration = function( t ) {
						return arguments.length ? ( this._dirty = 0, ee( this, this._repeat <
								0 ? t : ( t - this._repeat * this._rDelay ) / ( this._repeat + 1 ) ) ) :
							this._tDur
					}, e.totalTime = function( t, e ) {
						if ( Fe(), !arguments.length ) return this._tTime;
						var i = this._dp;
						if ( i && i.smoothChildTiming && this._ts ) {
							for ( Ht( this, t ), !i._dp || i.parent || Zt( i, this ); i.parent; )
								i.parent._time !== i._start + ( i._ts >= 0 ? i._tTime / i._ts : ( i.totalDuration() -
									i._tTime ) / -i._ts ) && i.totalTime( i._tTime, !0 ), i = i.parent;
							!this.parent && this._dp.autoRemoveChildren && ( this._ts > 0 && t <
								this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t ) && Qt(
								this._dp, this, this._start - this._delay )
						}
						return ( this._tTime !== t || !this._dur && !e || this._initted &&
							Math.abs( this._zTime ) === U || !t && !this._initted && ( this.add ||
								this._ptLookup ) ) && ( this._ts || ( this._pTime = t ), Ct( this,
							t, e ) ), this
					}, e.time = function( t, e ) {
						return arguments.length ? this.totalTime( Math.min( this.totalDuration(),
							t + Yt( this ) ) % this._dur || ( t ? this._dur : 0 ), e ) : this._time
					}, e.totalProgress = function( t, e ) {
						return arguments.length ? this.totalTime( this.totalDuration() * t, e ) :
							this.totalDuration() ? Math.min( 1, this._tTime / this._tDur ) : this
							.ratio
					}, e.progress = function( t, e ) {
						return arguments.length ? this.totalTime( this.duration() * ( !this._yoyo ||
								1 & this.iteration() ? t : 1 - t ) + Yt( this ), e ) : this.duration() ?
							Math.min( 1, this._time / this._dur ) : this.ratio
					}, e.iteration = function( t, e ) {
						var i = this.duration() + this._rDelay;
						return arguments.length ? this.totalTime( this._time + ( t - 1 ) * i,
							e ) : this._repeat ? Xt( this._tTime, i ) + 1 : 1
					}, e.timeScale = function( t ) {
						if ( !arguments.length ) return -1e-8 === this._rts ? 0 : this._rts;
						if ( this._rts === t ) return this;
						var e = this.parent && this._ts ? Gt( this.parent._time, this ) : this
							._tTime;
						return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 :
							this._rts, qt( this.totalTime( oe( -this._delay, this._tDur, e ), !0 ) )
					}, e.paused = function( t ) {
						return arguments.length ? ( this._ps !== t && ( this._ps = t, t ? (
							this._pTime = this._tTime || Math.max( -this._delay, this.rawTime() ),
							this._ts = this._act = 0 ) : ( Fe(), this._ts = this._rts, this.totalTime(
							this.parent && !this.parent.smoothChildTiming ? this.rawTime() :
							this._tTime || this._pTime, 1 === this.progress() && ( this._tTime -=
								U ) && Math.abs( this._zTime ) !== U ) ) ), this ) : this._ps
					}, e.startTime = function( t ) {
						if ( arguments.length ) {
							this._start = t;
							var e = this.parent || this._dp;
							return e && ( e._sort || !this.parent ) && Qt( e, this, t - this._delay ),
								this
						}
						return this._start
					}, e.endTime = function( t ) {
						return this._start + ( Z( t ) ? this.totalDuration() : this.duration() ) /
							Math.abs( this._ts )
					}, e.rawTime = function( t ) {
						var e = this.parent || this._dp;
						return e ? t && ( !this._ts || this._repeat && this._time && this.totalProgress() <
							1 ) ? this._tTime % ( this._dur + this._rDelay ) : this._ts ? Gt( e.rawTime(
							t ), this ) : this._tTime : this._tTime
					}, e.globalTime = function( t ) {
						for ( var e = this, i = arguments.length ? t : e.rawTime(); e; ) i = e
							._start + i / ( e._ts || 1 ), e = e._dp;
						return i
					}, e.repeat = function( t ) {
						return arguments.length ? ( this._repeat = t === 1 / 0 ? -2 : t, ie(
							this ) ) : -2 === this._repeat ? 1 / 0 : this._repeat
					}, e.repeatDelay = function( t ) {
						return arguments.length ? ( this._rDelay = t, ie( this ) ) : this._rDelay
					}, e.yoyo = function( t ) {
						return arguments.length ? ( this._yoyo = t, this ) : this._yoyo
					}, e.seek = function( t, e ) {
						return this.totalTime( se( this, t ), Z( e ) )
					}, e.restart = function( t, e ) {
						return this.play().totalTime( t ? -this._delay : 0, Z( e ) )
					}, e.play = function( t, e ) {
						return null != t && this.seek( t, e ), this.reversed( !1 ).paused( !1 )
					}, e.reverse = function( t, e ) {
						return null != t && this.seek( t || this.totalDuration(), e ), this.reversed( !
							0 ).paused( !1 )
					}, e.pause = function( t, e ) {
						return null != t && this.seek( t, e ), this.paused( !0 )
					}, e.resume = function() {
						return this.paused( !1 )
					}, e.reversed = function( t ) {
						return arguments.length ? ( !!t !== this.reversed() && this.timeScale( -
							this._rts || ( t ? -1e-8 : 0 ) ), this ) : this._rts < 0
					}, e.invalidate = function() {
						return this._initted = this._act = 0, this._zTime = -1e-8, this
					}, e.isActive = function() {
						var t, e = this.parent || this._dp,
							i = this._start;
						return !( e && !( this._ts && this._initted && e.isActive() && ( t = e
							.rawTime( !0 ) ) >= i && t < this.endTime( !0 ) - U ) )
					}, e.eventCallback = function( t, e, i ) {
						var r = this.vars;
						return arguments.length > 1 ? ( e ? ( r[ t ] = e, i && ( r[ t +
								"Params" ] = i ), "onUpdate" === t && ( this._onUpdate = e ) ) :
							delete r[ t ], this ) : r[ t ]
					}, e.then = function( t ) {
						var e = this;
						return new Promise( ( function( i ) {
							var r = X( t ) ? t : Ft,
								s = function() {
									var t = e.then;
									e.then = null, X( r ) && ( r = r( e ) ) && ( r.then || r === e ) &&
										( e.then = t ), i( r ), e.then = t
								};
							e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime &&
								e._ts < 0 ? s() : e._prom = s
						} ) )
					}, e.kill = function() {
						xe( this )
					}, t
				}();
			Rt( Xe.prototype, {
				_time: 0,
				_start: 0,
				_end: 0,
				_tTime: 0,
				_tDur: 0,
				_dirty: 0,
				_repeat: 0,
				_yoyo: !1,
				parent: null,
				_initted: !1,
				_rDelay: 0,
				_ts: 1,
				_dp: 0,
				ratio: 0,
				_zTime: -1e-8,
				_prom: 0,
				_ps: !1,
				_rts: 1
			} );
			var Ge = function( t ) {
				function e( e, i ) {
					var r;
					return void 0 === e && ( e = {} ), ( r = t.call( this, e, i ) || this )
						.labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !
						!e.autoRemoveChildren, r._sort = Z( e.sortChildren ), r.parent && Zt(
							r.parent, n( r ) ), e.scrollTrigger && Kt( n( r ), e.scrollTrigger ),
						r
				}
				o( e, t );
				var i = e.prototype;
				return i.to = function( t, e, i ) {
					return new ii( t, Ot( arguments, 0, this ), se( this, G( e ) ?
						arguments[ 3 ] : i ) ), this
				}, i.from = function( t, e, i ) {
					return new ii( t, Ot( arguments, 1, this ), se( this, G( e ) ?
						arguments[ 3 ] : i ) ), this
				}, i.fromTo = function( t, e, i, r ) {
					return new ii( t, Ot( arguments, 2, this ), se( this, G( e ) ?
						arguments[ 4 ] : r ) ), this
				}, i.set = function( t, e, i ) {
					return e.duration = 0, e.parent = this, jt( e ).repeatDelay || ( e.repeat =
						0 ), e.immediateRender = !!e.immediateRender, new ii( t, e, se( this,
						i ), 1 ), this
				}, i.call = function( t, e, i ) {
					return Qt( this, ii.delayedCall( 0, t, e ), se( this, i ) )
				}, i.staggerTo = function( t, e, i, r, s, n, o ) {
					return i.duration = e, i.stagger = i.stagger || r, i.onComplete = n, i
						.onCompleteParams = o, i.parent = this, new ii( t, i, se( this, s ) ),
						this
				}, i.staggerFrom = function( t, e, i, r, s, n, o ) {
					return i.runBackwards = 1, jt( i ).immediateRender = Z( i.immediateRender ),
						this.staggerTo( t, e, i, r, s, n, o )
				}, i.staggerFromTo = function( t, e, i, r, s, n, o, a ) {
					return r.startAt = i, jt( r ).immediateRender = Z( r.immediateRender ),
						this.staggerTo( t, e, r, s, n, o, a )
				}, i.render = function( t, e, i ) {
					var r, s, n, o, a, l, u, c, d, p, f, m, g = this._time,
						v = this._dirty ? this.totalDuration() : this._tDur,
						_ = this._dur,
						y = this !== h && t > v - U && t >= 0 ? v : t < U ? 0 : t,
						w = this._zTime < 0 != t < 0 && ( this._initted || !_ );
					if ( y !== this._tTime || i || w ) {
						if ( g !== this._time && _ && ( y += this._time - g, t += this._time -
								g ), r = y, d = this._start, l = !( c = this._ts ), w && ( _ || ( g =
								this._zTime ), ( t || !e ) && ( this._zTime = t ) ), this._repeat ) {
							if ( f = this._yoyo, a = _ + this._rDelay, this._repeat < -1 && t <
								0 ) return this.totalTime( 100 * a + t, e, i );
							if ( r = St( y % a ), y === v ? ( o = this._repeat, r = _ ) : ( ( o = ~
									~( y / a ) ) && o === y / a && ( r = _, o-- ), r > _ && ( r = _ ) ),
								p = Xt( this._tTime, a ), !g && this._tTime && p !== o && ( p = o ),
								f && 1 & o && ( r = _ - r, m = 1 ), o !== p && !this._lock ) {
								var x = f && 1 & p,
									b = x === ( f && 1 & o );
								if ( o < p && ( x = !x ), g = x ? 0 : _, this._lock = 1, this.render(
										g || ( m ? 0 : St( o * a ) ), e, !_ )._lock = 0, !e && this.parent &&
									we( this, "onRepeat" ), this.vars.repeatRefresh && !m && ( this.invalidate()
										._lock = 1 ), g !== this._time || l !== !this._ts ) return this;
								if ( _ = this._dur, v = this._tDur, b && ( this._lock = 2, g = x ?
										_ : -1e-4, this.render( g, !0 ), this.vars.repeatRefresh && !m &&
										this.invalidate() ), this._lock = 0, !this._ts && !l ) return this;
								je( this, m )
							}
						}
						if ( this._hasPause && !this._forcing && this._lock < 2 && ( u =
								function( t, e, i ) {
									var r;
									if ( i > e )
										for ( r = t._first; r && r._start <= i; ) {
											if ( !r._dur && "isPause" === r.data && r._start > e ) return r;
											r = r._next
										} else
											for ( r = t._last; r && r._start >= i; ) {
												if ( !r._dur && "isPause" === r.data && r._start < e ) return r;
												r = r._prev
											}
								}( this, St( g ), St( r ) ) ) && ( y -= r - ( r = u._start ) ),
							this._tTime = y, this._time = r, this._act = !c, this._initted || (
								this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime =
								t, g = 0 ), !g && ( r || !_ && t >= 0 ) && !e && we( this,
								"onStart" ), r >= g && t >= 0 )
							for ( s = this._first; s; ) {
								if ( n = s._next, ( s._act || r >= s._start ) && s._ts && u !== s ) {
									if ( s.parent !== this ) return this.render( t, e, i );
									if ( s.render( s._ts > 0 ? ( r - s._start ) * s._ts : ( s._dirty ?
											s.totalDuration() : s._tDur ) + ( r - s._start ) * s._ts, e, i ),
										r !== this._time || !this._ts && !l ) {
										u = 0, n && ( y += this._zTime = -1e-8 );
										break
									}
								}
								s = n
							} else {
								s = this._last;
								for ( var M = t < 0 ? t : r; s; ) {
									if ( n = s._prev, ( s._act || M <= s._end ) && s._ts && u !== s ) {
										if ( s.parent !== this ) return this.render( t, e, i );
										if ( s.render( s._ts > 0 ? ( M - s._start ) * s._ts : ( s._dirty ?
												s.totalDuration() : s._tDur ) + ( M - s._start ) * s._ts, e, i ),
											r !== this._time || !this._ts && !l ) {
											u = 0, n && ( y += this._zTime = M ? -1e-8 : U );
											break
										}
									}
									s = n
								}
							}
						if ( u && !e && ( this.pause(), u.render( r >= g ? 0 : -1e-8 )._zTime =
								r >= g ? 1 : -1, this._ts ) ) return this._start = d, $t( this ),
							this.render( t, e, i );
						this._onUpdate && !e && we( this, "onUpdate", !0 ), ( y === v && v >=
							this.totalDuration() || !y && g ) && ( d !== this._start && Math.abs(
							c ) === Math.abs( this._ts ) || this._lock || ( ( t || !_ ) && ( y ===
								v && this._ts > 0 || !y && this._ts < 0 ) && Nt( this, 1 ), e ||
							t < 0 && !g || !y && !g || ( we( this, y === v ? "onComplete" :
								"onReverseComplete", !0 ), this._prom && !( y < v && this.timeScale() >
								0 ) && this._prom() ) ) )
					}
					return this
				}, i.add = function( t, e ) {
					var i = this;
					if ( G( e ) || ( e = se( this, e ) ), !( t instanceof Xe ) ) {
						if ( tt( t ) ) return t.forEach( ( function( t ) {
							return i.add( t, e )
						} ) ), this;
						if ( Y( t ) ) return this.addLabel( t, e );
						if ( !X( t ) ) return this;
						t = ii.delayedCall( 0, t )
					}
					return this !== t ? Qt( this, t, e ) : this
				}, i.getChildren = function( t, e, i, r ) {
					void 0 === t && ( t = !0 ), void 0 === e && ( e = !0 ), void 0 === i &&
						( i = !0 ), void 0 === r && ( r = -I );
					for ( var s = [], n = this._first; n; ) n._start >= r && ( n instanceof ii ?
						e && s.push( n ) : ( i && s.push( n ), t && s.push.apply( s, n.getChildren( !
							0, e, i ) ) ) ), n = n._next;
					return s
				}, i.getById = function( t ) {
					for ( var e = this.getChildren( 1, 1, 1 ), i = e.length; i--; )
						if ( e[ i ].vars.id === t ) return e[ i ]
				}, i.remove = function( t ) {
					return Y( t ) ? this.removeLabel( t ) : X( t ) ? this.killTweensOf( t ) :
						( Bt( this, t ), t === this._recent && ( this._recent = this._last ),
							Vt( this ) )
				}, i.totalTime = function( e, i ) {
					return arguments.length ? ( this._forcing = 1, !this._dp && this._ts &&
						( this._start = St( ke.time - ( this._ts > 0 ? e / this._ts : ( this
							.totalDuration() - e ) / -this._ts ) ) ), t.prototype.totalTime.call(
							this, e, i ), this._forcing = 0, this ) : this._tTime
				}, i.addLabel = function( t, e ) {
					return this.labels[ t ] = se( this, e ), this
				}, i.removeLabel = function( t ) {
					return delete this.labels[ t ], this
				}, i.addPause = function( t, e, i ) {
					var r = ii.delayedCall( 0, e || ft, i );
					return r.data = "isPause", this._hasPause = 1, Qt( this, r, se( this,
						t ) )
				}, i.removePause = function( t ) {
					var e = this._first;
					for ( t = se( this, t ); e; ) e._start === t && "isPause" === e.data &&
						Nt( e ), e = e._next
				}, i.killTweensOf = function( t, e, i ) {
					for ( var r = this.getTweensOf( t, i ), s = r.length; s--; ) $e !== r[
						s ] && r[ s ].kill( t, e );
					return this
				}, i.getTweensOf = function( t, e ) {
					for ( var i, r = [], s = ue( t ), n = this._first, o = G( e ); n; ) n instanceof ii ?
						Pt( n._targets, s ) && ( o ? ( !$e || n._initted && n._ts ) && n.globalTime(
							0 ) <= e && n.globalTime( n.totalDuration() ) > e : !e || n.isActive() ) &&
						r.push( n ) : ( i = n.getTweensOf( s, e ) ).length && r.push.apply( r,
							i ), n = n._next;
					return r
				}, i.tweenTo = function( t, e ) {
					e = e || {};
					var i = this,
						r = se( i, t ),
						s = e,
						n = s.startAt,
						o = s.onStart,
						a = s.onStartParams,
						h = s.immediateRender,
						l = ii.to( i, Rt( {
							ease: "none",
							lazy: !1,
							immediateRender: !1,
							time: r,
							overwrite: "auto",
							duration: e.duration || Math.abs( ( r - ( n && "time" in n ? n.time :
								i._time ) ) / i.timeScale() ) || U,
							onStart: function() {
								i.pause();
								var t = e.duration || Math.abs( ( r - i._time ) / i.timeScale() );
								l._dur !== t && ee( l, t, 0, 1 ).render( l._time, !0, !0 ), o &&
									o.apply( l, a || [] )
							}
						}, e ) );
					return h ? l.render( 0 ) : l
				}, i.tweenFromTo = function( t, e, i ) {
					return this.tweenTo( e, Rt( {
						startAt: {
							time: se( this, t )
						}
					}, i ) )
				}, i.recent = function() {
					return this._recent
				}, i.nextLabel = function( t ) {
					return void 0 === t && ( t = this._time ), ye( this, se( this, t ) )
				}, i.previousLabel = function( t ) {
					return void 0 === t && ( t = this._time ), ye( this, se( this, t ), 1 )
				}, i.currentLabel = function( t ) {
					return arguments.length ? this.seek( t, !0 ) : this.previousLabel(
						this._time + U )
				}, i.shiftChildren = function( t, e, i ) {
					void 0 === i && ( i = 0 );
					for ( var r, s = this._first, n = this.labels; s; ) s._start >= i && (
						s._start += t, s._end += t ), s = s._next;
					if ( e )
						for ( r in n ) n[ r ] >= i && ( n[ r ] += t );
					return Vt( this )
				}, i.invalidate = function() {
					var e = this._first;
					for ( this._lock = 0; e; ) e.invalidate(), e = e._next;
					return t.prototype.invalidate.call( this )
				}, i.clear = function( t ) {
					void 0 === t && ( t = !0 );
					for ( var e, i = this._first; i; ) e = i._next, this.remove( i ), i =
						e;
					return this._dp && ( this._time = this._tTime = this._pTime = 0 ), t &&
						( this.labels = {} ), Vt( this )
				}, i.totalDuration = function( t ) {
					var e, i, r, s = 0,
						n = this,
						o = n._last,
						a = I;
					if ( arguments.length ) return n.timeScale( ( n._repeat < 0 ? n.duration() :
						n.totalDuration() ) / ( n.reversed() ? -t : t ) );
					if ( n._dirty ) {
						for ( r = n.parent; o; ) e = o._prev, o._dirty && o.totalDuration(),
							( i = o._start ) > a && n._sort && o._ts && !n._lock ? ( n._lock = 1,
								Qt( n, o, i - o._delay, 1 )._lock = 0 ) : a = i, i < 0 && o._ts &&
							( s -= i, ( !r && !n._dp || r && r.smoothChildTiming ) && ( n._start +=
								i / n._ts, n._time -= i, n._tTime -= i ), n.shiftChildren( -i, !1, -
								Infinity ), a = 0 ), o._end > s && o._ts && ( s = o._end ), o = e;
						ee( n, n === h && n._time > s ? n._time : s, 1, 1 ), n._dirty = 0
					}
					return n._tDur
				}, e.updateRoot = function( t ) {
					if ( h._ts && ( Ct( h, Gt( t, h ) ), p = ke.frame ), ke.frame >= wt ) {
						wt += z.autoSleep || 120;
						var e = h._first;
						if ( ( !e || !e._ts ) && z.autoSleep && ke._listeners.length < 2 ) {
							for ( ; e && !e._ts; ) e = e._next;
							e || ke.sleep()
						}
					}
				}, e
			}( Xe );
			Rt( Ge.prototype, {
				_lock: 0,
				_hasPause: 0,
				_forcing: 0
			} );
			var $e, He = function( t, e, i, r, s, n, o ) {
					var a, h, l, u, c, d, p, f, m = new gi( this._pt, t, e, 0, 1, ui, null,
							s ),
						g = 0,
						v = 0;
					for ( m.b = i, m.e = r, i += "", ( p = ~( r += "" ).indexOf( "random(" ) ) &&
						( r = ve( r ) ), n && ( n( f = [ i, r ], t, e ), i = f[ 0 ], r = f[ 1 ] ),
						h = i.match( st ) || []; a = st.exec( r ); ) u = a[ 0 ], c = r.substring(
						g, a.index ), l ? l = ( l + 1 ) % 5 : "rgba(" === c.substr( -5 ) && (
						l = 1 ), u !== h[ v++ ] && ( d = parseFloat( h[ v - 1 ] ) || 0, m._pt = {
						_next: m._pt,
						p: c || 1 === v ? c : ",",
						s: d,
						c: "=" === u.charAt( 1 ) ? parseFloat( u.substr( 2 ) ) * ( "-" === u.charAt(
							0 ) ? -1 : 1 ) : parseFloat( u ) - d,
						m: l && l < 4 ? Math.round : 0
					}, g = st.lastIndex );
					return m.c = g < r.length ? r.substring( g, r.length ) : "", m.fp = o, (
						nt.test( r ) || p ) && ( m.e = 0 ), this._pt = m, m
				},
				Ze = function( t, e, i, r, s, n, o, a, h ) {
					X( r ) && ( r = r( s || 0, t, n ) );
					var l, u = t[ e ],
						c = "get" !== i ? i : X( u ) ? h ? t[ e.indexOf( "set" ) || !X( t[
							"get" + e.substr( 3 ) ] ) ? e : "get" + e.substr( 3 ) ]( h ) : t[ e ]() :
						u,
						d = X( u ) ? h ? ni : si : ri;
					if ( Y( r ) && ( ~r.indexOf( "random(" ) && ( r = ve( r ) ), "=" === r.charAt(
							1 ) && ( r = parseFloat( c ) + parseFloat( r.substr( 2 ) ) * ( "-" ===
							r.charAt( 0 ) ? -1 : 1 ) + ( ae( c ) || 0 ) ) ), c !== r ) return isNaN(
						c * r ) ? ( !u && !( e in t ) && ct( e, r ), He.call( this, t, e, c,
						r, d, a || z.stringFilter, h ) ) : ( l = new gi( this._pt, t, e, +c ||
						0, r - ( c || 0 ), "boolean" == typeof u ? li : hi, 0, d ), h && ( l
						.fp = h ), o && l.modifier( o, this, t ), this._pt = l )
				},
				Qe = function( t, e, i, r, s, n ) {
					var o, a, h, l;
					if ( _t[ t ] && !1 !== ( o = new _t[ t ] ).init( s, o.rawVars ? e[ t ] :
							function( t, e, i, r, s ) {
								if ( X( t ) && ( t = Je( t, s, e, i, r ) ), !H( t ) || t.style && t.nodeType ||
									tt( t ) || J( t ) ) return Y( t ) ? Je( t, s, e, i, r ) : t;
								var n, o = {};
								for ( n in t ) o[ n ] = Je( t[ n ], s, e, i, r );
								return o
							}( e[ t ], r, s, n, i ), i, r, n ) && ( i._pt = a = new gi( i._pt, s,
							t, 0, 1, o.render, o, 0, o.priority ), i !== f ) )
						for ( h = i._ptLookup[ i._targets.indexOf( s ) ], l = o._props.length; l--; )
							h[ o._props[ l ] ] = a;
					return o
				},
				Ke = function t( e, i ) {
					var r, s, n, o, l, u, c, d, p, f, m, g, v, _ = e.vars,
						y = _.ease,
						w = _.startAt,
						x = _.immediateRender,
						b = _.lazy,
						M = _.onUpdate,
						T = _.onUpdateParams,
						A = _.callbackScope,
						E = _.runBackwards,
						S = _.yoyoEase,
						P = _.keyframes,
						O = _.autoRevert,
						L = e._dur,
						C = e._startAt,
						k = e._targets,
						F = e.parent,
						R = F && "nested" === F.data ? F.parent._targets : k,
						z = "auto" === e._overwrite && !a,
						I = e.timeline;
					if ( I && ( !P || !y ) && ( y = "none" ), e._ease = Be( y, D.ease ), e._yEase =
						S ? Ue( Be( !0 === S ? y : S, D.ease ) ) : 0, S && e._yoyo && !e._repeat &&
						( S = e._yEase, e._yEase = e._ease, e._ease = S ), !I ) {
						if ( g = ( d = k[ 0 ] ? Tt( k[ 0 ] ).harness : 0 ) && _[ d.prop ], r =
							Ut( _, mt ), C && C.render( -1, !0 ).kill(), w ) {
							if ( Nt( e._startAt = ii.set( k, Rt( {
									data: "isStart",
									overwrite: !1,
									parent: F,
									immediateRender: !0,
									lazy: Z( b ),
									startAt: null,
									delay: 0,
									onUpdate: M,
									onUpdateParams: T,
									callbackScope: A,
									stagger: 0
								}, w ) ) ), x )
								if ( i > 0 ) O || ( e._startAt = 0 );
								else if ( L && !( i < 0 && C ) ) return void( i && ( e._zTime = i ) )
						} else if ( E && L )
							if ( C ) !O && ( e._startAt = 0 );
							else if ( i && ( x = !1 ), n = Rt( {
								overwrite: !1,
								data: "isFromStart",
								lazy: x && Z( b ),
								immediateRender: x,
								stagger: 0,
								parent: F
							}, r ), g && ( n[ d.prop ] = g ), Nt( e._startAt = ii.set( k, n ) ), x ) {
							if ( !i ) return
						} else t( e._startAt, U );
						for ( e._pt = 0, b = L && Z( b ) || b && !L, s = 0; s < k.length; s++ ) {
							if ( c = ( l = k[ s ] )._gsap || Mt( k )[ s ]._gsap, e._ptLookup[ s ] =
								f = {}, vt[ c.id ] && gt.length && Lt(), m = R === k ? s : R.indexOf(
									l ), d && !1 !== ( p = new d ).init( l, g || r, e, m, R ) && ( e._pt =
									o = new gi( e._pt, l, p.name, 0, 1, p.render, p, 0, p.priority ), p._props
									.forEach( ( function( t ) {
										f[ t ] = o
									} ) ), p.priority && ( u = 1 ) ), !d || g )
								for ( n in r ) _t[ n ] && ( p = Qe( n, r, e, m, l, R ) ) ? p.priority &&
									( u = 1 ) : f[ n ] = o = Ze.call( e, l, n, "get", r[ n ], m, R, 0, _
										.stringFilter );
							e._op && e._op[ s ] && e.kill( l, e._op[ s ] ), z && e._pt && ( $e = e,
									h.killTweensOf( l, f, e.globalTime( 0 ) ), v = !e.parent, $e = 0 ),
								e._pt && b && ( vt[ c.id ] = 1 )
						}
						u && mi( e ), e._onInit && e._onInit( e )
					}
					e._from = !I && !!_.runBackwards, e._onUpdate = M, e._initted = ( !e._op ||
						e._pt ) && !v
				},
				Je = function( t, e, i, r, s ) {
					return X( t ) ? t.call( e, i, r, s ) : Y( t ) && ~t.indexOf( "random(" ) ?
						ve( t ) : t
				},
				ti = bt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
				ei = ( ti + ",id,stagger,delay,duration,paused,scrollTrigger" ).split(
					"," ),
				ii = function( t ) {
					function e( e, i, r, s ) {
						var o;
						"number" == typeof i && ( r.duration = i, i = r, r = null );
						var l, u, c, d, p, f, m, g, v = ( o = t.call( this, s ? i : jt( i ), r ) ||
								this ).vars,
							_ = v.duration,
							y = v.delay,
							w = v.immediateRender,
							x = v.stagger,
							b = v.overwrite,
							M = v.keyframes,
							T = v.defaults,
							A = v.scrollTrigger,
							E = v.yoyoEase,
							S = o.parent,
							P = ( tt( e ) || J( e ) ? G( e[ 0 ] ) : "length" in i ) ? [ e ] : ue(
								e );
						if ( o._targets = P.length ? Mt( P ) : dt( "GSAP target " + e +
								" not found. https://greensock.com", !z.nullTargetWarn ) || [], o._ptLookup = [],
							o._overwrite = b, M || x || K( _ ) || K( y ) ) {
							if ( i = o.vars, ( l = o.timeline = new Ge( {
									data: "nested",
									defaults: T || {}
								} ) ).kill(), l.parent = l._dp = n( o ), l._start = 0, M ) Rt( l.vars
								.defaults, {
									ease: "none"
								} ), M.forEach( ( function( t ) {
								return l.to( P, t, ">" )
							} ) );
							else {
								if ( d = P.length, m = x ? de( x ) : ft, H( x ) )
									for ( p in x ) ~ti.indexOf( p ) && ( g || ( g = {} ), g[ p ] = x[ p ] );
								for ( u = 0; u < d; u++ ) {
									for ( p in c = {}, i ) ei.indexOf( p ) < 0 && ( c[ p ] = i[ p ] );
									c.stagger = 0, E && ( c.yoyoEase = E ), g && Dt( c, g ), f = P[ u ],
										c.duration = +Je( _, n( o ), u, f, P ), c.delay = ( +Je( y, n( o ),
											u, f, P ) || 0 ) - o._delay, !x && 1 === d && c.delay && ( o._delay =
											y = c.delay, o._start += y, c.delay = 0 ), l.to( f, c, m( u, f, P ) )
								}
								l.duration() ? _ = y = 0 : o.timeline = 0
							}
							_ || o.duration( _ = l.duration() )
						} else o.timeline = 0;
						return !0 !== b || a || ( $e = n( o ), h.killTweensOf( P ), $e = 0 ), S &&
							Zt( S, n( o ) ), ( w || !_ && !M && o._start === St( S._time ) && Z( w ) &&
								Wt( n( o ) ) && "nested" !== S.data ) && ( o._tTime = -1e-8, o.render(
								Math.max( 0, -y ) ) ), A && Kt( n( o ), A ), o
					}
					o( e, t );
					var i = e.prototype;
					return i.render = function( t, e, i ) {
						var r, s, n, o, a, h, l, u, c, d = this._time,
							p = this._tDur,
							f = this._dur,
							m = t > p - U && t >= 0 ? p : t < U ? 0 : t;
						if ( f ) {
							if ( m !== this._tTime || !t || i || !this._initted && this._tTime ||
								this._startAt && this._zTime < 0 != t < 0 ) {
								if ( r = m, u = this.timeline, this._repeat ) {
									if ( o = f + this._rDelay, this._repeat < -1 && t < 0 ) return this
										.totalTime( 100 * o + t, e, i );
									if ( r = St( m % o ), m === p ? ( n = this._repeat, r = f ) : ( ( n = ~
											~( m / o ) ) && n === m / o && ( r = f, n-- ), r > f && ( r = f ) ),
										( h = this._yoyo && 1 & n ) && ( c = this._yEase, r = f - r ), a =
										Xt( this._tTime, o ), r === d && !i && this._initted ) return this;
									n !== a && ( u && this._yEase && je( u, h ), !this.vars.repeatRefresh ||
										h || this._lock || ( this._lock = i = 1, this.render( St( o * n ), !
											0 ).invalidate()._lock = 0 ) )
								}
								if ( !this._initted ) {
									if ( Jt( this, t < 0 ? t : r, i, e ) ) return this._tTime = 0, this;
									if ( f !== this._dur ) return this.render( t, e, i )
								}
								for ( this._tTime = m, this._time = r, !this._act && this._ts && (
										this._act = 1, this._lazy = 0 ), this.ratio = l = ( c || this._ease )
									( r / f ), this._from && ( this.ratio = l = 1 - l ), r && !d && !e &&
									we( this, "onStart" ), s = this._pt; s; ) s.r( l, s.d ), s = s._next;
								u && u.render( t < 0 ? t : !r && h ? -1e-8 : u._dur * l, e, i ) ||
									this._startAt && ( this._zTime = t ), this._onUpdate && !e && ( t <
										0 && this._startAt && this._startAt.render( t, !0, i ), we( this,
											"onUpdate" ) ), this._repeat && n !== a && this.vars.onRepeat &&
									!e && this.parent && we( this, "onRepeat" ), m !== this._tDur && m ||
									this._tTime !== m || ( t < 0 && this._startAt && !this._onUpdate &&
										this._startAt.render( t, !0, !0 ), ( t || !f ) && ( m === this._tDur &&
											this._ts > 0 || !m && this._ts < 0 ) && Nt( this, 1 ), e || t < 0 &&
										!d || !m && !d || ( we( this, m === p ? "onComplete" :
											"onReverseComplete", !0 ), this._prom && !( m < p && this.timeScale() >
											0 ) && this._prom() ) )
							}
						} else ! function( t, e, i, r ) {
							var s, n, o, a = t.ratio,
								h = e < 0 || !e && ( !t._start && te( t ) || ( t._ts < 0 || t._dp._ts <
									0 ) && "isFromStart" !== t.data && "isStart" !== t.data ) ? 0 : 1,
								l = t._rDelay,
								u = 0;
							if ( l && t._repeat && ( u = oe( 0, t._tDur, e ), n = Xt( u, l ), o =
									Xt( t._tTime, l ), t._yoyo && 1 & n && ( h = 1 - h ), n !== o && (
										a = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate() )
								), h !== a || r || t._zTime === U || !e && t._zTime ) {
								if ( !t._initted && Jt( t, e, r, i ) ) return;
								for ( o = t._zTime, t._zTime = e || ( i ? U : 0 ), i || ( i = e &&
										!o ), t.ratio = h, t._from && ( h = 1 - h ), t._time = 0, t._tTime =
									u, i || we( t, "onStart" ), s = t._pt; s; ) s.r( h, s.d ), s = s._next;
								t._startAt && e < 0 && t._startAt.render( e, !0, !0 ), t._onUpdate &&
									!i && we( t, "onUpdate" ), u && t._repeat && !i && t.parent && we(
										t, "onRepeat" ), ( e >= t._tDur || e < 0 ) && t.ratio === h && (
										h && Nt( t, 1 ), i || ( we( t, h ? "onComplete" :
											"onReverseComplete", !0 ), t._prom && t._prom() ) )
							} else t._zTime || ( t._zTime = e )
						}( this, t, e, i );
						return this
					}, i.targets = function() {
						return this._targets
					}, i.invalidate = function() {
						return this._pt = this._op = this._startAt = this._onUpdate = this._lazy =
							this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(),
							t.prototype.invalidate.call( this )
					}, i.kill = function( t, e ) {
						if ( void 0 === e && ( e = "all" ), !( t || e && "all" !== e ) ) return this
							._lazy = this._pt = 0, this.parent ? xe( this ) : this;
						if ( this.timeline ) {
							var i = this.timeline.totalDuration();
							return this.timeline.killTweensOf( t, e, $e && !0 !== $e.vars.overwrite )
								._first || xe( this ), this.parent && i !== this.timeline.totalDuration() &&
								ee( this, this._dur * this.timeline._tDur / i, 0, 1 ), this
						}
						var r, s, n, o, a, h, l, u = this._targets,
							c = t ? ue( t ) : u,
							d = this._ptLookup,
							p = this._pt;
						if ( ( !e || "all" === e ) && function( t, e ) {
								for ( var i = t.length, r = i === e.length; r && i-- && t[ i ] === e[
										i ]; );
								return i < 0
							}( u, c ) ) return "all" === e && ( this._pt = 0 ), xe( this );
						for ( r = this._op = this._op || [], "all" !== e && ( Y( e ) && ( a = {},
								Et( e, ( function( t ) {
									return a[ t ] = 1
								} ) ), e = a ), e = function( t, e ) {
								var i, r, s, n, o = t[ 0 ] ? Tt( t[ 0 ] ).harness : 0,
									a = o && o.aliases;
								if ( !a ) return e;
								for ( r in i = Dt( {}, e ), a )
									if ( r in i )
										for ( s = ( n = a[ r ].split( "," ) ).length; s--; ) i[ n[ s ] ] =
											i[ r ];
								return i
							}( u, e ) ), l = u.length; l--; )
							if ( ~c.indexOf( u[ l ] ) )
								for ( a in s = d[ l ], "all" === e ? ( r[ l ] = e, o = s, n = {} ) :
									( n = r[ l ] = r[ l ] || {}, o = e ), o )( h = s && s[ a ] ) && (
									"kill" in h.d && !0 !== h.d.kill( a ) || Bt( this, h, "_pt" ),
									delete s[ a ] ), "all" !== n && ( n[ a ] = 1 );
						return this._initted && !this._pt && p && xe( this ), this
					}, e.to = function( t, i ) {
						return new e( t, i, arguments[ 2 ] )
					}, e.from = function( t, i ) {
						return new e( t, Ot( arguments, 1 ) )
					}, e.delayedCall = function( t, i, r, s ) {
						return new e( i, 0, {
							immediateRender: !1,
							lazy: !1,
							overwrite: !1,
							delay: t,
							onComplete: i,
							onReverseComplete: i,
							onCompleteParams: r,
							onReverseCompleteParams: r,
							callbackScope: s
						} )
					}, e.fromTo = function( t, i, r ) {
						return new e( t, Ot( arguments, 2 ) )
					}, e.set = function( t, i ) {
						return i.duration = 0, i.repeatDelay || ( i.repeat = 0 ), new e( t, i )
					}, e.killTweensOf = function( t, e, i ) {
						return h.killTweensOf( t, e, i )
					}, e
				}( Xe );
			Rt( ii.prototype, {
				_targets: [],
				_lazy: 0,
				_startAt: 0,
				_op: 0,
				_onInit: 0
			} ), Et( "staggerTo,staggerFrom,staggerFromTo", ( function( t ) {
				ii[ t ] = function() {
					var e = new Ge,
						i = he.call( arguments, 0 );
					return i.splice( "staggerFromTo" === t ? 5 : 4, 0, 0 ), e[ t ].apply(
						e, i )
				}
			} ) );
			var ri = function( t, e, i ) {
					return t[ e ] = i
				},
				si = function( t, e, i ) {
					return t[ e ]( i )
				},
				ni = function( t, e, i, r ) {
					return t[ e ]( r.fp, i )
				},
				oi = function( t, e, i ) {
					return t.setAttribute( e, i )
				},
				ai = function( t, e ) {
					return X( t[ e ] ) ? si : $( t[ e ] ) && t.setAttribute ? oi : ri
				},
				hi = function( t, e ) {
					return e.set( e.t, e.p, Math.round( 1e4 * ( e.s + e.c * t ) ) / 1e4, e )
				},
				li = function( t, e ) {
					return e.set( e.t, e.p, !!( e.s + e.c * t ), e )
				},
				ui = function( t, e ) {
					var i = e._pt,
						r = "";
					if ( !t && e.b ) r = e.b;
					else if ( 1 === t && e.e ) r = e.e;
					else {
						for ( ; i; ) r = i.p + ( i.m ? i.m( i.s + i.c * t ) : Math.round( 1e4 *
							( i.s + i.c * t ) ) / 1e4 ) + r, i = i._next;
						r += e.c
					}
					e.set( e.t, e.p, r, e )
				},
				ci = function( t, e ) {
					for ( var i = e._pt; i; ) i.r( t, i.d ), i = i._next
				},
				di = function( t, e, i, r ) {
					for ( var s, n = this._pt; n; ) s = n._next, n.p === r && n.modifier( t,
						e, i ), n = s
				},
				pi = function( t ) {
					for ( var e, i, r = this._pt; r; ) i = r._next, r.p === t && !r.op || r.op ===
						t ? Bt( this, r, "_pt" ) : r.dep || ( e = 1 ), r = i;
					return !e
				},
				fi = function( t, e, i, r ) {
					r.mSet( t, e, r.m.call( r.tween, i, r.mt ), r )
				},
				mi = function( t ) {
					for ( var e, i, r, s, n = t._pt; n; ) {
						for ( e = n._next, i = r; i && i.pr > n.pr; ) i = i._next;
						( n._prev = i ? i._prev : s ) ? n._prev._next = n: r = n, ( n._next = i ) ?
							i._prev = n : s = n, n = e
					}
					t._pt = r
				},
				gi = function() {
					function t( t, e, i, r, s, n, o, a, h ) {
						this.t = e, this.s = r, this.c = s, this.p = i, this.r = n || hi, this.d =
							o || this, this.set = a || ri, this.pr = h || 0, this._next = t, t &&
							( t._prev = this )
					}
					return t.prototype.modifier = function( t, e, i ) {
						this.mSet = this.mSet || this.set, this.set = fi, this.m = t, this.mt =
							i, this.tween = e
					}, t
				}();
			Et( bt +
					"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
					( function( t ) {
						return mt[ t ] = 1
					} ) ), ht.TweenMax = ht.TweenLite = ii, ht.TimelineLite = ht.TimelineMax =
				Ge, h = new Ge( {
					sortChildren: !1,
					defaults: D,
					autoRemoveChildren: !0,
					id: "root",
					smoothChildTiming: !0
				} ), z.stringFilter = Ce;
			var vi = {
				registerPlugin: function() {
					for ( var t = arguments.length, e = new Array( t ), i = 0; i < t; i++ )
						e[ i ] = arguments[ i ];
					e.forEach( ( function( t ) {
						return be( t )
					} ) )
				},
				timeline: function( t ) {
					return new Ge( t )
				},
				getTweensOf: function( t, e ) {
					return h.getTweensOf( t, e )
				},
				getProperty: function( t, e, i, r ) {
					Y( t ) && ( t = ue( t )[ 0 ] );
					var s = Tt( t || {} ).get,
						n = i ? Ft : kt;
					return "native" === i && ( i = "" ), t ? e ? n( ( _t[ e ] && _t[ e ].get ||
						s )( t, e, i, r ) ) : function( e, i, r ) {
						return n( ( _t[ e ] && _t[ e ].get || s )( t, e, i, r ) )
					} : t
				},
				quickSetter: function( t, e, i ) {
					if ( ( t = ue( t ) ).length > 1 ) {
						var r = t.map( ( function( t ) {
								return wi.quickSetter( t, e, i )
							} ) ),
							s = r.length;
						return function( t ) {
							for ( var e = s; e--; ) r[ e ]( t )
						}
					}
					t = t[ 0 ] || {};
					var n = _t[ e ],
						o = Tt( t ),
						a = o.harness && ( o.harness.aliases || {} )[ e ] || e,
						h = n ? function( e ) {
							var r = new n;
							f._pt = 0, r.init( t, i ? e + i : e, f, 0, [ t ] ), r.render( 1, r ),
								f._pt && ci( 1, f )
						} : o.set( t, a );
					return n ? h : function( e ) {
						return h( t, a, i ? e + i : e, o, 1 )
					}
				},
				isTweening: function( t ) {
					return h.getTweensOf( t, !0 ).length > 0
				},
				defaults: function( t ) {
					return t && t.ease && ( t.ease = Be( t.ease, D.ease ) ), It( D, t || {} )
				},
				config: function( t ) {
					return It( z, t || {} )
				},
				registerEffect: function( t ) {
					var e = t.name,
						i = t.effect,
						r = t.plugins,
						s = t.defaults,
						n = t.extendTimeline;
					( r || "" ).split( "," ).forEach( ( function( t ) {
						return t && !_t[ t ] && !ht[ t ] && dt( e + " effect requires " +
							t + " plugin." )
					} ) ), yt[ e ] = function( t, e, r ) {
						return i( ue( t ), Rt( e || {}, s ), r )
					}, n && ( Ge.prototype[ e ] = function( t, i, r ) {
						return this.add( yt[ e ]( t, H( i ) ? i : ( r = i ) && {}, this ),
							r )
					} )
				},
				registerEase: function( t, e ) {
					Re[ t ] = Be( e )
				},
				parseEase: function( t, e ) {
					return arguments.length ? Be( t, e ) : Re
				},
				getById: function( t ) {
					return h.getById( t )
				},
				exportRoot: function( t, e ) {
					void 0 === t && ( t = {} );
					var i, r, s = new Ge( t );
					for ( s.smoothChildTiming = Z( t.smoothChildTiming ), h.remove( s ), s
						._dp = 0, s._time = s._tTime = h._time, i = h._first; i; ) r = i._next, !
						e && !i._dur && i instanceof ii && i.vars.onComplete === i._targets[
							0 ] || Qt( s, i, i._start - i._delay ), i = r;
					return Qt( h, s, 0 ), s
				},
				utils: {
					wrap: function t( e, i, r ) {
						var s = i - e;
						return tt( e ) ? ge( e, t( 0, e.length ), i ) : ne( r, ( function( t ) {
							return ( s + ( t - e ) % s ) % s + e
						} ) )
					},
					wrapYoyo: function t( e, i, r ) {
						var s = i - e,
							n = 2 * s;
						return tt( e ) ? ge( e, t( 0, e.length - 1 ), i ) : ne( r, ( function(
							t ) {
							return e + ( ( t = ( n + ( t - e ) % n ) % n || 0 ) > s ? n - t :
								t )
						} ) )
					},
					distribute: de,
					random: me,
					snap: fe,
					normalize: function( t, e, i ) {
						return _e( t, e, 0, 1, i )
					},
					getUnit: ae,
					clamp: function( t, e, i ) {
						return ne( i, ( function( i ) {
							return oe( t, e, i )
						} ) )
					},
					splitColor: Ee,
					toArray: ue,
					mapRange: _e,
					pipe: function() {
						for ( var t = arguments.length, e = new Array( t ), i = 0; i < t; i++ )
							e[ i ] = arguments[ i ];
						return function( t ) {
							return e.reduce( ( function( t, e ) {
								return e( t )
							} ), t )
						}
					},
					unitize: function( t, e ) {
						return function( i ) {
							return t( parseFloat( i ) ) + ( e || ae( i ) )
						}
					},
					interpolate: function t( e, i, r, s ) {
						var n = isNaN( e + i ) ? 0 : function( t ) {
							return ( 1 - t ) * e + t * i
						};
						if ( !n ) {
							var o, a, h, l, u, c = Y( e ),
								d = {};
							if ( !0 === r && ( s = 1 ) && ( r = null ), c ) e = {
								p: e
							}, i = {
								p: i
							};
							else if ( tt( e ) && !tt( i ) ) {
								for ( h = [], l = e.length, u = l - 2, a = 1; a < l; a++ ) h.push(
									t( e[ a - 1 ], e[ a ] ) );
								l--, n = function( t ) {
									t *= l;
									var e = Math.min( u, ~~t );
									return h[ e ]( t - e )
								}, r = i
							} else s || ( e = Dt( tt( e ) ? [] : {}, e ) );
							if ( !h ) {
								for ( o in i ) Ze.call( d, e, o, "get", i[ o ] );
								n = function( t ) {
									return ci( t, d ) || ( c ? e.p : e )
								}
							}
						}
						return ne( r, n )
					},
					shuffle: ce
				},
				install: ut,
				effects: yt,
				ticker: ke,
				updateRoot: Ge.updateRoot,
				plugins: _t,
				globalTimeline: h,
				core: {
					PropTween: gi,
					globals: pt,
					Tween: ii,
					Timeline: Ge,
					Animation: Xe,
					getCache: Tt,
					_removeLinkedListItem: Bt,
					suppressOverwrites: function( t ) {
						return a = t
					}
				}
			};
			Et( "to,from,fromTo,delayedCall,set,killTweensOf", ( function( t ) {
				return vi[ t ] = ii[ t ]
			} ) ), ke.add( Ge.updateRoot ), f = vi.to( {}, {
				duration: 0
			} );
			var _i = function( t, e ) {
					for ( var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; ) i = i
						._next;
					return i
				},
				yi = function( t, e ) {
					return {
						name: t,
						rawVars: 1,
						init: function( t, i, r ) {
							r._onInit = function( t ) {
								var r, s;
								if ( Y( i ) && ( r = {}, Et( i, ( function( t ) {
										return r[ t ] = 1
									} ) ), i = r ), e ) {
									for ( s in r = {}, i ) r[ s ] = e( i[ s ] );
									i = r
								}! function( t, e ) {
									var i, r, s, n = t._targets;
									for ( i in e )
										for ( r = n.length; r--; )( s = t._ptLookup[ r ][ i ] ) && ( s =
											s.d ) && ( s._pt && ( s = _i( s, i ) ), s && s.modifier && s.modifier(
											e[ i ], t, n[ r ], i ) )
								}( t, i )
							}
						}
					}
				},
				wi = vi.registerPlugin( {
					name: "attr",
					init: function( t, e, i, r, s ) {
						var n, o;
						for ( n in e )( o = this.add( t, "setAttribute", ( t.getAttribute( n ) ||
							0 ) + "", e[ n ], r, s, 0, 0, n ) ) && ( o.op = n ), this._props.push(
							n )
					}
				}, {
					name: "endArray",
					init: function( t, e ) {
						for ( var i = e.length; i--; ) this.add( t, i, t[ i ] || 0, e[ i ] )
					}
				}, yi( "roundProps", pe ), yi( "modifiers" ), yi( "snap", fe ) ) || vi;
			ii.version = Ge.version = wi.version = "3.6.0", d = 1, Q() && Fe(), Re.Power0,
				Re.Power1, Re.Power2, Re.Power3, Re.Power4, Re.Linear, Re.Quad, Re.Cubic,
				Re.Quart, Re.Quint, Re.Strong, Re.Elastic, Re.Back, Re.SteppedEase, Re.Bounce,
				Re.Sine, Re.Expo, Re.Circ;
			var xi, bi, Mi, Ti, Ai, Ei, Si, Pi, Oi = {},
				Li = 180 / Math.PI,
				Ci = Math.PI / 180,
				ki = Math.atan2,
				Fi = /([A-Z])/g,
				Ri = /(?:left|right|width|margin|padding|x)/i,
				zi = /[\s,\(]\S/,
				Di = {
					autoAlpha: "opacity,visibility",
					scale: "scaleX,scaleY",
					alpha: "opacity"
				},
				Ii = function( t, e ) {
					return e.set( e.t, e.p, Math.round( 1e4 * ( e.s + e.c * t ) ) / 1e4 + e.u,
						e )
				},
				Ui = function( t, e ) {
					return e.set( e.t, e.p, 1 === t ? e.e : Math.round( 1e4 * ( e.s + e.c *
						t ) ) / 1e4 + e.u, e )
				},
				ji = function( t, e ) {
					return e.set( e.t, e.p, t ? Math.round( 1e4 * ( e.s + e.c * t ) ) / 1e4 +
						e.u : e.b, e )
				},
				Bi = function( t, e ) {
					var i = e.s + e.c * t;
					e.set( e.t, e.p, ~~( i + ( i < 0 ? -.5 : .5 ) ) + e.u, e )
				},
				Ni = function( t, e ) {
					return e.set( e.t, e.p, t ? e.e : e.b, e )
				},
				Vi = function( t, e ) {
					return e.set( e.t, e.p, 1 !== t ? e.b : e.e, e )
				},
				qi = function( t, e, i ) {
					return t.style[ e ] = i
				},
				Wi = function( t, e, i ) {
					return t.style.setProperty( e, i )
				},
				Yi = function( t, e, i ) {
					return t._gsap[ e ] = i
				},
				Xi = function( t, e, i ) {
					return t._gsap.scaleX = t._gsap.scaleY = i
				},
				Gi = function( t, e, i, r, s ) {
					var n = t._gsap;
					n.scaleX = n.scaleY = i, n.renderTransform( s, n )
				},
				$i = function( t, e, i, r, s ) {
					var n = t._gsap;
					n[ e ] = i, n.renderTransform( s, n )
				},
				Hi = "transform",
				Zi = Hi + "Origin",
				Qi = function( t, e ) {
					var i = bi.createElementNS ? bi.createElementNS( ( e ||
							"http://www.w3.org/1999/xhtml" ).replace( /^https/, "http" ), t ) : bi
						.createElement( t );
					return i.style ? i : bi.createElement( t )
				},
				Ki = function t( e, i, r ) {
					var s = getComputedStyle( e );
					return s[ i ] || s.getPropertyValue( i.replace( Fi, "-$1" ).toLowerCase() ) ||
						s.getPropertyValue( i ) || !r && t( e, tr( i ) || i, 1 ) || ""
				},
				Ji = "O,Moz,ms,Ms,Webkit".split( "," ),
				tr = function( t, e, i ) {
					var r = ( e || Ai ).style,
						s = 5;
					if ( t in r && !i ) return t;
					for ( t = t.charAt( 0 ).toUpperCase() + t.substr( 1 ); s-- && !( Ji[ s ] +
							t in r ); );
					return s < 0 ? null : ( 3 === s ? "ms" : s >= 0 ? Ji[ s ] : "" ) + t
				},
				er = function() {
					"undefined" != typeof window && window.document && ( xi = window, bi =
						xi.document, Mi = bi.documentElement, Ai = Qi( "div" ) || {
							style: {}
						}, Ei = Qi( "div" ), Hi = tr( Hi ), Zi = Hi + "Origin", Ai.style.cssText =
						"border-width:0;line-height:0;position:absolute;padding:0", Pi = !!tr(
							"perspective" ), Ti = 1 )
				},
				ir = function t( e ) {
					var i, r = Qi( "svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute(
							"xmlns" ) || "http://www.w3.org/2000/svg" ),
						s = this.parentNode,
						n = this.nextSibling,
						o = this.style.cssText;
					if ( Mi.appendChild( r ), r.appendChild( this ), this.style.display =
						"block", e ) try {
						i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
					} catch ( t ) {} else this._gsapBBox && ( i = this._gsapBBox() );
					return s && ( n ? s.insertBefore( this, n ) : s.appendChild( this ) ),
						Mi.removeChild( r ), this.style.cssText = o, i
				},
				rr = function( t, e ) {
					for ( var i = e.length; i--; )
						if ( t.hasAttribute( e[ i ] ) ) return t.getAttribute( e[ i ] )
				},
				sr = function( t ) {
					var e;
					try {
						e = t.getBBox()
					} catch ( i ) {
						e = ir.call( t, !0 )
					}
					return e && ( e.width || e.height ) || t.getBBox === ir || ( e = ir.call(
						t, !0 ) ), !e || e.width || e.x || e.y ? e : {
						x: +rr( t, [ "x", "cx", "x1" ] ) || 0,
						y: +rr( t, [ "y", "cy", "y1" ] ) || 0,
						width: 0,
						height: 0
					}
				},
				nr = function( t ) {
					return !( !t.getCTM || t.parentNode && !t.ownerSVGElement || !sr( t ) )
				},
				or = function( t, e ) {
					if ( e ) {
						var i = t.style;
						e in Oi && e !== Zi && ( e = Hi ), i.removeProperty ? ( "ms" !== e.substr(
							0, 2 ) && "webkit" !== e.substr( 0, 6 ) || ( e = "-" + e ), i.removeProperty(
							e.replace( Fi, "-$1" ).toLowerCase() ) ) : i.removeAttribute( e )
					}
				},
				ar = function( t, e, i, r, s, n ) {
					var o = new gi( t._pt, e, i, 0, 1, n ? Vi : Ni );
					return t._pt = o, o.b = r, o.e = s, t._props.push( i ), o
				},
				hr = {
					deg: 1,
					rad: 1,
					turn: 1
				},
				lr = function t( e, i, r, s ) {
					var n, o, a, h, l = parseFloat( r ) || 0,
						u = ( r + "" ).trim().substr( ( l + "" ).length ) || "px",
						c = Ai.style,
						d = Ri.test( i ),
						p = "svg" === e.tagName.toLowerCase(),
						f = ( p ? "client" : "offset" ) + ( d ? "Width" : "Height" ),
						m = 100,
						g = "px" === s,
						v = "%" === s;
					return s === u || !l || hr[ s ] || hr[ u ] ? l : ( "px" !== u && !g && (
							l = t( e, i, r, "px" ) ), h = e.getCTM && nr( e ), !v && "%" !== u ||
						!Oi[ i ] && !~i.indexOf( "adius" ) ? ( c[ d ? "width" : "height" ] = m +
							( g ? u : s ), o = ~i.indexOf( "adius" ) || "em" === s && e.appendChild &&
							!p ? e : e.parentNode, h && ( o = ( e.ownerSVGElement || {} ).parentNode ),
							o && o !== bi && o.appendChild || ( o = bi.body ), ( a = o._gsap ) &&
							v && a.width && d && a.time === ke.time ? St( l / a.width * m ) : ( (
									v || "%" === u ) && ( c.position = Ki( e, "position" ) ), o === e &&
								( c.position = "static" ), o.appendChild( Ai ), n = Ai[ f ], o.removeChild(
									Ai ), c.position = "absolute", d && v && ( ( a = Tt( o ) ).time =
									ke.time, a.width = o[ f ] ), St( g ? n * l / m : n && l ? m / n * l :
									0 ) ) ) : ( n = h ? e.getBBox()[ d ? "width" : "height" ] : e[ f ],
							St( v ? l / n * m : l / 100 * n ) ) )
				},
				ur = function( t, e, i, r ) {
					var s;
					return Ti || er(), e in Di && "transform" !== e && ~( e = Di[ e ] ).indexOf(
							"," ) && ( e = e.split( "," )[ 0 ] ), Oi[ e ] && "transform" !== e ? (
							s = br( t, r ), s = "transformOrigin" !== e ? s[ e ] : Mr( Ki( t, Zi ) ) +
							" " + s.zOrigin + "px" ) : ( !( s = t.style[ e ] ) || "auto" === s ||
							r || ~( s + "" ).indexOf( "calc(" ) ) && ( s = mr[ e ] && mr[ e ]( t,
							e, i ) || Ki( t, e ) || At( t, e ) || ( "opacity" === e ? 1 : 0 ) ), i &&
						!~( s + "" ).trim().indexOf( " " ) ? lr( t, e, s, i ) + i : s
				},
				cr = function( t, e, i, r ) {
					if ( !i || "none" === i ) {
						var s = tr( e, t, 1 ),
							n = s && Ki( t, s, 1 );
						n && n !== i ? ( e = s, i = n ) : "borderColor" === e && ( i = Ki( t,
							"borderTopColor" ) )
					}
					var o, a, h, l, u, c, d, p, f, m, g, v, _ = new gi( this._pt, t.style, e,
							0, 1, ui ),
						y = 0,
						w = 0;
					if ( _.b = i, _.e = r, i += "", "auto" == ( r += "" ) && ( t.style[ e ] =
							r, r = Ki( t, e ) || r, t.style[ e ] = i ), Ce( o = [ i, r ] ), r = o[
							1 ], h = ( i = o[ 0 ] ).match( rt ) || [], ( r.match( rt ) || [] ).length ) {
						for ( ; a = rt.exec( r ); ) d = a[ 0 ], f = r.substring( y, a.index ),
							u ? u = ( u + 1 ) % 5 : "rgba(" !== f.substr( -5 ) && "hsla(" !== f.substr( -
								5 ) || ( u = 1 ), d !== ( c = h[ w++ ] || "" ) && ( l = parseFloat( c ) ||
								0, g = c.substr( ( l + "" ).length ), ( v = "=" === d.charAt( 1 ) ? +
									( d.charAt( 0 ) + "1" ) : 0 ) && ( d = d.substr( 2 ) ), p =
								parseFloat( d ), m = d.substr( ( p + "" ).length ), y = rt.lastIndex -
								m.length, m || ( m = m || z.units[ e ] || g, y === r.length && ( r +=
									m, _.e += m ) ), g !== m && ( l = lr( t, e, c, m ) || 0 ), _._pt = {
									_next: _._pt,
									p: f || 1 === w ? f : ",",
									s: l,
									c: v ? v * p : p - l,
									m: u && u < 4 || "zIndex" === e ? Math.round : 0
								} );
						_.c = y < r.length ? r.substring( y, r.length ) : ""
					} else _.r = "display" === e && "none" === r ? Vi : Ni;
					return nt.test( r ) && ( _.e = 0 ), this._pt = _, _
				},
				dr = {
					top: "0%",
					bottom: "100%",
					left: "0%",
					right: "100%",
					center: "50%"
				},
				pr = function( t ) {
					var e = t.split( " " ),
						i = e[ 0 ],
						r = e[ 1 ] || "50%";
					return "top" !== i && "bottom" !== i && "left" !== r && "right" !== r ||
						( t = i, i = r, r = t ), e[ 0 ] = dr[ i ] || i, e[ 1 ] = dr[ r ] || r,
						e.join( " " )
				},
				fr = function( t, e ) {
					if ( e.tween && e.tween._time === e.tween._dur ) {
						var i, r, s, n = e.t,
							o = n.style,
							a = e.u,
							h = n._gsap;
						if ( "all" === a || !0 === a ) o.cssText = "", r = 1;
						else
							for ( s = ( a = a.split( "," ) ).length; --s > -1; ) i = a[ s ], Oi[ i ] &&
								( r = 1, i = "transformOrigin" === i ? Zi : Hi ), or( n, i );
						r && ( or( n, Hi ), h && ( h.svg && n.removeAttribute( "transform" ),
							br( n, 1 ), h.uncache = 1 ) )
					}
				},
				mr = {
					clearProps: function( t, e, i, r, s ) {
						if ( "isFromStart" !== s.data ) {
							var n = t._pt = new gi( t._pt, e, i, 0, 0, fr );
							return n.u = r, n.pr = -10, n.tween = s, t._props.push( i ), 1
						}
					}
				},
				gr = [ 1, 0, 0, 1, 0, 0 ],
				vr = {},
				_r = function( t ) {
					return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
				},
				yr = function( t ) {
					var e = Ki( t, Hi );
					return _r( e ) ? gr : e.substr( 7 ).match( it ).map( St )
				},
				wr = function( t, e ) {
					var i, r, s, n, o = t._gsap || Tt( t ),
						a = t.style,
						h = yr( t );
					return o.svg && t.getAttribute( "transform" ) ? "1,0,0,1,0,0" === ( h = [
						( s = t.transform.baseVal.consolidate().matrix ).a, s.b, s.c, s.d, s.e,
						s.f
					] ).join( "," ) ? gr : h : ( h !== gr || t.offsetParent || t === Mi ||
						o.svg || ( s = a.display, a.display = "block", ( i = t.parentNode ) &&
							t.offsetParent || ( n = 1, r = t.nextSibling, Mi.appendChild( t ) ),
							h = yr( t ), s ? a.display = s : or( t, "display" ), n && ( r ? i.insertBefore(
								t, r ) : i ? i.appendChild( t ) : Mi.removeChild( t ) ) ), e && h.length >
						6 ? [ h[ 0 ], h[ 1 ], h[ 4 ], h[ 5 ], h[ 12 ], h[ 13 ] ] : h )
				},
				xr = function( t, e, i, r, s, n ) {
					var o, a, h, l = t._gsap,
						u = s || wr( t, !0 ),
						c = l.xOrigin || 0,
						d = l.yOrigin || 0,
						p = l.xOffset || 0,
						f = l.yOffset || 0,
						m = u[ 0 ],
						g = u[ 1 ],
						v = u[ 2 ],
						_ = u[ 3 ],
						y = u[ 4 ],
						w = u[ 5 ],
						x = e.split( " " ),
						b = parseFloat( x[ 0 ] ) || 0,
						M = parseFloat( x[ 1 ] ) || 0;
					i ? u !== gr && ( a = m * _ - g * v ) && ( h = b * ( -g / a ) + M * ( m /
							a ) - ( m * w - g * y ) / a, b = b * ( _ / a ) + M * ( -v / a ) + ( v *
							w - _ * y ) / a, M = h ) : ( b = ( o = sr( t ) ).x + ( ~x[ 0 ].indexOf(
							"%" ) ? b / 100 * o.width : b ), M = o.y + ( ~( x[ 1 ] || x[ 0 ] ).indexOf(
							"%" ) ? M / 100 * o.height : M ) ), r || !1 !== r && l.smooth ? ( y =
							b - c, w = M - d, l.xOffset = p + ( y * m + w * v ) - y, l.yOffset = f +
							( y * g + w * _ ) - w ) : l.xOffset = l.yOffset = 0, l.xOrigin = b, l.yOrigin =
						M, l.smooth = !!r, l.origin = e, l.originIsAbsolute = !!i, t.style[ Zi ] =
						"0px 0px", n && ( ar( n, l, "xOrigin", c, b ), ar( n, l, "yOrigin", d,
							M ), ar( n, l, "xOffset", p, l.xOffset ), ar( n, l, "yOffset", f, l.yOffset ) ),
						t.setAttribute( "data-svg-origin", b + " " + M )
				},
				br = function( t, e ) {
					var i = t._gsap || new Ye( t );
					if ( "x" in i && !e && !i.uncache ) return i;
					var r, s, n, o, a, h, l, u, c, d, p, f, m, g, v, _, y, w, x, b, M, T, A,
						E, S, P, O, L, C, k, F, R, D = t.style,
						I = i.scaleX < 0,
						U = "px",
						j = "deg",
						B = Ki( t, Zi ) || "0";
					return r = s = n = h = l = u = c = d = p = 0, o = a = 1, i.svg = !( !t.getCTM ||
							!nr( t ) ), g = wr( t, i.svg ), i.svg && ( E = !i.uncache && t.getAttribute(
							"data-svg-origin" ), xr( t, E || B, !!E || i.originIsAbsolute, !1 !==
							i.smooth, g ) ), f = i.xOrigin || 0, m = i.yOrigin || 0, g !== gr && (
							w = g[ 0 ], x = g[ 1 ], b = g[ 2 ], M = g[ 3 ], r = T = g[ 4 ], s = A =
							g[ 5 ], 6 === g.length ? ( o = Math.sqrt( w * w + x * x ), a = Math.sqrt(
								M * M + b * b ), h = w || x ? ki( x, w ) * Li : 0, ( c = b || M ? ki(
								b, M ) * Li + h : 0 ) && ( a *= Math.cos( c * Ci ) ), i.svg && ( r -=
								f - ( f * w + m * b ), s -= m - ( f * x + m * M ) ) ) : ( R = g[ 6 ],
								k = g[ 7 ], O = g[ 8 ], L = g[ 9 ], C = g[ 10 ], F = g[ 11 ], r = g[
									12 ], s = g[ 13 ], n = g[ 14 ], l = ( v = ki( R, C ) ) * Li, v && (
									E = T * ( _ = Math.cos( -v ) ) + O * ( y = Math.sin( -v ) ), S = A *
									_ + L * y, P = R * _ + C * y, O = T * -y + O * _, L = A * -y + L * _,
									C = R * -y + C * _, F = k * -y + F * _, T = E, A = S, R = P ), u = (
									v = ki( -b, C ) ) * Li, v && ( _ = Math.cos( -v ), F = M * ( y =
										Math.sin( -v ) ) + F * _, w = E = w * _ - O * y, x = S = x * _ - L *
									y, b = P = b * _ - C * y ), h = ( v = ki( x, w ) ) * Li, v && ( E =
									w * ( _ = Math.cos( v ) ) + x * ( y = Math.sin( v ) ), S = T * _ + A *
									y, x = x * _ - w * y, A = A * _ - T * y, w = E, T = S ), l && Math.abs(
									l ) + Math.abs( h ) > 359.9 && ( l = h = 0, u = 180 - u ), o = St(
									Math.sqrt( w * w + x * x + b * b ) ), a = St( Math.sqrt( A * A + R *
									R ) ), v = ki( T, A ), c = Math.abs( v ) > 2e-4 ? v * Li : 0, p = F ?
								1 / ( F < 0 ? -F : F ) : 0 ), i.svg && ( E = t.getAttribute(
								"transform" ), i.forceCSS = t.setAttribute( "transform", "" ) || !_r(
								Ki( t, Hi ) ), E && t.setAttribute( "transform", E ) ) ), Math.abs( c ) >
						90 && Math.abs( c ) < 270 && ( I ? ( o *= -1, c += h <= 0 ? 180 : -180,
							h += h <= 0 ? 180 : -180 ) : ( a *= -1, c += c <= 0 ? 180 : -180 ) ),
						i.x = r - ( ( i.xPercent = r && ( i.xPercent || ( Math.round( t.offsetWidth /
								2 ) === Math.round( -r ) ? -50 : 0 ) ) ) ? t.offsetWidth * i.xPercent /
							100 : 0 ) + U, i.y = s - ( ( i.yPercent = s && ( i.yPercent || ( Math.round(
								t.offsetHeight / 2 ) === Math.round( -s ) ? -50 : 0 ) ) ) ? t.offsetHeight *
							i.yPercent / 100 : 0 ) + U, i.z = n + U, i.scaleX = St( o ), i.scaleY =
						St( a ), i.rotation = St( h ) + j, i.rotationX = St( l ) + j, i.rotationY =
						St( u ) + j, i.skewX = c + j, i.skewY = d + j, i.transformPerspective =
						p + U, ( i.zOrigin = parseFloat( B.split( " " )[ 2 ] ) || 0 ) && ( D[
							Zi ] = Mr( B ) ), i.xOffset = i.yOffset = 0, i.force3D = z.force3D, i.renderTransform =
						i.svg ? Lr : Pi ? Or : Ar, i.uncache = 0, i
				},
				Mr = function( t ) {
					return ( t = t.split( " " ) )[ 0 ] + " " + t[ 1 ]
				},
				Tr = function( t, e, i ) {
					var r = ae( e );
					return St( parseFloat( e ) + parseFloat( lr( t, "x", i + "px", r ) ) ) +
						r
				},
				Ar = function( t, e ) {
					e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Or( t, e )
				},
				Er = "0deg",
				Sr = "0px",
				Pr = ") ",
				Or = function( t, e ) {
					var i = e || this,
						r = i.xPercent,
						s = i.yPercent,
						n = i.x,
						o = i.y,
						a = i.z,
						h = i.rotation,
						l = i.rotationY,
						u = i.rotationX,
						c = i.skewX,
						d = i.skewY,
						p = i.scaleX,
						f = i.scaleY,
						m = i.transformPerspective,
						g = i.force3D,
						v = i.target,
						_ = i.zOrigin,
						y = "",
						w = "auto" === g && t && 1 !== t || !0 === g;
					if ( _ && ( u !== Er || l !== Er ) ) {
						var x, b = parseFloat( l ) * Ci,
							M = Math.sin( b ),
							T = Math.cos( b );
						b = parseFloat( u ) * Ci, x = Math.cos( b ), n = Tr( v, n, M * x * -_ ),
							o = Tr( v, o, -Math.sin( b ) * -_ ), a = Tr( v, a, T * x * -_ + _ )
					}
					m !== Sr && ( y += "perspective(" + m + Pr ), ( r || s ) && ( y +=
							"translate(" + r + "%, " + s + "%) " ), ( w || n !== Sr || o !== Sr ||
							a !== Sr ) && ( y += a !== Sr || w ? "translate3d(" + n + ", " + o +
							", " + a + ") " : "translate(" + n + ", " + o + Pr ), h !== Er && ( y +=
							"rotate(" + h + Pr ), l !== Er && ( y += "rotateY(" + l + Pr ), u !==
						Er && ( y += "rotateX(" + u + Pr ), c === Er && d === Er || ( y +=
							"skew(" + c + ", " + d + Pr ), 1 === p && 1 === f || ( y += "scale(" +
							p + ", " + f + Pr ), v.style[ Hi ] = y || "translate(0, 0)"
				},
				Lr = function( t, e ) {
					var i, r, s, n, o, a = e || this,
						h = a.xPercent,
						l = a.yPercent,
						u = a.x,
						c = a.y,
						d = a.rotation,
						p = a.skewX,
						f = a.skewY,
						m = a.scaleX,
						g = a.scaleY,
						v = a.target,
						_ = a.xOrigin,
						y = a.yOrigin,
						w = a.xOffset,
						x = a.yOffset,
						b = a.forceCSS,
						M = parseFloat( u ),
						T = parseFloat( c );
					d = parseFloat( d ), p = parseFloat( p ), ( f = parseFloat( f ) ) && ( p +=
							f = parseFloat( f ), d += f ), d || p ? ( d *= Ci, p *= Ci, i = Math.cos(
							d ) * m, r = Math.sin( d ) * m, s = Math.sin( d - p ) * -g, n = Math.cos(
							d - p ) * g, p && ( f *= Ci, o = Math.tan( p - f ), s *= o = Math.sqrt(
							1 + o * o ), n *= o, f && ( o = Math.tan( f ), i *= o = Math.sqrt( 1 +
							o * o ), r *= o ) ), i = St( i ), r = St( r ), s = St( s ), n = St( n ) ) :
						( i = m, n = g, r = s = 0 ), ( M && !~( u + "" ).indexOf( "px" ) || T &&
							!~( c + "" ).indexOf( "px" ) ) && ( M = lr( v, "x", u, "px" ), T = lr(
							v, "y", c, "px" ) ), ( _ || y || w || x ) && ( M = St( M + _ - ( _ * i +
							y * s ) + w ), T = St( T + y - ( _ * r + y * n ) + x ) ), ( h || l ) &&
						( o = v.getBBox(), M = St( M + h / 100 * o.width ), T = St( T + l / 100 *
							o.height ) ), o = "matrix(" + i + "," + r + "," + s + "," + n + "," +
						M + "," + T + ")", v.setAttribute( "transform", o ), b && ( v.style[ Hi ] =
							o )
				},
				Cr = function( t, e, i, r, s, n ) {
					var o, a, h = 360,
						l = Y( s ),
						u = parseFloat( s ) * ( l && ~s.indexOf( "rad" ) ? Li : 1 ),
						c = n ? u * n : u - r,
						d = r + c + "deg";
					return l && ( "short" === ( o = s.split( "_" )[ 1 ] ) && ( c %= h ) != c %
							180 && ( c += c < 0 ? h : -360 ), "cw" === o && c < 0 ? c = ( c + 36e9 ) %
							h - ~~( c / h ) * h : "ccw" === o && c > 0 && ( c = ( c - 36e9 ) % h -
								~~( c / h ) * h ) ), t._pt = a = new gi( t._pt, e, i, r, c, Ui ), a.e =
						d, a.u = "deg", t._props.push( i ), a
				},
				kr = function( t, e, i ) {
					var r, s, n, o, a, h, l, u = Ei.style,
						c = i._gsap;
					for ( s in u.cssText = getComputedStyle( i ).cssText +
						";position:absolute;display:block;", u[ Hi ] = e, bi.body.appendChild(
							Ei ), r = br( Ei, 1 ), Oi )( n = c[ s ] ) !== ( o = r[ s ] ) &&
						"perspective,force3D,transformOrigin,svgOrigin".indexOf( s ) < 0 && ( a =
							ae( n ) !== ( l = ae( o ) ) ? lr( i, s, n, l ) : parseFloat( n ), h =
							parseFloat( o ), t._pt = new gi( t._pt, c, s, a, h - a, Ii ), t._pt.u =
							l || 0, t._props.push( s ) );
					bi.body.removeChild( Ei )
				};
			Et( "padding,margin,Width,Radius", ( function( t, e ) {
				var i = "Top",
					r = "Right",
					s = "Bottom",
					n = "Left",
					o = ( e < 3 ? [ i, r, s, n ] : [ i + n, i + r, s + r, s + n ] ).map(
						( function( i ) {
							return e < 2 ? t + i : "border" + i + t
						} ) );
				mr[ e > 1 ? "border" + t : t ] = function( t, e, i, r, s ) {
					var n, a;
					if ( arguments.length < 4 ) return n = o.map( ( function( e ) {
							return ur( t, e, i )
						} ) ), 5 === ( a = n.join( " " ) ).split( n[ 0 ] ).length ? n[ 0 ] :
						a;
					n = ( r + "" ).split( " " ), a = {}, o.forEach( ( function( t, e ) {
						return a[ t ] = n[ e ] = n[ e ] || n[ ( e - 1 ) / 2 | 0 ]
					} ) ), t.init( e, a, s )
				}
			} ) );
			var Fr, Rr, zr = {
				name: "css",
				register: er,
				targetTest: function( t ) {
					return t.style && t.nodeType
				},
				init: function( t, e, i, r, s ) {
					var n, o, a, h, l, u, c, d, p, f, m, g, v, _, y, w = this._props,
						x = t.style,
						b = i.vars.startAt;
					for ( c in Ti || er(), e )
						if ( "autoRound" !== c && ( o = e[ c ], !_t[ c ] || !Qe( c, e, i, r,
								t, s ) ) )
							if ( l = typeof o, u = mr[ c ], "function" === l && ( l = typeof( o =
									o.call( i, r, t, s ) ) ), "string" === l && ~o.indexOf( "random(" ) &&
								( o = ve( o ) ), u ) u( this, t, c, o, i ) && ( y = 1 );
							else if ( "--" === c.substr( 0, 2 ) ) n = ( getComputedStyle( t ).getPropertyValue(
							c ) + "" ).trim(), o += "", d = ae( n ), ( p = ae( o ) ) ? d !== p &&
						( n = lr( t, c, n, p ) + p ) : d && ( o += d ), this.add( x,
							"setProperty", n, o, r, s, 0, 0, c );
					else if ( "undefined" !== l ) {
						if ( b && c in b ? ( n = "function" == typeof b[ c ] ? b[ c ].call( i,
									r, t, s ) : b[ c ], c in z.units && !ae( n ) && ( n += z.units[ c ] ),
								"=" === ( n + "" ).charAt( 1 ) && ( n = ur( t, c ) ) ) : n = ur( t,
								c ), h = parseFloat( n ), ( f = "string" === l && "=" === o.charAt(
								1 ) ? +( o.charAt( 0 ) + "1" ) : 0 ) && ( o = o.substr( 2 ) ), a =
							parseFloat( o ), c in Di && ( "autoAlpha" === c && ( 1 === h &&
								"hidden" === ur( t, "visibility" ) && a && ( h = 0 ), ar( this, x,
									"visibility", h ? "inherit" : "hidden", a ? "inherit" : "hidden", !
									a ) ), "scale" !== c && "transform" !== c && ~( c = Di[ c ] ).indexOf(
								"," ) && ( c = c.split( "," )[ 0 ] ) ), m = c in Oi )
							if ( g || ( ( v = t._gsap ).renderTransform && !e.parseTransform ||
									br( t, e.parseTransform ), _ = !1 !== e.smoothOrigin && v.smooth,
									( g = this._pt = new gi( this._pt, x, Hi, 0, 1, v.renderTransform,
										v, 0, -1 ) ).dep = 1 ), "scale" === c ) this._pt = new gi( this._pt,
								v, "scaleY", v.scaleY, f ? f * a : a - v.scaleY ), w.push(
								"scaleY", c ), c += "X";
							else {
								if ( "transformOrigin" === c ) {
									o = pr( o ), v.svg ? xr( t, o, 0, _, 0, this ) : ( ( p =
										parseFloat( o.split( " " )[ 2 ] ) || 0 ) !== v.zOrigin && ar(
										this, v, "zOrigin", v.zOrigin, p ), ar( this, x, c, Mr( n ), Mr(
										o ) ) );
									continue
								}
								if ( "svgOrigin" === c ) {
									xr( t, o, 1, _, 0, this );
									continue
								}
								if ( c in vr ) {
									Cr( this, v, c, h, o, f );
									continue
								}
								if ( "smoothOrigin" === c ) {
									ar( this, v, "smooth", v.smooth, o );
									continue
								}
								if ( "force3D" === c ) {
									v[ c ] = o;
									continue
								}
								if ( "transform" === c ) {
									kr( this, o, t );
									continue
								}
							}
						else c in x || ( c = tr( c ) || c );
						if ( m || ( a || 0 === a ) && ( h || 0 === h ) && !zi.test( o ) && c in
							x ) a || ( a = 0 ), ( d = ( n + "" ).substr( ( h + "" ).length ) ) !==
							( p = ae( o ) || ( c in z.units ? z.units[ c ] : d ) ) && ( h = lr(
								t, c, n, p ) ), this._pt = new gi( this._pt, m ? v : x, c, h, f ? f *
								a : a - h, m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ?
								Ii : Bi ), this._pt.u = p || 0, d !== p && ( this._pt.b = n, this._pt
								.r = ji );
						else if ( c in x ) cr.call( this, t, c, n, o );
						else {
							if ( !( c in t ) ) {
								ct( c, o );
								continue
							}
							this.add( t, c, t[ c ], o, r, s )
						}
						w.push( c )
					}
					y && mi( this )
				},
				get: ur,
				aliases: Di,
				getSetter: function( t, e, i ) {
					var r = Di[ e ];
					return r && r.indexOf( "," ) < 0 && ( e = r ), e in Oi && e !== Zi &&
						( t._gsap.x || ur( t, "x" ) ) ? i && Si === i ? "scale" === e ? Xi :
						Yi : ( Si = i || {} ) && ( "scale" === e ? Gi : $i ) : t.style && !$(
							t.style[ e ] ) ? qi : ~e.indexOf( "-" ) ? Wi : ai( t, e )
				},
				core: {
					_removeProperty: or,
					_getMatrix: wr
				}
			};
			wi.utils.checkPrefix = tr, Rr = Et(
					"x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + ( Fr =
						"rotation,rotationX,rotationY,skewX,skewY" ) +
					",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
					( function( t ) {
						Oi[ t ] = 1
					} ) ), Et( Fr, ( function( t ) {
					z.units[ t ] = "deg", vr[ t ] = 1
				} ) ), Di[ Rr[ 13 ] ] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
				Fr, Et(
					"0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
					( function( t ) {
						var e = t.split( ":" );
						Di[ e[ 1 ] ] = Rr[ e[ 0 ] ]
					} ) ), Et(
					"x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
					( function( t ) {
						z.units[ t ] = "px"
					} ) ), wi.registerPlugin( zr );
			var Dr = wi.registerPlugin( zr ) || wi,
				Ir = ( Dr.core.Tween, i( 3044 ) ),
				Ur = i.n( Ir ),
				jr = i( 6270 ),
				Br = i.n( jr );
			const Nr = new class {
				isMobile() {
					return this.isMobileChecked || ( this.isMobileChecked = !0, this.isMobileCheck =
						document.documentElement.classList.contains( "mobile" ) ), this.isMobileCheck
				}
				isWebPSupported() {
					if ( !this.isWebPChecked ) {
						this.isWebPChecked = !0;
						const t = document.createElement( "canvas" );
						t.getContext && t.getContext( "2d" ) && ( this.isWebPCheck = 0 === t.toDataURL(
							"image/webp" ).indexOf( "data:image/webp" ) )
					}
					return this.isWebPCheck
				}
			};
			var Vr = i( 1590 ),
				qr = i.n( Vr ),
				Wr = i( 7320 ),
				Yr = i.n( Wr ),
				Xr = i( 2273 ),
				Gr = i.n( Xr ),
				$r = i( 7976 ),
				Hr = i.n( $r );
			const Zr = ( t, e = 0 ) => {
				const i = t.getBoundingClientRect();
				return {
					bottom: i.bottom,
					height: i.height,
					left: i.left,
					top: i.top + e,
					width: i.width
				}
			};

			function Qr( t, e ) {
				return t instanceof window.HTMLElement ? [ e( t ) ] : Hr()( t, e )
			}

			function Kr( {
				element: t,
				expression: e = " ",
				append: i = !0
			} ) {
				const r = function( t, e ) {
					const i = t.split( "<br>" );
					let r = [];
					return Br()( i, ( ( t, i ) => {
						i > 0 && r.push( "<br>" ), r = r.concat( t.split( e ) );
						let s = !1,
							n = "";
						const o = [];
						Br()( r, ( t => {
							s || !t.includes( "<a" ) && !t.includes( "<strong" ) || ( n =
									"", s = !0 ), s && ( n += ` ${t}` ), s && ( t.includes( "/a>" ) ||
									t.includes( "/strong>" ) ) && ( o.push( n ), n = "" ), s ||
								"" !== n || o.push( t ), s && ( t.includes( "/a>" ) || t.includes(
									"/strong>" ) ) && ( s = !1 )
						} ) ), r = o
					} ) ), r
				}( t.innerHTML.toString().trim(), e );
				let s = "";
				Br()( r, ( t => {
					if ( t.indexOf( "<br>" ) > -1 ) {
						const e = t.split( "<br>" );
						Br()( e, ( ( t, e ) => {
							s += e > 0 ? "<br>" + Jr( t ) : Jr( t )
						} ) )
					} else s += Jr( t )
				} ) ), t.innerHTML = s;
				const n = t.querySelectorAll( "span" );
				return i && Br()( n, ( t => {
					const e = 1 === t.textContent.length,
						i = "" !== t.innerHTML.trim(),
						r = "&" !== t.textContent,
						s = "-" !== t.textContent;
					e && i && r && s && ( t.innerHTML = `${t.textContent}&nbsp;` )
				} ) ), n
			}

			function Jr( t ) {
				return "" === ( t = t.trim() ) || " " === t ? t : "<br>" === t ? "<br>" :
					`<span>${t}</span>` + ( t.length > 1 ? " " : "" )
			}

			function ts( t, e, i ) {
				return Dr.utils.interpolate( t, e, i )
			}

			function es( t, e, i ) {
				return Dr.utils.clamp( t, e, i )
			}

			function is( t, e, i, r, s ) {
				return Dr.utils.mapRange( e, i, r, s, t )
			}
			const rs = class extends( qr() ) {
					constructor( {
						classes: t,
						element: i,
						elements: r,
						isScrollable: s = !0
					} ) {
						super(), e()( this ), this.classes = { ...t
						}, this.selectors = {
							element: i,
							elements: {
								animationsParagraphs: '[data-animation="paragraph"]',
								...r
							}
						}, this.scroll = {
							ease: .07,
							position: 0,
							current: 0,
							target: 0,
							limit: 0
						}, this.isScrollable = s, this.transformPrefix = Gr()( "transform" )
					}
					create() {
						this.animations = [], this.element = document.querySelector( this.selectors
							.element ), this.elements = {}, Br()( this.selectors.elements, ( ( t,
							e ) => {
							t instanceof window.HTMLElement || t instanceof window.NodeList ||
								Array.isArray( t ) ? this.elements[ e ] = t : ( this.elements[ e ] =
									this.element.querySelectorAll( t ), 0 === this.elements[ e ].length ?
									this.elements[ e ] = null : 1 === this.elements[ e ].length && (
										this.elements[ e ] = this.element.querySelector( t ) ) )
						} ) ), this.isScrollable && ( this.scroll = {
							ease: .07,
							position: 0,
							current: 0,
							target: 0,
							limit: 0
						} ), this.createAnimations()
					}
					createAnimations() {
						this.paragraphs = Qr( this.elements.animationsParagraphs, ( t => new class extends class {
							constructor( {
								element: t,
								elements: e
							} ) {
								const {
									animationDelay: i,
									animationTarget: r
								} = t.dataset;
								this.delay = i, this.element = t, this.elements = e, this.target =
									r ? t.closest( r ) : t, this.transformPrefix = Gr()(
										"transform" ), this.isVisible = !1, "IntersectionObserver" in
									window ? ( this.createObserver(), this.animateOut() ) : this.animateIn()
							}
							createObserver() {
								this.observer = new window.IntersectionObserver( ( t => {
									t.forEach( ( t => {
										!this.isVisible && t.isIntersecting && this.animateIn()
									} ) )
								} ) ).observe( this.target )
							}
							animateIn() {
								this.isVisible = !0
							}
							animateOut() {
								this.isVisible = !1
							}
						} {
							constructor( {
								element: t
							} ) {
								const e = [],
									i = t.querySelectorAll( "h1, h2, p" );
								0 !== i.length ? Br()( i, ( t => {
									Kr( {
										element: t
									} ), Kr( {
										element: t
									} ), e.push( ...t.querySelectorAll( "span span" ) )
								} ) ) : ( Kr( {
									element: t
								} ), Kr( {
									element: t
								} ), e.push( ...t.querySelectorAll( "span span" ) ) ), super( {
									element: t,
									elements: {
										lines: e
									}
								} ), this.onResize(), "IntersectionObserver" in window && this.animateOut()
							}
							animateIn() {
								super.animateIn(), Br()( this.lines, ( ( t, e ) => {
									Br()( t, ( t => {
										t.style.transition =
											`transform 1.5s ${.5+.1*e}s cubic-bezier(0.19, 1, 0.22, 1)`,
											t.style[ this.transformPrefix ] = "translateY(0)"
									} ) )
								} ) )
							}
							animateOut() {
								super.animateOut(), Br()( this.lines, ( t => {
									Br()( t, ( t => {
										t.style[ this.transformPrefix ] = "translateY(100%)"
									} ) )
								} ) )
							}
							onResize() {
								this.lines = function( t ) {
									const e = [];
									let i = [],
										r = t[ 0 ].offsetTop;
									return Br()( t, ( ( s, n ) => {
										s.offsetTop === r && i.push( s ), s.offsetTop !== r && ( e
												.push( i ), i = [], i.push( s ), r = s.offsetTop ), n +
											1 === t.length && e.push( i )
									} ) ), e
								}( this.elements.lines )
							}
						}( {
							element: t
						} ) ) ), this.animations.push( ...this.paragraphs )
					}
					reset() {
						this.scroll = {
							ease: .07,
							position: 0,
							current: 0,
							target: 0,
							limit: 0
						}
					}
					set( t ) {
						this.scroll.current = this.scroll.target = this.scroll.last = t, this.transform(
							this.elements.wrapper, this.scroll.current )
					}
					show( t ) {
						return this.isVisible = !0, Promise.resolve()
					}
					hide( t ) {
						return this.isVisible = !1, Promise.resolve()
					}
					transform( t, e ) {
						t.style[ this.transformPrefix ] =
							`translate3d(0, ${-Math.round(e)}px, 0)`
					}
					onResize() {
						this.elements.wrapper && window.requestAnimationFrame( ( t => {
							this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight,
								Br()( this.animations, ( t => {
									t.onResize && t.onResize()
								} ) )
						} ) )
					}
					onTouchDown( t ) {
						this.isDown = !0, this.scroll.position = this.scroll.current, this.start =
							t.touches ? t.touches[ 0 ].clientY : t.clientY
					}
					onTouchMove( t ) {
						if ( !this.isDown ) return;
						const e = t.changedTouches ? t.changedTouches[ 0 ].clientY : t.clientY,
							i = 3 * ( this.start - e );
						this.scroll.target = this.scroll.position + i
					}
					onTouchUp( t ) {
						this.isDown = !1
					}
					onWheel( t ) {
						const e = Yr()( t ).pixelY;
						return this.scroll.target += e, e
					}
					update() {
						this.isVisible && ( this.scroll.target = es( 0, this.scroll.limit,
							this.scroll.target ), this.scroll.current = ts( this.scroll.current,
							this.scroll.target, this.scroll.ease ), this.scroll.current = Math.floor(
							this.scroll.current ), this.scroll.current < .1 && ( this.scroll.current =
							0 ), this.elements.wrapper && this.transform( this.elements.wrapper,
							this.scroll.current ), this.scroll.last = this.scroll.current )
					}
				},
				ss = class extends( qr() ) {
					constructor( {
						classes: t,
						element: i,
						elements: r,
						elementsForceArray: s
					} ) {
						super(), e()( this ), this.classes = t, this.element = i instanceof window
							.HTMLElement ? i : document.querySelector( i ), this.elements = {},
							Br()( r, ( ( t, e ) => {
								t instanceof window.HTMLElement || t instanceof window.NodeList ||
									Array.isArray( t ) ? this.elements[ e ] = t : ( this.elements[ e ] =
										this.element.querySelectorAll( t ), 0 === this.elements[ e ].length ?
										this.elements[ e ] = null : 1 === this.elements[ e ].length && (
											this.elements[ e ] = this.element.querySelector( t ) ) )
							} ) ), Br()( s, ( ( t, e ) => {
								this.elements[ t ] = [ this.elements[ t ] ]
							} ) ), this.addEventListeners()
					}
					addEventListeners() {}
					removeEventListeners() {}
					destroy() {
						this.removeEventListeners()
					}
				},
				ns = class extends ss {
					constructor( {
						element: t,
						elements: e,
						index: i
					} ) {
						super( {
								element: t,
								elements: e
							} ), this.index = i, this.multiplier = this.index % 2 == 0 ? 1 : -1,
							this.transformPrefix = Gr()( "transform" ), this.scroll = {
								ease: .1,
								position: 0,
								current: 0,
								target: 0,
								last: 0,
								clamp: 0
							}, Br()( this.elements.items, ( t => {
								const e = Zr( t );
								t.extra = 0, t.width = e.width, t.offset = e.left, t.position = 0
							} ) ), this.length = this.elements.items.length, this.widthTotal =
							this.elements.list.getBoundingClientRect().width, this.createObserver()
					}
					createObserver() {
						this.observer = new window.IntersectionObserver( ( t => {
							t.forEach( ( t => {
								t.isIntersecting ? this.enable() : this.disable()
							} ) )
						} ) ).observe( this.element )
					}
					enable() {
						this.isEnabled = !0, this.update()
					}
					disable() {
						this.isEnabled = !1
					}
					onTouchDown( t ) {
						this.isEnabled && ( this.isDown = !0, this.scroll.position = this.scroll
							.current, this.start = t.touches ? t.touches[ 0 ].clientX : t.clientX,
							this.emit( "down" ) )
					}
					onTouchMove( t ) {
						if ( !this.isDown || !this.isEnabled ) return;
						const e = t.touches ? t.touches[ 0 ].clientX : t.clientX,
							i = 2 * ( this.start - e );
						this.scroll.target = this.scroll.position + i, this.emit( "move", {
							distance: i
						} )
					}
					onTouchUp( t ) {
						this.isEnabled && ( this.isDown = !1, this.emit( "up" ) )
					}
					onWheel( t ) {
						if ( !this.isEnabled ) return;
						const e = Yr()( t ).pixelY;
						e > 0 ? this.multiplier = this.index % 2 == 0 ? 1 : -1 : e < 0 && (
								this.multiplier = this.index % 2 == 0 ? -1 : 1 ), this.scroll.target +=
							10 * this.multiplier
					}
					transform( t, e ) {
						t.style[ this.transformPrefix ] =
							`translate3d(${Math.floor(e)}px, 0, 0)`
					}
					update() {
						if ( !this.isEnabled ) return;
						this.scroll.target += 3 * this.multiplier, this.scroll.current = ts(
							this.scroll.current, this.scroll.target, this.scroll.ease );
						const t = Math.round( this.scroll.current % this.widthTotal );
						this.scroll.current < this.scroll.last ? this.direction = "down" :
							this.direction = "up", Br()( this.elements.items, ( ( e, i ) => {
								e.position = -this.scroll.current - e.extra;
								const r = e.position + e.offset + e.width;
								e.isBefore = r < 0, e.isAfter = r > this.widthTotal, "up" === this
									.direction && e.isBefore && ( e.extra = e.extra - this.widthTotal,
										e.isBefore = !1, e.isAfter = !1 ), "down" === this.direction &&
									e.isAfter && ( e.extra = e.extra + this.widthTotal, e.isBefore = !
										1, e.isAfter = !1 ), e.clamp = e.extra % t, this.transform( e, e
										.position )
							} ) ), this.scroll.last = this.scroll.current, this.scroll.clamp = t
					}
					onResize() {
						Br()( this.elements.items, ( t => {
								this.transform( t, 0 );
								const e = Zr( t );
								t.extra = 0, t.width = e.width, t.offset = e.left, t.position = 0
							} ) ), this.widthTotal = this.elements.list.getBoundingClientRect().width,
							this.scroll = {
								ease: .1,
								position: 0,
								current: 0,
								target: 0,
								last: 0
							}
					}
					addEventListeners() {
						this.element.addEventListener( "mousedown", this.onTouchDown, {
							passive: !0
						} ), this.element.addEventListener( "mousemove", this.onTouchMove, {
							passive: !0
						} ), this.element.addEventListener( "mouseup", this.onTouchUp, {
							passive: !0
						} ), this.element.addEventListener( "mouseleave", this.onTouchUp, {
							passive: !0
						} ), this.element.addEventListener( "touchstart", this.onTouchDown, {
							passive: !0
						} ), this.element.addEventListener( "touchmove", this.onTouchMove, {
							passive: !0
						} ), this.element.addEventListener( "touchend", this.onTouchUp, {
							passive: !0
						} ), window.addEventListener( "mousewheel", this.onWheel, {
							passive: !0
						} ), window.addEventListener( "wheel", this.onWheel, {
							passive: !0
						} )
					}
					removeEventListeners() {
						this.element.removeEventListener( "mousedown", this.onTouchDown ),
							this.element.removeEventListener( "mousemove", this.onTouchMove ),
							this.element.removeEventListener( "mouseup", this.onTouchUp ), this.element
							.removeEventListener( "mouseleave", this.onTouchUp ), this.element.removeEventListener(
								"touchstart", this.onTouchDown ), this.element.removeEventListener(
								"touchmove", this.onTouchMove ), this.element.removeEventListener(
								"touchend", this.onTouchUp ), window.removeEventListener(
								"mousewheel", this.onWheel ), window.removeEventListener( "wheel",
								this.onWheel )
					}
					reset() {
						Br()( this.elements.items, ( t => {
							this.transform( t, 0 );
							const e = Zr( t );
							t.extra = 0, t.width = e.width, t.offset = e.left, t.position = 0
						} ) )
					}
				},
				os = 812,
				as = class extends rs {
					constructor() {
						super( {
							classes: {
								active: "cases--active",
								caseActive: "case--active",
								mediaActive: "case__gallery__media__placeholder--active",
								informationActive: "case__information--active"
							},
							element: ".cases",
							elements: {
								navigation: document.querySelectorAll( ".navigation" ),
								case: "#cult",
								cases: ".case"
							}
						} ), this.create()
					}
					show( t ) {
						document.documentElement.classList.add( this.classes.active );
						const e = t.replace( "/case/", "" ).replace( "/", "" );
						this.elements.case = Array.from( this.elements.cases ).find( ( t => t.id ===
								e ) ), this.elements.case.classList.add( this.classes.caseActive ),
							this.elements.case.limit || ( this.elements.case.limit = this.elements
								.case.clientHeight ), this.elements.wrapper = this.elements.case.querySelector(
								".case__content" ), this.scroll.limit = this.elements.case.limit -
							window.innerHeight, this.progress = {
								ease: .1,
								current: 0,
								start: 0,
								target: 0
							}, Br()( this.elements.navigation, ( t => {
								t.style.color = this.elements.case.getAttribute( "data-color" ), t
									.style.transitionDelay = "1s"
							} ) );
						const i = this.elements.case.querySelectorAll(
							".case__header__list__line" );
						return this.lists = Qr( i, ( ( t, e ) => {
							const i = new ns( {
								element: this.element,
								elements: {
									list: t,
									items: t.querySelectorAll( "span" )
								},
								index: e
							} );
							return i.reset(), i
						} ) ), super.show( t )
					}
					async hide( t ) {
						return document.documentElement.classList.remove( this.classes.active ),
							this.elements.case.classList.remove( this.classes.caseActive ), this.lists =
							Qr( this.lists, ( t => t.destroy() ) ), this.lists = [], Br()( this.elements
								.navigation, ( t => {
									t.style.color = "", t.style.transitionDelay = "0s"
								} ) ), super.hide( t )
					}
					onResize() {
						super.onResize(), Br()( this.elements.cases, ( t => {
							t.limit = t.clientHeight, t.next = t.querySelector( ".case__next" ),
								t.next.onclick = this.onNext, t.nextBar = t.querySelector(
									".case__next__loader__bar" ), t.information = t.querySelector(
									".case__information" ), t.informationDescription = t.querySelector(
									".case__information__description" ), t.informationDescriptionText =
								t.querySelector( ".case__information__description__text" ), t.nextLimit =
								t.next.offsetTop - window.innerHeight + ( t.informationDescription
									.clientHeight - t.informationDescriptionText.clientHeight )
						} ) ), Qr( this.lists, ( t => t.onResize() ) )
					}
					onTouchDown( t ) {
						if ( super.onTouchDown( t ), !Nr.isMobile() || !this.isLimit ) return;
						const e = t.touches ? t.touches[ 0 ].clientY : t.clientY;
						this.progress.start = this.progress.target, this.y = e
					}
					onTouchMove( t ) {
						if ( super.onTouchMove( t ), !Nr.isMobile() || !this.isLimit ) return;
						const e = t.touches ? t.touches[ 0 ].clientY : t.clientY,
							i = this.y - e;
						this.progress.target = this.progress.start + .005 * i
					}
					onTouchUp( t ) {
						super.onTouchUp( t )
					}
					onWheel( t ) {
						const e = super.onWheel( t );
						if ( !this.isLimit ) return;
						const i = e < 0 ? -.01 : .01;
						this.progress.target += i
					}
					onNext() {
						const t = this.elements.case.nextElementSibling;
						t ? this.emit( "next", `/case/${t.id}` ) : this.emit( "next", null )
					}
					update() {
						if ( super.update(), window.innerWidth > os && this.elements.case.information ) {
							const t = es( 0, this.elements.case.nextLimit, this.scroll.current );
							this.elements.case.information.style[ this.transformPrefix ] =
								`translate3d(0, ${Math.round(t)}px, 0)`, t > 0 ? this.elements.case.information
								.classList.add( this.classes.informationActive ) : this.elements.case
								.information.classList.remove( this.classes.informationActive )
						} else this.elements.case.information && ( this.elements.case.information
							.style[ this.transformPrefix ] = "", this.elements.case.information.classList
							.contains( this.classes.informationActive ) && this.elements.case.information
							.classList.remove( this.classes.informationActive ) );
						this.isLimit = this.scroll.current >= this.scroll.limit - 15, this.isLimit ?
							this.progress.current >= .999 && this.onNext() : ( this.progress.target *=
								.9, this.progress.target = es( 0, 1, this.progress.target ) ), this.progress
							.current = ts( this.progress.current, this.progress.target, this.progress
								.ease ), this.elements.case.nextBar && ( this.elements.case.nextBar.style[
								this.transformPrefix ] = `scaleX(${this.progress.current})` ), Qr(
								this.lists, ( t => t.update() ) )
					}
				},
				hs = class extends rs {
					constructor() {
						super( {
							classes: {
								active: "home--active",
								footerActive: "footer--visible",
								aboutBackgroundActive: "about__background--active"
							},
							element: ".home",
							elements: {
								wrapper: ".home__content",
								intro: ".intro",
								introBox: ".intro__box",
								introTitle: ".intro__title",
								work: ".work",
								workTitle: ".work__header__title",
								workTitleSpans: ".work__header__title span",
								sliders: "[data-section-slider]",
								about: ".about",
								aboutBackground: ".about__background",
								aboutBackgroundWrapper: ".about__background__wrapper",
								aboutBackgroundShape: ".about__background__shape:first-child",
								aboutBackgroundShapeOther: ".about__background__shape:last-child",
								aboutBrands: ".about__brands",
								aboutAgencies: ".about__agencies",
								aboutAwards: ".about__awards",
								footer: ".footer",
								footerWrapper: ".footer__wrapper",
								footerBackground: ".footer__background",
								navigationIntro: document.querySelector( ".navigation--intro" ),
								navigationIntroWrapper: document.querySelector(
									".navigation--intro .navigation__wrapper" ),
								navigationWork: document.querySelector( ".navigation--work" ),
								navigationWorkWrapper: document.querySelector(
									".navigation--work .navigation__wrapper" ),
								navigationFooter: document.querySelector( ".navigation--footer" ),
								navigationFooterWrapper: document.querySelector(
									".navigation--footer .navigation__wrapper" )
							}
						} ), this.rotate = {
							current: 0,
							ease: .1,
							target: 0
						}, this.create(), this.createWork(), this.createLists()
					}
					async show( t ) {
						return this.element.classList.add( this.classes.active ), super.show(
							t )
					}
					async hide( t ) {
						return this.element.classList.remove( this.classes.active ), super.hide(
							t )
					}
					createWork() {
						this.workTitle = new ns( {
							element: this.elements.work,
							elements: {
								list: this.elements.workTitle,
								items: this.elements.workTitleSpans
							},
							index: 2
						} )
					}
					createLists() {
						this.lists = Qr( this.elements.sliders, ( ( t, e ) => {
							const i = new ns( {
								element: t.closest( "[data-section]" ),
								elements: {
									list: t,
									items: t.querySelectorAll( "span" )
								},
								index: e
							} );
							return i.on( "down", this.onSliderDown ), i.on( "move", this.onSliderMove ),
								i.on( "up", this.onSliderUp ), i
						} ) )
					}
					onSliderDown() {
						this.elements.aboutBackground.classList.add( this.classes.aboutBackgroundActive ),
							this.rotate.start = this.rotate.target
					}
					onSliderMove( {
						distance: t
					} ) {
						this.rotate.target = this.rotate.start + t / 10
					}
					onSliderUp() {
						this.elements.aboutBackground.classList.remove( this.classes.aboutBackgroundActive )
					}
					onResize() {
						super.onResize(), this.viewport = window.innerHeight, this.elements.intro
							.style.height = 3 * this.viewport + "px", this.elements.introBox.style
							.height = `${this.viewport}px`, this.elements.about.style.height =
							4.5 * this.viewport + "px", this.elements.about.style.paddingTop =
							`${this.viewport}px`, this.elements.aboutBackground.style.height =
							`${this.viewport}px`, this.elements.aboutBrands.style.height =
							`${this.viewport}px`, this.elements.aboutAgencies.style.height =
							`${this.viewport}px`, this.elements.aboutAwards.style.height =
							`${this.viewport}px`, this.elements.footer.style.height =
							`${this.viewport}px`, this.aboutTop = this.elements.about.offsetTop,
							this.footerTop = this.elements.footer.offsetTop, this.workTitle.onResize(),
							Qr( this.lists, ( t => t.onResize() ) )
					}
					update() {
						super.update(), this.workTitle.update(), Qr( this.lists, ( t => t.update() ) );
						const t = window.innerWidth <= os,
							e = 3 * this.viewport;
						if ( this.scroll.current < e ) {
							const i = t ? 68 : 34,
								r = es( 0, i, is( this.scroll.current, 0, e / 2, 0, i ) ),
								s = es( 0, e, this.scroll.current );
							this.elements.introTitle.style[ this.transformPrefix ] =
								`translate3d(-${r}%, -50%, 0)`, this.elements.introBox.style[ this.transformPrefix ] =
								`translate3d(0, ${Math.round(s)}px, 0)`
						}
						this.scroll.current < 2.75 * this.viewport ? this.elements.intro.style
							.visibility = "visible" : this.elements.intro.style.visibility =
							"hidden";
						const i = 4 * this.viewport;
						if ( this.scroll.current < i ) {
							let t = es( 0, this.viewport, e - this.scroll.current );
							t < .01 && ( t = 0 ), this.elements.navigationWork.style[ this.transformPrefix ] =
								`translate3d(0, ${t}px, 0)`, this.elements.navigationWorkWrapper.style[
									this.transformPrefix ] = `translate3d(0, -${t}px, 0)`, this.elements
								.navigationIntro.style.visibility = 0 === t ? "hidden" : "visible"
						}
						const r = this.aboutTop - .5 * this.viewport;
						if ( this.scroll.current >= r ) {
							const e = es( 0, 3 * this.viewport, this.scroll.current - this.aboutTop ),
								i = t ? .5 : 1,
								r = es( .25, i, is( this.scroll.current - this.aboutTop, 0, .5 *
									this.viewport, .25, i ) ),
								s = t ? .25 : .5,
								n = es( .25, s, is( this.scroll.current - this.aboutTop, 0, .5 *
									this.viewport, .25, s ) ),
								o = es( 0, 1, is( this.scroll.current - this.aboutTop, 0, .5 * this.viewport,
									0, 1 ) );
							this.rotate.target *= o, this.rotate.current = ts( this.rotate.current,
								this.rotate.target, .1 );
							const a = es( 0, 360, is( this.scroll.current - this.aboutTop, 0, 4 *
								this.viewport, 0, 360 ) ) + this.rotate.current;
							this.elements.aboutBackground.style[ this.transformPrefix ] =
								`translate3d(0, ${e}px, 0)`, this.elements.aboutBackgroundShape.style[
									this.transformPrefix ] =
								`translate(-50%, -50%) scale(${r}) rotate(${a}deg)`, this.elements.aboutBackgroundShapeOther
								.style[ this.transformPrefix ] =
								`translate(-50%, -50%) scale(${n}) rotate(${.5*a}deg)`;
							const h = t ? 75 : 50;
							this.footerTop <= this.scroll.current + h ? ( document.documentElement
								.classList.add( this.classes.footerActive ), window.APP.canvas.home
								.footer && ( window.APP.canvas.home.footer.isVisible = !0 ) ) : (
								document.documentElement.classList.remove( this.classes.footerActive ),
								window.APP.canvas.home.footer && ( window.APP.canvas.home.footer.isVisible = !
									1 ) )
						}
					}
				};

			function ls( t ) {
				let e = t[ 0 ],
					i = t[ 1 ],
					r = t[ 2 ];
				return Math.sqrt( e * e + i * i + r * r )
			}

			function us( t, e ) {
				return t[ 0 ] = e[ 0 ], t[ 1 ] = e[ 1 ], t[ 2 ] = e[ 2 ], t
			}

			function cs( t, e, i ) {
				return t[ 0 ] = e[ 0 ] + i[ 0 ], t[ 1 ] = e[ 1 ] + i[ 1 ], t[ 2 ] = e[ 2 ] +
					i[ 2 ], t
			}

			function ds( t, e, i ) {
				return t[ 0 ] = e[ 0 ] - i[ 0 ], t[ 1 ] = e[ 1 ] - i[ 1 ], t[ 2 ] = e[ 2 ] -
					i[ 2 ], t
			}

			function ps( t, e, i ) {
				return t[ 0 ] = e[ 0 ] * i, t[ 1 ] = e[ 1 ] * i, t[ 2 ] = e[ 2 ] * i, t
			}

			function fs( t ) {
				let e = t[ 0 ],
					i = t[ 1 ],
					r = t[ 2 ];
				return e * e + i * i + r * r
			}

			function ms( t, e ) {
				let i = e[ 0 ],
					r = e[ 1 ],
					s = e[ 2 ],
					n = i * i + r * r + s * s;
				return n > 0 && ( n = 1 / Math.sqrt( n ) ), t[ 0 ] = e[ 0 ] * n, t[ 1 ] =
					e[ 1 ] * n, t[ 2 ] = e[ 2 ] * n, t
			}

			function gs( t, e ) {
				return t[ 0 ] * e[ 0 ] + t[ 1 ] * e[ 1 ] + t[ 2 ] * e[ 2 ]
			}

			function vs( t, e, i ) {
				let r = e[ 0 ],
					s = e[ 1 ],
					n = e[ 2 ],
					o = i[ 0 ],
					a = i[ 1 ],
					h = i[ 2 ];
				return t[ 0 ] = s * h - n * a, t[ 1 ] = n * o - r * h, t[ 2 ] = r * a - s *
					o, t
			}
			const _s = function() {
				const t = [ 0, 0, 0 ],
					e = [ 0, 0, 0 ];
				return function( i, r ) {
					us( t, i ), us( e, r ), ms( t, t ), ms( e, e );
					let s = gs( t, e );
					return s > 1 ? 0 : s < -1 ? Math.PI : Math.acos( s )
				}
			}();
			class ys extends Array {
				constructor( t = 0, e = t, i = t ) {
					return super( t, e, i ), this
				}
				get x() {
					return this[ 0 ]
				}
				get y() {
					return this[ 1 ]
				}
				get z() {
					return this[ 2 ]
				}
				set x( t ) {
					this[ 0 ] = t
				}
				set y( t ) {
					this[ 1 ] = t
				}
				set z( t ) {
					this[ 2 ] = t
				}
				set( t, e = t, i = t ) {
					return t.length ? this.copy( t ) : ( function( t, e, i, r ) {
						t[ 0 ] = e, t[ 1 ] = i, t[ 2 ] = r
					}( this, t, e, i ), this )
				}
				copy( t ) {
					return us( this, t ), this
				}
				add( t, e ) {
					return e ? cs( this, t, e ) : cs( this, this, t ), this
				}
				sub( t, e ) {
					return e ? ds( this, t, e ) : ds( this, this, t ), this
				}
				multiply( t ) {
					var e, i, r;
					return t.length ? ( i = this, r = t, ( e = this )[ 0 ] = i[ 0 ] * r[ 0 ],
						e[ 1 ] = i[ 1 ] * r[ 1 ], e[ 2 ] = i[ 2 ] * r[ 2 ] ) : ps( this, this,
						t ), this
				}
				divide( t ) {
					var e, i, r;
					return t.length ? ( i = this, r = t, ( e = this )[ 0 ] = i[ 0 ] / r[ 0 ],
						e[ 1 ] = i[ 1 ] / r[ 1 ], e[ 2 ] = i[ 2 ] / r[ 2 ] ) : ps( this, this,
						1 / t ), this
				}
				inverse( t = this ) {
					var e, i;
					return i = t, ( e = this )[ 0 ] = 1 / i[ 0 ], e[ 1 ] = 1 / i[ 1 ], e[ 2 ] =
						1 / i[ 2 ], this
				}
				len() {
					return ls( this )
				}
				distance( t ) {
					return t ? function( t, e ) {
						let i = e[ 0 ] - t[ 0 ],
							r = e[ 1 ] - t[ 1 ],
							s = e[ 2 ] - t[ 2 ];
						return Math.sqrt( i * i + r * r + s * s )
					}( this, t ) : ls( this )
				}
				squaredLen() {
					return fs( this )
				}
				squaredDistance( t ) {
					return t ? function( t, e ) {
						let i = e[ 0 ] - t[ 0 ],
							r = e[ 1 ] - t[ 1 ],
							s = e[ 2 ] - t[ 2 ];
						return i * i + r * r + s * s
					}( this, t ) : fs( this )
				}
				negate( t = this ) {
					var e, i;
					return i = t, ( e = this )[ 0 ] = -i[ 0 ], e[ 1 ] = -i[ 1 ], e[ 2 ] = -
						i[ 2 ], this
				}
				cross( t, e ) {
					return e ? vs( this, t, e ) : vs( this, this, t ), this
				}
				scale( t ) {
					return ps( this, this, t ), this
				}
				normalize() {
					return ms( this, this ), this
				}
				dot( t ) {
					return gs( this, t )
				}
				equals( t ) {
					return e = t, this[ 0 ] === e[ 0 ] && this[ 1 ] === e[ 1 ] && this[ 2 ] ===
						e[ 2 ];
					var e
				}
				applyMatrix4( t ) {
					return function( t, e, i ) {
						let r = e[ 0 ],
							s = e[ 1 ],
							n = e[ 2 ],
							o = i[ 3 ] * r + i[ 7 ] * s + i[ 11 ] * n + i[ 15 ];
						o = o || 1, t[ 0 ] = ( i[ 0 ] * r + i[ 4 ] * s + i[ 8 ] * n + i[ 12 ] ) /
							o, t[ 1 ] = ( i[ 1 ] * r + i[ 5 ] * s + i[ 9 ] * n + i[ 13 ] ) / o,
							t[ 2 ] = ( i[ 2 ] * r + i[ 6 ] * s + i[ 10 ] * n + i[ 14 ] ) / o
					}( this, this, t ), this
				}
				scaleRotateMatrix4( t ) {
					return function( t, e, i ) {
						let r = e[ 0 ],
							s = e[ 1 ],
							n = e[ 2 ],
							o = i[ 3 ] * r + i[ 7 ] * s + i[ 11 ] * n + i[ 15 ];
						o = o || 1, t[ 0 ] = ( i[ 0 ] * r + i[ 4 ] * s + i[ 8 ] * n ) / o, t[
							1 ] = ( i[ 1 ] * r + i[ 5 ] * s + i[ 9 ] * n ) / o, t[ 2 ] = ( i[ 2 ] *
							r + i[ 6 ] * s + i[ 10 ] * n ) / o
					}( this, this, t ), this
				}
				applyQuaternion( t ) {
					return function( t, e, i ) {
						let r = e[ 0 ],
							s = e[ 1 ],
							n = e[ 2 ],
							o = i[ 0 ],
							a = i[ 1 ],
							h = i[ 2 ],
							l = a * n - h * s,
							u = h * r - o * n,
							c = o * s - a * r,
							d = a * c - h * u,
							p = h * l - o * c,
							f = o * u - a * l,
							m = 2 * i[ 3 ];
						l *= m, u *= m, c *= m, d *= 2, p *= 2, f *= 2, t[ 0 ] = r + l + d, t[
							1 ] = s + u + p, t[ 2 ] = n + c + f
					}( this, this, t ), this
				}
				angle( t ) {
					return _s( this, t )
				}
				lerp( t, e ) {
					return function( t, e, i, r ) {
						let s = e[ 0 ],
							n = e[ 1 ],
							o = e[ 2 ];
						t[ 0 ] = s + r * ( i[ 0 ] - s ), t[ 1 ] = n + r * ( i[ 1 ] - n ), t[
							2 ] = o + r * ( i[ 2 ] - o )
					}( this, this, t, e ), this
				}
				clone() {
					return new ys( this[ 0 ], this[ 1 ], this[ 2 ] )
				}
				fromArray( t, e = 0 ) {
					return this[ 0 ] = t[ e ], this[ 1 ] = t[ e + 1 ], this[ 2 ] = t[ e + 2 ],
						this
				}
				toArray( t = [], e = 0 ) {
					return t[ e ] = this[ 0 ], t[ e + 1 ] = this[ 1 ], t[ e + 2 ] = this[ 2 ],
						t
				}
				transformDirection( t ) {
					const e = this[ 0 ],
						i = this[ 1 ],
						r = this[ 2 ];
					return this[ 0 ] = t[ 0 ] * e + t[ 4 ] * i + t[ 8 ] * r, this[ 1 ] = t[
							1 ] * e + t[ 5 ] * i + t[ 9 ] * r, this[ 2 ] = t[ 2 ] * e + t[ 6 ] *
						i + t[ 10 ] * r, this.normalize()
				}
			}
			const ws = new ys;
			let xs = 1;
			class bs {
				constructor( {
					canvas: t = document.createElement( "canvas" ),
					width: e = 300,
					height: i = 150,
					dpr: r = 1,
					alpha: s = !1,
					depth: n = !0,
					stencil: o = !1,
					antialias: a = !1,
					premultipliedAlpha: h = !1,
					preserveDrawingBuffer: l = !1,
					powerPreference: u = "default",
					autoClear: c = !0,
					webgl: d = 2
				} = {} ) {
					const p = {
						alpha: s,
						depth: n,
						stencil: o,
						antialias: a,
						premultipliedAlpha: h,
						preserveDrawingBuffer: l,
						powerPreference: u
					};
					this.dpr = r, this.alpha = s, this.color = !0, this.depth = n, this.stencil =
						o, this.premultipliedAlpha = h, this.autoClear = c, this.id = xs++, 2 ===
						d && ( this.gl = t.getContext( "webgl2", p ) ), this.isWebgl2 = !!this
						.gl, this.gl || ( this.gl = t.getContext( "webgl", p ) || t.getContext(
							"experimental-webgl", p ) ), this.gl.renderer = this, this.setSize( e,
							i ), this.state = {}, this.state.blendFunc = {
							src: this.gl.ONE,
							dst: this.gl.ZERO
						}, this.state.blendEquation = {
							modeRGB: this.gl.FUNC_ADD
						}, this.state.cullFace = null, this.state.frontFace = this.gl.CCW,
						this.state.depthMask = !0, this.state.depthFunc = this.gl.LESS, this.state
						.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment =
						4, this.state.framebuffer = null, this.state.viewport = {
							width: null,
							height: null
						}, this.state.textureUnits = [], this.state.activeTextureUnit = 0,
						this.state.boundBuffer = null, this.state.uniformLocations = new Map,
						this.extensions = {}, this.isWebgl2 ? ( this.getExtension(
							"EXT_color_buffer_float" ), this.getExtension(
							"OES_texture_float_linear" ) ) : ( this.getExtension(
								"OES_texture_float" ), this.getExtension( "OES_texture_float_linear" ),
							this.getExtension( "OES_texture_half_float" ), this.getExtension(
								"OES_texture_half_float_linear" ), this.getExtension(
								"OES_element_index_uint" ), this.getExtension(
								"OES_standard_derivatives" ), this.getExtension( "EXT_sRGB" ), this.getExtension(
								"WEBGL_depth_texture" ), this.getExtension( "WEBGL_draw_buffers" ) ),
						this.vertexAttribDivisor = this.getExtension( "ANGLE_instanced_arrays",
							"vertexAttribDivisor", "vertexAttribDivisorANGLE" ), this.drawArraysInstanced =
						this.getExtension( "ANGLE_instanced_arrays", "drawArraysInstanced",
							"drawArraysInstancedANGLE" ), this.drawElementsInstanced = this.getExtension(
							"ANGLE_instanced_arrays", "drawElementsInstanced",
							"drawElementsInstancedANGLE" ), this.createVertexArray = this.getExtension(
							"OES_vertex_array_object", "createVertexArray",
							"createVertexArrayOES" ), this.bindVertexArray = this.getExtension(
							"OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES" ),
						this.deleteVertexArray = this.getExtension( "OES_vertex_array_object",
							"deleteVertexArray", "deleteVertexArrayOES" ), this.drawBuffers =
						this.getExtension( "WEBGL_draw_buffers", "drawBuffers",
							"drawBuffersWEBGL" ), this.parameters = {}, this.parameters.maxTextureUnits =
						this.gl.getParameter( this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS ), this
						.parameters.maxAnisotropy = this.getExtension(
							"EXT_texture_filter_anisotropic" ) ? this.gl.getParameter( this.getExtension(
							"EXT_texture_filter_anisotropic" ).MAX_TEXTURE_MAX_ANISOTROPY_EXT ) :
						0
				}
				setSize( t, e ) {
					this.width = t, this.height = e, this.gl.canvas.width = t * this.dpr,
						this.gl.canvas.height = e * this.dpr, Object.assign( this.gl.canvas.style, {
							width: t + "px",
							height: e + "px"
						} )
				}
				setViewport( t, e ) {
					this.state.viewport.width === t && this.state.viewport.height === e ||
						( this.state.viewport.width = t, this.state.viewport.height = e, this.gl
							.viewport( 0, 0, t, e ) )
				}
				enable( t ) {
					!0 !== this.state[ t ] && ( this.gl.enable( t ), this.state[ t ] = !0 )
				}
				disable( t ) {
					!1 !== this.state[ t ] && ( this.gl.disable( t ), this.state[ t ] = !1 )
				}
				setBlendFunc( t, e, i, r ) {
					this.state.blendFunc.src === t && this.state.blendFunc.dst === e &&
						this.state.blendFunc.srcAlpha === i && this.state.blendFunc.dstAlpha ===
						r || ( this.state.blendFunc.src = t, this.state.blendFunc.dst = e,
							this.state.blendFunc.srcAlpha = i, this.state.blendFunc.dstAlpha = r,
							void 0 !== i ? this.gl.blendFuncSeparate( t, e, i, r ) : this.gl.blendFunc(
								t, e ) )
				}
				setBlendEquation( t, e ) {
					t = t || this.gl.FUNC_ADD, this.state.blendEquation.modeRGB === t &&
						this.state.blendEquation.modeAlpha === e || ( this.state.blendEquation
							.modeRGB = t, this.state.blendEquation.modeAlpha = e, void 0 !== e ?
							this.gl.blendEquationSeparate( t, e ) : this.gl.blendEquation( t ) )
				}
				setCullFace( t ) {
					this.state.cullFace !== t && ( this.state.cullFace = t, this.gl.cullFace(
						t ) )
				}
				setFrontFace( t ) {
					this.state.frontFace !== t && ( this.state.frontFace = t, this.gl.frontFace(
						t ) )
				}
				setDepthMask( t ) {
					this.state.depthMask !== t && ( this.state.depthMask = t, this.gl.depthMask(
						t ) )
				}
				setDepthFunc( t ) {
					this.state.depthFunc !== t && ( this.state.depthFunc = t, this.gl.depthFunc(
						t ) )
				}
				activeTexture( t ) {
					this.state.activeTextureUnit !== t && ( this.state.activeTextureUnit =
						t, this.gl.activeTexture( this.gl.TEXTURE0 + t ) )
				}
				bindFramebuffer( {
					target: t = this.gl.FRAMEBUFFER,
					buffer: e = null
				} = {} ) {
					this.state.framebuffer !== e && ( this.state.framebuffer = e, this.gl.bindFramebuffer(
						t, e ) )
				}
				getExtension( t, e, i ) {
					return e && this.gl[ e ] ? this.gl[ e ].bind( this.gl ) : ( this.extensions[
							t ] || ( this.extensions[ t ] = this.gl.getExtension( t ) ), e ?
						this.extensions[ t ] ? this.extensions[ t ][ i ].bind( this.extensions[
							t ] ) : null : this.extensions[ t ] )
				}
				sortOpaque( t, e ) {
					return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder :
						t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !==
						e.zDepth ? t.zDepth - e.zDepth : e.id - t.id
				}
				sortTransparent( t, e ) {
					return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder :
						t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id
				}
				sortUI( t, e ) {
					return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder :
						t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t
						.id
				}
				getRenderList( {
					scene: t,
					camera: e,
					frustumCull: i,
					sort: r
				} ) {
					let s = [];
					if ( e && i && e.updateFrustum(), t.traverse( ( t => {
							if ( !t.visible ) return !0;
							t.draw && ( i && t.frustumCulled && e && !e.frustumIntersectsMesh(
								t ) || s.push( t ) )
						} ) ), r ) {
						const t = [],
							i = [],
							r = [];
						s.forEach( ( s => {
							s.program.transparent ? s.program.depthTest ? i.push( s ) : r.push(
									s ) : t.push( s ), s.zDepth = 0, 0 === s.renderOrder && s.program
								.depthTest && e && ( s.worldMatrix.getTranslation( ws ), ws.applyMatrix4(
									e.projectionViewMatrix ), s.zDepth = ws.z )
						} ) ), t.sort( this.sortOpaque ), i.sort( this.sortTransparent ), r.sort(
							this.sortUI ), s = t.concat( i, r )
					}
					return s
				}
				render( {
					scene: t,
					camera: e,
					target: i = null,
					update: r = !0,
					sort: s = !0,
					frustumCull: n = !0,
					clear: o
				} ) {
					null === i ? ( this.bindFramebuffer(), this.setViewport( this.width *
							this.dpr, this.height * this.dpr ) ) : ( this.bindFramebuffer( i ),
							this.setViewport( i.width, i.height ) ), ( o || this.autoClear && !1 !==
							o ) && ( !this.depth || i && !i.depth || ( this.enable( this.gl.DEPTH_TEST ),
							this.setDepthMask( !0 ) ), this.gl.clear( ( this.color ? this.gl.COLOR_BUFFER_BIT :
							0 ) | ( this.depth ? this.gl.DEPTH_BUFFER_BIT : 0 ) | ( this.stencil ?
							this.gl.STENCIL_BUFFER_BIT : 0 ) ) ), r && t.updateMatrixWorld(), e &&
						e.updateMatrixWorld(), this.getRenderList( {
							scene: t,
							camera: e,
							frustumCull: n,
							sort: s
						} ).forEach( ( t => {
							t.draw( {
								camera: e
							} )
						} ) )
				}
			}

			function Ms( t, e, i ) {
				let r = e[ 0 ],
					s = e[ 1 ],
					n = e[ 2 ],
					o = e[ 3 ],
					a = i[ 0 ],
					h = i[ 1 ],
					l = i[ 2 ],
					u = i[ 3 ];
				return t[ 0 ] = r * u + o * a + s * l - n * h, t[ 1 ] = s * u + o * h + n *
					a - r * l, t[ 2 ] = n * u + o * l + r * h - s * a, t[ 3 ] = o * u - r *
					a - s * h - n * l, t
			}
			class Ts extends Array {
				constructor( t = 0, e = 0, i = 0, r = 1 ) {
					return super( t, e, i, r ), this.onChange = () => {}, this
				}
				get x() {
					return this[ 0 ]
				}
				get y() {
					return this[ 1 ]
				}
				get z() {
					return this[ 2 ]
				}
				get w() {
					return this[ 3 ]
				}
				set x( t ) {
					this[ 0 ] = t, this.onChange()
				}
				set y( t ) {
					this[ 1 ] = t, this.onChange()
				}
				set z( t ) {
					this[ 2 ] = t, this.onChange()
				}
				set w( t ) {
					this[ 3 ] = t, this.onChange()
				}
				identity() {
					var t;
					return ( t = this )[ 0 ] = 0, t[ 1 ] = 0, t[ 2 ] = 0, t[ 3 ] = 1, this.onChange(),
						this
				}
				set( t, e, i, r ) {
					return t.length ? this.copy( t ) : ( function( t, e, i, r, s ) {
						t[ 0 ] = e, t[ 1 ] = i, t[ 2 ] = r, t[ 3 ] = s
					}( this, t, e, i, r ), this.onChange(), this )
				}
				rotateX( t ) {
					return function( t, e, i ) {
						i *= .5;
						let r = e[ 0 ],
							s = e[ 1 ],
							n = e[ 2 ],
							o = e[ 3 ],
							a = Math.sin( i ),
							h = Math.cos( i );
						t[ 0 ] = r * h + o * a, t[ 1 ] = s * h + n * a, t[ 2 ] = n * h - s *
							a, t[ 3 ] = o * h - r * a
					}( this, this, t ), this.onChange(), this
				}
				rotateY( t ) {
					return function( t, e, i ) {
						i *= .5;
						let r = e[ 0 ],
							s = e[ 1 ],
							n = e[ 2 ],
							o = e[ 3 ],
							a = Math.sin( i ),
							h = Math.cos( i );
						t[ 0 ] = r * h - n * a, t[ 1 ] = s * h + o * a, t[ 2 ] = n * h + r *
							a, t[ 3 ] = o * h - s * a
					}( this, this, t ), this.onChange(), this
				}
				rotateZ( t ) {
					return function( t, e, i ) {
						i *= .5;
						let r = e[ 0 ],
							s = e[ 1 ],
							n = e[ 2 ],
							o = e[ 3 ],
							a = Math.sin( i ),
							h = Math.cos( i );
						t[ 0 ] = r * h + s * a, t[ 1 ] = s * h - r * a, t[ 2 ] = n * h + o *
							a, t[ 3 ] = o * h - n * a
					}( this, this, t ), this.onChange(), this
				}
				inverse( t = this ) {
					return function( t, e ) {
						let i = e[ 0 ],
							r = e[ 1 ],
							s = e[ 2 ],
							n = e[ 3 ],
							o = i * i + r * r + s * s + n * n,
							a = o ? 1 / o : 0;
						t[ 0 ] = -i * a, t[ 1 ] = -r * a, t[ 2 ] = -s * a, t[ 3 ] = n * a
					}( this, t ), this.onChange(), this
				}
				conjugate( t = this ) {
					var e, i;
					return i = t, ( e = this )[ 0 ] = -i[ 0 ], e[ 1 ] = -i[ 1 ], e[ 2 ] = -
						i[ 2 ], e[ 3 ] = i[ 3 ], this.onChange(), this
				}
				copy( t ) {
					return i = t, ( e = this )[ 0 ] = i[ 0 ], e[ 1 ] = i[ 1 ], e[ 2 ] = i[
						2 ], e[ 3 ] = i[ 3 ], this.onChange(), this;
					var e, i
				}
				normalize( t = this ) {
					return function( t, e ) {
						let i = e[ 0 ],
							r = e[ 1 ],
							s = e[ 2 ],
							n = e[ 3 ],
							o = i * i + r * r + s * s + n * n;
						o > 0 && ( o = 1 / Math.sqrt( o ) ), t[ 0 ] = i * o, t[ 1 ] = r * o,
							t[ 2 ] = s * o, t[ 3 ] = n * o
					}( this, t ), this.onChange(), this
				}
				multiply( t, e ) {
					return e ? Ms( this, t, e ) : Ms( this, this, t ), this.onChange(),
						this
				}
				dot( t ) {
					return i = t, ( e = this )[ 0 ] * i[ 0 ] + e[ 1 ] * i[ 1 ] + e[ 2 ] * i[
						2 ] + e[ 3 ] * i[ 3 ];
					var e, i
				}
				fromMatrix3( t ) {
					return function( t, e ) {
						let i, r = e[ 0 ] + e[ 4 ] + e[ 8 ];
						if ( r > 0 ) i = Math.sqrt( r + 1 ), t[ 3 ] = .5 * i, i = .5 / i, t[
							0 ] = ( e[ 5 ] - e[ 7 ] ) * i, t[ 1 ] = ( e[ 6 ] - e[ 2 ] ) * i, t[
							2 ] = ( e[ 1 ] - e[ 3 ] ) * i;
						else {
							let r = 0;
							e[ 4 ] > e[ 0 ] && ( r = 1 ), e[ 8 ] > e[ 3 * r + r ] && ( r = 2 );
							let s = ( r + 1 ) % 3,
								n = ( r + 2 ) % 3;
							i = Math.sqrt( e[ 3 * r + r ] - e[ 3 * s + s ] - e[ 3 * n + n ] + 1 ),
								t[ r ] = .5 * i, i = .5 / i, t[ 3 ] = ( e[ 3 * s + n ] - e[ 3 * n +
									s ] ) * i, t[ s ] = ( e[ 3 * s + r ] + e[ 3 * r + s ] ) * i, t[ n ] =
								( e[ 3 * n + r ] + e[ 3 * r + n ] ) * i
						}
					}( this, t ), this.onChange(), this
				}
				fromEuler( t ) {
					return function( t, e, i = "YXZ" ) {
						let r = Math.sin( .5 * e[ 0 ] ),
							s = Math.cos( .5 * e[ 0 ] ),
							n = Math.sin( .5 * e[ 1 ] ),
							o = Math.cos( .5 * e[ 1 ] ),
							a = Math.sin( .5 * e[ 2 ] ),
							h = Math.cos( .5 * e[ 2 ] );
						"XYZ" === i ? ( t[ 0 ] = r * o * h + s * n * a, t[ 1 ] = s * n * h -
								r * o * a, t[ 2 ] = s * o * a + r * n * h, t[ 3 ] = s * o * h - r *
								n * a ) : "YXZ" === i ? ( t[ 0 ] = r * o * h + s * n * a, t[ 1 ] =
								s * n * h - r * o * a, t[ 2 ] = s * o * a - r * n * h, t[ 3 ] = s *
								o * h + r * n * a ) : "ZXY" === i ? ( t[ 0 ] = r * o * h - s * n *
								a, t[ 1 ] = s * n * h + r * o * a, t[ 2 ] = s * o * a + r * n * h,
								t[ 3 ] = s * o * h - r * n * a ) : "ZYX" === i ? ( t[ 0 ] = r * o *
								h - s * n * a, t[ 1 ] = s * n * h + r * o * a, t[ 2 ] = s * o * a -
								r * n * h, t[ 3 ] = s * o * h + r * n * a ) : "YZX" === i ? ( t[ 0 ] =
								r * o * h + s * n * a, t[ 1 ] = s * n * h + r * o * a, t[ 2 ] = s *
								o * a - r * n * h, t[ 3 ] = s * o * h - r * n * a ) : "XZY" === i &&
							( t[ 0 ] = r * o * h - s * n * a, t[ 1 ] = s * n * h - r * o * a, t[
								2 ] = s * o * a + r * n * h, t[ 3 ] = s * o * h + r * n * a )
					}( this, t, t.order ), this
				}
				fromAxisAngle( t, e ) {
					return function( t, e, i ) {
						i *= .5;
						let r = Math.sin( i );
						t[ 0 ] = r * e[ 0 ], t[ 1 ] = r * e[ 1 ], t[ 2 ] = r * e[ 2 ], t[ 3 ] =
							Math.cos( i )
					}( this, t, e ), this
				}
				slerp( t, e ) {
					return function( t, e, i, r ) {
						let s, n, o, a, h, l = e[ 0 ],
							u = e[ 1 ],
							c = e[ 2 ],
							d = e[ 3 ],
							p = i[ 0 ],
							f = i[ 1 ],
							m = i[ 2 ],
							g = i[ 3 ];
						n = l * p + u * f + c * m + d * g, n < 0 && ( n = -n, p = -p, f = -f,
								m = -m, g = -g ), 1 - n > 1e-6 ? ( s = Math.acos( n ), o = Math.sin(
								s ), a = Math.sin( ( 1 - r ) * s ) / o, h = Math.sin( r * s ) / o ) :
							( a = 1 - r, h = r ), t[ 0 ] = a * l + h * p, t[ 1 ] = a * u + h * f,
							t[ 2 ] = a * c + h * m, t[ 3 ] = a * d + h * g
					}( this, this, t, e ), this
				}
				fromArray( t, e = 0 ) {
					return this[ 0 ] = t[ e ], this[ 1 ] = t[ e + 1 ], this[ 2 ] = t[ e + 2 ],
						this[ 3 ] = t[ e + 3 ], this
				}
				toArray( t = [], e = 0 ) {
					return t[ e ] = this[ 0 ], t[ e + 1 ] = this[ 1 ], t[ e + 2 ] = this[ 2 ],
						t[ e + 3 ] = this[ 3 ], t
				}
			}

			function As( t, e, i ) {
				let r = e[ 0 ],
					s = e[ 1 ],
					n = e[ 2 ],
					o = e[ 3 ],
					a = e[ 4 ],
					h = e[ 5 ],
					l = e[ 6 ],
					u = e[ 7 ],
					c = e[ 8 ],
					d = e[ 9 ],
					p = e[ 10 ],
					f = e[ 11 ],
					m = e[ 12 ],
					g = e[ 13 ],
					v = e[ 14 ],
					_ = e[ 15 ],
					y = i[ 0 ],
					w = i[ 1 ],
					x = i[ 2 ],
					b = i[ 3 ];
				return t[ 0 ] = y * r + w * a + x * c + b * m, t[ 1 ] = y * s + w * h + x *
					d + b * g, t[ 2 ] = y * n + w * l + x * p + b * v, t[ 3 ] = y * o + w *
					u + x * f + b * _, y = i[ 4 ], w = i[ 5 ], x = i[ 6 ], b = i[ 7 ], t[ 4 ] =
					y * r + w * a + x * c + b * m, t[ 5 ] = y * s + w * h + x * d + b * g, t[
						6 ] = y * n + w * l + x * p + b * v, t[ 7 ] = y * o + w * u + x * f + b *
					_, y = i[ 8 ], w = i[ 9 ], x = i[ 10 ], b = i[ 11 ], t[ 8 ] = y * r + w *
					a + x * c + b * m, t[ 9 ] = y * s + w * h + x * d + b * g, t[ 10 ] = y *
					n + w * l + x * p + b * v, t[ 11 ] = y * o + w * u + x * f + b * _, y =
					i[ 12 ], w = i[ 13 ], x = i[ 14 ], b = i[ 15 ], t[ 12 ] = y * r + w * a +
					x * c + b * m, t[ 13 ] = y * s + w * h + x * d + b * g, t[ 14 ] = y * n +
					w * l + x * p + b * v, t[ 15 ] = y * o + w * u + x * f + b * _, t
			}

			function Es( t, e ) {
				let i = e[ 0 ],
					r = e[ 1 ],
					s = e[ 2 ],
					n = e[ 4 ],
					o = e[ 5 ],
					a = e[ 6 ],
					h = e[ 8 ],
					l = e[ 9 ],
					u = e[ 10 ];
				return t[ 0 ] = Math.hypot( i, r, s ), t[ 1 ] = Math.hypot( n, o, a ), t[
					2 ] = Math.hypot( h, l, u ), t
			}
			const Ss = function() {
				const t = [ 0, 0, 0 ];
				return function( e, i ) {
					let r = t;
					Es( r, i );
					let s = 1 / r[ 0 ],
						n = 1 / r[ 1 ],
						o = 1 / r[ 2 ],
						a = i[ 0 ] * s,
						h = i[ 1 ] * n,
						l = i[ 2 ] * o,
						u = i[ 4 ] * s,
						c = i[ 5 ] * n,
						d = i[ 6 ] * o,
						p = i[ 8 ] * s,
						f = i[ 9 ] * n,
						m = i[ 10 ] * o,
						g = a + c + m,
						v = 0;
					return g > 0 ? ( v = 2 * Math.sqrt( g + 1 ), e[ 3 ] = .25 * v, e[ 0 ] =
							( d - f ) / v, e[ 1 ] = ( p - l ) / v, e[ 2 ] = ( h - u ) / v ) : a >
						c && a > m ? ( v = 2 * Math.sqrt( 1 + a - c - m ), e[ 3 ] = ( d - f ) /
							v, e[ 0 ] = .25 * v, e[ 1 ] = ( h + u ) / v, e[ 2 ] = ( p + l ) / v ) :
						c > m ? ( v = 2 * Math.sqrt( 1 + c - a - m ), e[ 3 ] = ( p - l ) / v,
							e[ 0 ] = ( h + u ) / v, e[ 1 ] = .25 * v, e[ 2 ] = ( d + f ) / v ) :
						( v = 2 * Math.sqrt( 1 + m - a - c ), e[ 3 ] = ( h - u ) / v, e[ 0 ] =
							( p + l ) / v, e[ 1 ] = ( d + f ) / v, e[ 2 ] = .25 * v ), e
				}
			}();
			class Ps extends Array {
				constructor( t = 1, e = 0, i = 0, r = 0, s = 0, n = 1, o = 0, a = 0, h =
					0, l = 0, u = 1, c = 0, d = 0, p = 0, f = 0, m = 1 ) {
					return super( t, e, i, r, s, n, o, a, h, l, u, c, d, p, f, m ), this
				}
				get x() {
					return this[ 12 ]
				}
				get y() {
					return this[ 13 ]
				}
				get z() {
					return this[ 14 ]
				}
				get w() {
					return this[ 15 ]
				}
				set x( t ) {
					this[ 12 ] = t
				}
				set y( t ) {
					this[ 13 ] = t
				}
				set z( t ) {
					this[ 14 ] = t
				}
				set w( t ) {
					this[ 15 ] = t
				}
				set( t, e, i, r, s, n, o, a, h, l, u, c, d, p, f, m ) {
					return t.length ? this.copy( t ) : ( function( t, e, i, r, s, n, o, a,
						h, l, u, c, d, p, f, m, g ) {
						t[ 0 ] = e, t[ 1 ] = i, t[ 2 ] = r, t[ 3 ] = s, t[ 4 ] = n, t[ 5 ] =
							o, t[ 6 ] = a, t[ 7 ] = h, t[ 8 ] = l, t[ 9 ] = u, t[ 10 ] = c, t[
								11 ] = d, t[ 12 ] = p, t[ 13 ] = f, t[ 14 ] = m, t[ 15 ] = g
					}( this, t, e, i, r, s, n, o, a, h, l, u, c, d, p, f, m ), this )
				}
				translate( t, e = this ) {
					return function( t, e, i ) {
						let r, s, n, o, a, h, l, u, c, d, p, f, m = i[ 0 ],
							g = i[ 1 ],
							v = i[ 2 ];
						e === t ? ( t[ 12 ] = e[ 0 ] * m + e[ 4 ] * g + e[ 8 ] * v + e[ 12 ],
							t[ 13 ] = e[ 1 ] * m + e[ 5 ] * g + e[ 9 ] * v + e[ 13 ], t[ 14 ] =
							e[ 2 ] * m + e[ 6 ] * g + e[ 10 ] * v + e[ 14 ], t[ 15 ] = e[ 3 ] *
							m + e[ 7 ] * g + e[ 11 ] * v + e[ 15 ] ) : ( r = e[ 0 ], s = e[ 1 ],
							n = e[ 2 ], o = e[ 3 ], a = e[ 4 ], h = e[ 5 ], l = e[ 6 ], u = e[
								7 ], c = e[ 8 ], d = e[ 9 ], p = e[ 10 ], f = e[ 11 ], t[ 0 ] = r,
							t[ 1 ] = s, t[ 2 ] = n, t[ 3 ] = o, t[ 4 ] = a, t[ 5 ] = h, t[ 6 ] =
							l, t[ 7 ] = u, t[ 8 ] = c, t[ 9 ] = d, t[ 10 ] = p, t[ 11 ] = f, t[
								12 ] = r * m + a * g + c * v + e[ 12 ], t[ 13 ] = s * m + h * g +
							d * v + e[ 13 ], t[ 14 ] = n * m + l * g + p * v + e[ 14 ], t[ 15 ] =
							o * m + u * g + f * v + e[ 15 ] )
					}( this, e, t ), this
				}
				rotate( t, e, i = this ) {
					return function( t, e, i, r ) {
						let s, n, o, a, h, l, u, c, d, p, f, m, g, v, _, y, w, x, b, M, T, A,
							E, S, P = r[ 0 ],
							O = r[ 1 ],
							L = r[ 2 ],
							C = Math.hypot( P, O, L );
						Math.abs( C ) < 1e-6 || ( C = 1 / C, P *= C, O *= C, L *= C, s = Math
							.sin( i ), n = Math.cos( i ), o = 1 - n, a = e[ 0 ], h = e[ 1 ], l =
							e[ 2 ], u = e[ 3 ], c = e[ 4 ], d = e[ 5 ], p = e[ 6 ], f = e[ 7 ],
							m = e[ 8 ], g = e[ 9 ], v = e[ 10 ], _ = e[ 11 ], y = P * P * o + n,
							w = O * P * o + L * s, x = L * P * o - O * s, b = P * O * o - L * s,
							M = O * O * o + n, T = L * O * o + P * s, A = P * L * o + O * s, E =
							O * L * o - P * s, S = L * L * o + n, t[ 0 ] = a * y + c * w + m *
							x, t[ 1 ] = h * y + d * w + g * x, t[ 2 ] = l * y + p * w + v * x,
							t[ 3 ] = u * y + f * w + _ * x, t[ 4 ] = a * b + c * M + m * T, t[
								5 ] = h * b + d * M + g * T, t[ 6 ] = l * b + p * M + v * T, t[ 7 ] =
							u * b + f * M + _ * T, t[ 8 ] = a * A + c * E + m * S, t[ 9 ] = h *
							A + d * E + g * S, t[ 10 ] = l * A + p * E + v * S, t[ 11 ] = u * A +
							f * E + _ * S, e !== t && ( t[ 12 ] = e[ 12 ], t[ 13 ] = e[ 13 ], t[
								14 ] = e[ 14 ], t[ 15 ] = e[ 15 ] ) )
					}( this, i, t, e ), this
				}
				scale( t, e = this ) {
					return function( t, e, i ) {
						let r = i[ 0 ],
							s = i[ 1 ],
							n = i[ 2 ];
						t[ 0 ] = e[ 0 ] * r, t[ 1 ] = e[ 1 ] * r, t[ 2 ] = e[ 2 ] * r, t[ 3 ] =
							e[ 3 ] * r, t[ 4 ] = e[ 4 ] * s, t[ 5 ] = e[ 5 ] * s, t[ 6 ] = e[ 6 ] *
							s, t[ 7 ] = e[ 7 ] * s, t[ 8 ] = e[ 8 ] * n, t[ 9 ] = e[ 9 ] * n, t[
								10 ] = e[ 10 ] * n, t[ 11 ] = e[ 11 ] * n, t[ 12 ] = e[ 12 ], t[ 13 ] =
							e[ 13 ], t[ 14 ] = e[ 14 ], t[ 15 ] = e[ 15 ]
					}( this, e, "number" == typeof t ? [ t, t, t ] : t ), this
				}
				multiply( t, e ) {
					return e ? As( this, t, e ) : As( this, this, t ), this
				}
				identity() {
					var t;
					return ( t = this )[ 0 ] = 1, t[ 1 ] = 0, t[ 2 ] = 0, t[ 3 ] = 0, t[ 4 ] =
						0, t[ 5 ] = 1, t[ 6 ] = 0, t[ 7 ] = 0, t[ 8 ] = 0, t[ 9 ] = 0, t[ 10 ] =
						1, t[ 11 ] = 0, t[ 12 ] = 0, t[ 13 ] = 0, t[ 14 ] = 0, t[ 15 ] = 1,
						this
				}
				copy( t ) {
					var e, i;
					return i = t, ( e = this )[ 0 ] = i[ 0 ], e[ 1 ] = i[ 1 ], e[ 2 ] = i[
							2 ], e[ 3 ] = i[ 3 ], e[ 4 ] = i[ 4 ], e[ 5 ] = i[ 5 ], e[ 6 ] = i[ 6 ],
						e[ 7 ] = i[ 7 ], e[ 8 ] = i[ 8 ], e[ 9 ] = i[ 9 ], e[ 10 ] = i[ 10 ],
						e[ 11 ] = i[ 11 ], e[ 12 ] = i[ 12 ], e[ 13 ] = i[ 13 ], e[ 14 ] = i[
							14 ], e[ 15 ] = i[ 15 ], this
				}
				fromPerspective( {
					fov: t,
					aspect: e,
					near: i,
					far: r
				} = {} ) {
					return function( t, e, i, r, s ) {
						let n = 1 / Math.tan( e / 2 ),
							o = 1 / ( r - s );
						t[ 0 ] = n / i, t[ 1 ] = 0, t[ 2 ] = 0, t[ 3 ] = 0, t[ 4 ] = 0, t[ 5 ] =
							n, t[ 6 ] = 0, t[ 7 ] = 0, t[ 8 ] = 0, t[ 9 ] = 0, t[ 10 ] = ( s + r ) *
							o, t[ 11 ] = -1, t[ 12 ] = 0, t[ 13 ] = 0, t[ 14 ] = 2 * s * r * o,
							t[ 15 ] = 0
					}( this, t, e, i, r ), this
				}
				fromOrthogonal( {
					left: t,
					right: e,
					bottom: i,
					top: r,
					near: s,
					far: n
				} ) {
					return function( t, e, i, r, s, n, o ) {
						let a = 1 / ( e - i ),
							h = 1 / ( r - s ),
							l = 1 / ( n - o );
						t[ 0 ] = -2 * a, t[ 1 ] = 0, t[ 2 ] = 0, t[ 3 ] = 0, t[ 4 ] = 0, t[ 5 ] = -
							2 * h, t[ 6 ] = 0, t[ 7 ] = 0, t[ 8 ] = 0, t[ 9 ] = 0, t[ 10 ] = 2 *
							l, t[ 11 ] = 0, t[ 12 ] = ( e + i ) * a, t[ 13 ] = ( s + r ) * h, t[
								14 ] = ( o + n ) * l, t[ 15 ] = 1
					}( this, t, e, i, r, s, n ), this
				}
				fromQuaternion( t ) {
					return function( t, e ) {
						let i = e[ 0 ],
							r = e[ 1 ],
							s = e[ 2 ],
							n = e[ 3 ],
							o = i + i,
							a = r + r,
							h = s + s,
							l = i * o,
							u = r * o,
							c = r * a,
							d = s * o,
							p = s * a,
							f = s * h,
							m = n * o,
							g = n * a,
							v = n * h;
						t[ 0 ] = 1 - c - f, t[ 1 ] = u + v, t[ 2 ] = d - g, t[ 3 ] = 0, t[ 4 ] =
							u - v, t[ 5 ] = 1 - l - f, t[ 6 ] = p + m, t[ 7 ] = 0, t[ 8 ] = d +
							g, t[ 9 ] = p - m, t[ 10 ] = 1 - l - c, t[ 11 ] = 0, t[ 12 ] = 0, t[
								13 ] = 0, t[ 14 ] = 0, t[ 15 ] = 1
					}( this, t ), this
				}
				setPosition( t ) {
					return this.x = t[ 0 ], this.y = t[ 1 ], this.z = t[ 2 ], this
				}
				inverse( t = this ) {
					return function( t, e ) {
						let i = e[ 0 ],
							r = e[ 1 ],
							s = e[ 2 ],
							n = e[ 3 ],
							o = e[ 4 ],
							a = e[ 5 ],
							h = e[ 6 ],
							l = e[ 7 ],
							u = e[ 8 ],
							c = e[ 9 ],
							d = e[ 10 ],
							p = e[ 11 ],
							f = e[ 12 ],
							m = e[ 13 ],
							g = e[ 14 ],
							v = e[ 15 ],
							_ = i * a - r * o,
							y = i * h - s * o,
							w = i * l - n * o,
							x = r * h - s * a,
							b = r * l - n * a,
							M = s * l - n * h,
							T = u * m - c * f,
							A = u * g - d * f,
							E = u * v - p * f,
							S = c * g - d * m,
							P = c * v - p * m,
							O = d * v - p * g,
							L = _ * O - y * P + w * S + x * E - b * A + M * T;
						L && ( L = 1 / L, t[ 0 ] = ( a * O - h * P + l * S ) * L, t[ 1 ] = (
								s * P - r * O - n * S ) * L, t[ 2 ] = ( m * M - g * b + v * x ) *
							L, t[ 3 ] = ( d * b - c * M - p * x ) * L, t[ 4 ] = ( h * E - o * O -
								l * A ) * L, t[ 5 ] = ( i * O - s * E + n * A ) * L, t[ 6 ] = ( g *
								w - f * M - v * y ) * L, t[ 7 ] = ( u * M - d * w + p * y ) * L, t[
								8 ] = ( o * P - a * E + l * T ) * L, t[ 9 ] = ( r * E - i * P - n *
								T ) * L, t[ 10 ] = ( f * b - m * w + v * _ ) * L, t[ 11 ] = ( c *
								w - u * b - p * _ ) * L, t[ 12 ] = ( a * A - o * S - h * T ) * L,
							t[ 13 ] = ( i * S - r * A + s * T ) * L, t[ 14 ] = ( m * y - f * x -
								g * _ ) * L, t[ 15 ] = ( u * x - c * y + d * _ ) * L )
					}( this, t ), this
				}
				compose( t, e, i ) {
					return function( t, e, i, r ) {
						let s = e[ 0 ],
							n = e[ 1 ],
							o = e[ 2 ],
							a = e[ 3 ],
							h = s + s,
							l = n + n,
							u = o + o,
							c = s * h,
							d = s * l,
							p = s * u,
							f = n * l,
							m = n * u,
							g = o * u,
							v = a * h,
							_ = a * l,
							y = a * u,
							w = r[ 0 ],
							x = r[ 1 ],
							b = r[ 2 ];
						t[ 0 ] = ( 1 - ( f + g ) ) * w, t[ 1 ] = ( d + y ) * w, t[ 2 ] = ( p -
								_ ) * w, t[ 3 ] = 0, t[ 4 ] = ( d - y ) * x, t[ 5 ] = ( 1 - ( c + g ) ) *
							x, t[ 6 ] = ( m + v ) * x, t[ 7 ] = 0, t[ 8 ] = ( p + _ ) * b, t[ 9 ] =
							( m - v ) * b, t[ 10 ] = ( 1 - ( c + f ) ) * b, t[ 11 ] = 0, t[ 12 ] =
							i[ 0 ], t[ 13 ] = i[ 1 ], t[ 14 ] = i[ 2 ], t[ 15 ] = 1
					}( this, t, e, i ), this
				}
				getRotation( t ) {
					return Ss( t, this ), this
				}
				getTranslation( t ) {
					var e, i;
					return i = this, ( e = t )[ 0 ] = i[ 12 ], e[ 1 ] = i[ 13 ], e[ 2 ] = i[
						14 ], this
				}
				getScaling( t ) {
					return Es( t, this ), this
				}
				getMaxScaleOnAxis() {
					return function( t ) {
						let e = t[ 0 ],
							i = t[ 1 ],
							r = t[ 2 ],
							s = t[ 4 ],
							n = t[ 5 ],
							o = t[ 6 ],
							a = t[ 8 ],
							h = t[ 9 ],
							l = t[ 10 ];
						const u = e * e + i * i + r * r,
							c = s * s + n * n + o * o,
							d = a * a + h * h + l * l;
						return Math.sqrt( Math.max( u, c, d ) )
					}( this )
				}
				lookAt( t, e, i ) {
					return function( t, e, i, r ) {
						let s = e[ 0 ],
							n = e[ 1 ],
							o = e[ 2 ],
							a = r[ 0 ],
							h = r[ 1 ],
							l = r[ 2 ],
							u = s - i[ 0 ],
							c = n - i[ 1 ],
							d = o - i[ 2 ],
							p = u * u + c * c + d * d;
						0 === p ? d = 1 : ( p = 1 / Math.sqrt( p ), u *= p, c *= p, d *= p );
						let f = h * d - l * c,
							m = l * u - a * d,
							g = a * c - h * u;
						p = f * f + m * m + g * g, 0 === p && ( l ? a += 1e-6 : h ? l += 1e-6 :
								h += 1e-6, f = h * d - l * c, m = l * u - a * d, g = a * c - h * u,
								p = f * f + m * m + g * g ), p = 1 / Math.sqrt( p ), f *= p, m *= p,
							g *= p, t[ 0 ] = f, t[ 1 ] = m, t[ 2 ] = g, t[ 3 ] = 0, t[ 4 ] = c *
							g - d * m, t[ 5 ] = d * f - u * g, t[ 6 ] = u * m - c * f, t[ 7 ] =
							0, t[ 8 ] = u, t[ 9 ] = c, t[ 10 ] = d, t[ 11 ] = 0, t[ 12 ] = s, t[
								13 ] = n, t[ 14 ] = o, t[ 15 ] = 1
					}( this, t, e, i ), this
				}
				determinant() {
					return function( t ) {
						let e = t[ 0 ],
							i = t[ 1 ],
							r = t[ 2 ],
							s = t[ 3 ],
							n = t[ 4 ],
							o = t[ 5 ],
							a = t[ 6 ],
							h = t[ 7 ],
							l = t[ 8 ],
							u = t[ 9 ],
							c = t[ 10 ],
							d = t[ 11 ],
							p = t[ 12 ],
							f = t[ 13 ],
							m = t[ 14 ],
							g = t[ 15 ];
						return ( e * o - i * n ) * ( c * g - d * m ) - ( e * a - r * n ) * (
								u * g - d * f ) + ( e * h - s * n ) * ( u * m - c * f ) + ( i * a -
								r * o ) * ( l * g - d * p ) - ( i * h - s * o ) * ( l * m - c * p ) +
							( r * h - s * a ) * ( l * f - u * p )
					}( this )
				}
				fromArray( t, e = 0 ) {
					return this[ 0 ] = t[ e ], this[ 1 ] = t[ e + 1 ], this[ 2 ] = t[ e + 2 ],
						this[ 3 ] = t[ e + 3 ], this[ 4 ] = t[ e + 4 ], this[ 5 ] = t[ e + 5 ],
						this[ 6 ] = t[ e + 6 ], this[ 7 ] = t[ e + 7 ], this[ 8 ] = t[ e + 8 ],
						this[ 9 ] = t[ e + 9 ], this[ 10 ] = t[ e + 10 ], this[ 11 ] = t[ e +
							11 ], this[ 12 ] = t[ e + 12 ], this[ 13 ] = t[ e + 13 ], this[ 14 ] =
						t[ e + 14 ], this[ 15 ] = t[ e + 15 ], this
				}
				toArray( t = [], e = 0 ) {
					return t[ e ] = this[ 0 ], t[ e + 1 ] = this[ 1 ], t[ e + 2 ] = this[ 2 ],
						t[ e + 3 ] = this[ 3 ], t[ e + 4 ] = this[ 4 ], t[ e + 5 ] = this[ 5 ],
						t[ e + 6 ] = this[ 6 ], t[ e + 7 ] = this[ 7 ], t[ e + 8 ] = this[ 8 ],
						t[ e + 9 ] = this[ 9 ], t[ e + 10 ] = this[ 10 ], t[ e + 11 ] = this[
							11 ], t[ e + 12 ] = this[ 12 ], t[ e + 13 ] = this[ 13 ], t[ e + 14 ] =
						this[ 14 ], t[ e + 15 ] = this[ 15 ], t
				}
			}
			const Os = new Ps;
			class Ls extends Array {
				constructor( t = 0, e = t, i = t, r = "YXZ" ) {
					return super( t, e, i ), this.order = r, this.onChange = () => {}, this
				}
				get x() {
					return this[ 0 ]
				}
				get y() {
					return this[ 1 ]
				}
				get z() {
					return this[ 2 ]
				}
				set x( t ) {
					this[ 0 ] = t, this.onChange()
				}
				set y( t ) {
					this[ 1 ] = t, this.onChange()
				}
				set z( t ) {
					this[ 2 ] = t, this.onChange()
				}
				set( t, e = t, i = t ) {
					return t.length ? this.copy( t ) : ( this[ 0 ] = t, this[ 1 ] = e, this[
						2 ] = i, this.onChange(), this )
				}
				copy( t ) {
					return this[ 0 ] = t[ 0 ], this[ 1 ] = t[ 1 ], this[ 2 ] = t[ 2 ], this
						.onChange(), this
				}
				reorder( t ) {
					return this.order = t, this.onChange(), this
				}
				fromRotationMatrix( t, e = this.order ) {
					return function( t, e, i = "YXZ" ) {
						"XYZ" === i ? ( t[ 1 ] = Math.asin( Math.min( Math.max( e[ 8 ], -1 ),
								1 ) ), Math.abs( e[ 8 ] ) < .99999 ? ( t[ 0 ] = Math.atan2( -e[ 9 ],
								e[ 10 ] ), t[ 2 ] = Math.atan2( -e[ 4 ], e[ 0 ] ) ) : ( t[ 0 ] =
								Math.atan2( e[ 6 ], e[ 5 ] ), t[ 2 ] = 0 ) ) : "YXZ" === i ? ( t[ 0 ] =
								Math.asin( -Math.min( Math.max( e[ 9 ], -1 ), 1 ) ), Math.abs( e[ 9 ] ) <
								.99999 ? ( t[ 1 ] = Math.atan2( e[ 8 ], e[ 10 ] ), t[ 2 ] = Math.atan2(
									e[ 1 ], e[ 5 ] ) ) : ( t[ 1 ] = Math.atan2( -e[ 2 ], e[ 0 ] ), t[
									2 ] = 0 ) ) : "ZXY" === i ? ( t[ 0 ] = Math.asin( Math.min( Math.max(
								e[ 6 ], -1 ), 1 ) ), Math.abs( e[ 6 ] ) < .99999 ? ( t[ 1 ] = Math
								.atan2( -e[ 2 ], e[ 10 ] ), t[ 2 ] = Math.atan2( -e[ 4 ], e[ 5 ] )
							) : ( t[ 1 ] = 0, t[ 2 ] = Math.atan2( e[ 1 ], e[ 0 ] ) ) ) : "ZYX" ===
							i ? ( t[ 1 ] = Math.asin( -Math.min( Math.max( e[ 2 ], -1 ), 1 ) ),
								Math.abs( e[ 2 ] ) < .99999 ? ( t[ 0 ] = Math.atan2( e[ 6 ], e[ 10 ] ),
									t[ 2 ] = Math.atan2( e[ 1 ], e[ 0 ] ) ) : ( t[ 0 ] = 0, t[ 2 ] =
									Math.atan2( -e[ 4 ], e[ 5 ] ) ) ) : "YZX" === i ? ( t[ 2 ] = Math.asin(
									Math.min( Math.max( e[ 1 ], -1 ), 1 ) ), Math.abs( e[ 1 ] ) <
								.99999 ? ( t[ 0 ] = Math.atan2( -e[ 9 ], e[ 5 ] ), t[ 1 ] = Math.atan2( -
									e[ 2 ], e[ 0 ] ) ) : ( t[ 0 ] = 0, t[ 1 ] = Math.atan2( e[ 8 ], e[
									10 ] ) ) ) : "XZY" === i && ( t[ 2 ] = Math.asin( -Math.min( Math.max(
									e[ 4 ], -1 ), 1 ) ), Math.abs( e[ 4 ] ) < .99999 ? ( t[ 0 ] = Math
									.atan2( e[ 6 ], e[ 5 ] ), t[ 1 ] = Math.atan2( e[ 8 ], e[ 0 ] ) ) :
								( t[ 0 ] = Math.atan2( -e[ 9 ], e[ 10 ] ), t[ 1 ] = 0 ) )
					}( this, t, e ), this
				}
				fromQuaternion( t, e = this.order ) {
					return Os.fromQuaternion( t ), this.fromRotationMatrix( Os, e )
				}
			}
			class Cs {
				constructor() {
					this.parent = null, this.children = [], this.visible = !0, this.matrix =
						new Ps, this.worldMatrix = new Ps, this.matrixAutoUpdate = !0, this.position =
						new ys, this.quaternion = new Ts, this.scale = new ys( 1 ), this.rotation =
						new Ls, this.up = new ys( 0, 1, 0 ), this.rotation.onChange = () =>
						this.quaternion.fromEuler( this.rotation ), this.quaternion.onChange =
						() => this.rotation.fromQuaternion( this.quaternion )
				}
				setParent( t, e = !0 ) {
					this.parent && t !== this.parent && this.parent.removeChild( this, !1 ),
						this.parent = t, e && t && t.addChild( this, !1 )
				}
				addChild( t, e = !0 ) {
					~this.children.indexOf( t ) || this.children.push( t ), e && t.setParent(
						this, !1 )
				}
				removeChild( t, e = !0 ) {
					~this.children.indexOf( t ) && this.children.splice( this.children.indexOf(
						t ), 1 ), e && t.setParent( null, !1 )
				}
				updateMatrixWorld( t ) {
					this.matrixAutoUpdate && this.updateMatrix(), ( this.worldMatrixNeedsUpdate ||
						t ) && ( null === this.parent ? this.worldMatrix.copy( this.matrix ) :
						this.worldMatrix.multiply( this.parent.worldMatrix, this.matrix ),
						this.worldMatrixNeedsUpdate = !1, t = !0 );
					for ( let e = 0, i = this.children.length; e < i; e++ ) this.children[
						e ].updateMatrixWorld( t )
				}
				updateMatrix() {
					this.matrix.compose( this.quaternion, this.position, this.scale ), this
						.worldMatrixNeedsUpdate = !0
				}
				traverse( t ) {
					if ( !t( this ) )
						for ( let e = 0, i = this.children.length; e < i; e++ ) this.children[
							e ].traverse( t )
				}
				decompose() {
					this.matrix.getTranslation( this.position ), this.matrix.getRotation(
							this.quaternion ), this.matrix.getScaling( this.scale ), this.rotation
						.fromQuaternion( this.quaternion )
				}
				lookAt( t, e = !1 ) {
					e ? this.matrix.lookAt( this.position, t, this.up ) : this.matrix.lookAt(
							t, this.position, this.up ), this.matrix.getRotation( this.quaternion ),
						this.rotation.fromQuaternion( this.quaternion )
				}
			}
			const ks = new Ps,
				Fs = new ys,
				Rs = new ys;
			class zs extends Cs {
				constructor( t, {
					near: e = .1,
					far: i = 100,
					fov: r = 45,
					aspect: s = 1,
					left: n,
					right: o,
					bottom: a,
					top: h,
					zoom: l = 1
				} = {} ) {
					super(), Object.assign( this, {
							near: e,
							far: i,
							fov: r,
							aspect: s,
							left: n,
							right: o,
							bottom: a,
							top: h,
							zoom: l
						} ), this.projectionMatrix = new Ps, this.viewMatrix = new Ps, this.projectionViewMatrix =
						new Ps, this.worldPosition = new ys, this.type = n || o ?
						"orthographic" : "perspective", "orthographic" === this.type ? this.orthographic() :
						this.perspective()
				}
				perspective( {
					near: t = this.near,
					far: e = this.far,
					fov: i = this.fov,
					aspect: r = this.aspect
				} = {} ) {
					return Object.assign( this, {
						near: t,
						far: e,
						fov: i,
						aspect: r
					} ), this.projectionMatrix.fromPerspective( {
						fov: i * ( Math.PI / 180 ),
						aspect: r,
						near: t,
						far: e
					} ), this.type = "perspective", this
				}
				orthographic( {
					near: t = this.near,
					far: e = this.far,
					left: i = this.left,
					right: r = this.right,
					bottom: s = this.bottom,
					top: n = this.top,
					zoom: o = this.zoom
				} = {} ) {
					return Object.assign( this, {
						near: t,
						far: e,
						left: i,
						right: r,
						bottom: s,
						top: n,
						zoom: o
					} ), i /= o, r /= o, s /= o, n /= o, this.projectionMatrix.fromOrthogonal( {
						left: i,
						right: r,
						bottom: s,
						top: n,
						near: t,
						far: e
					} ), this.type = "orthographic", this
				}
				updateMatrixWorld() {
					return super.updateMatrixWorld(), this.viewMatrix.inverse( this.worldMatrix ),
						this.worldMatrix.getTranslation( this.worldPosition ), this.projectionViewMatrix
						.multiply( this.projectionMatrix, this.viewMatrix ), this
				}
				lookAt( t ) {
					return super.lookAt( t, !0 ), this
				}
				project( t ) {
					return t.applyMatrix4( this.viewMatrix ), t.applyMatrix4( this.projectionMatrix ),
						this
				}
				unproject( t ) {
					return t.applyMatrix4( ks.inverse( this.projectionMatrix ) ), t.applyMatrix4(
						this.worldMatrix ), this
				}
				updateFrustum() {
					this.frustum || ( this.frustum = [ new ys, new ys, new ys, new ys, new ys,
						new ys
					] );
					const t = this.projectionViewMatrix;
					this.frustum[ 0 ].set( t[ 3 ] - t[ 0 ], t[ 7 ] - t[ 4 ], t[ 11 ] - t[ 8 ] )
						.constant = t[ 15 ] - t[ 12 ], this.frustum[ 1 ].set( t[ 3 ] + t[ 0 ],
							t[ 7 ] + t[ 4 ], t[ 11 ] + t[ 8 ] ).constant = t[ 15 ] + t[ 12 ],
						this.frustum[ 2 ].set( t[ 3 ] + t[ 1 ], t[ 7 ] + t[ 5 ], t[ 11 ] + t[
							9 ] ).constant = t[ 15 ] + t[ 13 ], this.frustum[ 3 ].set( t[ 3 ] - t[
							1 ], t[ 7 ] - t[ 5 ], t[ 11 ] - t[ 9 ] ).constant = t[ 15 ] - t[ 13 ],
						this.frustum[ 4 ].set( t[ 3 ] - t[ 2 ], t[ 7 ] - t[ 6 ], t[ 11 ] - t[
							10 ] ).constant = t[ 15 ] - t[ 14 ], this.frustum[ 5 ].set( t[ 3 ] +
							t[ 2 ], t[ 7 ] + t[ 6 ], t[ 11 ] + t[ 10 ] ).constant = t[ 15 ] + t[
							14 ];
					for ( let t = 0; t < 6; t++ ) {
						const e = 1 / this.frustum[ t ].distance();
						this.frustum[ t ].multiply( e ), this.frustum[ t ].constant *= e
					}
				}
				frustumIntersectsMesh( t ) {
					if ( !t.geometry.attributes.position ) return !0;
					if ( t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry
						.computeBoundingSphere(), !t.geometry.bounds ) return !0;
					const e = Fs;
					e.copy( t.geometry.bounds.center ), e.applyMatrix4( t.worldMatrix );
					const i = t.geometry.bounds.radius * t.worldMatrix.getMaxScaleOnAxis();
					return this.frustumIntersectsSphere( e, i )
				}
				frustumIntersectsSphere( t, e ) {
					const i = Rs;
					for ( let r = 0; r < 6; r++ ) {
						const s = this.frustum[ r ];
						if ( i.copy( s ).dot( t ) + s.constant < -e ) return !1
					}
					return !0
				}
			}
			const Ds = new ys;
			let Is = 1,
				Us = 1,
				js = !1;
			class Bs {
				constructor( t, e = {} ) {
					t.canvas || console.error(
							"gl not passed as first argument to Geometry" ), this.gl = t, this.attributes =
						e, this.id = Is++, this.VAOs = {}, this.drawRange = {
							start: 0,
							count: 0
						}, this.instancedCount = 0, this.gl.renderer.bindVertexArray( null ),
						this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer
						.state;
					for ( let t in e ) this.addAttribute( t, e[ t ] )
				}
				addAttribute( t, e ) {
					if ( this.attributes[ t ] = e, e.id = Us++, e.size = e.size || 1, e.type =
						e.type || ( e.data.constructor === Float32Array ? this.gl.FLOAT : e.data
							.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT
						), e.target = "index" === t ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER,
						e.normalized = e.normalized || !1, e.stride = e.stride || 0, e.offset =
						e.offset || 0, e.count = e.count || ( e.stride ? e.data.byteLength / e
							.stride : e.data.length / e.size ), e.divisor = e.instanced || 0, e.needsUpdate = !
						1, e.buffer || ( e.buffer = this.gl.createBuffer(), this.updateAttribute(
							e ) ), e.divisor ) {
						if ( this.isInstanced = !0, this.instancedCount && this.instancedCount !==
							e.count * e.divisor ) return console.warn(
								"geometry has multiple instanced buffers of different length" ),
							this.instancedCount = Math.min( this.instancedCount, e.count * e.divisor );
						this.instancedCount = e.count * e.divisor
					} else "index" === t ? this.drawRange.count = e.count : this.attributes
						.index || ( this.drawRange.count = Math.max( this.drawRange.count, e.count ) )
				}
				updateAttribute( t ) {
					this.glState.boundBuffer !== t.buffer && ( this.gl.bindBuffer( t.target,
						t.buffer ), this.glState.boundBuffer = t.buffer ), this.gl.bufferData(
						t.target, t.data, this.gl.STATIC_DRAW ), t.needsUpdate = !1
				}
				setIndex( t ) {
					this.addAttribute( "index", t )
				}
				setDrawRange( t, e ) {
					this.drawRange.start = t, this.drawRange.count = e
				}
				setInstancedCount( t ) {
					this.instancedCount = t
				}
				createVAO( t ) {
					this.VAOs[ t.attributeOrder ] = this.gl.renderer.createVertexArray(),
						this.gl.renderer.bindVertexArray( this.VAOs[ t.attributeOrder ] ),
						this.bindAttributes( t )
				}
				bindAttributes( t ) {
					t.attributeLocations.forEach( ( ( t, {
						name: e,
						type: i
					} ) => {
						if ( !this.attributes[ e ] ) return void console.warn(
							`active attribute ${e} not being supplied` );
						const r = this.attributes[ e ];
						this.gl.bindBuffer( r.target, r.buffer ), this.glState.boundBuffer =
							r.buffer;
						let s = 1;
						35674 === i && ( s = 2 ), 35675 === i && ( s = 3 ), 35676 === i &&
							( s = 4 );
						const n = r.size / s,
							o = 1 === s ? 0 : s * s * s,
							a = 1 === s ? 0 : s * s;
						for ( let e = 0; e < s; e++ ) this.gl.vertexAttribPointer( t + e, n,
							r.type, r.normalized, r.stride + o, r.offset + e * a ), this.gl.enableVertexAttribArray(
							t + e ), this.gl.renderer.vertexAttribDivisor( t + e, r.divisor )
					} ) ), this.attributes.index && this.gl.bindBuffer( this.gl.ELEMENT_ARRAY_BUFFER,
						this.attributes.index.buffer )
				}
				draw( {
					program: t,
					mode: e = this.gl.TRIANGLES
				} ) {
					this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` &&
						( this.VAOs[ t.attributeOrder ] || this.createVAO( t ), this.gl.renderer
							.bindVertexArray( this.VAOs[ t.attributeOrder ] ), this.gl.renderer.currentGeometry =
							`${this.id}_${t.attributeOrder}` ), t.attributeLocations.forEach( ( (
							t, {
								name: e
							} ) => {
							const i = this.attributes[ e ];
							i.needsUpdate && this.updateAttribute( i )
						} ) ), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(
							e, this.drawRange.count, this.attributes.index.type, this.attributes.index
							.offset + 2 * this.drawRange.start, this.instancedCount ) : this.gl.renderer
						.drawArraysInstanced( e, this.drawRange.start, this.drawRange.count,
							this.instancedCount ) : this.attributes.index ? this.gl.drawElements(
							e, this.drawRange.count, this.attributes.index.type, this.attributes.index
							.offset + 2 * this.drawRange.start ) : this.gl.drawArrays( e, this.drawRange
							.start, this.drawRange.count )
				}
				getPositionArray() {
					const t = this.attributes.position;
					return t.data ? t.data : js ? void 0 : ( console.warn(
						"No position buffer data found to compute bounds" ), js = !0 )
				}
				computeBoundingBox( t ) {
					t || ( t = this.getPositionArray() ), this.bounds || ( this.bounds = {
						min: new ys,
						max: new ys,
						center: new ys,
						scale: new ys,
						radius: 1 / 0
					} );
					const e = this.bounds.min,
						i = this.bounds.max,
						r = this.bounds.center,
						s = this.bounds.scale;
					e.set( 1 / 0 ), i.set( -1 / 0 );
					for ( let r = 0, s = t.length; r < s; r += 3 ) {
						const s = t[ r ],
							n = t[ r + 1 ],
							o = t[ r + 2 ];
						e.x = Math.min( s, e.x ), e.y = Math.min( n, e.y ), e.z = Math.min( o,
								e.z ), i.x = Math.max( s, i.x ), i.y = Math.max( n, i.y ), i.z =
							Math.max( o, i.z )
					}
					s.sub( i, e ), r.add( e, i ).divide( 2 )
				}
				computeBoundingSphere( t ) {
					t || ( t = this.getPositionArray() ), this.bounds || this.computeBoundingBox(
						t );
					let e = 0;
					for ( let i = 0, r = t.length; i < r; i += 3 ) Ds.fromArray( t, i ), e =
						Math.max( e, this.bounds.center.squaredDistance( Ds ) );
					this.bounds.radius = Math.sqrt( e )
				}
				remove() {
					this.vao && this.gl.renderer.deleteVertexArray( this.vao );
					for ( let t in this.attributes ) this.gl.deleteBuffer( this.attributes[
						t ].buffer ), delete this.attributes[ t ]
				}
			}
			class Ns extends Bs {
				constructor( t, {
					width: e = 1,
					height: i = 1,
					widthSegments: r = 1,
					heightSegments: s = 1,
					attributes: n = {}
				} = {} ) {
					const o = r,
						a = s,
						h = ( o + 1 ) * ( a + 1 ),
						l = o * a * 6,
						u = new Float32Array( 3 * h ),
						c = new Float32Array( 3 * h ),
						d = new Float32Array( 2 * h ),
						p = h > 65536 ? new Uint32Array( l ) : new Uint16Array( l );
					Ns.buildPlane( u, c, d, p, e, i, 0, o, a ), Object.assign( n, {
						position: {
							size: 3,
							data: u
						},
						normal: {
							size: 3,
							data: c
						},
						uv: {
							size: 2,
							data: d
						},
						index: {
							data: p
						}
					} ), super( t, n )
				}
				static buildPlane( t, e, i, r, s, n, o, a, h, l = 0, u = 1, c = 2, d = 1,
					p = -1, f = 0, m = 0 ) {
					const g = f,
						v = s / a,
						_ = n / h;
					for ( let y = 0; y <= h; y++ ) {
						let w = y * _ - n / 2;
						for ( let n = 0; n <= a; n++, f++ ) {
							let _ = n * v - s / 2;
							if ( t[ 3 * f + l ] = _ * d, t[ 3 * f + u ] = w * p, t[ 3 * f + c ] =
								o / 2, e[ 3 * f + l ] = 0, e[ 3 * f + u ] = 0, e[ 3 * f + c ] = o >=
								0 ? 1 : -1, i[ 2 * f ] = n / a, i[ 2 * f + 1 ] = 1 - y / h, y === h ||
								n === a ) continue;
							let x = g + n + y * ( a + 1 ),
								b = g + n + ( y + 1 ) * ( a + 1 ),
								M = g + n + ( y + 1 ) * ( a + 1 ) + 1,
								T = g + n + y * ( a + 1 ) + 1;
							r[ 6 * m ] = x, r[ 6 * m + 1 ] = b, r[ 6 * m + 2 ] = T, r[ 6 * m + 3 ] =
								b, r[ 6 * m + 4 ] = M, r[ 6 * m + 5 ] = T, m++
						}
					}
				}
			}
			class Vs extends Bs {
				constructor( t, {
					width: e = 1,
					height: i = 1,
					depth: r = 1,
					widthSegments: s = 1,
					heightSegments: n = 1,
					depthSegments: o = 1,
					attributes: a = {}
				} = {} ) {
					const h = s,
						l = n,
						u = o,
						c = ( h + 1 ) * ( l + 1 ) * 2 + ( h + 1 ) * ( u + 1 ) * 2 + ( l + 1 ) *
						( u + 1 ) * 2,
						d = 6 * ( h * l * 2 + h * u * 2 + l * u * 2 ),
						p = new Float32Array( 3 * c ),
						f = new Float32Array( 3 * c ),
						m = new Float32Array( 2 * c ),
						g = c > 65536 ? new Uint32Array( d ) : new Uint16Array( d );
					let v = 0,
						_ = 0;
					Ns.buildPlane( p, f, m, g, r, i, e, u, l, 2, 1, 0, -1, -1, v, _ ), Ns.buildPlane(
							p, f, m, g, r, i, -e, u, l, 2, 1, 0, 1, -1, v += ( u + 1 ) * ( l + 1 ),
							_ += u * l ), Ns.buildPlane( p, f, m, g, e, r, i, u, l, 0, 2, 1, 1, 1,
							v += ( u + 1 ) * ( l + 1 ), _ += u * l ), Ns.buildPlane( p, f, m, g,
							e, r, -i, u, l, 0, 2, 1, 1, -1, v += ( h + 1 ) * ( u + 1 ), _ += h *
							u ), Ns.buildPlane( p, f, m, g, e, i, -r, h, l, 0, 1, 2, -1, -1, v +=
							( h + 1 ) * ( u + 1 ), _ += h * u ), Ns.buildPlane( p, f, m, g, e, i,
							r, h, l, 0, 1, 2, 1, -1, v += ( h + 1 ) * ( l + 1 ), _ += h * l ),
						Object.assign( a, {
							position: {
								size: 3,
								data: p
							},
							normal: {
								size: 3,
								data: f
							},
							uv: {
								size: 2,
								data: m
							},
							index: {
								data: g
							}
						} ), super( t, a )
				}
			}
			const qs = new Uint8Array( 4 );

			function Ws( t ) {
				return 0 == ( t & t - 1 )
			}
			let Ys = 1;
			class Xs {
				constructor( t, {
					image: e,
					target: i = t.TEXTURE_2D,
					type: r = t.UNSIGNED_BYTE,
					format: s = t.RGBA,
					internalFormat: n = s,
					wrapS: o = t.CLAMP_TO_EDGE,
					wrapT: a = t.CLAMP_TO_EDGE,
					generateMipmaps: h = !0,
					minFilter: l = ( h ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR ),
					magFilter: u = t.LINEAR,
					premultiplyAlpha: c = !1,
					unpackAlignment: d = 4,
					flipY: p = i == t.TEXTURE_2D,
					anisotropy: f = 0,
					level: m = 0,
					width: g,
					height: v = g
				} = {} ) {
					this.gl = t, this.id = Ys++, this.image = e, this.target = i, this.type =
						r, this.format = s, this.internalFormat = n, this.minFilter = l, this.magFilter =
						u, this.wrapS = o, this.wrapT = a, this.generateMipmaps = h, this.premultiplyAlpha =
						c, this.unpackAlignment = d, this.flipY = p, this.anisotropy = Math.min(
							f, this.gl.renderer.parameters.maxAnisotropy ), this.level = m, this.width =
						g, this.height = v, this.texture = this.gl.createTexture(), this.store = {
							image: null
						}, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter =
						this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR,
						this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT,
						this.state.anisotropy = 0
				}
				bind() {
					this.glState.textureUnits[ this.glState.activeTextureUnit ] !== this.id &&
						( this.gl.bindTexture( this.target, this.texture ), this.glState.textureUnits[
							this.glState.activeTextureUnit ] = this.id )
				}
				update( t = 0 ) {
					const e = !( this.image === this.store.image && !this.needsUpdate );
					if ( ( e || this.glState.textureUnits[ t ] !== this.id ) && ( this.gl.renderer
							.activeTexture( t ), this.bind() ), e ) {
						if ( this.needsUpdate = !1, this.flipY !== this.glState.flipY && (
								this.gl.pixelStorei( this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY ), this
								.glState.flipY = this.flipY ), this.premultiplyAlpha !== this.glState
							.premultiplyAlpha && ( this.gl.pixelStorei( this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
								this.premultiplyAlpha ), this.glState.premultiplyAlpha = this.premultiplyAlpha ),
							this.unpackAlignment !== this.glState.unpackAlignment && ( this.gl.pixelStorei(
									this.gl.UNPACK_ALIGNMENT, this.unpackAlignment ), this.glState.unpackAlignment =
								this.unpackAlignment ), this.minFilter !== this.state.minFilter && (
								this.gl.texParameteri( this.target, this.gl.TEXTURE_MIN_FILTER, this
									.minFilter ), this.state.minFilter = this.minFilter ), this.magFilter !==
							this.state.magFilter && ( this.gl.texParameteri( this.target, this.gl
								.TEXTURE_MAG_FILTER, this.magFilter ), this.state.magFilter = this.magFilter ),
							this.wrapS !== this.state.wrapS && ( this.gl.texParameteri( this.target,
								this.gl.TEXTURE_WRAP_S, this.wrapS ), this.state.wrapS = this.wrapS ),
							this.wrapT !== this.state.wrapT && ( this.gl.texParameteri( this.target,
								this.gl.TEXTURE_WRAP_T, this.wrapT ), this.state.wrapT = this.wrapT ),
							this.anisotropy && this.anisotropy !== this.state.anisotropy && (
								this.gl.texParameterf( this.target, this.gl.renderer.getExtension(
										"EXT_texture_filter_anisotropic" ).TEXTURE_MAX_ANISOTROPY_EXT,
									this.anisotropy ), this.state.anisotropy = this.anisotropy ), this.image
						) {
							if ( this.image.width && ( this.width = this.image.width, this.height =
									this.image.height ), this.target === this.gl.TEXTURE_CUBE_MAP )
								for ( let t = 0; t < 6; t++ ) this.gl.texImage2D( this.gl.TEXTURE_CUBE_MAP_POSITIVE_X +
									t, this.level, this.internalFormat, this.format, this.type, this.image[
										t ] );
							else if ( ArrayBuffer.isView( this.image ) ) this.gl.texImage2D( this
								.target, this.level, this.internalFormat, this.width, this.height,
								0, this.format, this.type, this.image );
							else if ( this.image.isCompressedTexture )
								for ( let t = 0; t < this.image.length; t++ ) this.gl.compressedTexImage2D(
									this.target, t, this.internalFormat, this.image[ t ].width, this.image[
										t ].height, 0, this.image[ t ].data );
							else this.gl.texImage2D( this.target, this.level, this.internalFormat,
								this.format, this.type, this.image );
							this.generateMipmaps && ( this.gl.renderer.isWebgl2 || Ws( this.image
									.width ) && Ws( this.image.height ) ? this.gl.generateMipmap( this
									.target ) : ( this.generateMipmaps = !1, this.wrapS = this.wrapT =
									this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR ) ), this.onUpdate &&
								this.onUpdate()
						} else if ( this.target === this.gl.TEXTURE_CUBE_MAP )
							for ( let t = 0; t < 6; t++ ) this.gl.texImage2D( this.gl.TEXTURE_CUBE_MAP_POSITIVE_X +
								t, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE,
								qs );
						else this.width ? this.gl.texImage2D( this.target, this.level, this.internalFormat,
								this.width, this.height, 0, this.format, this.type, null ) : this.gl
							.texImage2D( this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA,
								this.gl.UNSIGNED_BYTE, qs );
						this.store.image = this.image
					}
				}
			}
			let Gs = 1;
			const $s = {};
			class Hs {
				constructor( t, {
					vertex: e,
					fragment: i,
					uniforms: r = {},
					transparent: s = !1,
					cullFace: n = t.BACK,
					frontFace: o = t.CCW,
					depthTest: a = !0,
					depthWrite: h = !0,
					depthFunc: l = t.LESS
				} = {} ) {
					t.canvas || console.error( "gl not passed as fist argument to Program" ),
						this.gl = t, this.uniforms = r, this.id = Gs++, e || console.warn(
							"vertex shader not supplied" ), i || console.warn(
							"fragment shader not supplied" ), this.transparent = s, this.cullFace =
						n, this.frontFace = o, this.depthTest = a, this.depthWrite = h, this.depthFunc =
						l, this.blendFunc = {}, this.blendEquation = {}, this.transparent && !
						this.blendFunc.src && ( this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(
							this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA ) : this.setBlendFunc( this
							.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA ) );
					const u = t.createShader( t.VERTEX_SHADER );
					t.shaderSource( u, e ), t.compileShader( u ), "" !== t.getShaderInfoLog(
						u ) && console.warn(
						`${t.getShaderInfoLog(u)}\nVertex Shader\n${Qs(e)}` );
					const c = t.createShader( t.FRAGMENT_SHADER );
					if ( t.shaderSource( c, i ), t.compileShader( c ), "" !== t.getShaderInfoLog(
							c ) && console.warn(
							`${t.getShaderInfoLog(c)}\nFragment Shader\n${Qs(i)}` ), this.program =
						t.createProgram(), t.attachShader( this.program, u ), t.attachShader(
							this.program, c ), t.linkProgram( this.program ), !t.getProgramParameter(
							this.program, t.LINK_STATUS ) ) return console.warn( t.getProgramInfoLog(
						this.program ) );
					t.deleteShader( u ), t.deleteShader( c ), this.uniformLocations = new Map;
					let d = t.getProgramParameter( this.program, t.ACTIVE_UNIFORMS );
					for ( let e = 0; e < d; e++ ) {
						let i = t.getActiveUniform( this.program, e );
						this.uniformLocations.set( i, t.getUniformLocation( this.program, i.name ) );
						const r = i.name.match( /(\w+)/g );
						i.uniformName = r[ 0 ], 3 === r.length ? ( i.isStructArray = !0, i.structIndex =
								Number( r[ 1 ] ), i.structProperty = r[ 2 ] ) : 2 === r.length &&
							isNaN( Number( r[ 1 ] ) ) && ( i.isStruct = !0, i.structProperty = r[
								1 ] )
					}
					this.attributeLocations = new Map;
					const p = [],
						f = t.getProgramParameter( this.program, t.ACTIVE_ATTRIBUTES );
					for ( let e = 0; e < f; e++ ) {
						const i = t.getActiveAttrib( this.program, e ),
							r = t.getAttribLocation( this.program, i.name );
						p[ r ] = i.name, this.attributeLocations.set( i, r )
					}
					this.attributeOrder = p.join( "" )
				}
				setBlendFunc( t, e, i, r ) {
					this.blendFunc.src = t, this.blendFunc.dst = e, this.blendFunc.srcAlpha =
						i, this.blendFunc.dstAlpha = r, t && ( this.transparent = !0 )
				}
				setBlendEquation( t, e ) {
					this.blendEquation.modeRGB = t, this.blendEquation.modeAlpha = e
				}
				applyState() {
					this.depthTest ? this.gl.renderer.enable( this.gl.DEPTH_TEST ) : this.gl
						.renderer.disable( this.gl.DEPTH_TEST ), this.cullFace ? this.gl.renderer
						.enable( this.gl.CULL_FACE ) : this.gl.renderer.disable( this.gl.CULL_FACE ),
						this.blendFunc.src ? this.gl.renderer.enable( this.gl.BLEND ) : this.gl
						.renderer.disable( this.gl.BLEND ), this.cullFace && this.gl.renderer.setCullFace(
							this.cullFace ), this.gl.renderer.setFrontFace( this.frontFace ),
						this.gl.renderer.setDepthMask( this.depthWrite ), this.gl.renderer.setDepthFunc(
							this.depthFunc ), this.blendFunc.src && this.gl.renderer.setBlendFunc(
							this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this
							.blendFunc.dstAlpha ), this.gl.renderer.setBlendEquation( this.blendEquation
							.modeRGB, this.blendEquation.modeAlpha )
				}
				use( {
					flipFaces: t = !1
				} = {} ) {
					let e = -1;
					this.gl.renderer.currentProgram === this.id || ( this.gl.useProgram(
							this.program ), this.gl.renderer.currentProgram = this.id ), this.uniformLocations
						.forEach( ( ( t, i ) => {
							let r = i.uniformName,
								s = this.uniforms[ r ];
							if ( i.isStruct && ( s = s[ i.structProperty ], r +=
									`.${i.structProperty}` ), i.isStructArray && ( s = s[ i.structIndex ]
									[ i.structProperty ], r +=
									`[${i.structIndex}].${i.structProperty}` ), !s ) return Js(
								`Active uniform ${r} has not been supplied` );
							if ( s && void 0 === s.value ) return Js(
								`${r} uniform is missing a value parameter` );
							if ( s.value.texture ) return e += 1, s.value.update( e ), Zs( this
								.gl, i.type, t, e );
							if ( s.value.length && s.value[ 0 ].texture ) {
								const r = [];
								return s.value.forEach( ( t => {
									e += 1, t.update( e ), r.push( e )
								} ) ), Zs( this.gl, i.type, t, r )
							}
							Zs( this.gl, i.type, t, s.value )
						} ) ), this.applyState(), t && this.gl.renderer.setFrontFace( this.frontFace ===
							this.gl.CCW ? this.gl.CW : this.gl.CCW )
				}
				remove() {
					this.gl.deleteProgram( this.program )
				}
			}

			function Zs( t, e, i, r ) {
				r = r.length ? function( t ) {
					const e = t.length,
						i = t[ 0 ].length;
					if ( void 0 === i ) return t;
					const r = e * i;
					let s = $s[ r ];
					s || ( $s[ r ] = s = new Float32Array( r ) );
					for ( let r = 0; r < e; r++ ) s.set( t[ r ], r * i );
					return s
				}( r ) : r;
				const s = t.renderer.state.uniformLocations.get( i );
				if ( r.length )
					if ( void 0 === s || s.length !== r.length ) t.renderer.state.uniformLocations
						.set( i, r.slice( 0 ) );
					else {
						if ( function( t, e ) {
								if ( t.length !== e.length ) return !1;
								for ( let i = 0, r = t.length; i < r; i++ )
									if ( t[ i ] !== e[ i ] ) return !1;
								return !0
							}( s, r ) ) return;
						s.set ? s.set( r ) : function( t, e ) {
							for ( let i = 0, r = t.length; i < r; i++ ) t[ i ] = e[ i ]
						}( s, r ), t.renderer.state.uniformLocations.set( i, s )
					}
				else {
					if ( s === r ) return;
					t.renderer.state.uniformLocations.set( i, r )
				}
				switch ( e ) {
					case 5126:
						return r.length ? t.uniform1fv( i, r ) : t.uniform1f( i, r );
					case 35664:
						return t.uniform2fv( i, r );
					case 35665:
						return t.uniform3fv( i, r );
					case 35666:
						return t.uniform4fv( i, r );
					case 35670:
					case 5124:
					case 35678:
					case 35680:
						return r.length ? t.uniform1iv( i, r ) : t.uniform1i( i, r );
					case 35671:
					case 35667:
						return t.uniform2iv( i, r );
					case 35672:
					case 35668:
						return t.uniform3iv( i, r );
					case 35673:
					case 35669:
						return t.uniform4iv( i, r );
					case 35674:
						return t.uniformMatrix2fv( i, !1, r );
					case 35675:
						return t.uniformMatrix3fv( i, !1, r );
					case 35676:
						return t.uniformMatrix4fv( i, !1, r )
				}
			}

			function Qs( t ) {
				let e = t.split( "\n" );
				for ( let t = 0; t < e.length; t++ ) e[ t ] = t + 1 + ": " + e[ t ];
				return e.join( "\n" )
			}
			let Ks = 0;

			function Js( t ) {
				Ks > 100 || ( console.warn( t ), Ks++, Ks > 100 && console.warn(
					"More than 100 program warnings - stopping logs." ) )
			}

			function tn( t, e, i ) {
				let r = e[ 0 ],
					s = e[ 1 ],
					n = e[ 2 ],
					o = e[ 3 ],
					a = e[ 4 ],
					h = e[ 5 ],
					l = e[ 6 ],
					u = e[ 7 ],
					c = e[ 8 ],
					d = i[ 0 ],
					p = i[ 1 ],
					f = i[ 2 ],
					m = i[ 3 ],
					g = i[ 4 ],
					v = i[ 5 ],
					_ = i[ 6 ],
					y = i[ 7 ],
					w = i[ 8 ];
				return t[ 0 ] = d * r + p * o + f * l, t[ 1 ] = d * s + p * a + f * u, t[
						2 ] = d * n + p * h + f * c, t[ 3 ] = m * r + g * o + v * l, t[ 4 ] = m *
					s + g * a + v * u, t[ 5 ] = m * n + g * h + v * c, t[ 6 ] = _ * r + y *
					o + w * l, t[ 7 ] = _ * s + y * a + w * u, t[ 8 ] = _ * n + y * h + w *
					c, t
			}
			class en extends Array {
				constructor( t = 1, e = 0, i = 0, r = 0, s = 1, n = 0, o = 0, a = 0, h =
					1 ) {
					return super( t, e, i, r, s, n, o, a, h ), this
				}
				set( t, e, i, r, s, n, o, a, h ) {
					return t.length ? this.copy( t ) : ( function( t, e, i, r, s, n, o, a,
						h, l ) {
						t[ 0 ] = e, t[ 1 ] = i, t[ 2 ] = r, t[ 3 ] = s, t[ 4 ] = n, t[ 5 ] =
							o, t[ 6 ] = a, t[ 7 ] = h, t[ 8 ] = l
					}( this, t, e, i, r, s, n, o, a, h ), this )
				}
				translate( t, e = this ) {
					return function( t, e, i ) {
						let r = e[ 0 ],
							s = e[ 1 ],
							n = e[ 2 ],
							o = e[ 3 ],
							a = e[ 4 ],
							h = e[ 5 ],
							l = e[ 6 ],
							u = e[ 7 ],
							c = e[ 8 ],
							d = i[ 0 ],
							p = i[ 1 ];
						t[ 0 ] = r, t[ 1 ] = s, t[ 2 ] = n, t[ 3 ] = o, t[ 4 ] = a, t[ 5 ] =
							h, t[ 6 ] = d * r + p * o + l, t[ 7 ] = d * s + p * a + u, t[ 8 ] =
							d * n + p * h + c
					}( this, e, t ), this
				}
				rotate( t, e = this ) {
					return function( t, e, i ) {
						let r = e[ 0 ],
							s = e[ 1 ],
							n = e[ 2 ],
							o = e[ 3 ],
							a = e[ 4 ],
							h = e[ 5 ],
							l = e[ 6 ],
							u = e[ 7 ],
							c = e[ 8 ],
							d = Math.sin( i ),
							p = Math.cos( i );
						t[ 0 ] = p * r + d * o, t[ 1 ] = p * s + d * a, t[ 2 ] = p * n + d *
							h, t[ 3 ] = p * o - d * r, t[ 4 ] = p * a - d * s, t[ 5 ] = p * h -
							d * n, t[ 6 ] = l, t[ 7 ] = u, t[ 8 ] = c
					}( this, e, t ), this
				}
				scale( t, e = this ) {
					return function( t, e, i ) {
						let r = i[ 0 ],
							s = i[ 1 ];
						t[ 0 ] = r * e[ 0 ], t[ 1 ] = r * e[ 1 ], t[ 2 ] = r * e[ 2 ], t[ 3 ] =
							s * e[ 3 ], t[ 4 ] = s * e[ 4 ], t[ 5 ] = s * e[ 5 ], t[ 6 ] = e[ 6 ],
							t[ 7 ] = e[ 7 ], t[ 8 ] = e[ 8 ]
					}( this, e, t ), this
				}
				multiply( t, e ) {
					return e ? tn( this, t, e ) : tn( this, this, t ), this
				}
				identity() {
					var t;
					return ( t = this )[ 0 ] = 1, t[ 1 ] = 0, t[ 2 ] = 0, t[ 3 ] = 0, t[ 4 ] =
						1, t[ 5 ] = 0, t[ 6 ] = 0, t[ 7 ] = 0, t[ 8 ] = 1, this
				}
				copy( t ) {
					var e, i;
					return i = t, ( e = this )[ 0 ] = i[ 0 ], e[ 1 ] = i[ 1 ], e[ 2 ] = i[
							2 ], e[ 3 ] = i[ 3 ], e[ 4 ] = i[ 4 ], e[ 5 ] = i[ 5 ], e[ 6 ] = i[ 6 ],
						e[ 7 ] = i[ 7 ], e[ 8 ] = i[ 8 ], this
				}
				fromMatrix4( t ) {
					var e, i;
					return i = t, ( e = this )[ 0 ] = i[ 0 ], e[ 1 ] = i[ 1 ], e[ 2 ] = i[
							2 ], e[ 3 ] = i[ 4 ], e[ 4 ] = i[ 5 ], e[ 5 ] = i[ 6 ], e[ 6 ] = i[ 8 ],
						e[ 7 ] = i[ 9 ], e[ 8 ] = i[ 10 ], this
				}
				fromQuaternion( t ) {
					return function( t, e ) {
						let i = e[ 0 ],
							r = e[ 1 ],
							s = e[ 2 ],
							n = e[ 3 ],
							o = i + i,
							a = r + r,
							h = s + s,
							l = i * o,
							u = r * o,
							c = r * a,
							d = s * o,
							p = s * a,
							f = s * h,
							m = n * o,
							g = n * a,
							v = n * h;
						t[ 0 ] = 1 - c - f, t[ 3 ] = u - v, t[ 6 ] = d + g, t[ 1 ] = u + v, t[
							4 ] = 1 - l - f, t[ 7 ] = p - m, t[ 2 ] = d - g, t[ 5 ] = p + m, t[
							8 ] = 1 - l - c
					}( this, t ), this
				}
				fromBasis( t, e, i ) {
					return this.set( t[ 0 ], t[ 1 ], t[ 2 ], e[ 0 ], e[ 1 ], e[ 2 ], i[ 0 ],
						i[ 1 ], i[ 2 ] ), this
				}
				inverse( t = this ) {
					return function( t, e ) {
						let i = e[ 0 ],
							r = e[ 1 ],
							s = e[ 2 ],
							n = e[ 3 ],
							o = e[ 4 ],
							a = e[ 5 ],
							h = e[ 6 ],
							l = e[ 7 ],
							u = e[ 8 ],
							c = u * o - a * l,
							d = -u * n + a * h,
							p = l * n - o * h,
							f = i * c + r * d + s * p;
						f && ( f = 1 / f, t[ 0 ] = c * f, t[ 1 ] = ( -u * r + s * l ) * f, t[
								2 ] = ( a * r - s * o ) * f, t[ 3 ] = d * f, t[ 4 ] = ( u * i - s *
								h ) * f, t[ 5 ] = ( -a * i + s * n ) * f, t[ 6 ] = p * f, t[ 7 ] =
							( -l * i + r * h ) * f, t[ 8 ] = ( o * i - r * n ) * f )
					}( this, t ), this
				}
				getNormalMatrix( t ) {
					return function( t, e ) {
						let i = e[ 0 ],
							r = e[ 1 ],
							s = e[ 2 ],
							n = e[ 3 ],
							o = e[ 4 ],
							a = e[ 5 ],
							h = e[ 6 ],
							l = e[ 7 ],
							u = e[ 8 ],
							c = e[ 9 ],
							d = e[ 10 ],
							p = e[ 11 ],
							f = e[ 12 ],
							m = e[ 13 ],
							g = e[ 14 ],
							v = e[ 15 ],
							_ = i * a - r * o,
							y = i * h - s * o,
							w = i * l - n * o,
							x = r * h - s * a,
							b = r * l - n * a,
							M = s * l - n * h,
							T = u * m - c * f,
							A = u * g - d * f,
							E = u * v - p * f,
							S = c * g - d * m,
							P = c * v - p * m,
							O = d * v - p * g,
							L = _ * O - y * P + w * S + x * E - b * A + M * T;
						L && ( L = 1 / L, t[ 0 ] = ( a * O - h * P + l * S ) * L, t[ 1 ] = (
								h * E - o * O - l * A ) * L, t[ 2 ] = ( o * P - a * E + l * T ) *
							L, t[ 3 ] = ( s * P - r * O - n * S ) * L, t[ 4 ] = ( i * O - s * E +
								n * A ) * L, t[ 5 ] = ( r * E - i * P - n * T ) * L, t[ 6 ] = ( m *
								M - g * b + v * x ) * L, t[ 7 ] = ( g * w - f * M - v * y ) * L, t[
								8 ] = ( f * b - m * w + v * _ ) * L )
					}( this, t ), this
				}
			}
			let rn = 0;
			class sn extends Cs {
				constructor( t, {
					geometry: e,
					program: i,
					mode: r = t.TRIANGLES,
					frustumCulled: s = !0,
					renderOrder: n = 0
				} = {} ) {
					super(), t.canvas || console.error(
							"gl not passed as first argument to Mesh" ), this.gl = t, this.id =
						rn++, this.geometry = e, this.program = i, this.mode = r, this.frustumCulled =
						s, this.renderOrder = n, this.modelViewMatrix = new Ps, this.normalMatrix =
						new en, this.beforeRenderCallbacks = [], this.afterRenderCallbacks = []
				}
				onBeforeRender( t ) {
					return this.beforeRenderCallbacks.push( t ), this
				}
				onAfterRender( t ) {
					return this.afterRenderCallbacks.push( t ), this
				}
				draw( {
					camera: t
				} = {} ) {
					this.beforeRenderCallbacks.forEach( ( e => e && e( {
						mesh: this,
						camera: t
					} ) ) ), t && ( this.program.uniforms.modelMatrix || Object.assign(
							this.program.uniforms, {
								modelMatrix: {
									value: null
								},
								viewMatrix: {
									value: null
								},
								modelViewMatrix: {
									value: null
								},
								normalMatrix: {
									value: null
								},
								projectionMatrix: {
									value: null
								},
								cameraPosition: {
									value: null
								}
							} ), this.program.uniforms.projectionMatrix.value = t.projectionMatrix,
						this.program.uniforms.cameraPosition.value = t.worldPosition, this.program
						.uniforms.viewMatrix.value = t.viewMatrix, this.modelViewMatrix.multiply(
							t.viewMatrix, this.worldMatrix ), this.normalMatrix.getNormalMatrix(
							this.modelViewMatrix ), this.program.uniforms.modelMatrix.value =
						this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix,
						this.program.uniforms.normalMatrix.value = this.normalMatrix );
					let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
					this.program.use( {
						flipFaces: e
					} ), this.geometry.draw( {
						mode: this.mode,
						program: this.program
					} ), this.afterRenderCallbacks.forEach( ( e => e && e( {
						mesh: this,
						camera: t
					} ) ) )
				}
			}
			const nn = {
				black: "#000000",
				white: "#ffffff",
				red: "#ff0000",
				green: "#00ff00",
				blue: "#0000ff",
				fuchsia: "#ff00ff",
				cyan: "#00ffff",
				yellow: "#ffff00",
				orange: "#ff8000"
			};

			function on( t ) {
				4 === t.length && ( t = t[ 0 ] + t[ 1 ] + t[ 1 ] + t[ 2 ] + t[ 2 ] + t[ 3 ] +
					t[ 3 ] );
				const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( t );
				return e || console.warn(
					`Unable to convert hex string ${t} to rgb values` ), [ parseInt( e[ 1 ],
					16 ) / 255, parseInt( e[ 2 ], 16 ) / 255, parseInt( e[ 3 ], 16 ) / 255 ]
			}

			function an( t ) {
				return [ ( ( t = parseInt( t ) ) >> 16 & 255 ) / 255, ( t >> 8 & 255 ) /
					255, ( 255 & t ) / 255
				]
			}

			function hn( t ) {
				return void 0 === t ? [ 0, 0, 0 ] : 3 === arguments.length ? arguments :
					isNaN( t ) ? "#" === t[ 0 ] ? on( t ) : nn[ t.toLowerCase() ] ? on( nn[
						t.toLowerCase() ] ) : ( console.warn( "Color format not recognised" ), [
						0, 0, 0
					] ) : an( t )
			}
			class ln extends Array {
				constructor( t ) {
					return Array.isArray( t ) ? super( ...t ) : super( ...hn( ...arguments ) )
				}
				get r() {
					return this[ 0 ]
				}
				get g() {
					return this[ 1 ]
				}
				get b() {
					return this[ 2 ]
				}
				set r( t ) {
					this[ 0 ] = t
				}
				set g( t ) {
					this[ 1 ] = t
				}
				set b( t ) {
					this[ 2 ] = t
				}
				set( t ) {
					return Array.isArray( t ) ? this.copy( t ) : this.copy( hn( ...
						arguments ) )
				}
				copy( t ) {
					return this[ 0 ] = t[ 0 ], this[ 1 ] = t[ 1 ], this[ 2 ] = t[ 2 ], this
				}
			}
			const un = class extends ss {
					constructor() {
						super( {
							classes: {
								active: "cursor--active",
								hold: "cursor--hold"
							},
							element: ".cursor",
							elements: {
								circle: ".cursor__circle",
								left: ".cursor__arrow--left",
								right: ".cursor__arrow--right",
								links: document.querySelectorAll( "[data-cursor]" )
							}
						} ), this.transformPrefix = Gr()( "transform" ), this.x = {
							current: 0,
							target: 0
						}, this.y = {
							current: 0,
							target: 0
						}
					}
					onEnter() {
						document.documentElement.classList.add( this.classes.active )
					}
					onLeave() {
						document.documentElement.classList.remove( this.classes.active )
					}
					onTouchDown() {
						document.documentElement.classList.add( this.classes.hold )
					}
					onTouchMove( t ) {
						this.x.target = t.clientX, this.y.target = t.clientY
					}
					onTouchUp() {
						document.documentElement.classList.remove( this.classes.hold )
					}
					update() {
						this.x.current = ts( this.x.current, this.x.target, .1 ), this.y.current =
							ts( this.y.current, this.y.target, .1 ), this.element.style[ this.transformPrefix ] =
							`translate3d(${Math.floor(this.x.current)}px, ${Math.floor(this.y.current)}px, 0)`
					}
					addEventListeners() {
						Br()( this.elements.links, ( t => {
							t.addEventListener( "mouseenter", this.onEnter ), t.addEventListener(
								"mouseleave", this.onLeave )
						} ) )
					}
				},
				cn = class extends ss {
					constructor() {
						super( {
							classes: {
								linksActive: "navigation__link--active",
								menuActive: "menu--open"
							},
							element: ".navigation",
							elements: {
								links: document.querySelectorAll( ".navigation__link, .menu__link" ),
								easter: ".navigation__easter",
								menus: document.querySelectorAll( ".menu__toggle" )
							}
						} )
					}
					onClick( t ) {
						t.preventDefault(), t.stopPropagation(), document.documentElement.classList
							.remove( this.classes.menuActive ), this.emit( "click", t )
					}
					onEasterEgg() {
						const t = `hsl(${0,360,360*Math.random()+0}deg 19% 9%)`;
						document.documentElement.style.background = t, this.homeBottom.style.background =
							`linear-gradient(to bottom, transparent 0%, ${t} 100%)`, this.homeTop
							.style.background =
							`linear-gradient(to bottom, ${t} 0%, transparent 100%)`, this.aboutGallery
							.style.color = t;
						const e = document.documentElement.style.background.replace( "rgb(",
							"" ).replace( ")", "" ).replace( / /g, "" ).split( "," );
						this.canvas.background = {
							r: e[ 0 ],
							g: e[ 1 ],
							b: e[ 2 ]
						}
					}
					onMenuToggle() {
						document.documentElement.classList.contains( this.classes.menuActive ) ?
							document.documentElement.classList.remove( this.classes.menuActive ) :
							document.documentElement.classList.add( this.classes.menuActive )
					}
					addEventListeners() {
						this.elements.easter.addEventListener( "click", this.onEasterEgg ), Br()
							( this.elements.links, ( t => {
								t.addEventListener( "click", this.onClick )
							} ) ), Br()( this.elements.menus, ( t => {
								t.addEventListener( "click", this.onMenuToggle )
							} ) )
					}
				},
				dn = class extends ss {
					constructor() {
						super( {
							classes: {
								active: "preloader--active",
								1: "preloader--1",
								2: "preloader--2",
								3: "preloader--3",
								4: "preloader--4",
								loaded: "preloader--loaded"
							},
							element: ".preloader",
							elements: {
								box: ".preloader__box",
								boxFill: ".preloader__box__fill",
								intro: document.querySelector( ".intro__box" ),
								work: document.querySelector( ".work" ),
								footer: document.querySelector( ".footer" )
							}
						} ), this.counter = 0, this.index = 0, this.transformPrefix = Gr()(
							"transform" ), this.createPreloader(), this.element.classList.add(
							this.classes.active ), Dr.delayedCall( .75, this.createAnimation )
					}
					createAnimation() {
						this.counter += 1, this.index = ( this.index + 1 ) % 4;
						for ( let t = 0; t < 4; t++ ) this.element.classList.remove( this.classes[
							t ] );
						if ( this.element.classList.add( this.classes[ this.index ] ), this.counter >
							3 && ( this.isAnimated = !0 ), this.counter > 6 && ( this.isLoaded = !
								0 ), this.isLoaded && this.isAnimated ) {
							for ( let t = 0; t < 4; t++ ) this.element.classList.remove( this.classes[
								t ] );
							this.element.classList.add( this.classes.loaded ), this.onComplete()
						} else Dr.delayedCall( .75, this.createAnimation )
					}
					createPreloader() {
						this.videos = [], this.videosLoaded = 0;
						const t = this.elements.intro.getAttribute( "data-video" );
						t && this.videos.push( t );
						const e = this.elements.footer.getAttribute( "data-video" );
						e && this.videos.push( e );
						for ( let t = 0; t < 6; t++ ) {
							const e = this.elements.work.getAttribute( `data-video-${t}` );
							e && this.videos.push( e )
						}
						this.videosElements = Qr( this.videos, ( t => {
							const e = document.createElement( "video" );
							return e.loop = !0, e.muted = !0, e.src = t, e.setAttribute(
									"crossorigin", "anonymous" ), e.setAttribute(
									"webkit-playsinline", !0 ), e.setAttribute( "playsinline", !0 ),
								e.play(), window.VIDEOS || ( window.VIDEOS = {} ), window.VIDEOS[
									t ] = e, e
						} ) ), this.loop()
					}
					loop() {
						this.videosElements.forEach( ( ( t, e ) => {
							t.readyState >= 3 && ( this.videosElements.splice( e, 1 ), this.videosLoaded +=
								1, this.videos.length === this.videosLoaded && ( this.isLoaded = !
									0 ) )
						} ) ), this.frame = window.requestAnimationFrame( this.loop )
					}
					onComplete() {
						window.cancelAnimationFrame( this.frame ), this.emit( "complete" ),
							this.timeline = Dr.timeline( {
								delay: .75
							} ), this.timeline.set( this.elements.box, {
								transition: "none"
							} ), this.timeline.to( this.elements.box, {
								duration: 1.2,
								ease: "expo.inOut",
								scale: 1
							} ), this.timeline.to( this.element, {
								duration: 1.2,
								ease: "expo.inOut",
								scaleY: 0,
								transformOrigin: "0 0"
							}, "-=0.5" )
					}
				};
			class pn {
				constructor() {
					e()( this ), this.createPreloader(), this.createCanvas(), Nr.isMobile() ||
						this.createCursor(), this.createNavigation(), this.createCase(), this.createHome(),
						this.pages = {
							"/": this.home,
							"/case": this.case
						}, this.onChange( {
							url: window.location.pathname
						} ), this.addEventListeners(), this.addLinksEventsListeners()
				}
				createPreloader() {
					this.preloader = new dn, this.preloader.on( "complete", this.onPreloaded )
				}
				onPreloaded() {
					this.onResize(), this.update()
				}
				createCanvas() {
					this.canvas = new class {
						constructor( {
							url: t
						} ) {
							this.url = t, this.renderer = new bs( {
									alpha: !0,
									dpr: Math.min( window.devicePixelRatio, 2 )
								} ), this.gl = this.renderer.gl, this.gl.clearColor( 0, 0, 0, 0 ),
								document.body.appendChild( this.gl.canvas ), this.createCamera(),
								this.createScene(), this.createGeometries(), this.onResize(), this
								.createHome()
						}
						createCamera() {
							this.camera = new zs( this.gl ), this.camera.fov = 45, this.camera.position
								.z = 5
						}
						createScene() {
							this.scene = new Cs
						}
						createGeometries() {
							this.boxGeometry = new Vs( this.gl, {
								heightSegments: 20,
								widthSegments: 1
							} ), this.planeGeometry = new Ns( this.gl, {
								heightSegments: 20,
								widthSegments: 1
							} )
						}
						createHome() {
							this.home = new class {
								constructor( {
									boxGeometry: t,
									gl: e,
									planeGeometry: i,
									scene: r,
									screen: s,
									viewport: n
								} ) {
									this.boxGeometry = t, this.gl = e, this.planeGeometry = i, this
										.scene = r, this.screen = s, this.viewport = n, this.element =
										document.querySelector( ".home" ), this.elementWork = this.element
										.querySelector( ".work" ), this.elementMedias = this.element.querySelectorAll(
											".work__item__media" ), this.createMediasTexture(), this.createMedias(),
										this.createVideo(), Nr.isMobile() || this.createFooter()
								}
								createMediasTexture() {
									this.mediaTextures = [];
									for ( let t = 0; t < 6; t++ ) {
										const e = this.elementWork.getAttribute( `data-video-${t}` );
										if ( e ) {
											const t = new Xs( this.gl, {
													generateMipmaps: !1,
													height: 2048,
													width: 2048
												} ),
												i = window.VIDEOS[ e ];
											this.mediaTextures.push( {
												texture: t,
												textureVideo: i
											} )
										}
									}
								}
								createMedias() {
									this.masks = [];
									for ( let t = 1; t < 9; t++ ) {
										const e = new Xs( this.gl, {
												generateMipmaps: !1
											} ),
											i = new window.Image,
											r = Nr.isWebPSupported() ? `masks/${t}.webp` :
											`masks/${t}.png`;
										i.src = r, i.onload = t => {
											e.image = i
										}, this.masks.push( e )
									}
									this.medias = Qr( this.elementMedias, ( ( t, i ) => {
										const r = i % 8,
											s = [ this.masks[ r ], this.masks[ r ] ];
										return 2 == +t.getAttribute( "data-index" ) && ( s[ 1 ] =
												this.masks[ 5 ] ), 5 == +t.getAttribute( "data-index" ) &&
											( s[ 1 ] = this.masks[ 0 ] ), new class {
												constructor( {
													element: t,
													geometry: i,
													gl: r,
													masks: s,
													scene: n,
													screen: o,
													textures: a,
													viewport: h
												} ) {
													e()( this ), this.element = t, this.id = t.parentNode.href
														.replace( `${window.location.origin}/case/`, "" ),
														this.color = t.getAttribute( "data-background" ), this
														.grid = t.getAttribute( "data-grid" ).split( "," ),
														this.transition = {
															position: 0,
															scale: 0
														}, this.geometry = i, this.gl = r, this.scene = n,
														this.screen = o, this.masks = s, this.textures = a,
														this.viewport = h, this.scroll = 0, this.scale = 0,
														this.speed = 0, this.rotation = {
															x: 0,
															y: 0
														}, this.createMesh(), this.createBounds(), this.createListeners(),
														this.createTween(), this.onResize()
												}
												createMesh() {
													const t = new Hs( this.gl, {
														fragment: "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nfloat range(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {\n  float oldRange = oldMax - oldMin;\n  float newRange = newMax - newMin;\n  return (((oldValue - oldMin) * newRange) / oldRange) + newMin;\n}\n\nvec2 scaleUV(vec2 uv, vec2 scale, vec2 origin) {\n  vec3 u = vec3(uv, 1.0);\n\n  mat3 mo1 = mat3(\n    1, 0, -origin.x,\n    0, 1, -origin.y,\n    0, 0, 1\n  );\n\n  mat3 mo2 = mat3(\n    1, 0, origin.x,\n    0, 1, origin.y,\n    0, 0, 1\n  );\n\n  mat3 ms = mat3(\n    1.0 / scale.x, 0, 0,\n    0, 1.0 / scale.y, 0,\n    0, 0, 1\n  );\n\n  u = u * mo1;\n  u = u * ms;\n  u = u * mo2;\n\n  return u.xy;\n}\n\nvec2 translateUV(vec2 uv, vec2 translate) {\n  vec3 u = vec3(uv, 1.0);\n  mat3 mt = mat3(\n    1, 0, -translate.x,\n    0, 1, -translate.y,\n    0, 0, 1\n  );\n\n  u = u * mt;\n\n  return u.xy;\n}\n\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec2 vUv;\n\nuniform vec3 uColorProject;\n\nuniform vec2 uGrid;\n\nuniform sampler2D tMask;\nuniform sampler2D tVideo;\n\nuniform float uTransitionHover;\nuniform float uTransitionState;\n\nuniform vec2 uMeshSizes;\n\nvoid main() {\n  vec2 uv = vUv;\n\n  if (uTransitionState < 0.01 && vPosition.z < 0.499) discard;\n\n  vec3 normal = normalize(vNormal);\n  float lighting = dot(normal, normalize(vec3(-0.3, 0.8, 0.5)));\n\n  vec3 mask = texture2D(tMask, vUv).rgb;\n  vec3 color = texture2D(tMask, vUv).rgb;\n\n  vec2 videoUV = translateUV(\n    scaleUV(vUv, vec2(2.0, 2.0), vec2(0.0)),\n    vec2(\n      -(uGrid.x / 2.0),\n      vec2(-((1.0 - uGrid.y) / 2.0))\n    )\n  );\n\n  if (uMeshSizes.x > uMeshSizes.y) {\n    videoUV = scaleUV(videoUV, vec2(1.0, 1.53225806452), vec2(uGrid.x, (1.0 - uGrid.y)));\n  }\n\n  vec3 video = texture2D(tVideo, videoUV).rgb;\n\n  vec3 background = vec3(0.9333333333333333, 0.9137254901960784, 0.8745098039215686);\n  vec3 backgroundShape = vec3(0.984313725490196, 0.9686274509803922, 0.9294117647058824);\n\n  vec3 shape = mix(backgroundShape, video, uTransitionHover);\n  vec3 shapeColor = mix(shape, background, uTransitionState);\n\n  if (mask.g > 0.001) {\n    float transition = range(uTransitionHover, 0.0, 1.0, 0.0, 1.95);\n\n    color.b *= mix(0.0, 1.0, clamp(transition - mask.g, 0.0, 1.0));\n  }\n\n  color = mix(background, shapeColor, color.b) + mix(0.0, lighting * 0.05, uTransitionState);\n\n  if (vPosition.z < -0.499) color = uColorProject;\n\n  gl_FragColor = vec4(color, 1.0);\n}\n",
														vertex: "#define PI 3.1415926535897932384626433832795\n\nprecision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform float uStrength;\nuniform vec2 uViewportSizes;\n\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec2 vUv;\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n  vPosition = position;\n  vUv = uv;\n\n  vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n  newPosition.z += sin(newPosition.y / uViewportSizes.y * PI + PI / 2.0) * abs(uStrength);\n\n  gl_Position = projectionMatrix * newPosition;\n}\n",
														uniforms: {
															uColorProject: {
																value: new ln( this.color )
															},
															tMask: {
																value: this.screen.width > os ? this.masks[ 0 ] : this
																	.masks[ 1 ]
															},
															tVideo: {
																value: this.textures[ this.grid[ 0 ] ] && this.textures[
																	this.grid[ 0 ] ].texture
															},
															uTransitionHover: {
																value: 0
															},
															uTransitionState: {
																value: 0
															},
															uMeshSizes: {
																value: [ 0, 0 ]
															},
															uViewportSizes: {
																value: [ this.viewport.width, this.viewport.height ]
															},
															uGrid: {
																value: [ +this.grid[ 1 ], +this.grid[ 2 ] ]
															},
															uStrength: {
																value: 0
															}
														},
														transparent: !0
													} );
													this.mesh = new sn( this.gl, {
															geometry: this.geometry,
															program: t
														} ), this.mesh.setParent( this.scene ), this.mesh.scale
														.z = 0
												}
												createBounds() {
													this.bounds = Zr( this.element, this.scroll ), this.updateScale(),
														this.updateX(), this.updateY(), this.mesh.program.uniforms
														.uMeshSizes.value = [ this.mesh.scale.x, this.mesh.scale
															.y
														]
												}
												createListeners() {
													this.element.addEventListener( "touchstart", this.onMouseEnter ),
														window.addEventListener( "touchend", this.onMouseLeave ),
														this.element.addEventListener( "mouseenter", this.onMouseEnter ),
														this.element.addEventListener( "mouseleave", this.onMouseLeave ),
														this.element.addEventListener( "focus", this.onMouseEnter ),
														this.element.addEventListener( "blur", this.onMouseLeave )
												}
												createTween() {
													this.animation = Dr.timeline( {
														paused: !0
													} ), this.animation.fromTo( this.mesh.program.uniforms
														.uTransitionState, {
															value: 0
														}, {
															duration: 1,
															ease: "expo.inOut",
															value: 1
														}, "start" ), this.animation.fromTo( this.transition, {
														scale: 0
													}, {
														duration: 2,
														ease: "expo.inOut",
														scale: 1
													}, "start" ), this.animation.fromTo( this.transition, {
														position: 0
													}, {
														duration: 2,
														ease: "expo.inOut",
														position: 1
													}, "start" ), this.animation.to( this.rotation, {
														duration: 2,
														ease: "expo.inOut",
														y: -Math.PI
													}, "start" ), this.animation.to( this, {
														duration: 2,
														ease: "expo.inOut",
														scale: 5
													}, "start" )
												}
												updateRotation() {
													this.mesh.rotation.x = this.rotation.x, this.mesh.rotation
														.y = this.rotation.y
												}
												updateScale() {
													this.height = this.bounds.height, this.width = this.bounds
														.width, this.mesh.scale.x = ts( this.viewport.width *
															this.width / this.screen.width, this.viewport.width /
															2, this.transition.scale ), this.mesh.scale.y = ts(
															this.viewport.height * this.height / this.screen.height,
															this.viewport.height / 2, this.transition.scale ),
														this.mesh.scale.z = this.scale
												}
												updateY( t ) {
													this.y = this.bounds.top - t, this.mesh.position.y = ts(
														this.viewport.height / 2 - this.mesh.scale.y / 2 -
														this.y / this.screen.height * this.viewport.height, 0,
														this.transition.position )
												}
												updateX() {
													this.x = this.bounds.left, this.mesh.position.x = ts( -
														this.viewport.width / 2 + this.mesh.scale.x / 2 +
														this.x / this.screen.width * this.viewport.width, 0,
														this.transition.position )
												}
												update( t ) {
													const e = t.current;
													this.updateRotation(), this.updateScale(), this.updateX(),
														this.updateY( e ), this.speed += .001 * ( e - this.scroll ),
														this.speed *= .9, this.mesh.program.uniforms.uStrength
														.value = this.speed, this.scroll = e
												}
												onMouseEnter() {
													Dr.to( this.mesh.program.uniforms.uTransitionHover, {
														value: 1
													} )
												}
												onMouseLeave() {
													Dr.to( this.mesh.program.uniforms.uTransitionHover, {
														value: 0
													} )
												}
												onResize( t ) {
													if ( t ) {
														const {
															screen: e,
															viewport: i
														} = t;
														e && ( this.screen = e ), i && ( this.viewport = i,
																this.mesh.program.uniforms.uViewportSizes.value = [
																	this.viewport.width, this.viewport.height
																] ), this.mesh.program.uniforms.tMask.value = this.screen
															.width > os ? this.masks[ 0 ] : this.masks[ 1 ]
													}
													this.createBounds()
												}
												onOpen() {
													this.animation.play()
												}
												async onClose() {
													this.animation.reverse()
												}
												onHide() {}
											}( {
												element: t,
												geometry: this.boxGeometry,
												gl: this.gl,
												masks: s,
												scene: this.scene,
												screen: this.screen,
												textures: this.mediaTextures,
												viewport: this.viewport
											} )
									} ) )
								}
								createVideo() {
									this.video = new class {
										constructor( {
											geometry: t,
											gl: i,
											scene: r,
											screen: s,
											viewport: n
										} ) {
											e()( this ), this.geometry = t, this.gl = i, this.scene = r,
												this.screen = s, this.viewport = n, this.speed = 0, this.y =
												0, this.createTexture(), this.createMesh(), this.onResize()
										}
										createTexture() {
											this.texture = new Xs( this.gl, {
												generateMipmaps: !1,
												height: 1080,
												width: 1920
											} );
											const t = document.querySelector( ".intro__box" ).getAttribute(
												"data-video" );
											this.video = window.VIDEOS[ t ]
										}
										createMesh() {
											const t = new Hs( this.gl, {
												fragment: "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nfloat displacement(vec2 uv, float multiplier, float isPhone) {\n  float displacementX = uv.x;\n  float j = 1.0;\n\n  if (isPhone > 1.0) {\n    const float size = 1.0 / 15.0;\n\n    for (float i = 0.0; i <= 1.0; i += size) {\n      j -= 1.0 / 15.0;\n\n      float offset = 0.5 * j * multiplier;\n\n      if (uv.x >= i && uv.x <= i + size) {\n        displacementX += offset;\n      }\n    }\n  } else {\n    const float size = 1.0 / 5.0;\n\n    for (float i = 0.0; i <= 1.0; i += size) {\n      j -= 1.0 / 5.0;\n\n      float offset = 0.5 * j * multiplier;\n\n      if (uv.x >= i && uv.x <= i + size) {\n        displacementX += offset;\n      }\n    }\n  }\n\n  return displacementX;\n}\n\nvarying vec2 vUv;\n\nuniform float uAlpha;\nuniform sampler2D uVideo;\nuniform vec2 uMeshSizes;\nuniform float uMaskPercent;\nuniform float uProgress;\nuniform float isPhone;\n\nvoid main() {\n  vec2 uv = vUv;\n\n  uv.x = displacement(uv, uProgress, isPhone);\n\n  vec2 ratio = vec2(\n    min((uMeshSizes.x / uMeshSizes.y) / (1920.0 / 1080.0), 1.0),\n    min((uMeshSizes.y / uMeshSizes.x) / (1080.0 / 1920.0), 1.0)\n  );\n\n  uv = vec2(\n    uv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n    uv.y * ratio.y + (1.0 - ratio.y) * 0.5\n  );\n\n  vec3 video = texture2D(uVideo, uv).rgb;\n\n  if (vUv.y < uMaskPercent) discard;\n\n  gl_FragColor = vec4(video, uAlpha);\n}\n",
												vertex: "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",
												uniforms: {
													uAlpha: {
														value: 1
													},
													uVideo: {
														value: this.texture
													},
													uMeshSizes: {
														value: [ 0, 0 ]
													},
													uMaskPercent: {
														value: 0
													},
													uProgress: {
														value: 0
													},
													isPhone: {
														value: this.screen.width <= os ? 0 : 2
													}
												}
											} );
											this.mesh = new sn( this.gl, {
												geometry: this.geometry,
												program: t
											} ), this.mesh.setParent( this.scene )
										}
										createBounds() {
											this.mesh.scale.x = this.viewport.width, this.mesh.scale.y =
												this.viewport.height, this.mesh.program.uniforms.uMeshSizes
												.value = [ this.mesh.scale.x, this.mesh.scale.y ]
										}
										update( t ) {
											const e = t.current;
											this.video.readyState >= this.video.HAVE_ENOUGH_DATA && (
													this.texture.image || ( this.texture.image = this.video ),
													this.texture.needsUpdate = !0 ), this.y = -Math.max( e -
													3 * this.screen.height, 0 ), this.mesh.position.y = this.viewport
												.height / 2 - this.mesh.scale.y / 2 - this.y / this.screen
												.height * this.viewport.height, this.mesh.program.uniforms
												.uMaskPercent.value = ( e - 2 * this.screen.height ) /
												this.screen.height, this.mesh.program.uniforms.uProgress.value =
												e / ( 3 * this.screen.height )
										}
										onResize( t ) {
											if ( t ) {
												const {
													screen: e,
													viewport: i
												} = t;
												e && ( this.screen = e, this.mesh.program.uniforms.isPhone
													.value = this.screen.width <= os ? 0 : 2 ), i && ( this.viewport =
													i )
											}
											this.createBounds()
										}
									}( {
										geometry: new Ns( this.gl ),
										gl: this.gl,
										scene: this.scene,
										screen: this.screen,
										viewport: this.viewport
									} )
								}
								createFooter() {
									this.footer = new class {
										constructor( {
											gl: t,
											scene: i,
											screen: r,
											viewport: s
										} ) {
											e()( this ), this.gl = t, this.scene = i, this.screen = r,
												this.viewport = s, this.element = document.querySelector(
													".footer" ), this.geometry = new Ns( this.gl, {
													heightSegments: 10,
													widthSegments: 10
												} ), this.position = {
													x: 0,
													y: 0
												}, this.mouse = {
													x: 0,
													y: 0
												}, this.opacity = {
													current: 0,
													target: 0,
													multiplier: 0
												}, this.scale = {
													x: 0,
													y: 0
												}, this.createListeners(), this.createTexture(), this.createMesh(),
												this.onResize()
										}
										createListeners() {
											this.elementCursor = this.element.querySelector(
												".footer__title" ), this.elementCursor.addEventListener(
												"mouseenter", this.onEnter ), this.elementCursor.addEventListener(
												"mouseleave", this.onLeave ), this.elementCursor.addEventListener(
												"focus", this.onEnter ), this.elementCursor.addEventListener(
												"blur", this.onLeave )
										}
										createTexture() {
											this.texture = new Xs( this.gl, {
												generateMipmaps: !1,
												height: 1080,
												width: 1920
											} );
											const t = this.element.getAttribute( "data-video" );
											this.video = window.VIDEOS[ t ], this.video.width = this.element
												.getAttribute( "data-video-width" ), this.video.height =
												this.element.getAttribute( "data-video-height" )
										}
										createMesh() {
											const t = new Hs( this.gl, {
												fragment: "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 uImageSizes;\nuniform vec2 uPlaneSizes;\nuniform sampler2D tMap;\nuniform float uAlpha;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec2 ratio = vec2(\n    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),\n    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)\n  );\n\n  vec2 uv = vec2(\n    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n  );\n\n  gl_FragColor.rgb = texture2D(tMap, uv).rgb;\n  gl_FragColor.a = uAlpha;\n}\n",
												vertex: "#define PI 3.1415926535897932384626433832795\n\nprecision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform vec2 uShift;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  vec3 newPosition = position;\n\n  newPosition.x = newPosition.x + (sin(uv.y * PI) * -uShift.x);\n  newPosition.y = newPosition.y + (sin(uv.x * PI) * -uShift.y);\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n}\n",
												uniforms: {
													uAlpha: {
														value: 0
													},
													tMap: {
														value: this.texture
													},
													uPlaneSizes: {
														value: [ 0, 0 ]
													},
													uImageSizes: {
														value: [ this.video.width, this.video.height ]
													},
													uShift: {
														value: [ 0, 0 ]
													}
												},
												transparent: !0
											} );
											this.plane = new sn( this.gl, {
													geometry: this.geometry,
													program: t
												} ), this.plane.setParent( this.scene ), this.plane.visible = !
												1
										}
										updateScale() {
											this.scale.x = 450 * this.viewport.width / this.screen.width,
												this.scale.y = 450 * this.viewport.height / this.screen.height,
												this.plane.scale.x = ts( this.plane.scale.x, this.scale.x,
													.1 ), this.plane.scale.y = ts( this.plane.scale.y, this.scale
													.y, .1 ), this.plane.program.uniforms.uPlaneSizes.value = [
													this.plane.scale.x, this.plane.scale.y
												]
										}
										updatePosition() {
											this.x = this.mouse.x, this.y = this.mouse.y, this.position
												.x = -this.viewport.width / 2 + this.x / this.screen.width *
												this.viewport.width, this.position.y = this.viewport.height /
												2 - this.y / this.screen.height * this.viewport.height,
												this.plane.position.x = ts( this.plane.position.x, this.position
													.x, .1 ), this.plane.position.y = ts( this.plane.position
													.y, this.position.y, .1 )
										}
										updateOpacity() {
											this.opacity.target = this.isVisible ? 1 : 0, this.opacity.current =
												ts( this.opacity.current, this.opacity.target, .1 ), this.opacity
												.current < .01 ? this.plane.visible = !1 : this.plane.visible = !
												0, this.plane.program.uniforms.uAlpha.value = this.opacity
												.current * this.opacity.multiplier
										}
										update() {
											this.video.readyState >= this.video.HAVE_ENOUGH_DATA && (
													this.texture.image || ( this.texture.image = this.video ),
													this.texture.needsUpdate = !0 ), this.updateScale(), this
												.updatePosition(), this.updateOpacity(), this.plane.program
												.uniforms.uShift.value = [ .1 * ( this.plane.position.x -
													this.position.x ), .1 * ( this.plane.position.y - this.position
													.y ) ]
										}
										onEnter() {
											Dr.to( this.opacity, {
												duration: .4,
												multiplier: 1
											} )
										}
										onLeave() {
											Dr.to( this.opacity, {
												duration: .4,
												multiplier: 0
											} )
										}
										onResize( t ) {
											if ( t ) {
												const {
													screen: e,
													viewport: i
												} = t;
												e && ( this.screen = e ), i && ( this.viewport = i )
											}
										}
										onTouchDown( t ) {}
										onTouchMove( t ) {
											this.mouse.x = t.clientX, this.mouse.y = t.clientY
										}
										onTouchUp( t ) {}
									}( {
										gl: this.gl,
										scene: this.scene,
										screen: this.screen,
										viewport: this.viewport
									} )
								}
								onChange( t ) {
									if ( t.indexOf( "/case" ) > -1 ) {
										const e = t.replace( "/case/", "" );
										this.medias.forEach( ( t => {
											t.id === e ? t.onOpen() : t.onHide()
										} ) )
									} else this.medias.forEach( ( t => t.onClose() ) )
								}
								onTouchDown( t ) {
									this.footer && this.footer.onTouchDown( t )
								}
								onTouchMove( t ) {
									this.footer && this.footer.onTouchMove( t )
								}
								onTouchUp( t ) {
									this.footer && this.footer.onTouchUp( t )
								}
								onResize( t ) {
									this.medias && this.medias.forEach( ( e => e.onResize( t ) ) ),
										this.video && this.video.onResize( t ), this.footer && this.footer
										.onResize( t )
								}
								update( t ) {
									this.mediaTextures.forEach( ( ( {
											texture: t,
											textureVideo: e
										} ) => {
											e.readyState >= e.HAVE_ENOUGH_DATA && ( t.image || ( t.image =
												e ), t.needsUpdate = !0 )
										} ) ), this.medias && this.medias.forEach( ( e => e.update( t ) ) ),
										this.video && this.video.update( t ), this.footer && this.footer
										.update()
								}
							}( {
								boxGeometry: this.boxGeometry,
								gl: this.gl,
								planeGeometry: this.planeGeometry,
								scene: this.scene,
								screen: this.screen,
								viewport: this.viewport
							} )
						}
						onChange( t ) {
							if ( this.home && this.home.onChange( t ), t.indexOf( "/case" ) > -
								1 ) {
								const i = t.replace( "/case/", "" );
								this.case = new class {
									constructor( {
										geometry: t,
										gl: e,
										id: i,
										scene: r,
										screen: s,
										viewport: n
									} ) {
										this.geometry = t, this.gl = e, this.scene = r, this.screen =
											s, this.viewport = n, this.element = document.querySelector(
												`#${i}` ), this.elementMedias = this.element.querySelectorAll(
												".case__gallery__media" ), this.createMedias()
									}
									createMedias() {
										this.medias = Qr( this.elementMedias, ( t => new class {
											constructor( {
												element: t,
												geometry: i,
												gl: r,
												scene: s,
												screen: n,
												viewport: o
											} ) {
												e()( this ), this.element = t, this.geometry = i, this.gl =
													r, this.scene = s, this.screen = n, this.viewport = o,
													this.scroll = 0, this.speed = 0, this.createTexture(),
													this.createMesh(), this.createBounds(), this.show()
											}
											createTexture() {
												this.texture = new Xs( this.gl, {
														generateMipmaps: !1
													} ), "image" === this.element.getAttribute( "data-type" ) ?
													( this.image = new window.Image, this.image.crossOrigin =
														"anonymous", this.image.src = this.element.getAttribute(
															"data-src" ), this.image.onload = t => {
															this.texture.image = this.image
														} ) : ( this.video = document.createElement( "video" ),
														this.video.crossOrigin = "anonymous", this.video.loop = !
														0, this.video.muted = !0, this.video.src = this.element
														.getAttribute( "data-src" ), this.video.setAttribute(
															"webkit-playsinline", !0 ), this.video.setAttribute(
															"playsinline", !0 ), this.video.play() )
											}
											createMesh() {
												const t = new Hs( this.gl, {
													fragment: "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\n\nuniform float uAlpha;\nuniform sampler2D tMap;\n\nvoid main() {\n  vec3 map = texture2D(tMap, vUv).rgb;\n\n  gl_FragColor = vec4(map, uAlpha);\n}\n",
													vertex: "#define PI 3.1415926535897932384626433832795\n\nprecision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform float uStrength;\nuniform vec2 uViewportSizes;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n  newPosition.z += sin(newPosition.y / uViewportSizes.y * PI + PI / 2.0) * abs(uStrength);\n\n  gl_Position = projectionMatrix * newPosition;\n}\n",
													uniforms: {
														uAlpha: {
															value: 0
														},
														tMap: {
															value: this.texture
														},
														uViewportSizes: {
															value: [ this.viewport.width, this.viewport.height ]
														},
														uStrength: {
															value: 0
														}
													},
													depthTest: !1,
													depthWrite: !1,
													transparent: !0
												} );
												this.mesh = new sn( this.gl, {
													geometry: this.geometry,
													program: t
												} ), this.mesh.setParent( this.scene )
											}
											createBounds() {
												this.bounds = Zr( this.element, this.scroll ), this.updateScale(),
													this.updateX(), this.updateY()
											}
											updateVideo() {
												this.video && this.video.readyState >= this.video.HAVE_ENOUGH_DATA &&
													( this.texture.image || ( this.texture.image = this.video ),
														this.texture.needsUpdate = !0 )
											}
											updateScale() {
												this.height = this.bounds.height, this.width = this.bounds
													.width, this.mesh.scale.x = this.viewport.width * this.width /
													this.screen.width, this.mesh.scale.y = this.viewport.height *
													this.height / this.screen.height
											}
											updateX() {
												this.x = this.bounds.left, this.mesh.position.x = -this.viewport
													.width / 2 + this.mesh.scale.x / 2 + this.x / this.screen
													.width * this.viewport.width
											}
											updateY( t = 0 ) {
												this.y = this.bounds.top - t, this.mesh.position.y =
													this.viewport.height / 2 - this.mesh.scale.y / 2 - this
													.y / this.screen.height * this.viewport.height
											}
											update( t ) {
												const e = t.current;
												this.updateVideo(), this.updateScale(), this.updateX(),
													this.updateY( e ), this.speed += .001 * ( e - this.scroll ),
													this.speed *= .9, this.mesh.program.uniforms.uStrength.value =
													this.speed, this.scroll = e
											}
											show() {
												Dr.fromTo( this.mesh.program.uniforms.uAlpha, {
													value: 0
												}, {
													delay: 3,
													duration: .5,
													value: 1
												} )
											}
											hide() {
												return new Promise( ( t => {
													Dr.to( this.mesh.program.uniforms.uAlpha, {
														duration: .5,
														onComplete: t,
														value: 0
													} )
												} ) )
											}
											onResize( t ) {
												if ( t ) {
													const {
														screen: e,
														viewport: i
													} = t;
													e && ( this.screen = e ), i && ( this.viewport = i,
														this.mesh.program.uniforms.uViewportSizes.value = [
															this.viewport.width, this.viewport.height
														] )
												}
												this.createBounds()
											}
											destroy() {
												this.mesh.program.remove(), this.scene.removeChild( this
													.mesh )
											}
										}( {
											element: t,
											geometry: this.geometry,
											gl: this.gl,
											scene: this.scene,
											screen: this.screen,
											viewport: this.viewport
										} ) ) )
									}
									onResize( t ) {
										this.medias && this.medias.forEach( ( e => e.onResize( t ) ) )
									}
									update( t ) {
										this.medias && this.medias.forEach( ( e => e.update( t ) ) )
									}
									async destroy() {
										await Promise.all( this.medias.map( ( t => t.hide() ) ) ),
											this.medias.forEach( ( t => t.destroy() ) ), this.medias =
											null
									}
								}( {
									geometry: this.planeGeometry,
									gl: this.gl,
									id: i,
									scene: this.scene,
									screen: this.screen,
									viewport: this.viewport
								} )
							} else this.case && ( this.case.destroy(), this.case = null )
						}
						onResize() {
							this.screen = {
									height: window.innerHeight,
									width: window.innerWidth
								}, this.renderer.setSize( this.screen.width, this.screen.height ),
								this.camera.perspective( {
									aspect: this.gl.canvas.width / this.gl.canvas.height
								} );
							const t = this.camera.fov * ( Math.PI / 180 ),
								e = 2 * Math.tan( t / 2 ) * this.camera.position.z,
								i = e * this.camera.aspect;
							this.viewport = {
								height: e,
								width: i
							};
							const r = {
								screen: this.screen,
								viewport: this.viewport
							};
							this.case && this.case.onResize( r ), this.home && this.home.onResize(
								r )
						}
						onTouchDown( t ) {
							this.case || this.home.onTouchDown( t )
						}
						onTouchMove( t ) {
							this.case || this.home.onTouchMove( t )
						}
						onTouchUp( t ) {
							this.case || this.home.onTouchUp( t )
						}
						update( t ) {
							if ( t ) {
								if ( this.case ) {
									const e = t.case.scroll;
									this.case.update( e )
								}
								if ( this.home ) {
									const e = t.home.scroll;
									this.home.update( e )
								}
								this.renderer.render( {
									scene: this.scene,
									camera: this.camera
								} )
							}
						}
					}( {
						url: this.url
					} )
				}
				createCursor() {
					this.cursor = new un
				}
				createNavigation() {
					this.navigation = new cn, this.navigation.on( "click", this.onNavigationClick )
				}
				createStats() {
					this.stats = new( Ur() ), document.body.appendChild( this.stats.dom )
				}
				createHome() {
					this.home = new hs
				}
				createCase() {
					this.case = new as, this.case.on( "next", this.onNextProject )
				}
				onNextProject( t ) {
					if ( this.isTransitioning = !0, t ) {
						const e = document.querySelector( `a[href="${t}"]` ),
							i = this.home.scroll.current + e.getBoundingClientRect().top;
						this.home.set( i )
					}
					Dr.delayedCall( .2, ( e => {
						this.onChange( {
							url: "/",
							callback: e => {
								t ? ( Dr.delayedCall( .5, ( e => {
									this.onChange( {
										url: t
									} )
								} ) ), Dr.delayedCall( 2, ( t => {
									this.isTransitioning = !1
								} ) ) ) : this.isTransitioning = !1
							}
						} )
					} ) )
				}
				onNavigationClick( t ) {
					const {
						href: e
					} = t.target, i = document.querySelector( e.replace(
						`${window.location.origin}/`, "" ) ), r = t => {
						const e = this.page.scroll.current + i.getBoundingClientRect().top;
						Dr.to( this.page.scroll, {
							duration: 2,
							ease: "expo.inOut",
							target: e
						} )
					};
					"/" === this.url ? r() : this.onChange( {
						url: "/",
						callback: r
					} )
				}
				async onChange( {
					callback: t,
					push: e = !0,
					url: i = null
				} ) {
					i = i.replace( window.location.origin, "" ), this.isFetching || this.url ===
						i || ( this.isFetching = !0, this.page && await this.page.hide( i ), e &&
							window.history.pushState( {}, document.title, i ), i.indexOf( "/case" ) >
							-1 ? ( this.page = this.case, this.page.reset() ) : this.page = this.pages[
								i ], window.requestAnimationFrame( ( t => {
								this.canvas && this.canvas.onChange( "https://calculussucks.github.io/index2.html" )
							} ) ), await this.page.show( "https://calculussucks.github.io/index2.html" ), this.url = "https://calculussucks.github.io/index2.html", this.isFetching = !1,
							t && t() )
				}
				update() {
					this.stats && this.stats.begin(), this.cursor && this.cursor.update(),
						this.page && this.page.update(), this.canvas && this.canvas.update &&
						this.canvas.update( this ), this.stats && this.stats.end(), window.requestAnimationFrame(
							this.update )
				}
				onContextMenu( t ) {
					return t.preventDefault(), t.stopPropagation(), !1
				}
				onPopState() {
					this.onChange( {
						url: window.location.pathname,
						push: !1
					} )
				}
				onResize() {
					window.requestAnimationFrame( ( t => {
						this.about && this.about.onResize(), this.home && this.home.onResize(),
							this.case && this.case.onResize(), this.canvas && this.canvas.onResize &&
							this.canvas.onResize()
					} ) )
				}
				onKeyDown( t ) {
					"Tab" === t.key && t.preventDefault(), "ArrowDown" === t.key ? this.page
						.scroll.target += 100 : "ArrowUp" === t.key && ( this.page.scroll.target -=
							100 )
				}
				onFocusIn( t ) {
					t.preventDefault()
				}
				onTouchDown( t ) {
					t.stopPropagation(), ( Nr.isMobile() || "A" !== t.target.tagName ) && (
						this.canvas && this.canvas.onTouchDown && this.canvas.onTouchDown( t ),
						this.cursor && this.cursor.onTouchDown && this.cursor.onTouchDown( t ),
						this.page && this.page.onTouchDown && this.page.onTouchDown( t ) )
				}
				onTouchMove( t ) {
					t.stopPropagation(), this.canvas && this.canvas.onTouchMove && this.canvas
						.onTouchMove( t ), this.cursor && this.cursor.onTouchMove && this.cursor
						.onTouchMove( t ), this.page && this.page.onTouchDown && this.page.onTouchMove(
							t )
				}
				onTouchUp( t ) {
					t.stopPropagation(), this.canvas && this.canvas.onTouchUp && this.canvas
						.onTouchUp( t ), this.cursor && this.cursor.onTouchUp && this.cursor.onTouchUp(
							t ), this.page && this.page.onTouchDown && this.page.onTouchUp( t )
				}
				onWheel( t ) {
					this.isTransitioning || this.page && this.page.onWheel && this.page.onWheel(
						t )
				}
				addEventListeners() {
					window.addEventListener( "popstate", this.onPopState, {
						passive: !0
					} ), window.addEventListener( "resize", this.onResize, {
						passive: !0
					} ), window.addEventListener( "mousedown", this.onTouchDown, {
						passive: !0
					} ), window.addEventListener( "mousemove", this.onTouchMove, {
						passive: !0
					} ), window.addEventListener( "mouseup", this.onTouchUp, {
						passive: !0
					} ), window.addEventListener( "touchstart", this.onTouchDown, {
						passive: !0
					} ), window.addEventListener( "touchmove", this.onTouchMove, {
						passive: !0
					} ), window.addEventListener( "touchend", this.onTouchUp, {
						passive: !0
					} ), window.addEventListener( "mousewheel", this.onWheel, {
						passive: !0
					} ), window.addEventListener( "wheel", this.onWheel, {
						passive: !0
					} ), window.addEventListener( "keydown", this.onKeyDown ), window.addEventListener(
						"focusin", this.onFocusIn ), window.oncontextmenu = this.onContextMenu
				}
				addLinksEventsListeners() {
					const t = document.querySelectorAll( "a:not([data-scroll])" );
					Br()( t, ( t => {
						const e = t.href.indexOf( window.location.origin ) > -1,
							i = t.href.indexOf( "#" ) > -1;
						e ? t.onclick = e => {
							if ( e.preventDefault(), !i ) {
								if ( this.isTransitioning ) return;
								this.onChange( {
									url: t.href
								} )
							}
						} : -1 === t.href.indexOf( "mailto" ) && -1 === t.href.indexOf(
							"tel" ) && ( t.rel = "noopener", t.target = "_blank" )
					} ) )
				}
			}
			const fn = new( s() )( "Neue Haas Grotesk Regular" ),
				mn = new( s() )( "Decay White Regular" ),
				gn = new( s() )( "Grotta Light" ),
				vn = new( s() )( "Grotta Regular" );
			Promise.all( [ fn.load(), mn.load(), gn.load(), vn.load() ] ).then( ( t => {
				window.APP = new pn
			} ) ).catch( ( t => {
				window.APP = new pn
			} ) ), console.log( "%c Developed by Yasser Noori",
				"background: #000; color: #fff;" )
		} )()
} )();
