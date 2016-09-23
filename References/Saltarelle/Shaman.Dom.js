(function() {
	'use strict';
	var $asm = {};
	global.Shaman = global.Shaman || {};
	global.Shaman.Dom = global.Shaman.Dom || {};
	global.Shaman.Runtime = global.Shaman.Runtime || {};
	global.System = global.System || {};
	global.System.Diagnostics = global.System.Diagnostics || {};
	global.System.IO = global.System.IO || {};
	global.System.Text = global.System.Text || {};
	global.System.Text.Saltarelle = global.System.Text.Saltarelle || {};
	global.System.Xml = global.System.Xml || {};
	ss.initAssembly($asm, 'Shaman.Dom');
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlDocument.ParseState
	var $Shaman_$Dom_HtmlDocument$ParseState = function() {
	};
	$Shaman_$Dom_HtmlDocument$ParseState.__typeName = 'Shaman.$Dom.HtmlDocument$ParseState';
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlEntity.ParseState
	var $Shaman_$Dom_HtmlEntity$ParseState = function() {
	};
	$Shaman_$Dom_HtmlEntity$ParseState.__typeName = 'Shaman.$Dom.HtmlEntity$ParseState';
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlNode.DescendantsEnumerable
	var $Shaman_$Dom_HtmlNode$DescendantsEnumerable = function(htmlNode, self, name) {
		this.$htmlNode = null;
		this.$self = false;
		this.$name = null;
		this.$htmlNode = htmlNode;
		this.$self = self;
		this.$name = (ss.isValue(name) ? $Shaman_Runtime_ValueStringExtensions.toLowerFast(name) : null);
	};
	$Shaman_$Dom_HtmlNode$DescendantsEnumerable.__typeName = 'Shaman.$Dom.HtmlNode$DescendantsEnumerable';
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlNode.DescendantsEnumerator
	var $Shaman_$Dom_HtmlNode$DescendantsEnumerator = function(enumerable) {
		this.$nameFilter = null;
		this.$yieldSelf = false;
		this.$stack = null;
		this.$childCounts = null;
		this.$positions = null;
		this.$stackSize = 0;
		this.$current = null;
		this.$baseNode = null;
		this.$nameFilter = enumerable.$name;
		this.$yieldSelf = enumerable.$self;
		this.$baseNode = enumerable.$htmlNode;
		this.$stack = new Array(30);
		this.$childCounts = new Array(30);
		this.$stack[0] = this.$baseNode.$_childNodesArray;
		this.$childCounts[0] = this.$baseNode.$_childNodesCount;
		this.$positions = new Array(30);
		this.$stackSize = 1;
	};
	$Shaman_$Dom_HtmlNode$DescendantsEnumerator.__typeName = 'Shaman.$Dom.HtmlNode$DescendantsEnumerator';
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.AttributeValueQuote
	var $Shaman_Dom_$AttributeValueQuote = function() {
	};
	$Shaman_Dom_$AttributeValueQuote.__typeName = 'Shaman.Dom.$AttributeValueQuote';
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlAttribute
	var $Shaman_Dom_HtmlAttribute = function() {
		this.$_name = null;
		this.$_quoteType = 0;
		this.$_value = null;
	};
	$Shaman_Dom_HtmlAttribute.__typeName = 'Shaman.Dom.HtmlAttribute';
	global.Shaman.Dom.HtmlAttribute = $Shaman_Dom_HtmlAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlAttributeCollection
	var $Shaman_Dom_HtmlAttributeCollection = function(ownernode) {
		this.$_ownernode = null;
		this.$_ownernode = ownernode;
	};
	$Shaman_Dom_HtmlAttributeCollection.__typeName = 'Shaman.Dom.HtmlAttributeCollection';
	global.Shaman.Dom.HtmlAttributeCollection = $Shaman_Dom_HtmlAttributeCollection;
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlAttributeCollection.Enumerator
	var $Shaman_Dom_HtmlAttributeCollection$Enumerator = function() {
		this.$parent = null;
		this.$index = 0;
	};
	$Shaman_Dom_HtmlAttributeCollection$Enumerator.__typeName = 'Shaman.Dom.HtmlAttributeCollection$Enumerator';
	global.Shaman.Dom.HtmlAttributeCollection$Enumerator = $Shaman_Dom_HtmlAttributeCollection$Enumerator;
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlCommentNode
	var $Shaman_Dom_HtmlCommentNode = function(ownerdocument, index) {
		this.$_comment = null;
		$Shaman_Dom_HtmlNode.call(this, 2, ownerdocument, index);
	};
	$Shaman_Dom_HtmlCommentNode.__typeName = 'Shaman.Dom.HtmlCommentNode';
	global.Shaman.Dom.HtmlCommentNode = $Shaman_Dom_HtmlCommentNode;
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlDocument
	var $Shaman_Dom_HtmlDocument = function() {
		this.$_c = 0;
		this.$_currentAttributeIndex = -1;
		this.$_currentnode = null;
		this.$_documentnode = null;
		this.$_fullcomment = false;
		this.$_pcdata = false;
		this.$_index = 0;
		this.$lastnodes = {};
		this.$_lastparentnode = null;
		this.$_line = 0;
		this.$_lineposition = 0;
		this.$_maxlineposition = 0;
		this.$_oldstate = 0;
		this.$openednodes = null;
		this.$_state = 0;
		this.$_isHtml = true;
		this.$_obeySelfClosingTags = false;
		this.$text = null;
		this.$optionAddDebuggingAttributes = false;
		this.$optionAutoCloseOnEnd = false;
		this.$optionCheckSyntax = true;
		this.$optionExtractErrorSourceText = false;
		this.$optionExtractErrorSourceTextMaxLength = 100;
		this.$optionFixNestedTags = true;
		this.optionOutputAsXml = false;
		this.$optionOutputOptimizeAttributeValues = false;
		this.$optionOutputOriginalCase = true;
		this.$optionOutputUpperCase = false;
		this.$optionWriteEmptyNodes = false;
		this.$attributesScratchpad = [];
		this.$_currentNodeNameStartIndex = 0;
		this.$_currentAttributeNameStartIndex = 0;
		this.$_currentAttributeValueStartIndex = 0;
		this.$1$TagField = null;
		this.$_baseUrl = null;
		this.$_pageUrl = null;
		this.$_documentnode = this.$createNode$1(0, 0);
	};
	$Shaman_Dom_HtmlDocument.__typeName = 'Shaman.Dom.HtmlDocument';
	$Shaman_Dom_HtmlDocument.$ctor1 = function(html) {
		$Shaman_Dom_HtmlDocument.call(this);
		this.loadHtml(html);
	};
	$Shaman_Dom_HtmlDocument.getXmlName = function(name) {
		var text = '';
		var flag = true;
		for (var i = 0; i < name.length; i++) {
			if (name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122 || name.charCodeAt(i) >= 48 && name.charCodeAt(i) <= 57 || name.charCodeAt(i) === 95 || name.charCodeAt(i) === 45 || name.charCodeAt(i) === 46) {
				text += String.fromCharCode(name.charCodeAt(i));
			}
			else {
				throw new ss.NotSupportedException('Bad XML element name: ' + name);
			}
		}
		if (flag) {
			return text;
		}
		return '_' + text;
	};
	$Shaman_Dom_HtmlDocument.$isWhiteSpace = function(c) {
		return c === 10 || c === 13 || c === 32 || c === 9;
	};
	$Shaman_Dom_HtmlDocument.$getAbsoluteUrlInternal = function(baseUrl, relative) {
		if (ss.startsWithString(relative, 'http:') || ss.startsWithString(relative, 'https:')) {
			return new $System_Uri(relative);
		}
		if (ss.startsWithString(relative, '//')) {
			return new $System_Uri((ss.isValue(baseUrl) ? baseUrl.scheme : 'https') + ':' + relative);
		}
		var firstColon = ss.indexOfString(relative, String.fromCharCode(58), 0, Math.min(relative.length, 15));
		var firstSlash = relative.indexOf(String.fromCharCode(47));
		var firstQuestionMark = relative.indexOf(String.fromCharCode(63));
		if (firstColon !== -1 && (firstSlash === -1 || firstColon < firstSlash) && (firstQuestionMark === -1 || firstColon < firstQuestionMark)) {
			return new $System_Uri(relative);
		}
		if (ss.isNullOrUndefined(baseUrl)) {
			throw new ss.ArgumentException('Cannot create an absolute Uri without a base Uri.');
		}
		return new $System_Uri.$ctor1(baseUrl, relative);
	};
	global.Shaman.Dom.HtmlDocument = $Shaman_Dom_HtmlDocument;
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlElementFlag
	var $Shaman_Dom_HtmlElementFlag = function() {
	};
	$Shaman_Dom_HtmlElementFlag.__typeName = 'Shaman.Dom.HtmlElementFlag';
	global.Shaman.Dom.HtmlElementFlag = $Shaman_Dom_HtmlElementFlag;
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlEntity
	var $Shaman_Dom_HtmlEntity = function() {
	};
	$Shaman_Dom_HtmlEntity.__typeName = 'Shaman.Dom.HtmlEntity';
	$Shaman_Dom_HtmlEntity.$addPair = function(name, val) {
		$Shaman_Dom_HtmlEntity.$_entityName[val] = name;
		$Shaman_Dom_HtmlEntity.$_entityValue[name] = val;
	};
	$Shaman_Dom_HtmlEntity.deEntitize = function(text) {
		var $state = 0, flag, parseState, i, c, c2, flag2, text2, text3, fromBase, num, num2;
		$sm1:
		for (;;) {
			switch ($state) {
				case 0: {
					if (ss.isNullOrUndefined(text)) {
						return null;
					}
					if (text.length === 0) {
						return text;
					}
					flag = false;
					parseState = 0;
					i = 0;
					$state = 1;
					continue $sm1;
				}
				case 1: {
					if (!(i < text.length)) {
						$state = 3;
						continue $sm1;
					}
					if (parseState === 0) {
						c = text.charCodeAt(i);
						if (c === 38) {
							parseState = 1;
						}
						else if (flag) {
							$Shaman_Dom_HtmlEntity.$sb.append$1(text.charCodeAt(i));
						}
						$state = 2;
						continue $sm1;
					}
					else if (parseState === 1) {
						if (!flag) {
							flag = true;
							if (ss.isNullOrUndefined($Shaman_Dom_HtmlEntity.$sb)) {
								$Shaman_Dom_HtmlEntity.$sb = new $System_Text_Saltarelle_StringBuilder.$ctor1(text.length);
							}
							else {
								$Shaman_Dom_HtmlEntity.$sb.set_length(0);
							}
							$Shaman_Dom_HtmlEntity.$sb.$append(text, 0, i - 1);
							if (ss.isNullOrUndefined($Shaman_Dom_HtmlEntity.$entity)) {
								$Shaman_Dom_HtmlEntity.$entity = new $System_Text_Saltarelle_StringBuilder.$ctor1(10);
							}
							$Shaman_Dom_HtmlEntity.$entity.set_length(0);
						}
						c2 = text.charCodeAt(i);
						if (c2 === 59 || c2 === 60 || c2 === 34 || c2 === 39 || $Shaman_Dom_HtmlEntity.$isWhiteSpace(c2)) {
							flag2 = c2 === 59;
							if (!flag2) {
								i--;
							}
							if ($Shaman_Dom_HtmlEntity.$entity.get_length() === 0) {
								if (c2 === 59) {
									$Shaman_Dom_HtmlEntity.$sb.append$5('&;');
								}
								else {
									$Shaman_Dom_HtmlEntity.$sb.append$1(38);
								}
								$state = 5;
								continue $sm1;
							}
							else {
								if ($Shaman_Dom_HtmlEntity.$entity.get_item(0) === 35) {
									text2 = $Shaman_Dom_HtmlEntity.$entity.toString();
									try {
										text3 = $Shaman_Runtime_ValueStringExtensions.toLowerFast($Shaman_Runtime_ValueStringExtensions.substringCached(text2, 1).trim());
										if (ss.startsWithString(text3, 'x')) {
											fromBase = 16;
											text3 = $Shaman_Runtime_ValueStringExtensions.substringCached(text3, 1);
										}
										else {
											fromBase = 10;
										}
										num = parseInt(text3, fromBase);
										if (num > 65535) {
											$Shaman_Dom_HtmlEntity.$sb.append$5(String.fromCodePoint(num));
										}
										else {
											$Shaman_Dom_HtmlEntity.$sb.append$1(num);
										}
										$state = 6;
										continue $sm1;
									}
									catch ($t1) {
										$Shaman_Dom_HtmlEntity.$sb.append$5('&#' + text2 + ';');
										$state = 6;
										continue $sm1;
									}
									$state = 7;
									continue $sm1;
								}
								$state = 7;
								continue $sm1;
							}
						}
						else {
							if (c2 === 38) {
								$Shaman_Dom_HtmlEntity.$sb.append$5('&' + $Shaman_Dom_HtmlEntity.$entity);
								$Shaman_Dom_HtmlEntity.$entity.remove(0, $Shaman_Dom_HtmlEntity.$entity.get_length());
							}
							else {
								$Shaman_Dom_HtmlEntity.$entity.append$1(text.charCodeAt(i));
								if ($Shaman_Dom_HtmlEntity.$entity.get_length() > $Shaman_Dom_HtmlEntity.$_maxEntitySize) {
									parseState = 0;
									$Shaman_Dom_HtmlEntity.$sb.append$5('&' + $Shaman_Dom_HtmlEntity.$entity);
									$Shaman_Dom_HtmlEntity.$entity.remove(0, $Shaman_Dom_HtmlEntity.$entity.get_length());
								}
							}
							$state = 4;
							continue $sm1;
						}
					}
					$state = 2;
					continue $sm1;
				}
				case 6: {
					$Shaman_Dom_HtmlEntity.$entity.remove(0, $Shaman_Dom_HtmlEntity.$entity.get_length());
					$state = 5;
					continue $sm1;
				}
				case 5: {
					parseState = 0;
					$state = 4;
					continue $sm1;
				}
				case 4: {
					$state = 2;
					continue $sm1;
				}
				case 2: {
					i++;
					$state = 1;
					continue $sm1;
				}
				case 3: {
					if (parseState === 1 && flag) {
						$Shaman_Dom_HtmlEntity.$sb.append$5('&' + $Shaman_Dom_HtmlEntity.$entity);
					}
					if (!flag) {
						return text;
					}
					return $Shaman_Runtime_ValueStringExtensions.toStringCached($Shaman_Dom_HtmlEntity.$sb);
				}
				case 7: {
					num2 = $Shaman_Dom_HtmlEntity.$_entityValue[$Shaman_Runtime_ValueStringExtensions.toStringCached($Shaman_Dom_HtmlEntity.$entity)];
					if (!ss.isNullOrUndefined(num2)) {
						$Shaman_Dom_HtmlEntity.$sb.append$1(num2);
						$state = 6;
						continue $sm1;
					}
					$Shaman_Dom_HtmlEntity.$sb.append$1(38);
					$Shaman_Dom_HtmlEntity.$sb.append$4($Shaman_Dom_HtmlEntity.$entity);
					if (flag2) {
						$Shaman_Dom_HtmlEntity.$sb.append$1(59);
						$state = 6;
						continue $sm1;
					}
					$state = 6;
					continue $sm1;
				}
				default: {
					break $sm1;
				}
			}
		}
	};
	$Shaman_Dom_HtmlEntity.$isWhiteSpace = function(ch) {
		return ch === 32 || ch === 13 || ch === 10 || ch === 9;
	};
	$Shaman_Dom_HtmlEntity.entitize = function(text) {
		if (ss.isNullOrUndefined(text)) {
			return null;
		}
		var flag = false;
		for (var i = 0; i < text.length; i++) {
			var c = text.charCodeAt(i);
			if (c === 38 || c === 60 || c === 62 || c === 34 || c === 39) {
				if (!flag) {
					flag = true;
					if (ss.isNullOrUndefined($Shaman_Dom_HtmlEntity.$sb)) {
						$Shaman_Dom_HtmlEntity.$sb = new $System_Text_Saltarelle_StringBuilder.$ctor1(text.length + ss.Int32.div(text.length, 5) + 10);
					}
					else {
						$Shaman_Dom_HtmlEntity.$sb.set_length(0);
					}
					$Shaman_Dom_HtmlEntity.$sb.$append(text, 0, i);
				}
				if (c === 38) {
					$Shaman_Dom_HtmlEntity.$sb.append$5('&amp;');
				}
				else if (c === 60) {
					$Shaman_Dom_HtmlEntity.$sb.append$5('&lt;');
				}
				else if (c === 62) {
					$Shaman_Dom_HtmlEntity.$sb.append$5('&gt;');
				}
				else if (c === 34) {
					$Shaman_Dom_HtmlEntity.$sb.append$5('&quot;');
				}
				else if (c === 39) {
					$Shaman_Dom_HtmlEntity.$sb.append$5('&apos;');
				}
			}
			else if (flag) {
				$Shaman_Dom_HtmlEntity.$sb.append$1(c);
			}
		}
		if (!flag) {
			return text;
		}
		return $Shaman_Runtime_ValueStringExtensions.toStringCached($Shaman_Dom_HtmlEntity.$sb);
	};
	global.Shaman.Dom.HtmlEntity = $Shaman_Dom_HtmlEntity;
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlNode
	var $Shaman_Dom_HtmlNode = function(type, ownerdocument, index) {
		this.$_closed = false;
		this.$_index = 0;
		this.$_originalName = null;
		this.$_nodetype = 0;
		this.$_outerlength = 0;
		this.$_outerstartindex = 0;
		this.$_ownerdocument = null;
		this.$_parentnode = null;
		this.$_prevwithsamename = null;
		this.$_starttag = false;
		this.$_streamposition = 0;
		this.$_nodeId = 0;
		this.$_attributeArray = null;
		this.$_attributeCount = 0;
		this.$_lowerName = null;
		this.$_childNodesArray = null;
		this.$_childNodesCount = 0;
		this.$_childNodes = null;
		this.$_attributes = null;
		this.$_nodetype = type;
		this.$_ownerdocument = ownerdocument;
		this.$_outerstartindex = index;
		switch (type) {
			case 0: {
				this.set_tagName($Shaman_Dom_HtmlNode.htmlNodeTypeNameDocument);
				this.$_closed = true;
				break;
			}
			case 2: {
				this.set_tagName($Shaman_Dom_HtmlNode.htmlNodeTypeNameComment);
				this.$_closed = true;
				break;
			}
			case 3: {
				this.set_tagName($Shaman_Dom_HtmlNode.htmlNodeTypeNameText);
				this.$_closed = true;
				break;
			}
		}
		if (ss.isValue(this.$_ownerdocument.$openednodes) && !this.get_closed() && -1 !== index) {
			this.$_ownerdocument.$openednodes[index] = this;
		}
		if (-1 !== index || type !== 2) {
		}
	};
	$Shaman_Dom_HtmlNode.__typeName = 'Shaman.Dom.HtmlNode';
	$Shaman_Dom_HtmlNode.createNode = function(html) {
		var htmlDocument = new $Shaman_Dom_HtmlDocument();
		htmlDocument.loadHtml(html);
		return htmlDocument.get_documentNode().get_firstChild();
	};
	$Shaman_Dom_HtmlNode.isCDataElement = function(name) {
		if (ss.isNullOrUndefined(name)) {
			throw new ss.ArgumentNullException('name');
		}
		var htmlElementFlag = $Shaman_Runtime_$Utilities.$tryGetValue$1(String, $Shaman_Dom_HtmlElementFlag).call(null, $Shaman_Dom_HtmlNode.elementsFlags, $Shaman_Runtime_ValueStringExtensions.toLowerFast(name));
		return (htmlElementFlag & 1) !== 0;
	};
	$Shaman_Dom_HtmlNode.isClosedElement = function(name) {
		if (ss.isNullOrUndefined(name)) {
			throw new ss.ArgumentNullException('name');
		}
		var htmlElementFlag = $Shaman_Runtime_$Utilities.$tryGetValue$1(String, $Shaman_Dom_HtmlElementFlag).call(null, $Shaman_Dom_HtmlNode.elementsFlags, $Shaman_Runtime_ValueStringExtensions.toLowerFast(name));
		return (htmlElementFlag & 4) !== 0;
	};
	$Shaman_Dom_HtmlNode.isEmptyElement = function(name) {
		if (ss.isNullOrUndefined(name)) {
			throw new ss.ArgumentNullException('name');
		}
		if (name.length === 0) {
			return true;
		}
		if (33 === name.charCodeAt(0)) {
			return true;
		}
		if (63 === name.charCodeAt(0)) {
			return true;
		}
		var htmlElementFlag = $Shaman_Runtime_$Utilities.$tryGetValue$1(String, $Shaman_Dom_HtmlElementFlag).call(null, $Shaman_Dom_HtmlNode.elementsFlags, $Shaman_Runtime_ValueStringExtensions.toLowerFast(name));
		return (htmlElementFlag & 2) !== 0;
	};
	$Shaman_Dom_HtmlNode.$getXmlComment = function(comment) {
		var comment2 = comment.get_comment();
		return ss.replaceAllString($Shaman_Runtime_ValueStringExtensions.substringCached$2(comment2, 4, comment2.length - 7), '--', ' - -');
	};
	$Shaman_Dom_HtmlNode.$getClasses = function(str) {
		return new ss.IteratorBlockEnumerable(function() {
			return (function(str) {
				var $result, $state = 0, i, num;
				return new ss.IteratorBlockEnumerator(function() {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								i = 0;
								$state = 1;
								continue $sm1;
							}
							case 1: {
								$state = -1;
								if (!(i < str.length)) {
									$state = 3;
									continue $sm1;
								}
								if (str.charCodeAt(i) !== 32) {
									num = ((i === str.length - 1) ? -1 : str.indexOf(String.fromCharCode(32), i + 1));
									if (num === -1) {
										$result = $Shaman_Runtime_ValueStringExtensions.substringCached(str, i);
										$state = 5;
										return true;
									}
									$state = 4;
									continue $sm1;
								}
								$state = 2;
								continue $sm1;
							}
							case 5: {
								$state = 3;
								continue $sm1;
							}
							case 4: {
								$state = -1;
								$result = $Shaman_Runtime_ValueStringExtensions.substringCached$2(str, i, num - i);
								$state = 6;
								return true;
							}
							case 2: {
								$state = -1;
								i++;
								$state = 1;
								continue $sm1;
							}
							case 3: {
								$state = -1;
								break $sm1;
							}
							case 6: {
								$state = -1;
								i = num;
								$state = 2;
								continue $sm1;
							}
							default: {
								break $sm1;
							}
						}
					}
					return false;
				}, function() {
					return $result;
				}, null, this);
			}).call(this, str);
		}, this);
	};
	global.Shaman.Dom.HtmlNode = $Shaman_Dom_HtmlNode;
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlNodeCollection
	var $Shaman_Dom_HtmlNodeCollection = function(parentnode) {
		this.$_parentnode = null;
		this.$_parentnode = parentnode;
	};
	$Shaman_Dom_HtmlNodeCollection.__typeName = 'Shaman.Dom.HtmlNodeCollection';
	$Shaman_Dom_HtmlNodeCollection.$indexOf = function(_items, item, p) {
		for (var i = 0; i < p; i++) {
			if (ss.referenceEquals(_items[i], item)) {
				return i;
			}
		}
		return -1;
	};
	$Shaman_Dom_HtmlNodeCollection.findFirst = function(items, name) {
		var $t1 = items.getEnumerator$1();
		try {
			while ($t1.moveNext()) {
				var current = $t1.current();
				if ($Shaman_Runtime_ValueStringExtensions.toLowerFast(current.get_tagName()).indexOf(name) !== -1) {
					var result = current;
					return result;
				}
				if (current.get_hasChildNodes()) {
					var htmlNode = $Shaman_Dom_HtmlNodeCollection.findFirst(current.get_childNodes(), name);
					if (ss.isValue(htmlNode)) {
						var result1 = htmlNode;
						return result1;
					}
				}
			}
		}
		finally {
			$t1.dispose();
		}
		return null;
	};
	global.Shaman.Dom.HtmlNodeCollection = $Shaman_Dom_HtmlNodeCollection;
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlNodeCollection.Enumerator
	var $Shaman_Dom_HtmlNodeCollection$Enumerator = function() {
		this.$parent = null;
		this.$index = 0;
	};
	$Shaman_Dom_HtmlNodeCollection$Enumerator.__typeName = 'Shaman.Dom.HtmlNodeCollection$Enumerator';
	global.Shaman.Dom.HtmlNodeCollection$Enumerator = $Shaman_Dom_HtmlNodeCollection$Enumerator;
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlNodeType
	var $Shaman_Dom_HtmlNodeType = function() {
	};
	$Shaman_Dom_HtmlNodeType.__typeName = 'Shaman.Dom.HtmlNodeType';
	global.Shaman.Dom.HtmlNodeType = $Shaman_Dom_HtmlNodeType;
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Dom.HtmlTextNode
	var $Shaman_Dom_HtmlTextNode = function(ownerdocument, index) {
		this.$_text = null;
		this.$_pcdata = false;
		$Shaman_Dom_HtmlNode.call(this, 3, ownerdocument, index);
	};
	$Shaman_Dom_HtmlTextNode.__typeName = 'Shaman.Dom.HtmlTextNode';
	global.Shaman.Dom.HtmlTextNode = $Shaman_Dom_HtmlTextNode;
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Runtime.CacheItem
	var $Shaman_Runtime_$CacheItem = function() {
		this.$candidate = null;
		this.$list = null;
	};
	$Shaman_Runtime_$CacheItem.__typeName = 'Shaman.Runtime.$CacheItem';
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Runtime.Utilities
	var $Shaman_Runtime_$Utilities = function() {
	};
	$Shaman_Runtime_$Utilities.__typeName = 'Shaman.Runtime.$Utilities';
	$Shaman_Runtime_$Utilities.$containsIndex = function(str, index) {
		return index < str.length;
	};
	$Shaman_Runtime_$Utilities.$tryGetValue$1 = function(TKey, TValue) {
		return function(dict, key) {
			return dict[key];
		};
	};
	$Shaman_Runtime_$Utilities.$tryGetValue = function(TKey, TValue) {
		return function(dict, key) {
			var result = {};
			dict.tryGetValue(key, result);
			return result.$;
		};
	};
	////////////////////////////////////////////////////////////////////////////////
	// Shaman.Runtime.ValueStringExtensions
	var $Shaman_Runtime_ValueStringExtensions = function() {
	};
	$Shaman_Runtime_ValueStringExtensions.__typeName = 'Shaman.Runtime.ValueStringExtensions';
	$Shaman_Runtime_ValueStringExtensions.substringCached = function(str, startIndex) {
		return $Shaman_Runtime_ValueStringExtensions.substringCached$2(str, startIndex, str.length - startIndex);
	};
	$Shaman_Runtime_ValueStringExtensions.toStringCached = function(str) {
		return $Shaman_Runtime_ValueStringExtensions.substringCached$3(str, 0, str.get_length());
	};
	$Shaman_Runtime_ValueStringExtensions.substringCached$1 = function(str, startIndex) {
		return $Shaman_Runtime_ValueStringExtensions.substringCached$3(str, startIndex, str.get_length() - startIndex);
	};
	$Shaman_Runtime_ValueStringExtensions.substringCached$3 = function(str, startIndex, length) {
		var text = str.toString();
		if (startIndex !== 0 || length !== text.length) {
			return text.substr(startIndex, length);
		}
		return text;
	};
	$Shaman_Runtime_ValueStringExtensions.substringCached$2 = function(str, startIndex, length) {
		if (length === 0) {
			return '';
		}
		var num = $Shaman_Runtime_ValueStringExtensions.$calculateHash(str.charCodeAt(startIndex), str.charCodeAt(startIndex + length - 1), length);
		if (ss.isNullOrUndefined($Shaman_Runtime_ValueStringExtensions.$cache)) {
			$Shaman_Runtime_ValueStringExtensions.$cache = new Array(6841);
		}
		var cacheItem = $Shaman_Runtime_ValueStringExtensions.$cache[num];
		if (ss.isNullOrUndefined(cacheItem)) {
			cacheItem = new $Shaman_Runtime_$CacheItem();
			$Shaman_Runtime_ValueStringExtensions.$cache[num] = cacheItem;
		}
		var list = cacheItem.$list;
		if (ss.isValue(list)) {
			var count = list.length;
			for (var i = 0; i < count; i++) {
				var text = list[i];
				if (text.length === length) {
					var flag = true;
					for (var j = 0; j < text.length; j++) {
						if (str.charCodeAt(startIndex + j) !== text.charCodeAt(j)) {
							flag = false;
							break;
						}
					}
					if (flag) {
						return text;
					}
				}
			}
		}
		var flag2 = ss.isValue(list) && list.length >= 5;
		var text2;
		if (!flag2) {
			text2 = cacheItem.$candidate;
			if (ss.isValue(text2) && text2.length === length) {
				var flag3 = true;
				for (var k = 0; k < text2.length; k++) {
					if (str.charCodeAt(startIndex + k) !== text2.charCodeAt(k)) {
						flag3 = false;
						break;
					}
				}
				if (flag3) {
					if (ss.isNullOrUndefined(list)) {
						list = [];
					}
					list.push(text2);
					cacheItem.$candidate = null;
					cacheItem.$list = list;
					return text2;
				}
			}
		}
		text2 = str.substr(startIndex, length);
		if (!flag2) {
			cacheItem.$candidate = text2;
		}
		return text2;
	};
	$Shaman_Runtime_ValueStringExtensions.$calculateHash = function(firstChar, lastChar, length) {
		return (firstChar * 10609 + lastChar * 14407 + length) % 6841;
	};
	$Shaman_Runtime_ValueStringExtensions.toLowerFast = function(str) {
		var length = str.length;
		var flag = true;
		for (var i = 0; i < length; i++) {
			var c = str.charCodeAt(i);
			if (c > 128 || 65 <= c && c <= 90) {
				flag = false;
				break;
			}
		}
		if (!flag) {
			return str.toLowerCase();
		}
		return str;
	};
	global.Shaman.Runtime.ValueStringExtensions = $Shaman_Runtime_ValueStringExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// System.StringComparison
	var $System_StringComparison = function() {
	};
	$System_StringComparison.__typeName = 'System.StringComparison';
	global.System.StringComparison = $System_StringComparison;
	////////////////////////////////////////////////////////////////////////////////
	// System.Uri
	var $System_Uri = function(url) {
		$System_Uri.$ctor1.call(this, null, url);
	};
	$System_Uri.__typeName = 'System.Uri';
	$System_Uri.$ctor1 = function(baseUrl, url) {
		this.absoluteUri = null;
		this.absolutePath = null;
		this.scheme = null;
		this.authority = null;
		this.host = null;
		this.query = null;
		if (ss.isNullOrUndefined(url)) {
			throw new ss.ArgumentNullException();
		}
		if (url.length === 0 && ss.isNullOrUndefined(baseUrl)) {
			throw new ss.FormatException('Empty URL.');
		}
		var protocolLength = 0;
		if (ss.startsWithString(url, 'http://')) {
			this.scheme = $System_Uri.uriSchemeHttp;
			protocolLength = 7;
		}
		else if (ss.startsWithString(url, 'https://')) {
			this.scheme = $System_Uri.uriSchemeHttps;
			protocolLength = 8;
		}
		else {
			for (var i = 0; i < url.length; i++) {
				var ch = url.charCodeAt(i);
				if (ch === 58) {
					this.scheme = $Shaman_Runtime_ValueStringExtensions.substringCached$2(url, 0, i);
					this.absoluteUri = url;
					return;
				}
				if (!($System_Uri.$isLetterOrDigit(ch) || ch === 45 || ch === 43)) {
					break;
				}
			}
			if (ss.isNullOrUndefined(baseUrl) || ss.isNullOrUndefined(baseUrl.authority)) {
				throw new ss.ArgumentException('A non-empty, http/https base URL is required when the provided URL is relative.');
			}
			this.scheme = baseUrl.scheme;
			protocolLength = this.scheme.length + 3;
			if (url.charCodeAt(0) === 47) {
				url = baseUrl.scheme + '://' + baseUrl.authority + url;
			}
			else {
				var lastSlash = baseUrl.absolutePath.lastIndexOf(String.fromCharCode(47));
				if (lastSlash === baseUrl.absolutePath.length - 1) {
					url = baseUrl.scheme + '://' + baseUrl.authority + baseUrl.absolutePath + url;
				}
				else {
					url = baseUrl.scheme + '://' + baseUrl.authority + $Shaman_Runtime_ValueStringExtensions.substringCached$2(baseUrl.absolutePath, 0, lastSlash + 1) + url;
				}
			}
		}
		this.absoluteUri = url;
		var slash = url.indexOf(String.fromCharCode(47), protocolLength);
		if (slash === -1) {
			this.authority = $Shaman_Runtime_ValueStringExtensions.substringCached(url, protocolLength);
			this.absolutePath = '/';
		}
		else {
			this.authority = $Shaman_Runtime_ValueStringExtensions.substringCached$2(url, protocolLength, slash - protocolLength);
			var q = url.indexOf(String.fromCharCode(63), slash);
			if (q !== -1) {
				this.query = $Shaman_Runtime_ValueStringExtensions.substringCached(url, q);
				this.absolutePath = $Shaman_Runtime_ValueStringExtensions.substringCached$2(url, slash, q - slash);
			}
			else {
				this.absolutePath = $Shaman_Runtime_ValueStringExtensions.substringCached(url, slash);
			}
		}
		var p = this.authority.indexOf(String.fromCharCode(58));
		this.host = ((p !== -1) ? $Shaman_Runtime_ValueStringExtensions.substringCached$2(this.authority, 0, p) : this.authority);
	};
	$System_Uri.$isLetterOrDigit = function(ch) {
		return ch >= 48 && ch <= 57 || ch >= 97 && ch <= 122 || ch >= 65 && ch <= 90;
	};
	$System_Uri.$escapeDataString = function(value) {
		return encodeURIComponent(value).replace(/%20/g, '+');
	};
	$System_Uri.$unescapeDataString = function(p) {
		return decodeURI(p.replace('+', ' '));
	};
	global.System.Uri = $System_Uri;
	////////////////////////////////////////////////////////////////////////////////
	// System.Diagnostics.DebuggerDisplayAttribute
	var $System_Diagnostics_DebuggerDisplayAttribute = function(text) {
	};
	$System_Diagnostics_DebuggerDisplayAttribute.__typeName = 'System.Diagnostics.DebuggerDisplayAttribute';
	global.System.Diagnostics.DebuggerDisplayAttribute = $System_Diagnostics_DebuggerDisplayAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// System.IO.StringReader
	var $System_IO_StringReader = function(text) {
		this.$data = null;
		this.$index = 0;
		$System_IO_TextReader.call(this);
		this.$data = text;
	};
	$System_IO_StringReader.__typeName = 'System.IO.StringReader';
	global.System.IO.StringReader = $System_IO_StringReader;
	////////////////////////////////////////////////////////////////////////////////
	// System.IO.StringWriter
	var $System_IO_StringWriter = function() {
		this.$sb = new $System_Text_Saltarelle_StringBuilder();
		$System_IO_TextWriter.call(this);
	};
	$System_IO_StringWriter.__typeName = 'System.IO.StringWriter';
	global.System.IO.StringWriter = $System_IO_StringWriter;
	////////////////////////////////////////////////////////////////////////////////
	// System.IO.TextReader
	var $System_IO_TextReader = function() {
	};
	$System_IO_TextReader.__typeName = 'System.IO.TextReader';
	global.System.IO.TextReader = $System_IO_TextReader;
	////////////////////////////////////////////////////////////////////////////////
	// System.IO.TextWriter
	var $System_IO_TextWriter = function() {
	};
	$System_IO_TextWriter.__typeName = 'System.IO.TextWriter';
	global.System.IO.TextWriter = $System_IO_TextWriter;
	////////////////////////////////////////////////////////////////////////////////
	// System.Text.Saltarelle.StringBuilder
	var $System_Text_Saltarelle_StringBuilder = function() {
		this.$parts = [];
		this.$length = 0;
	};
	$System_Text_Saltarelle_StringBuilder.__typeName = 'System.Text.Saltarelle.StringBuilder';
	$System_Text_Saltarelle_StringBuilder.$ctor1 = function(initialSize) {
		this.$parts = [];
		this.$length = 0;
	};
	$System_Text_Saltarelle_StringBuilder.$ctor2 = function(initialText) {
		this.$parts = [];
		this.$length = 0;
		this.append$5(initialText);
	};
	global.System.Text.Saltarelle.StringBuilder = $System_Text_Saltarelle_StringBuilder;
	////////////////////////////////////////////////////////////////////////////////
	// System.Xml._Dummy
	var $System_Xml__Dummy = function() {
	};
	$System_Xml__Dummy.__typeName = 'System.Xml._Dummy';
	global.System.Xml._Dummy = $System_Xml__Dummy;
	ss.initEnum($Shaman_$Dom_HtmlDocument$ParseState, $asm, { $text: 0, $whichTag: 1, $tag: 2, $betweenAttributes: 3, $emptyTag: 4, $attributeName: 5, $attributeBeforeEquals: 6, $attributeAfterEquals: 7, $attributeValue: 8, $comment: 9, $quotedAttributeValue: 10, $pcData: 11 });
	ss.initEnum($Shaman_$Dom_HtmlEntity$ParseState, $asm, { $text: 0, $entityStart: 1 });
	ss.initClass($Shaman_$Dom_HtmlNode$DescendantsEnumerable, $asm, {
		getEnumerator: function() {
			return new $Shaman_$Dom_HtmlNode$DescendantsEnumerator(this);
		}
	}, null, [ss.IEnumerable, ss.IEnumerable]);
	ss.initClass($Shaman_$Dom_HtmlNode$DescendantsEnumerator, $asm, {
		current: function() {
			return this.$current;
		},
		dispose: function() {
			this.$stack = null;
			this.$childCounts = null;
			this.$current = null;
			this.$baseNode = null;
		},
		moveNext: function() {
			if (this.$yieldSelf) {
				this.$yieldSelf = false;
				if (ss.isNullOrUndefined(this.$nameFilter) || ss.referenceEquals(this.$baseNode.get_tagName(), this.$nameFilter)) {
					this.$current = this.$baseNode;
					return true;
				}
			}
			while (this.$stackSize !== 0) {
				var array = this.$stack[this.$stackSize - 1];
				var num = this.$positions[this.$stackSize - 1];
				var num2 = this.$childCounts[this.$stackSize - 1];
				if (typeof(num) === 'undefined') {
					num = 0;
				}
				if (typeof(num2) === 'undefined') {
					num2 = 0;
				}
				if (ss.isNullOrUndefined(array) || num === num2) {
					this.$stackSize--;
				}
				else {
					var htmlNode = array[num];
					this.$stack[this.$stackSize] = htmlNode.$_childNodesArray;
					this.$childCounts[this.$stackSize] = htmlNode.$_childNodesCount;
					this.$positions[this.$stackSize] = 0;
					var num3 = this.$positions[this.$stackSize - 1];
					if (typeof(num3) === 'undefined') {
						num3 = 0;
					}
					num3++;
					this.$positions[this.$stackSize - 1] = num3;
					this.$stackSize++;
					if (ss.isNullOrUndefined(this.$nameFilter) || ss.referenceEquals(this.$nameFilter, htmlNode.get_tagName())) {
						this.$current = htmlNode;
						return true;
					}
				}
			}
			return false;
		},
		reset: function() {
			throw new ss.NotSupportedException();
		}
	}, null, [ss.IDisposable, ss.IEnumerator, ss.IEnumerator]);
	ss.initEnum($Shaman_Dom_$AttributeValueQuote, $asm, { $doubleQuote: 0, $singleQuote: 1 });
	ss.initClass($Shaman_Dom_HtmlAttribute, $asm, {
		get_name: function() {
			if (ss.isNullOrUndefined(this.$_name)) {
				return null;
			}
			if ((this.$_quoteType & 2) !== 0) {
				return $Shaman_Runtime_ValueStringExtensions.toLowerFast(this.$_name);
			}
			return this.$_name;
		},
		get_originalName: function() {
			return this.$_name;
		},
		get_$quoteType: function() {
			return this.$_quoteType & 1;
		},
		get_value: function() {
			return ss.coalesce(this.$_value, '');
		},
		set_value: function(value) {
			this.$_value = value;
		},
		get_$xmlName: function() {
			return $Shaman_Dom_HtmlDocument.getXmlName(this.get_name());
		},
		get_$xmlValue: function() {
			return this.get_value();
		}
	});
	ss.initClass($Shaman_Dom_HtmlAttributeCollection, $asm, {
		get_item: function(name) {
			if (ss.isNullOrUndefined(name)) {
				throw new ss.ArgumentNullException('name');
			}
			var b = $Shaman_Runtime_ValueStringExtensions.toLowerFast(name);
			var attributeArray = this.$_ownernode.$_attributeArray;
			var attributeCount = this.$_ownernode.$_attributeCount;
			for (var i = 0; i < attributeCount; i++) {
				var result = attributeArray[i];
				if (ss.referenceEquals(result.get_name(), b)) {
					return result;
				}
			}
			return $Shaman_Dom_HtmlAttribute.none;
		},
		set_item: function(name, value) {
			this.addInternal(value);
		},
		get_count: function() {
			return this.$_ownernode.$_attributeCount;
		},
		getEnumerator$1: function() {
			var $t1 = new $Shaman_Dom_HtmlAttributeCollection$Enumerator();
			$t1.$parent = this.$_ownernode;
			$t1.$index = -1;
			return $t1;
		},
		getEnumerator: function() {
			return this.getEnumerator$1();
		},
		add: function(newAttribute) {
			this.addInternal(newAttribute);
		},
		addInternal: function(newAttribute) {
			var num = this.$getAttributeIndex$1(newAttribute.get_name());
			if (num !== -1) {
				this.$_ownernode.$_attributeArray[num] = newAttribute;
				return num;
			}
			var array = this.$_ownernode.$_attributeArray;
			var attributeCount = this.$_ownernode.$_attributeCount;
			if (ss.isNullOrUndefined(array)) {
				array = new Array(4);
				this.$_ownernode.$_attributeArray = array;
			}
			else if (attributeCount === array.length) {
				var array2 = new Array(array.length * 2);
				for (var i = 0; i < attributeCount; i++) {
					array2[i] = array[i];
				}
				this.$_ownernode.$_attributeCount = attributeCount;
				this.$_ownernode.$_attributeArray = array2;
				array = array2;
			}
			num = this.$_ownernode.$_attributeCount;
			array[num] = newAttribute;
			var expr_D7 = this.$_ownernode;
			expr_D7.$_attributeCount += 1;
			return num;
		},
		add$1: function(name, value) {
			var newAttribute = this.$_ownernode.$_ownerdocument.createAttribute$1(name, value);
			this.addInternal(newAttribute);
		},
		remove: function(attribute) {
			var attributeIndex = this.$getAttributeIndex(attribute);
			if (attributeIndex === -1) {
				this.$removeAt(attributeIndex);
			}
		},
		$removeAt: function(index) {
			var attributeArray = this.$_ownernode.$_attributeArray;
			var expr_14 = this.$_ownernode;
			var b = expr_14.$_attributeCount -= 1;
			for (var i = index; i < b; i++) {
				attributeArray[i] = attributeArray[i + 1];
			}
			attributeArray[b] = null;
		},
		$getAttributeIndex: function(attribute) {
			var attributeArray = this.$_ownernode.$_attributeArray;
			if (ss.isNullOrUndefined(attributeArray)) {
				return -1;
			}
			for (var i = 0; i < this.$_ownernode.$_attributeCount; i++) {
				if (ss.referenceEquals(attributeArray[i].get_originalName(), attribute.get_originalName())) {
					return i;
				}
			}
			return -1;
		},
		$getAttributeIndex$1: function(name) {
			var attributeArray = this.$_ownernode.$_attributeArray;
			if (ss.isNullOrUndefined(attributeArray)) {
				return -1;
			}
			for (var i = 0; i < this.$_ownernode.$_attributeCount; i++) {
				if (attributeArray[i].get_originalName().length === name.length && ss.referenceEquals(attributeArray[i].get_name(), name)) {
					return i;
				}
			}
			return -1;
		},
		remove$1: function(name) {
			if (ss.isNullOrUndefined(name)) {
				throw new ss.ArgumentNullException('name');
			}
			var b = $Shaman_Runtime_ValueStringExtensions.toLowerFast(name);
			var attributeCount = this.$_ownernode.$_attributeCount;
			var attributeArray = this.$_ownernode.$_attributeArray;
			for (var i = 0; i < attributeCount; i++) {
				var htmlAttribute = attributeArray[i];
				if (ss.referenceEquals(htmlAttribute.get_name(), b)) {
					this.$removeAt(i);
					return;
				}
			}
		}
	}, null, [ss.IEnumerable, ss.IEnumerable]);
	ss.initClass($Shaman_Dom_HtmlAttributeCollection$Enumerator, $asm, {
		current: function() {
			return this.$parent.$_attributeArray[this.$index];
		},
		dispose: function() {
		},
		moveNext: function() {
			this.$index++;
			return this.$index < this.$parent.$_attributeCount;
		},
		reset: function() {
			throw new ss.NotSupportedException();
		}
	}, null, [ss.IDisposable, ss.IEnumerator, ss.IEnumerator]);
	ss.initClass($Shaman_Dom_HtmlNode, $asm, {
		get_childNodes: function() {
			return this.$_childNodes || (this.$_childNodes = new $Shaman_Dom_HtmlNodeCollection(this));
		},
		get_attributes: function() {
			return this.$_attributes || (this.$_attributes = new $Shaman_Dom_HtmlAttributeCollection(this));
		},
		get_nodeId: function() {
			return this.$_nodeId;
		},
		set_nodeId: function(value) {
			this.$_nodeId = value;
		},
		get_closed: function() {
			return this.$_closed;
		},
		get_firstChild: function() {
			if (this.get_hasChildNodes()) {
				return this.get_childNodes().get_item(0);
			}
			return null;
		},
		get_hasAttributes: function() {
			return this.$_attributeCount !== 0;
		},
		get_hasChildNodes: function() {
			return this.get_childNodes().get_count() > 0;
		},
		get_id: function() {
			return this.getAttributeValue('id');
		},
		set_id: function(value) {
			this.setAttributeValue('id', value);
		},
		get_innerHtml: function() {
			return this.writeContentTo();
		},
		get_innerText: function() {
			if (this.$_childNodesCount === 1 && this.$_childNodesArray[0].$_nodetype === 3) {
				return ss.cast(this.$_childNodesArray[0], $Shaman_Dom_HtmlTextNode).get_text();
			}
			if (this.$_nodetype === 3) {
				return ss.cast(this, $Shaman_Dom_HtmlTextNode).get_text();
			}
			if (this.$_nodetype === 2) {
				return ss.cast(this, $Shaman_Dom_HtmlCommentNode).get_comment();
			}
			if (!this.get_hasChildNodes()) {
				return '';
			}
			var sb = new $System_Text_Saltarelle_StringBuilder();
			var $t1 = ss.getEnumerator(this.descendantsAndSelf());
			try {
				while ($t1.moveNext()) {
					var desc = $t1.current();
					if (desc.$_nodetype === 3) {
						sb.append$5(ss.cast(desc, $Shaman_Dom_HtmlTextNode).get_text());
					}
					else if (desc.$_nodetype === 2) {
						sb.append$5(ss.cast(desc, $Shaman_Dom_HtmlCommentNode).get_comment());
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return sb.toString();
		},
		get_lastChild: function() {
			if (this.get_hasChildNodes()) {
				return this.get_childNodes().get_item(this.get_childNodes().get_count() - 1);
			}
			return null;
		},
		get_tagName: function() {
			if (ss.isNullOrUndefined(this.$_lowerName)) {
				this.$_lowerName = (ss.isValue(this.$_originalName) ? $Shaman_Runtime_ValueStringExtensions.toLowerFast(this.$_originalName) : '');
			}
			return this.$_lowerName;
		},
		set_tagName: function(value) {
			this.$_originalName = value;
			this.$_lowerName = null;
		},
		get_nextSibling: function() {
			if (ss.isNullOrUndefined(this.$_parentnode)) {
				return null;
			}
			var num = this.$_index + 1;
			if (num === this.$_parentnode.$_childNodesCount) {
				return null;
			}
			return this.$_parentnode.$_childNodesArray[num];
		},
		get_nodeType: function() {
			return this.$_nodetype;
		},
		set_nodeType: function(value) {
			this.$_nodetype = value;
		},
		get_originalName: function() {
			return this.$_originalName;
		},
		get_outerHtml: function() {
			return this.writeTo();
		},
		get_ownerDocument: function() {
			return this.$_ownerdocument;
		},
		set_ownerDocument: function(value) {
			this.$_ownerdocument = value;
		},
		get_parentNode: function() {
			return this.$_parentnode;
		},
		set_parentNode: function(value) {
			this.$_parentnode = value;
		},
		get_previousSibling: function() {
			if (ss.isNullOrUndefined(this.$_parentnode)) {
				return null;
			}
			if (this.$_index === 0) {
				return null;
			}
			return this.$_parentnode.$_childNodesArray[this.$_index - 1];
		},
		get_streamPosition: function() {
			return this.$_streamposition;
		},
		get_class: function() {
			return this.getAttributeValue('class');
		},
		get_style: function() {
			return this.getAttributeValue('style');
		},
		get_classList: function() {
			var class1 = this.get_class();
			if (ss.isNullOrEmptyString(class1)) {
				return [];
			}
			return $Shaman_Dom_HtmlNode.$getClasses(class1);
		},
		$ensureCapacity: function(capacity) {
			if (capacity !== 0 && ss.isNullOrUndefined(this.$_childNodesArray)) {
				this.$_childNodesArray = [];
			}
		},
		ancestors: function() {
			return new ss.IteratorBlockEnumerable(function() {
				return (function() {
					var $result, $state = 0, node;
					return new ss.IteratorBlockEnumerator(function() {
						$sm1:
						for (;;) {
							switch ($state) {
								case 0: {
									$state = -1;
									node = this.get_parentNode();
									$state = 1;
									continue $sm1;
								}
								case 1: {
									$state = -1;
									if (!ss.isValue(node)) {
										$state = -1;
										break $sm1;
									}
									$result = node;
									$state = 2;
									return true;
								}
								case 2: {
									$state = -1;
									node = node.get_parentNode();
									$state = 1;
									continue $sm1;
								}
								default: {
									break $sm1;
								}
							}
						}
						return false;
					}, function() {
						return $result;
					}, null, this);
				}).call(this);
			}, this);
		},
		ancestors$1: function(name) {
			return new ss.IteratorBlockEnumerable(function() {
				return (function(name) {
					var $result, $state = 0, node;
					return new ss.IteratorBlockEnumerator(function() {
						$sm1:
						for (;;) {
							switch ($state) {
								case 0: {
									$state = -1;
									node = this.get_parentNode();
									$state = 1;
									continue $sm1;
								}
								case 1: {
									$state = -1;
									if (!ss.isValue(node)) {
										$state = -1;
										break $sm1;
									}
									if (ss.referenceEquals(node.get_tagName(), name)) {
										$result = node;
										$state = 2;
										return true;
									}
									$state = 2;
									continue $sm1;
								}
								case 2: {
									$state = -1;
									node = node.get_parentNode();
									$state = 1;
									continue $sm1;
								}
								default: {
									break $sm1;
								}
							}
						}
						return false;
					}, function() {
						return $result;
					}, null, this);
				}).call(this, name);
			}, this);
		},
		ancestorsAndSelf: function() {
			return new ss.IteratorBlockEnumerable(function() {
				return (function() {
					var $result, $state = 0, node;
					return new ss.IteratorBlockEnumerator(function() {
						$sm1:
						for (;;) {
							switch ($state) {
								case 0: {
									$state = -1;
									node = this;
									$state = 1;
									continue $sm1;
								}
								case 1: {
									$state = -1;
									if (!ss.isValue(node)) {
										$state = -1;
										break $sm1;
									}
									$result = node;
									$state = 2;
									return true;
								}
								case 2: {
									$state = -1;
									node = node.get_parentNode();
									$state = 1;
									continue $sm1;
								}
								default: {
									break $sm1;
								}
							}
						}
						return false;
					}, function() {
						return $result;
					}, null, this);
				}).call(this);
			}, this);
		},
		ancestorsAndSelf$1: function(name) {
			return new ss.IteratorBlockEnumerable(function() {
				return (function(name) {
					var $result, $state = 0, node;
					return new ss.IteratorBlockEnumerator(function() {
						$sm1:
						for (;;) {
							switch ($state) {
								case 0: {
									$state = -1;
									node = this;
									$state = 1;
									continue $sm1;
								}
								case 1: {
									$state = -1;
									if (!ss.isValue(node)) {
										$state = -1;
										break $sm1;
									}
									if (ss.referenceEquals(node.get_tagName(), name)) {
										$result = node;
										$state = 2;
										return true;
									}
									$state = 2;
									continue $sm1;
								}
								case 2: {
									$state = -1;
									node = node.get_parentNode();
									$state = 1;
									continue $sm1;
								}
								default: {
									break $sm1;
								}
							}
						}
						return false;
					}, function() {
						return $result;
					}, null, this);
				}).call(this, name);
			}, this);
		},
		appendChild: function(newChild) {
			if (ss.isNullOrUndefined(newChild)) {
				throw new ss.ArgumentNullException('newChild');
			}
			this.get_childNodes().append(newChild);
			return newChild;
		},
		descendants: function() {
			return new $Shaman_$Dom_HtmlNode$DescendantsEnumerable(this, false, null);
		},
		descendants$1: function(name) {
			return new $Shaman_$Dom_HtmlNode$DescendantsEnumerable(this, false, name);
		},
		descendantsAndSelf: function() {
			return new $Shaman_$Dom_HtmlNode$DescendantsEnumerable(this, true, null);
		},
		descendantsAndSelf$1: function(name) {
			return new $Shaman_$Dom_HtmlNode$DescendantsEnumerable(this, true, name);
		},
		getAttributeValue: function(name) {
			if (ss.isNullOrUndefined(name)) {
				throw new ss.ArgumentNullException('name');
			}
			if (!this.get_hasAttributes()) {
				return null;
			}
			var attributeIndex = this.get_attributes().$getAttributeIndex$1(name);
			if (attributeIndex === -1) {
				return null;
			}
			return this.$_attributeArray[attributeIndex].get_value();
		},
		insertAfter: function(newChild, refChild) {
			if (ss.isNullOrUndefined(newChild)) {
				throw new ss.ArgumentNullException('newChild');
			}
			if (ss.isNullOrUndefined(refChild)) {
				return this.prependChild(newChild);
			}
			if (ss.referenceEquals(newChild, refChild)) {
				return newChild;
			}
			var num = this.get_childNodes().get_item$1(refChild);
			if (num === -1) {
				throw new ss.ArgumentException($Shaman_Dom_HtmlDocument.$htmlExceptionRefNotChild);
			}
			this.get_childNodes().insert(num + 1, newChild);
			return newChild;
		},
		insertBefore: function(newChild, refChild) {
			if (ss.isNullOrUndefined(newChild)) {
				throw new ss.ArgumentNullException('newChild');
			}
			if (ss.isNullOrUndefined(refChild)) {
				return this.appendChild(newChild);
			}
			if (ss.referenceEquals(newChild, refChild)) {
				return newChild;
			}
			var num = this.get_childNodes().get_item$1(refChild);
			if (num === -1) {
				throw new ss.ArgumentException($Shaman_Dom_HtmlDocument.$htmlExceptionRefNotChild);
			}
			this.get_childNodes().insert(num, newChild);
			return newChild;
		},
		prependChild: function(newChild) {
			if (ss.isNullOrUndefined(newChild)) {
				throw new ss.ArgumentNullException('newChild');
			}
			this.get_childNodes().prepend(newChild);
			return newChild;
		},
		prependChildren: function(newChildren) {
			var $t1 = newChildren.getEnumerator$1();
			try {
				while ($t1.moveNext()) {
					var current = $t1.current();
					this.prependChild(current);
				}
			}
			finally {
				$t1.dispose();
			}
		},
		remove: function() {
			if (ss.isValue(this.get_parentNode())) {
				this.get_parentNode().get_childNodes().remove(this);
			}
		},
		removeAllChildren: function() {
			if (!this.get_hasChildNodes()) {
				return;
			}
			this.get_childNodes().clear();
		},
		removeChild: function(oldChild) {
			if (ss.isNullOrUndefined(oldChild)) {
				throw new ss.ArgumentNullException('oldChild');
			}
			var num = this.get_childNodes().get_item$1(oldChild);
			if (num === -1) {
				throw new ss.ArgumentException($Shaman_Dom_HtmlDocument.$htmlExceptionRefNotChild);
			}
			this.get_childNodes().remove$1(num);
			return oldChild;
		},
		removeChild$1: function(oldChild, keepGrandChildren) {
			if (ss.isNullOrUndefined(oldChild)) {
				throw new ss.ArgumentNullException('oldChild');
			}
			if (keepGrandChildren) {
				var previousSibling = oldChild.get_previousSibling();
				var $t1 = oldChild.get_childNodes().getEnumerator$1();
				try {
					while ($t1.moveNext()) {
						var current = $t1.current();
						this.insertAfter(current, previousSibling);
					}
				}
				finally {
					$t1.dispose();
				}
			}
			this.removeChild(oldChild);
			return oldChild;
		},
		replaceChild: function(newChild, oldChild) {
			if (ss.isNullOrUndefined(newChild)) {
				return this.removeChild(oldChild);
			}
			if (ss.isNullOrUndefined(oldChild)) {
				return this.appendChild(newChild);
			}
			var num = this.get_childNodes().get_item$1(oldChild);
			if (num === -1) {
				throw new ss.ArgumentException($Shaman_Dom_HtmlDocument.$htmlExceptionRefNotChild);
			}
			this.get_childNodes().replace(num, newChild);
			return newChild;
		},
		setAttributeValue: function(name, value) {
			if (ss.isNullOrUndefined(name)) {
				throw new ss.ArgumentNullException('name');
			}
			var attributeIndex = this.get_attributes().$getAttributeIndex$1(name);
			if (attributeIndex === -1 && ss.isNullOrUndefined(value)) {
				return;
			}
			if (attributeIndex === -1) {
				this.get_attributes().addInternal(this.$_ownerdocument.createAttribute$1(name, value));
				return;
			}
			if (ss.isNullOrUndefined(value)) {
				this.get_attributes().$removeAt(attributeIndex);
				return;
			}
			this.$_attributeArray[attributeIndex].set_value(value);
		},
		writeContentTo$1: function(outText) {
			var $t1 = this.get_childNodes().getEnumerator$1();
			try {
				while ($t1.moveNext()) {
					var current = $t1.current();
					current.writeTo$1(outText);
				}
			}
			finally {
				$t1.dispose();
			}
		},
		writeContentTo: function() {
			var stringWriter = new $System_IO_StringWriter();
			this.writeContentTo$1(stringWriter);
			return stringWriter.toString();
		},
		writeTo$1: function(outText) {
			this.$writeTo(outText, false);
		},
		$writeTo: function(outText, writeDocumentNode) {
			switch (this.$_nodetype) {
				case 0: {
					if (this.$_ownerdocument.optionOutputAsXml) {
						outText.write$3('<?xml version="1.0"?>');
						if (this.$_ownerdocument.get_documentNode().get_hasChildNodes()) {
							var num = this.$_ownerdocument.get_documentNode().get_childNodes().get_count();
							if (num > 0) {
								var xmlDeclaration = this.$_ownerdocument.$getXmlDeclaration();
								if (ss.isValue(xmlDeclaration)) {
									num--;
								}
								if (num > 1) {
									if (this.$_ownerdocument.$optionOutputUpperCase) {
										outText.write$3('<SPAN>');
										this.writeContentTo$1(outText);
										outText.write$3('</SPAN>');
										return;
									}
									outText.write$3('<span>');
									this.writeContentTo$1(outText);
									outText.write$3('</span>');
									return;
								}
							}
						}
					}
					if (writeDocumentNode) {
						outText.write$3('<?document');
						this.$writeAttributes(outText, false);
						outText.write$3('?>');
					}
					this.writeContentTo$1(outText);
					return;
				}
				case 1: {
					var text = (this.$_ownerdocument.$optionOutputUpperCase ? this.get_tagName().toUpperCase() : this.get_tagName());
					if (this.$_ownerdocument.$optionOutputOriginalCase) {
						text = this.get_originalName();
					}
					if (this.$_ownerdocument.optionOutputAsXml) {
						if (text.length <= 0) {
							break;
						}
						if (text.charCodeAt(0) === 63) {
							return;
						}
						if (text.trim().length === 0) {
							return;
						}
						text = $Shaman_Dom_HtmlDocument.getXmlName(text);
					}
					outText.write$3('<' + text);
					this.$writeAttributes(outText, false);
					if (this.get_hasChildNodes()) {
						outText.write$3('>');
						var flag = false;
						if (this.$_ownerdocument.optionOutputAsXml && $Shaman_Dom_HtmlNode.isCDataElement(this.get_tagName())) {
							flag = true;
							outText.write$3('\r\n//<![CDATA[\r\n');
						}
						if (flag) {
							if (this.get_hasChildNodes()) {
								this.get_childNodes().get_item(0).writeTo$1(outText);
							}
							outText.write$3('\r\n//]]>//\r\n');
						}
						else {
							this.writeContentTo$1(outText);
						}
						outText.write$3('</' + text);
						if (!this.$_ownerdocument.optionOutputAsXml) {
							this.$writeAttributes(outText, true);
						}
						outText.write$3('>');
						return;
					}
					if ($Shaman_Dom_HtmlNode.isEmptyElement(this.get_tagName())) {
						if (this.$_ownerdocument.$optionWriteEmptyNodes || this.$_ownerdocument.optionOutputAsXml) {
							outText.write$3(' />');
							return;
						}
						if (this.get_tagName().length > 0 && this.get_tagName().charCodeAt(0) === 63) {
							outText.write$3('?');
						}
						outText.write$3('>');
						return;
					}
					else {
						outText.write$3('></' + text + '>');
					}
					break;
				}
				case 2: {
					var text2 = ss.cast(this, $Shaman_Dom_HtmlCommentNode).get_comment();
					if (this.$_ownerdocument.optionOutputAsXml) {
						outText.write$3('<!--' + $Shaman_Dom_HtmlNode.$getXmlComment(ss.cast(this, $Shaman_Dom_HtmlCommentNode)) + ' -->');
						return;
					}
					outText.write$3(text2);
					return;
				}
				case 3: {
					var htmlTextNode = ss.cast(this, $Shaman_Dom_HtmlTextNode);
					var text21 = htmlTextNode.get_text();
					if (!htmlTextNode.get_isPcData()) {
						outText.write$3($Shaman_Dom_HtmlEntity.entitize(text21));
						return;
					}
					var optionOutputAsXml = this.$_ownerdocument.optionOutputAsXml;
					if (optionOutputAsXml) {
						outText.write$3('<![CDATA[');
					}
					outText.write$3(htmlTextNode.get_text());
					if (optionOutputAsXml) {
						outText.write$3(']]>');
						return;
					}
					break;
				}
				default: {
					return;
				}
			}
		},
		writeTo: function() {
			var result;
			{
				var stringWriter = new $System_IO_StringWriter();
				try {
					this.writeTo$1(stringWriter);
					void(0);
					result = stringWriter.toString();
				}
				finally {
					if (ss.isValue(stringWriter)) {
						stringWriter.dispose();
					}
				}
			}
			return result;
		},
		$closeNode: function(endnode) {
			if (!this.$_ownerdocument.$optionAutoCloseOnEnd) {
				var $t1 = this.get_childNodes().getEnumerator$1();
				try {
					while ($t1.moveNext()) {
						var current = $t1.current();
						if (!current.get_closed()) {
							current.$closeNode(null);
						}
					}
				}
				finally {
					$t1.dispose();
				}
			}
			if (!this.get_closed()) {
				this.$_closed = true;
				if (ss.isValue(this.$_ownerdocument.$openednodes)) {
					delete this.$_ownerdocument.$openednodes[this.$_outerstartindex];
				}
				var htmlNode = $Shaman_Runtime_$Utilities.$tryGetValue$1(String, $Shaman_Dom_HtmlNode).call(null, this.$_ownerdocument.$lastnodes, this.get_tagName());
				if (ss.referenceEquals(htmlNode, this)) {
					delete this.$_ownerdocument.$lastnodes[this.get_tagName()];
					this.$_ownerdocument.$updateLastParentNode();
				}
				if (ss.isNullOrUndefined(endnode) || ss.referenceEquals(endnode, this)) {
					return;
				}
				this.$_outerlength = endnode.$_outerstartindex + endnode.$_outerlength - this.$_outerstartindex;
			}
		},
		hasClass: function(class1) {
			var attributeValue = this.getAttributeValue('class');
			if (ss.isNullOrEmptyString(attributeValue)) {
				return false;
			}
			// avoids infinite loop later
			if (class1.length === 0) {
				return false;
			}
			var idx = 0;
			while (true) {
				idx = attributeValue.indexOf(class1, idx);
				if (idx === -1) {
					return false;
				}
				var before = attributeValue.charCodeAt(idx - 1);
				var after = attributeValue.charCodeAt(idx + class1.length);
				if ((before === 32 || isNaN(before)) && (after === 32 || isNaN(after))) {
					return true;
				}
				idx += class1.length;
			}
		},
		$writeAttribute: function(outText, att) {
			var text = ((att.get_$quoteType() === 0) ? '"' : "'");
			var text2;
			if (this.$_ownerdocument.optionOutputAsXml) {
				text2 = (this.$_ownerdocument.$optionOutputUpperCase ? att.get_$xmlName().toUpperCase() : att.get_$xmlName());
				if (this.$_ownerdocument.$optionOutputOriginalCase) {
					text2 = att.get_originalName();
				}
				outText.write$3([' ', text2, '=', text, $Shaman_Dom_HtmlEntity.entitize(att.get_$xmlValue()), text].join(''));
				return;
			}
			text2 = (this.$_ownerdocument.$optionOutputUpperCase ? att.get_name().toUpperCase() : (this.get_ownerDocument().$optionOutputOriginalCase ? att.get_originalName() : att.get_name()));
			if (!this.$_ownerdocument.$optionOutputOptimizeAttributeValues) {
				outText.write$3([' ', text2, '=', text, att.get_value(), text].join(''));
				return;
			}
			if (ss.indexOfAnyString(att.get_value(), [10, 13, 9, 32]) < 0) {
				outText.write$3(' ' + text2 + '=' + att.get_value());
				return;
			}
			outText.write$3([' ', text2, '=', text, att.get_value(), text].join(''));
		},
		$writeAttributes: function(outText, closing) {
			if (this.$_ownerdocument.optionOutputAsXml) {
				var $t1 = this.get_attributes().getEnumerator$1();
				try {
					while ($t1.moveNext()) {
						var current = $t1.current();
						this.$writeAttribute(outText, current);
					}
				}
				finally {
					$t1.dispose();
				}
				return;
			}
			if (!closing) {
				if (this.$_attributeCount !== 0) {
					var $t2 = this.get_attributes().getEnumerator$1();
					try {
						while ($t2.moveNext()) {
							var current2 = $t2.current();
							this.$writeAttribute(outText, current2);
						}
					}
					finally {
						$t2.dispose();
					}
				}
				if (!this.$_ownerdocument.$optionAddDebuggingAttributes) {
					return;
				}
				this.$writeAttribute(outText, this.$_ownerdocument.createAttribute$1('_closed', this.get_closed().toString()));
				this.$writeAttribute(outText, this.$_ownerdocument.createAttribute$1('_children', this.get_childNodes().get_count().toString()));
				var num = 0;
				var $t3 = this.get_childNodes().getEnumerator$1();
				try {
					while ($t3.moveNext()) {
						var current3 = $t3.current();
						this.$writeAttribute(outText, this.$_ownerdocument.createAttribute$1('_child_' + num, current3.get_tagName()));
						num++;
					}
				}
				finally {
					$t3.dispose();
				}
			}
		}
	});
	ss.initClass($Shaman_Dom_HtmlCommentNode, $asm, {
		get_comment: function() {
			return ss.coalesce(this.$_comment, '');
		},
		set_comment: function(value) {
			this.$_comment = value;
		}
	}, $Shaman_Dom_HtmlNode);
	ss.initClass($Shaman_Dom_HtmlDocument, $asm, {
		get_tag: function() {
			return this.$1$TagField;
		},
		set_tag: function(value) {
			this.$1$TagField = value;
		},
		get_documentNode: function() {
			return this.$_documentnode;
		},
		createAttribute: function(name) {
			if (ss.isNullOrUndefined(name)) {
				throw new ss.ArgumentNullException('name');
			}
			var result = this.$createAttribute();
			for (var i = 0; i < name.length; i++) {
				var c = name.charCodeAt(i);
				if (c >= 65 && c <= 90) {
					result.$_quoteType |= 2;
					break;
				}
			}
			result.$_name = name;
			return result;
		},
		createAttribute$1: function(name, value) {
			if (ss.isNullOrUndefined(name)) {
				throw new ss.ArgumentNullException('name');
			}
			var result = this.createAttribute(name);
			result.set_value(value);
			return result;
		},
		createComment: function() {
			return ss.cast(this.$createNode(2), $Shaman_Dom_HtmlCommentNode);
		},
		createComment$1: function(comment) {
			if (ss.isNullOrUndefined(comment)) {
				throw new ss.ArgumentNullException('comment');
			}
			var htmlCommentNode = this.createComment();
			htmlCommentNode.set_comment(comment);
			return htmlCommentNode;
		},
		createElement: function(name) {
			if (ss.isNullOrUndefined(name)) {
				throw new ss.ArgumentNullException('name');
			}
			var htmlNode = this.$createNode(1);
			htmlNode.set_tagName(name);
			return htmlNode;
		},
		createTextNode: function() {
			return ss.cast(this.$createNode(3), $Shaman_Dom_HtmlTextNode);
		},
		createTextNode$1: function(text) {
			if (ss.isNullOrUndefined(text)) {
				throw new ss.ArgumentNullException('text');
			}
			var htmlTextNode = this.createTextNode();
			htmlTextNode.set_text(text);
			return htmlTextNode;
		},
		$load: function(lazy) {
			if (this.$optionCheckSyntax) {
				this.$openednodes = {};
			}
			else {
				this.$openednodes = null;
			}
			this.$text = lazy;
			this.$_documentnode = this.$createNode$1(0, 0);
			try {
				this.$parse();
			}
			finally {
				this.$text = null;
			}
			if (!this.$optionCheckSyntax || ss.isNullOrUndefined(this.$openednodes)) {
				return;
			}
			var $t1 = new ss.ObjectEnumerator(this.$openednodes);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					var current = item.value;
					if (current.$_starttag) {
						if (this.$optionExtractErrorSourceText) {
							var text = current.get_outerHtml();
							if (text.length > this.$optionExtractErrorSourceTextMaxLength) {
								text = $Shaman_Runtime_ValueStringExtensions.substringCached$2(text, 0, this.$optionExtractErrorSourceTextMaxLength);
							}
						}
					}
				}
			}
			finally {
				$t1.dispose();
			}
			this.$attributesScratchpad = null;
			this.$openednodes = null;
		},
		loadHtml: function(html) {
			if (ss.isNullOrUndefined(html)) {
				throw new ss.ArgumentNullException('html');
			}
			this.$load(html);
		},
		save: function(writer) {
			if (ss.isNullOrUndefined(writer)) {
				throw new ss.ArgumentNullException('writer');
			}
			this.get_documentNode().writeTo$1(writer);
		},
		$createAttribute: function() {
			return new $Shaman_Dom_HtmlAttribute();
		},
		$createNode: function(type) {
			return this.$createNode$1(type, -1);
		},
		$createNode$1: function(type, index) {
			switch (type) {
				case 2: {
					return new $Shaman_Dom_HtmlCommentNode(this, index);
				}
				case 3: {
					return new $Shaman_Dom_HtmlTextNode(this, index);
				}
				default: {
					return new $Shaman_Dom_HtmlNode(type, this, index);
				}
			}
		},
		$getXmlDeclaration: function() {
			if (!this.$_documentnode.get_hasChildNodes()) {
				return null;
			}
			var $t1 = this.$_documentnode.get_childNodes().getEnumerator$1();
			try {
				while ($t1.moveNext()) {
					var current = $t1.current();
					if (current.get_tagName() === '?xml') {
						return current;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return null;
		},
		$updateLastParentNode: function() {
			do {
				if (this.$_lastparentnode.get_closed()) {
					this.$_lastparentnode = this.$_lastparentnode.get_parentNode();
				}
			} while (ss.isValue(this.$_lastparentnode) && this.$_lastparentnode.get_closed());
			if (ss.isNullOrUndefined(this.$_lastparentnode)) {
				this.$_lastparentnode = this.$_documentnode;
			}
		},
		$closeCurrentNode: function() {
			if (this.$_currentnode.get_closed()) {
				return;
			}
			var flag = false;
			var htmlNode = $Shaman_Runtime_$Utilities.$tryGetValue$1(String, $Shaman_Dom_HtmlNode).call(null, this.$lastnodes, this.$_currentnode.get_tagName());
			if (ss.isNullOrUndefined(htmlNode)) {
				if (this.$_isHtml && $Shaman_Dom_HtmlNode.isClosedElement(this.$_currentnode.get_tagName())) {
					this.$_currentnode.$closeNode(this.$_currentnode);
					if (ss.isValue(this.$_lastparentnode)) {
						var htmlNode2 = null;
						var stack = new Array();
						for (var htmlNode3 = this.$_lastparentnode.get_lastChild(); ss.isValue(htmlNode3); htmlNode3 = htmlNode3.get_previousSibling()) {
							if (ss.referenceEquals(htmlNode3.get_tagName(), this.$_currentnode.get_tagName()) && !htmlNode3.get_hasChildNodes()) {
								htmlNode2 = htmlNode3;
								break;
							}
							stack.push(htmlNode3);
						}
						if (ss.isValue(htmlNode2)) {
							while (stack.length !== 0) {
								var htmlNode4 = stack.pop();
								this.$_lastparentnode.removeChild(htmlNode4);
								htmlNode2.appendChild(htmlNode4);
							}
						}
						else {
							this.$_lastparentnode.appendChild(this.$_currentnode);
						}
					}
				}
				else if (!this.$_isHtml || !$Shaman_Dom_HtmlNode.isEmptyElement(this.$_currentnode.get_tagName())) {
					flag = true;
				}
			}
			else {
				if (this.$optionFixNestedTags && this.$findResetterNodes(htmlNode, this.$getResetters(this.$_currentnode.get_tagName()))) {
					flag = true;
				}
				if (!flag) {
					this.$lastnodes[this.$_currentnode.get_tagName()] = htmlNode.$_prevwithsamename;
					htmlNode.$closeNode(this.$_currentnode);
				}
			}
			if (!flag && ss.isValue(this.$_lastparentnode) && (!this.$_isHtml || !$Shaman_Dom_HtmlNode.isClosedElement(this.$_currentnode.get_tagName()) || this.$_currentnode.$_starttag)) {
				this.$updateLastParentNode();
			}
		},
		$decrementPosition: function() {
			this.$_index--;
			if (this.$_lineposition === 1) {
				this.$_lineposition = this.$_maxlineposition;
				this.$_line--;
				return;
			}
			this.$_lineposition--;
		},
		$findResetterNode: function(node, name) {
			var htmlNode = $Shaman_Runtime_$Utilities.$tryGetValue$1(String, $Shaman_Dom_HtmlNode).call(null, this.$lastnodes, name);
			if (ss.isNullOrUndefined(htmlNode)) {
				return null;
			}
			if (htmlNode.get_closed()) {
				return null;
			}
			if (htmlNode.$_streamposition >= node.$_streamposition) {
				return htmlNode;
			}
			return null;
		},
		$findResetterNodes: function(node, names) {
			if (ss.isNullOrUndefined(names)) {
				return false;
			}
			for (var i = 0; i < names.length; i++) {
				if (ss.isValue(this.$findResetterNode(node, names[i]))) {
					return true;
				}
			}
			return false;
		},
		$fixNestedTag: function(name, resetters) {
			if (ss.isNullOrUndefined(resetters)) {
				return;
			}
			var htmlNode = $Shaman_Runtime_$Utilities.$tryGetValue$1(String, $Shaman_Dom_HtmlNode).call(null, this.$lastnodes, this.$_currentnode.get_tagName());
			if (ss.isNullOrUndefined(htmlNode) || htmlNode.get_closed()) {
				return;
			}
			//#if SALTARELLE
			//            foreach (var item in this.Lastnodes)
			//            {
			//                var current = item.Value;
			//#else
			//            foreach (HtmlNode current in this.Lastnodes.Values)
			//            {
			//#endif
			//                if (current != null && current._outerstartindex > htmlNode._outerstartindex)
			//				{
			//					return;
			//				}
			//			}
			if (!this.$findResetterNodes(htmlNode, resetters)) {
				htmlNode.$closeNode(null);
				return;
			}
		},
		$fixNestedTags: function() {
			if (!this.$_currentnode.$_starttag) {
				return;
			}
			var tagName = this.$_currentnode.get_tagName();
			this.$fixNestedTag(tagName, this.$getResetters(tagName));
		},
		$getResetters: function(name) {
			switch (name) {
				case 'li': {
					return $Shaman_Dom_HtmlDocument.$liResetters;
				}
				case 'option': {
					return $Shaman_Dom_HtmlDocument.$optionResetters;
				}
				case 'tr': {
					return $Shaman_Dom_HtmlDocument.$trResetters;
				}
				case 'p': {
					return $Shaman_Dom_HtmlDocument.$pResetters;
				}
				case 'th':
				case 'td': {
					return $Shaman_Dom_HtmlDocument.$thTdResetters;
				}
			}
			return null;
		},
		$incrementPosition: function() {
			this.$_index++;
			this.$_maxlineposition = this.$_lineposition;
			if (this.$_c === 10) {
				this.$_lineposition = 1;
				this.$_line++;
				return;
			}
			this.$_lineposition++;
		},
		$newCheck: function(nextIsLetter) {
			if (this.$_c !== 60 || !nextIsLetter) {
				return false;
			}
			if (!this.$pushNodeEnd(this.$_index - 1, true)) {
				this.$_index = -1;
				return true;
			}
			this.$_state = 1;
			if ($Shaman_Runtime_$Utilities.$containsIndex(this.$text, this.$_index - 1 + 2 - 1) && this.$text.charCodeAt(this.$_index) === 33) {
				this.$_state = 9;
				this.$_fullcomment = false;
				this.$_pcdata = false;
				if ($Shaman_Runtime_$Utilities.$containsIndex(this.$text, this.$_index + 2)) {
					if (this.$text.charCodeAt(this.$_index + 1) === 45 && this.$text.charCodeAt(this.$_index + 2) === 45) {
						this.$_fullcomment = true;
					}
					else if ($Shaman_Runtime_$Utilities.$containsIndex(this.$text, this.$_index + 7) && this.$text.charCodeAt(this.$_index + 1) === 91 && this.$text.charCodeAt(this.$_index + 2) === 67 && this.$text.charCodeAt(this.$_index + 3) === 68 && this.$text.charCodeAt(this.$_index + 4) === 65 && this.$text.charCodeAt(this.$_index + 5) === 84 && this.$text.charCodeAt(this.$_index + 6) === 65 && this.$text.charCodeAt(this.$_index + 7) === 91) {
						this.$_pcdata = true;
					}
				}
				this.$pushNodeStart((this.$_pcdata ? 3 : 2), this.$_index - 1);
				this.$pushNodeNameStart(true, this.$_index);
				this.$pushNodeNameEnd(this.$_index + 1);
				return true;
			}
			this.$pushNodeStart(1, this.$_index - 1);
			return true;
		},
		$parse: function() {
			var num = 0;
			this.$lastnodes = {};
			this.$_c = 0;
			this.$_fullcomment = false;
			this.$_line = 1;
			this.$_lineposition = 1;
			this.$_maxlineposition = 1;
			this.$_state = 0;
			this.$_oldstate = this.$_state;
			this.$_documentnode.$_outerlength = 195948557;
			this.$_lastparentnode = this.$_documentnode;
			this.$_currentnode = this.$createNode$1(3, 0);
			this.$_index = 0;
			this.$pushNodeStart(3, 0);
			while (this.$_index !== -1 && $Shaman_Runtime_$Utilities.$containsIndex(this.$text, this.$_index)) {
				this.$_c = this.$text.charCodeAt(this.$_index);
				var nextIsLetter = false;
				if ($Shaman_Runtime_$Utilities.$containsIndex(this.$text, this.$_index + 1)) {
					var c = this.$text.charCodeAt(this.$_index + 1);
					nextIsLetter = c === 47 || c === 33 || c === 63 || this.$isLetter(c);
				}
				this.$incrementPosition();
				switch (this.$_state) {
					case 0: {
						if (this.$newCheck(nextIsLetter)) {
						}
						break;
					}
					case 1: {
						if (!this.$newCheck(nextIsLetter)) {
							if (this.$_c === 47) {
								this.$pushNodeNameStart(false, this.$_index);
							}
							else {
								this.$pushNodeNameStart(true, this.$_index - 1);
								this.$decrementPosition();
							}
							this.$_state = 2;
						}
						break;
					}
					case 2: {
						if (!this.$newCheck(nextIsLetter)) {
							if ($Shaman_Dom_HtmlDocument.$isWhiteSpace(this.$_c)) {
								this.$pushNodeNameEnd(this.$_index - 1);
								if (this.$_state === 2) {
									this.$_state = 3;
								}
							}
							else if (this.$_c === 47) {
								this.$pushNodeNameEnd(this.$_index - 1);
								if (this.$_state === 2) {
									this.$_state = 4;
								}
							}
							else if (this.$_c === 62) {
								this.$pushNodeNameEnd(this.$_index - 1);
								if (this.$_state === 2) {
									if (!this.$pushNodeEnd(this.$_index, false)) {
										this.$_index = -1;
									}
									else if (this.$_state === 2) {
										this.$_state = 0;
										this.$pushNodeStart(3, this.$_index);
									}
								}
							}
						}
						break;
					}
					case 3: {
						if (!this.$newCheck(nextIsLetter) && !$Shaman_Dom_HtmlDocument.$isWhiteSpace(this.$_c)) {
							if (this.$_c === 47 || this.$_c === 63) {
								if (ss.isValue(this.$_currentnode) && this.$_currentnode.get_tagName() === '?document') {
									var $t1 = this.$_currentnode.get_attributes().getEnumerator$1();
									try {
										while ($t1.moveNext()) {
											var current = $t1.current();
											this.$_documentnode.setAttributeValue(current.get_originalName(), current.get_value());
										}
									}
									finally {
										$t1.dispose();
									}
								}
								if (this.$_obeySelfClosingTags || this.$_c === 63) {
									this.$_state = 4;
								}
							}
							else if (this.$_c === 62) {
								if (!this.$pushNodeEnd(this.$_index, false)) {
									this.$_index = -1;
								}
								else if (this.$_state === 3) {
									this.$_state = 0;
									this.$pushNodeStart(3, this.$_index);
								}
							}
							else {
								this.$pushAttributeNameStart(this.$_index - 1);
								this.$_state = 5;
							}
						}
						break;
					}
					case 4: {
						if (!this.$newCheck(nextIsLetter)) {
							if (this.$_c === 62) {
								if (!this.$pushNodeEnd(this.$_index, true)) {
									this.$_index = -1;
								}
								else if (this.$_state === 4) {
									this.$_state = 0;
									this.$pushNodeStart(3, this.$_index);
								}
							}
							else {
								this.$_state = 3;
							}
						}
						break;
					}
					case 5: {
						if (!this.$newCheck(nextIsLetter)) {
							if ($Shaman_Dom_HtmlDocument.$isWhiteSpace(this.$_c)) {
								this.$pushAttributeNameEnd(this.$_index - 1);
								this.$_state = 6;
							}
							else if (this.$_c === 61) {
								this.$pushAttributeNameEnd(this.$_index - 1);
								this.$_state = 7;
							}
							else if (this.$_c === 62) {
								this.$pushAttributeNameEnd(this.$_index - 1);
								if (!this.$pushNodeEnd(this.$_index, false)) {
									this.$_index = -1;
								}
								else if (this.$_state === 5) {
									this.$_state = 0;
									this.$pushNodeStart(3, this.$_index);
								}
							}
						}
						break;
					}
					case 6: {
						if (!this.$newCheck(nextIsLetter) && !$Shaman_Dom_HtmlDocument.$isWhiteSpace(this.$_c)) {
							if (this.$_c === 62) {
								if (!this.$pushNodeEnd(this.$_index, false)) {
									this.$_index = -1;
								}
								else if (this.$_state === 6) {
									this.$_state = 0;
									this.$pushNodeStart(3, this.$_index);
								}
							}
							else if (this.$_c === 61) {
								this.$_state = 7;
							}
							else {
								this.$_state = 3;
								this.$decrementPosition();
							}
						}
						break;
					}
					case 7: {
						if (!this.$newCheck(nextIsLetter) && !$Shaman_Dom_HtmlDocument.$isWhiteSpace(this.$_c)) {
							if (this.$_c === 39 || this.$_c === 34) {
								this.$_state = 10;
								this.$pushAttributeValueStart$1(this.$_index, this.$_c);
								num = this.$_c;
							}
							else if (this.$_c === 62) {
								if (!this.$pushNodeEnd(this.$_index, false)) {
									this.$_index = -1;
								}
								else if (this.$_state === 7) {
									this.$_state = 0;
									this.$pushNodeStart(3, this.$_index);
								}
							}
							else {
								this.$pushAttributeValueStart(this.$_index - 1);
								this.$_state = 8;
							}
						}
						break;
					}
					case 8: {
						if (!this.$newCheck(nextIsLetter)) {
							if ($Shaman_Dom_HtmlDocument.$isWhiteSpace(this.$_c)) {
								this.$pushAttributeValueEnd(this.$_index - 1);
								this.$_state = 3;
							}
							else if (this.$_c === 62) {
								this.$pushAttributeValueEnd(this.$_index - 1);
								if (!this.$pushNodeEnd(this.$_index, false)) {
									this.$_index = -1;
								}
								else if (this.$_state === 8) {
									this.$_state = 0;
									this.$pushNodeStart(3, this.$_index);
								}
							}
						}
						break;
					}
					case 9: {
						if (this.$_c === 62) {
							if (this.$_fullcomment) {
								if (this.$text.charCodeAt(this.$_index - 2) !== 45) {
									break;
								}
								if (this.$text.charCodeAt(this.$_index - 3) !== 45) {
									break;
								}
							}
							else if (this.$_pcdata && (this.$text.charCodeAt(this.$_index - 2) !== 93 || this.$text.charCodeAt(this.$_index - 3) !== 93)) {
								break;
							}
							if (this.$_pcdata) {
								ss.cast(this.$_currentnode, $Shaman_Dom_HtmlTextNode).$_pcdata = true;
							}
							if (!this.$pushNodeEnd(this.$_index, false)) {
								this.$_index = -1;
							}
							else {
								this.$_state = 0;
								this.$pushNodeStart(3, this.$_index);
							}
						}
						break;
					}
					case 10: {
						if (this.$_c === num) {
							this.$pushAttributeValueEnd(this.$_index - 1);
							this.$_state = 3;
						}
						break;
					}
					case 11: {
						if ($Shaman_Runtime_$Utilities.$containsIndex(this.$text, this.$_currentnode.get_tagName().length + 3 + (this.$_index - 1) - 1)) {
							var flag = this.$text.charCodeAt(this.$_index - 1) === 60 && this.$text.charCodeAt(this.$_index) === 47;
							if (flag) {
								var tagName = this.$_currentnode.get_tagName();
								for (var i = 0; i < tagName.length; i++) {
									var c2 = this.$text.charCodeAt(this.$_index + i + 1);
									if (c2 >= 65 && c2 <= 90) {
										c2 += 32;
									}
									if (c2 !== tagName.charCodeAt(i)) {
										flag = false;
										break;
									}
								}
							}
							if (flag) {
								var num2 = this.$text.charCodeAt(this.$_index - 1 + 2 + this.$_currentnode.get_tagName().length);
								if (num2 === 62 || $Shaman_Dom_HtmlDocument.$isWhiteSpace(num2)) {
									var htmlTextNode = ss.cast(this.$createNode$1(3, this.$_currentnode.$_outerstartindex + this.$_currentnode.$_outerlength), $Shaman_Dom_HtmlTextNode);
									htmlTextNode.$_outerlength = this.$_index - 1 - htmlTextNode.$_outerstartindex;
									htmlTextNode.set_text($Shaman_Runtime_ValueStringExtensions.substringCached$2(this.$text, this.$_currentnode.$_outerstartindex + this.$_currentnode.$_outerlength, htmlTextNode.$_outerlength));
									htmlTextNode.$_pcdata = true;
									this.$_currentnode.appendChild(htmlTextNode);
									this.$pushNodeStart(1, this.$_index - 1);
									this.$pushNodeNameStart(false, this.$_index - 1 + 2);
									this.$_state = 2;
									this.$incrementPosition();
								}
							}
						}
						break;
					}
				}
			}
			var readChars = this.$text.length;
			this.$_index = readChars;
			this.$_documentnode.$_outerlength = readChars;
			if (this.$_currentNodeNameStartIndex > 0 && this.$_currentnode.get_nodeType() === 1) {
				this.$pushNodeNameEnd(readChars);
			}
			this.$pushNodeEnd(readChars, false);
			ss.clearKeys(this.$lastnodes);
		},
		$isLetter: function(ch) {
			return ch >= 65 && ch <= 62 || ch >= 97 && ch <= 122;
		},
		$pushAttributeNameEnd: function(index) {
			this.$_currentAttributeIndex++;
			this.$attributesScratchpad[this.$_currentAttributeIndex] = new $Shaman_Dom_HtmlAttribute();
			var text = $Shaman_Runtime_ValueStringExtensions.substringCached$2(this.$text, this.$_currentAttributeNameStartIndex, index - this.$_currentAttributeNameStartIndex);
			for (var i = 0; i < text.length; i++) {
				var c = text.charCodeAt(i);
				if (c >= 65 && c <= 90) {
					this.$attributesScratchpad[this.$_currentAttributeIndex].$_quoteType = this.$attributesScratchpad[this.$_currentAttributeIndex].$_quoteType | 2;
					break;
				}
			}
			this.$attributesScratchpad[this.$_currentAttributeIndex].$_name = text;
		},
		$pushAttributeNameStart: function(index) {
			this.$_currentAttributeNameStartIndex = index;
		},
		$pushAttributeValueEnd: function(index) {
			var value = $Shaman_Dom_HtmlEntity.deEntitize($Shaman_Runtime_ValueStringExtensions.substringCached$2(this.$text, this.$_currentAttributeValueStartIndex, index - this.$_currentAttributeValueStartIndex));
			this.$attributesScratchpad[this.$_currentAttributeIndex].set_value(value);
		},
		$flushAttributes: function() {
			if (this.$_currentAttributeIndex === -1) {
				return;
			}
			var num = this.$_currentAttributeIndex + 1;
			if (this.$_currentnode.$_attributeCount !== 0) {
				debugger;
			}
			this.$_currentnode.$_attributeCount = num;
			this.$_currentnode.$_attributeArray = this.$attributesScratchpad;
			this.$attributesScratchpad = [];
			this.$_currentAttributeIndex = -1;
		},
		$pushAttributeValueStart: function(index) {
			this.$pushAttributeValueStart$1(index, 0);
		},
		$pushAttributeValueStart$1: function(index, quote) {
			this.$_currentAttributeValueStartIndex = index;
			if (quote === 39) {
				this.$attributesScratchpad[this.$_currentAttributeIndex].$_quoteType = this.$attributesScratchpad[this.$_currentAttributeIndex].$_quoteType | 1;
			}
		},
		$pushNodeEnd: function(index, close) {
			this.$_currentnode.$_outerlength = index - this.$_currentnode.$_outerstartindex;
			if (this.$_currentnode.$_nodetype === 3 || this.$_currentnode.$_nodetype === 2) {
				if (this.$_currentnode.$_outerlength > 0) {
					var htmlTextNode = ((this.$_currentnode.$_nodetype === 3) ? ss.cast(this.$_currentnode, $Shaman_Dom_HtmlTextNode) : null);
					var htmlCommentNode = ((this.$_currentnode.$_nodetype === 2) ? ss.cast(this.$_currentnode, $Shaman_Dom_HtmlCommentNode) : null);
					if (ss.isValue(htmlTextNode)) {
						if (htmlTextNode.$_pcdata) {
							htmlTextNode.set_text($Shaman_Runtime_ValueStringExtensions.substringCached$2(this.$text, this.$_currentnode.$_outerstartindex + 9, this.$_currentnode.$_outerlength - 9 - 3));
						}
						else {
							htmlTextNode.set_text($Shaman_Dom_HtmlEntity.deEntitize($Shaman_Runtime_ValueStringExtensions.substringCached$2(this.$text, this.$_currentnode.$_outerstartindex, this.$_currentnode.$_outerlength)));
						}
					}
					else {
						htmlCommentNode.set_comment($Shaman_Runtime_ValueStringExtensions.substringCached$2(this.$text, this.$_currentnode.$_outerstartindex, this.$_currentnode.$_outerlength));
					}
					if (ss.isValue(this.$_lastparentnode)) {
						this.$_lastparentnode.appendChild(this.$_currentnode);
					}
				}
			}
			else {
				this.$flushAttributes();
				if (this.$_currentnode.$_starttag && !ss.referenceEquals(this.$_lastparentnode, this.$_currentnode)) {
					if (ss.isValue(this.$_lastparentnode)) {
						var tagName = this.$_currentnode.get_tagName();
						if (tagName !== '?document') {
							this.$_lastparentnode.appendChild(this.$_currentnode);
						}
					}
					var prevwithsamename = $Shaman_Runtime_$Utilities.$tryGetValue$1(String, $Shaman_Dom_HtmlNode).call(null, this.$lastnodes, this.$_currentnode.get_tagName());
					this.$_currentnode.$_prevwithsamename = prevwithsamename;
					this.$lastnodes[this.$_currentnode.get_tagName()] = this.$_currentnode;
					if (this.$_currentnode.get_nodeType() === 0 || this.$_currentnode.get_nodeType() === 1) {
						this.$_lastparentnode = this.$_currentnode;
					}
					if (this.$_isHtml && $Shaman_Dom_HtmlNode.isCDataElement(this.$_currentnode.get_tagName())) {
						this.$_state = 11;
						return true;
					}
					if (this.$_isHtml && ($Shaman_Dom_HtmlNode.isClosedElement(this.$_currentnode.get_tagName()) || $Shaman_Dom_HtmlNode.isEmptyElement(this.$_currentnode.get_tagName()))) {
						close = true;
					}
				}
			}
			if (close || !this.$_currentnode.$_starttag) {
				this.$closeCurrentNode();
			}
			return true;
		},
		$pushNodeNameEnd: function(index) {
			this.$_currentnode.set_tagName($Shaman_Runtime_ValueStringExtensions.substringCached$2(this.$text, this.$_currentNodeNameStartIndex, index - this.$_currentNodeNameStartIndex));
			if (ss.getKeyCount(this.$openednodes) === 1 && this.$_isHtml) {
				var tagName = this.$_currentnode.get_tagName();
				if (tagName !== 'html' && !ss.startsWithString(tagName, '?') && !ss.startsWithString(tagName, '!')) {
					var flag = false;
					var flag2 = false;
					var $t1 = this.get_documentNode().get_childNodes().getEnumerator$1();
					try {
						while ($t1.moveNext()) {
							var current = $t1.current();
							var tagName2 = current.get_tagName();
							if (tagName2 === '?xml') {
								flag2 = true;
							}
							if (tagName2 === 'html') {
								flag = true;
							}
						}
					}
					finally {
						$t1.dispose();
					}
					if (flag2 && !flag) {
						this.$_isHtml = false;
					}
					if (flag2) {
						this.$_obeySelfClosingTags = true;
					}
				}
			}
			if (this.$optionFixNestedTags) {
				this.$fixNestedTags();
			}
		},
		$pushNodeNameStart: function(starttag, index) {
			this.$_currentnode.$_starttag = starttag;
			this.$_currentNodeNameStartIndex = index;
		},
		$pushNodeStart: function(type, index) {
			this.$_currentnode = this.$createNode$1(type, index);
			this.$_currentnode.$_streamposition = index;
		},
		writeTo: function(writer, writeDocumentNode) {
			this.get_documentNode().$writeTo(writer, writeDocumentNode);
		},
		setOwnerDocumentRecursive: function(node) {
			var $t1 = ss.getEnumerator(node.descendantsAndSelf());
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					item.$_ownerdocument = this;
					item.$_streamposition = -1;
				}
			}
			finally {
				$t1.dispose();
			}
		},
		get_baseUrl: function() {
			if (ss.isValue(this.$_baseUrl)) {
				return this.$_baseUrl;
			}
			var b = this.get_documentNode().getAttributeValue('base-url');
			if (ss.isNullOrUndefined(b)) {
				var $t1 = ss.getEnumerator(this.get_documentNode().descendantsAndSelf$1('base'));
				try {
					while ($t1.moveNext()) {
						var basenode = $t1.current();
						var h = basenode.getAttributeValue('href');
						if (ss.isValue(h)) {
							try {
								this.$_baseUrl = $Shaman_Dom_HtmlDocument.$getAbsoluteUrlInternal(this.get_pageUrl(), h);
								b = this.$_baseUrl.absoluteUri;
							}
							catch ($t2) {
							}
							break;
						}
					}
				}
				finally {
					$t1.dispose();
				}
				if (ss.isNullOrUndefined(b)) {
					this.$_baseUrl = this.get_pageUrl();
					b = (ss.isValue(this.$_baseUrl) ? this.$_baseUrl.absoluteUri : '');
				}
				this.get_documentNode().setAttributeValue('base-url', b);
			}
			else {
				if (ss.isNullOrEmptyString(b)) {
					return null;
				}
				this.$_baseUrl = new $System_Uri(b);
			}
			return this.$_baseUrl;
		},
		get_pageUrl: function() {
			if (ss.isValue(this.$_pageUrl)) {
				return this.$_pageUrl;
			}
			var m = this.get_documentNode().getAttributeValue('document-url');
			if (ss.isNullOrEmptyString(m)) {
				return null;
			}
			this.$_pageUrl = new $System_Uri(m);
			return this.$_pageUrl;
		},
		set_pageUrl: function(value) {
			if (ss.isValue(value)) {
				this.get_documentNode().setAttributeValue('document-url', value.absoluteUri);
			}
			else {
				this.get_documentNode().get_attributes().remove$1('document-url');
			}
			this.$_pageUrl = value;
		},
		clearPageUrlCache: function() {
			this.$_pageUrl = null;
			this.$_baseUrl = null;
		}
	});
	$Shaman_Dom_HtmlDocument.$ctor1.prototype = $Shaman_Dom_HtmlDocument.prototype;
	ss.initEnum($Shaman_Dom_HtmlElementFlag, $asm, { cData: 1, empty: 2, closed: 4 });
	ss.initClass($Shaman_Dom_HtmlEntity, $asm, {});
	ss.initClass($Shaman_Dom_HtmlNodeCollection, $asm, {
		get_$_items: function() {
			return this.$_parentnode.$_childNodesArray;
		},
		get_$_count: function() {
			return this.$_parentnode.$_childNodesCount;
		},
		get_item$1: function(node) {
			var nodeIndex = this.getNodeIndex(node);
			if (nodeIndex === -1) {
				throw new ss.ArgumentOutOfRangeException();
			}
			return nodeIndex;
		},
		get_item$2: function(nodeName) {
			var items = this.get_$_items();
			if (ss.isNullOrUndefined(items)) {
				return null;
			}
			var count = this.get_$_count();
			nodeName = $Shaman_Runtime_ValueStringExtensions.toLowerFast(nodeName);
			for (var i = 0; i < count; i++) {
				if (ss.equalsT(items[i].get_tagName(), nodeName)) {
					return items[i];
				}
			}
			return null;
		},
		get_count: function() {
			return this.$_parentnode.$_childNodesCount;
		},
		get_isReadOnly: function() {
			return false;
		},
		get_item: function(index) {
			return this.get_$_items()[index];
		},
		set_item: function(index, value) {
			this.get_$_items()[index] = value;
		},
		add: function(node) {
			this.$_parentnode.$ensureCapacity(this.$_parentnode.$_childNodesCount + 1);
			this.get_$_items()[this.$_parentnode.$_childNodesCount] = node;
			this.$_parentnode.$_childNodesCount++;
		},
		clear: function() {
			if (ss.isNullOrUndefined(this.get_$_items())) {
				return;
			}
			for (var i = 0; i < this.$_parentnode.$_childNodesCount; i++) {
				var htmlNode = this.$_parentnode.$_childNodesArray[i];
				htmlNode.set_parentNode(null);
				this.$_parentnode.$_childNodesArray[i] = null;
			}
			this.$_parentnode.$_childNodesCount = 0;
		},
		contains: function(item) {
			var items = this.get_$_items();
			return ss.isValue(items) && $Shaman_Dom_HtmlNodeCollection.$indexOf(items, item, this.$_parentnode.$_childNodesCount) !== -1;
		},
		copyTo: function(array, arrayIndex) {
			var items = this.get_$_items();
			if (ss.isNullOrUndefined(items)) {
				return;
			}
			var count = this.get_$_count();
			for (var i = 0; i < count; i++) {
				array[arrayIndex] = items[i];
				arrayIndex++;
			}
		},
		indexOf: function(item) {
			var items = this.get_$_items();
			if (ss.isNullOrUndefined(items)) {
				return -1;
			}
			return $Shaman_Dom_HtmlNodeCollection.$indexOf(items, item, this.$_parentnode.$_childNodesCount);
		},
		insert: function(index, node) {
			this.$_parentnode.$ensureCapacity(this.$_parentnode.$_childNodesCount + 1);
			for (var i = this.$_parentnode.$_childNodesCount - 1; i >= index; i--) {
				this.get_$_items()[i].$_index = i + 1;
				this.get_$_items()[i + 1] = this.get_$_items()[i];
			}
			this.get_$_items()[index] = node;
			node.$_index = index;
			this.$_parentnode.$_childNodesCount++;
			node.$_parentnode = this.$_parentnode;
		},
		remove: function(item) {
			var items = this.get_$_items();
			if (ss.isNullOrUndefined(items)) {
				return false;
			}
			var num = $Shaman_Dom_HtmlNodeCollection.$indexOf(items, item, this.$_parentnode.$_childNodesCount);
			if (num === -1) {
				return false;
			}
			this.removeAt(num);
			return true;
		},
		removeAt: function(index) {
			var items = this.get_$_items();
			if (ss.isNullOrUndefined(items)) {
				throw new ss.ArgumentOutOfRangeException();
			}
			var htmlNode = items[index];
			this.$_parentnode.$_childNodesCount--;
			for (var i = index; i < this.$_parentnode.$_childNodesCount; i++) {
				items[i] = items[i + 1];
				items[i].$_index = i;
			}
			items[this.$_parentnode.$_childNodesCount] = null;
			htmlNode.$_parentnode = null;
		},
		append: function(node) {
			var count = this.get_$_count();
			this.$_parentnode.$ensureCapacity(count + 1);
			var items = this.get_$_items();
			items[count] = node;
			node.$_index = count;
			this.$_parentnode.$_childNodesCount++;
			node.$_parentnode = this.$_parentnode;
		},
		findFirst: function(name) {
			return $Shaman_Dom_HtmlNodeCollection.findFirst(this, name);
		},
		getNodeIndex: function(node) {
			var items = this.get_$_items();
			if (ss.isNullOrUndefined(items)) {
				return -1;
			}
			var count = this.get_$_count();
			for (var i = 0; i < count; i++) {
				if (ss.referenceEquals(node, items[i])) {
					return i;
				}
			}
			return -1;
		},
		prepend: function(node) {
			this.insert(0, node);
		},
		remove$1: function(index) {
			this.removeAt(index);
			return true;
		},
		replace: function(index, node) {
			var items = this.get_$_items();
			if (ss.isNullOrUndefined(items)) {
				throw new ss.ArgumentOutOfRangeException();
			}
			var htmlNode = items[index];
			items[index] = node;
			node.$_index = index;
			node.$_parentnode = this.$_parentnode;
			htmlNode.$_parentnode = null;
		},
		getEnumerator$1: function() {
			var $t1 = new $Shaman_Dom_HtmlNodeCollection$Enumerator();
			$t1.$parent = this.$_parentnode;
			$t1.$index = -1;
			return $t1;
		},
		getEnumerator: function() {
			return this.getEnumerator$1();
		}
	}, null, [ss.IEnumerable, ss.IEnumerable, ss.ICollection, ss.IList]);
	ss.initClass($Shaman_Dom_HtmlNodeCollection$Enumerator, $asm, {
		current: function() {
			return this.$parent.$_childNodesArray[this.$index];
		},
		dispose: function() {
		},
		moveNext: function() {
			this.$index++;
			return this.$index < this.$parent.$_childNodesCount;
		},
		reset: function() {
			throw new ss.NotSupportedException();
		}
	}, null, [ss.IDisposable, ss.IEnumerator, ss.IEnumerator]);
	ss.initEnum($Shaman_Dom_HtmlNodeType, $asm, { document: 0, element: 1, comment: 2, text: 3 });
	ss.initClass($Shaman_Dom_HtmlTextNode, $asm, {
		get_text: function() {
			return ss.coalesce(this.$_text, '');
		},
		set_text: function(value) {
			this.$_text = value;
		},
		get_isPcData: function() {
			return this.$_pcdata;
		}
	}, $Shaman_Dom_HtmlNode);
	ss.initClass($Shaman_Runtime_$CacheItem, $asm, {});
	ss.initClass($Shaman_Runtime_$Utilities, $asm, {});
	ss.initClass($Shaman_Runtime_ValueStringExtensions, $asm, {});
	ss.initClass($System_StringComparison, $asm, {});
	ss.initClass($System_Uri, $asm, {
		toString: function() {
			return this.absoluteUri;
		},
		getQueryParameter: function(name) {
			var q = this.query;
			if (ss.isNullOrUndefined(q)) {
				return null;
			}
			var list = q.split(String.fromCharCode(38), 4096);
			for (var i = 0; i < list.length; i++) {
				var k = list[i].split(String.fromCharCode(61), 2);
				if (k.length === 2) {
					if (ss.referenceEquals($System_Uri.$unescapeDataString(k[0]), name)) {
						return $System_Uri.$unescapeDataString(k[1]);
					}
				}
			}
			return null;
		}
	});
	$System_Uri.$ctor1.prototype = $System_Uri.prototype;
	ss.initClass($System_Diagnostics_DebuggerDisplayAttribute, $asm, {});
	ss.initClass($System_IO_TextReader, $asm, { close: null, peek: null, read: null, read$1: null, readBlock: null, readLine: null, readToEnd: null, dispose: null }, null, [ss.IDisposable]);
	ss.initClass($System_IO_StringReader, $asm, {
		close: function() {
			this.$data = null;
		},
		dispose: function() {
			this.close();
		},
		peek: function() {
			if (this.$index >= this.$data.length) {
				return -1;
			}
			return this.$data.charCodeAt(this.$index);
		},
		read: function() {
			var expr_06 = this.peek();
			if (expr_06 !== -1) {
				this.$index++;
			}
			return expr_06;
		},
		read$1: function(buffer, index, count) {
			var length = this.$data.length;
			var num = 0;
			var num2 = index;
			while (num2 < length && num < count) {
				buffer[num] = this.$data.charCodeAt(num2);
				num2++;
				num++;
			}
			return num;
		},
		readBlock: function(buffer, index, count) {
			return this.read$1(buffer, index, count);
		},
		readLine: function() {
			if (this.$index === this.$data.length) {
				return null;
			}
			var num = this.$data.indexOf(String.fromCharCode(10), this.$index);
			if (num === -1) {
				var text = ((this.$data.charCodeAt(this.$data.length - 1) === 13) ? this.$data.substring(this.$index, this.$data.length - 1) : this.$data);
				this.$index = this.$data.length;
				if (text.length === 0) {
					return null;
				}
				return text;
			}
			else {
				var text2 = this.$data.substring(this.$index, ((num !== 0 && this.$data.charCodeAt(num - 1) === 13) ? (num - 1) : num));
				this.$index = num + 1;
				if (text2.length === 0 && this.$index === this.$data.length) {
					return null;
				}
				return text2;
			}
		},
		readToEnd: function() {
			var arg_32_0 = ((this.$index === 0) ? this.$data : this.$data.substring(this.$index));
			this.$index = this.$data.length;
			return arg_32_0;
		}
	}, $System_IO_TextReader, [ss.IDisposable]);
	ss.initClass($System_IO_TextWriter, $asm, { write$2: null, write: null, write$1: null, write$5: null, write$3: null, write$4: null, writeLine$1: null, writeLine: null, writeLine$4: null, writeLine$2: null, writeLine$3: null, dispose: null }, null, [ss.IDisposable]);
	ss.initClass($System_IO_StringWriter, $asm, {
		write$2: function(value) {
			this.$sb.append$4(value);
		},
		write: function(value) {
			this.$sb.append$1(value);
		},
		write$1: function(buffer) {
			this.write$3(buffer.join(''));
		},
		write$5: function(buffer, index, count) {
			this.write$1(buffer.slice(index, index + count));
		},
		write$3: function(value) {
			this.$sb.append$5(value);
		},
		write$4: function(format, args) {
			this.write$3(ss.formatString.apply(null, [format].concat(args)));
		},
		writeLine$1: function(value) {
			this.write$2(value);
			this.write$3('\n');
		},
		writeLine: function(buffer) {
			this.write$1(buffer);
			this.write$3('\n');
		},
		writeLine$4: function(buffer, index, count) {
			this.write$5(buffer, index, count);
			this.write$3('\n');
		},
		writeLine$2: function(value) {
			this.writeLine$2(value);
		},
		writeLine$3: function(format, args) {
			this.write$4(format, args);
			this.write$3('\n');
		},
		dispose: function() {
			this.$sb = null;
		},
		toString: function() {
			return this.$sb.toString();
		},
		getStringBuilder: function() {
			return this.$sb;
		}
	}, $System_IO_TextWriter, [ss.IDisposable]);
	ss.initClass($System_Text_Saltarelle_StringBuilder, $asm, {
		get_isEmpty: function() {
			return this.$length === 0;
		},
		get_length: function() {
			return this.$length;
		},
		set_length: function(value) {
			if (value !== this.$length) {
				if (value > this.$length) {
					throw new ss.ArgumentOutOfRangeException();
				}
				if (value === 0) {
					this.clear();
					return;
				}
				this.$compact();
				var text = this.$parts[0].substr(0, value);
				this.$parts[0] = text;
				this.$length = value;
			}
		},
		get_item: function(index) {
			this.$compact();
			return this.$parts[0].charCodeAt(index);
		},
		set_item: function(index, value) {
			this.$compact();
			var text = this.$parts[0];
			text = text.substr(0, index) + String.fromCharCode(value) + text.substring(index + 1);
			this.$parts[0] = text;
		},
		append: function(b) {
			return this.append$5(b.toString());
		},
		append$1: function(c) {
			return this.append$5(String.fromCharCode(c));
		},
		append$3: function(i) {
			return this.append$5(i.toString());
		},
		append$2: function(d) {
			return this.append$5(d.toString());
		},
		append$4: function(o) {
			if (ss.isValue(o)) {
				this.append$5(o.toString());
			}
			return this;
		},
		append$5: function(s) {
			if (ss.isValue(s) && s.length !== 0) {
				this.$length += s.length;
				this.$parts.push(s);
				if (this.$parts.length > 100000) {
					this.$compact();
				}
			}
			return this;
		},
		$compact: function() {
			if (this.$parts.length > 1) {
				var text = ss.arrayFromEnumerable(this.$parts).join('');
				ss.clear(this.$parts);
				this.$parts.push(text);
			}
		},
		appendLine: function() {
			return this.append$1(10);
		},
		appendLine$1: function(b) {
			return this.append(b).appendLine();
		},
		appendLine$2: function(c) {
			return this.append$1(c).appendLine();
		},
		appendLine$4: function(i) {
			return this.append$3(i).appendLine();
		},
		appendLine$3: function(d) {
			return this.append$2(d).appendLine();
		},
		appendLine$5: function(o) {
			return this.append$4(o).appendLine();
		},
		appendLine$6: function(s) {
			return this.append$5(s).appendLine();
		},
		clear: function() {
			this.$length = 0;
			ss.clear(this.$parts);
		},
		toString: function() {
			this.$compact();
			if (this.$length === 0) {
				return '';
			}
			return this.$parts[0];
		},
		remove: function(start, count) {
			if (count !== 0) {
				this.$compact();
				if (this.$length === 0) {
					throw new ss.ArgumentOutOfRangeException();
				}
				var text = this.$parts[0];
				this.$parts[0] = text.substr(0, start) + text.substring(start + count);
				this.$length = this.$parts[0].length;
				if (this.$length === 0) {
					this.clear();
				}
			}
		},
		$append: function(text, p1, p2) {
			this.append$5(text.substr(p1, p2));
		}
	});
	$System_Text_Saltarelle_StringBuilder.$ctor1.prototype = $System_Text_Saltarelle_StringBuilder.$ctor2.prototype = $System_Text_Saltarelle_StringBuilder.prototype;
	ss.initInterface($System_Xml__Dummy, $asm, {});
	ss.setMetadata($Shaman_Dom_HtmlAttribute, { attr: [new $System_Diagnostics_DebuggerDisplayAttribute('Name: {OriginalName}, Value: {Value}')] });
	ss.setMetadata($Shaman_Dom_HtmlElementFlag, { enumFlags: true });
	ss.setMetadata($Shaman_Dom_HtmlNode, { attr: [new $System_Diagnostics_DebuggerDisplayAttribute('Name: {OriginalName}}')] });
	(function() {
		$Shaman_Runtime_ValueStringExtensions.$size = 6841;
		$Shaman_Runtime_ValueStringExtensions.$cache = null;
		$Shaman_Runtime_ValueStringExtensions.$tempReader = null;
	})();
	(function() {
		$Shaman_Dom_HtmlEntity.$_maxEntitySize = 0;
		$Shaman_Dom_HtmlEntity.$_entityName = null;
		$Shaman_Dom_HtmlEntity.$_entityValue = null;
		$Shaman_Dom_HtmlEntity.$sb = null;
		$Shaman_Dom_HtmlEntity.$entity = null;
		$Shaman_Dom_HtmlEntity.$_entityName = {};
		$Shaman_Dom_HtmlEntity.$_entityValue = {};
		$Shaman_Dom_HtmlEntity.$addPair('nbsp', 160);
		$Shaman_Dom_HtmlEntity.$addPair('iexcl', 161);
		$Shaman_Dom_HtmlEntity.$addPair('cent', 162);
		$Shaman_Dom_HtmlEntity.$addPair('pound', 163);
		$Shaman_Dom_HtmlEntity.$addPair('curren', 164);
		$Shaman_Dom_HtmlEntity.$addPair('yen', 165);
		$Shaman_Dom_HtmlEntity.$addPair('brvbar', 166);
		$Shaman_Dom_HtmlEntity.$addPair('sect', 167);
		$Shaman_Dom_HtmlEntity.$addPair('uml', 168);
		$Shaman_Dom_HtmlEntity.$addPair('copy', 169);
		$Shaman_Dom_HtmlEntity.$addPair('ordf', 170);
		$Shaman_Dom_HtmlEntity.$addPair('laquo', 171);
		$Shaman_Dom_HtmlEntity.$addPair('not', 172);
		$Shaman_Dom_HtmlEntity.$addPair('shy', 173);
		$Shaman_Dom_HtmlEntity.$addPair('reg', 174);
		$Shaman_Dom_HtmlEntity.$addPair('macr', 175);
		$Shaman_Dom_HtmlEntity.$addPair('deg', 176);
		$Shaman_Dom_HtmlEntity.$addPair('plusmn', 177);
		$Shaman_Dom_HtmlEntity.$addPair('sup2', 178);
		$Shaman_Dom_HtmlEntity.$addPair('sup3', 179);
		$Shaman_Dom_HtmlEntity.$addPair('acute', 180);
		$Shaman_Dom_HtmlEntity.$addPair('micro', 181);
		$Shaman_Dom_HtmlEntity.$addPair('para', 182);
		$Shaman_Dom_HtmlEntity.$addPair('middot', 183);
		$Shaman_Dom_HtmlEntity.$addPair('cedil', 184);
		$Shaman_Dom_HtmlEntity.$addPair('sup1', 185);
		$Shaman_Dom_HtmlEntity.$addPair('ordm', 186);
		$Shaman_Dom_HtmlEntity.$addPair('raquo', 187);
		$Shaman_Dom_HtmlEntity.$addPair('frac14', 188);
		$Shaman_Dom_HtmlEntity.$addPair('frac12', 189);
		$Shaman_Dom_HtmlEntity.$addPair('frac34', 190);
		$Shaman_Dom_HtmlEntity.$addPair('iquest', 191);
		$Shaman_Dom_HtmlEntity.$addPair('Agrave', 192);
		$Shaman_Dom_HtmlEntity.$addPair('Aacute', 193);
		$Shaman_Dom_HtmlEntity.$addPair('Acirc', 194);
		$Shaman_Dom_HtmlEntity.$addPair('Atilde', 195);
		$Shaman_Dom_HtmlEntity.$addPair('Auml', 196);
		$Shaman_Dom_HtmlEntity.$addPair('Aring', 197);
		$Shaman_Dom_HtmlEntity.$addPair('AElig', 198);
		$Shaman_Dom_HtmlEntity.$addPair('Ccedil', 199);
		$Shaman_Dom_HtmlEntity.$addPair('Egrave', 200);
		$Shaman_Dom_HtmlEntity.$addPair('Eacute', 201);
		$Shaman_Dom_HtmlEntity.$addPair('Ecirc', 202);
		$Shaman_Dom_HtmlEntity.$addPair('Euml', 203);
		$Shaman_Dom_HtmlEntity.$addPair('Igrave', 204);
		$Shaman_Dom_HtmlEntity.$addPair('Iacute', 205);
		$Shaman_Dom_HtmlEntity.$addPair('Icirc', 206);
		$Shaman_Dom_HtmlEntity.$addPair('Iuml', 207);
		$Shaman_Dom_HtmlEntity.$addPair('ETH', 208);
		$Shaman_Dom_HtmlEntity.$addPair('Ntilde', 209);
		$Shaman_Dom_HtmlEntity.$addPair('Ograve', 210);
		$Shaman_Dom_HtmlEntity.$addPair('Oacute', 211);
		$Shaman_Dom_HtmlEntity.$addPair('Ocirc', 212);
		$Shaman_Dom_HtmlEntity.$addPair('Otilde', 213);
		$Shaman_Dom_HtmlEntity.$addPair('Ouml', 214);
		$Shaman_Dom_HtmlEntity.$addPair('times', 215);
		$Shaman_Dom_HtmlEntity.$addPair('Oslash', 216);
		$Shaman_Dom_HtmlEntity.$addPair('Ugrave', 217);
		$Shaman_Dom_HtmlEntity.$addPair('Uacute', 218);
		$Shaman_Dom_HtmlEntity.$addPair('Ucirc', 219);
		$Shaman_Dom_HtmlEntity.$addPair('Uuml', 220);
		$Shaman_Dom_HtmlEntity.$addPair('Yacute', 221);
		$Shaman_Dom_HtmlEntity.$addPair('THORN', 222);
		$Shaman_Dom_HtmlEntity.$addPair('szlig', 223);
		$Shaman_Dom_HtmlEntity.$addPair('agrave', 224);
		$Shaman_Dom_HtmlEntity.$addPair('aacute', 225);
		$Shaman_Dom_HtmlEntity.$addPair('acirc', 226);
		$Shaman_Dom_HtmlEntity.$addPair('atilde', 227);
		$Shaman_Dom_HtmlEntity.$addPair('auml', 228);
		$Shaman_Dom_HtmlEntity.$addPair('aring', 229);
		$Shaman_Dom_HtmlEntity.$addPair('aelig', 230);
		$Shaman_Dom_HtmlEntity.$addPair('ccedil', 231);
		$Shaman_Dom_HtmlEntity.$addPair('egrave', 232);
		$Shaman_Dom_HtmlEntity.$addPair('eacute', 233);
		$Shaman_Dom_HtmlEntity.$addPair('ecirc', 234);
		$Shaman_Dom_HtmlEntity.$addPair('euml', 235);
		$Shaman_Dom_HtmlEntity.$addPair('igrave', 236);
		$Shaman_Dom_HtmlEntity.$addPair('iacute', 237);
		$Shaman_Dom_HtmlEntity.$addPair('icirc', 238);
		$Shaman_Dom_HtmlEntity.$addPair('iuml', 239);
		$Shaman_Dom_HtmlEntity.$addPair('eth', 240);
		$Shaman_Dom_HtmlEntity.$addPair('ntilde', 241);
		$Shaman_Dom_HtmlEntity.$addPair('ograve', 242);
		$Shaman_Dom_HtmlEntity.$addPair('oacute', 243);
		$Shaman_Dom_HtmlEntity.$addPair('ocirc', 244);
		$Shaman_Dom_HtmlEntity.$addPair('otilde', 245);
		$Shaman_Dom_HtmlEntity.$addPair('ouml', 246);
		$Shaman_Dom_HtmlEntity.$addPair('divide', 247);
		$Shaman_Dom_HtmlEntity.$addPair('oslash', 248);
		$Shaman_Dom_HtmlEntity.$addPair('ugrave', 249);
		$Shaman_Dom_HtmlEntity.$addPair('uacute', 250);
		$Shaman_Dom_HtmlEntity.$addPair('ucirc', 251);
		$Shaman_Dom_HtmlEntity.$addPair('uuml', 252);
		$Shaman_Dom_HtmlEntity.$addPair('yacute', 253);
		$Shaman_Dom_HtmlEntity.$addPair('thorn', 254);
		$Shaman_Dom_HtmlEntity.$addPair('yuml', 255);
		$Shaman_Dom_HtmlEntity.$addPair('fnof', 402);
		$Shaman_Dom_HtmlEntity.$addPair('Alpha', 913);
		$Shaman_Dom_HtmlEntity.$addPair('Beta', 914);
		$Shaman_Dom_HtmlEntity.$addPair('Gamma', 915);
		$Shaman_Dom_HtmlEntity.$addPair('Delta', 916);
		$Shaman_Dom_HtmlEntity.$addPair('Epsilon', 917);
		$Shaman_Dom_HtmlEntity.$addPair('Zeta', 918);
		$Shaman_Dom_HtmlEntity.$addPair('Eta', 919);
		$Shaman_Dom_HtmlEntity.$addPair('Theta', 920);
		$Shaman_Dom_HtmlEntity.$addPair('Iota', 921);
		$Shaman_Dom_HtmlEntity.$addPair('Kappa', 922);
		$Shaman_Dom_HtmlEntity.$addPair('Lambda', 923);
		$Shaman_Dom_HtmlEntity.$addPair('Mu', 924);
		$Shaman_Dom_HtmlEntity.$addPair('Nu', 925);
		$Shaman_Dom_HtmlEntity.$addPair('Xi', 926);
		$Shaman_Dom_HtmlEntity.$addPair('Omicron', 927);
		$Shaman_Dom_HtmlEntity.$addPair('Pi', 928);
		$Shaman_Dom_HtmlEntity.$addPair('Rho', 929);
		$Shaman_Dom_HtmlEntity.$addPair('Sigma', 931);
		$Shaman_Dom_HtmlEntity.$addPair('Tau', 932);
		$Shaman_Dom_HtmlEntity.$addPair('Upsilon', 933);
		$Shaman_Dom_HtmlEntity.$addPair('Phi', 934);
		$Shaman_Dom_HtmlEntity.$addPair('Chi', 935);
		$Shaman_Dom_HtmlEntity.$addPair('Psi', 936);
		$Shaman_Dom_HtmlEntity.$addPair('Omega', 937);
		$Shaman_Dom_HtmlEntity.$addPair('alpha', 945);
		$Shaman_Dom_HtmlEntity.$addPair('beta', 946);
		$Shaman_Dom_HtmlEntity.$addPair('gamma', 947);
		$Shaman_Dom_HtmlEntity.$addPair('delta', 948);
		$Shaman_Dom_HtmlEntity.$addPair('epsilon', 949);
		$Shaman_Dom_HtmlEntity.$addPair('zeta', 950);
		$Shaman_Dom_HtmlEntity.$addPair('eta', 951);
		$Shaman_Dom_HtmlEntity.$addPair('theta', 952);
		$Shaman_Dom_HtmlEntity.$addPair('iota', 953);
		$Shaman_Dom_HtmlEntity.$addPair('kappa', 954);
		$Shaman_Dom_HtmlEntity.$addPair('lambda', 955);
		$Shaman_Dom_HtmlEntity.$addPair('mu', 956);
		$Shaman_Dom_HtmlEntity.$addPair('nu', 957);
		$Shaman_Dom_HtmlEntity.$addPair('xi', 958);
		$Shaman_Dom_HtmlEntity.$addPair('omicron', 959);
		$Shaman_Dom_HtmlEntity.$addPair('pi', 960);
		$Shaman_Dom_HtmlEntity.$addPair('rho', 961);
		$Shaman_Dom_HtmlEntity.$addPair('sigmaf', 962);
		$Shaman_Dom_HtmlEntity.$addPair('sigma', 963);
		$Shaman_Dom_HtmlEntity.$addPair('tau', 964);
		$Shaman_Dom_HtmlEntity.$addPair('upsilon', 965);
		$Shaman_Dom_HtmlEntity.$addPair('phi', 966);
		$Shaman_Dom_HtmlEntity.$addPair('chi', 967);
		$Shaman_Dom_HtmlEntity.$addPair('psi', 968);
		$Shaman_Dom_HtmlEntity.$addPair('omega', 969);
		$Shaman_Dom_HtmlEntity.$addPair('thetasym', 977);
		$Shaman_Dom_HtmlEntity.$addPair('upsih', 978);
		$Shaman_Dom_HtmlEntity.$addPair('piv', 982);
		$Shaman_Dom_HtmlEntity.$addPair('bull', 8226);
		$Shaman_Dom_HtmlEntity.$addPair('hellip', 8230);
		$Shaman_Dom_HtmlEntity.$addPair('prime', 8242);
		$Shaman_Dom_HtmlEntity.$addPair('Prime', 8243);
		$Shaman_Dom_HtmlEntity.$addPair('oline', 8254);
		$Shaman_Dom_HtmlEntity.$addPair('frasl', 8260);
		$Shaman_Dom_HtmlEntity.$addPair('weierp', 8472);
		$Shaman_Dom_HtmlEntity.$addPair('image', 8465);
		$Shaman_Dom_HtmlEntity.$addPair('real', 8476);
		$Shaman_Dom_HtmlEntity.$addPair('trade', 8482);
		$Shaman_Dom_HtmlEntity.$addPair('alefsym', 8501);
		$Shaman_Dom_HtmlEntity.$addPair('larr', 8592);
		$Shaman_Dom_HtmlEntity.$addPair('uarr', 8593);
		$Shaman_Dom_HtmlEntity.$addPair('rarr', 8594);
		$Shaman_Dom_HtmlEntity.$addPair('darr', 8595);
		$Shaman_Dom_HtmlEntity.$addPair('harr', 8596);
		$Shaman_Dom_HtmlEntity.$addPair('crarr', 8629);
		$Shaman_Dom_HtmlEntity.$addPair('lArr', 8656);
		$Shaman_Dom_HtmlEntity.$addPair('uArr', 8657);
		$Shaman_Dom_HtmlEntity.$addPair('rArr', 8658);
		$Shaman_Dom_HtmlEntity.$addPair('dArr', 8659);
		$Shaman_Dom_HtmlEntity.$addPair('hArr', 8660);
		$Shaman_Dom_HtmlEntity.$addPair('forall', 8704);
		$Shaman_Dom_HtmlEntity.$addPair('part', 8706);
		$Shaman_Dom_HtmlEntity.$addPair('exist', 8707);
		$Shaman_Dom_HtmlEntity.$addPair('empty', 8709);
		$Shaman_Dom_HtmlEntity.$addPair('nabla', 8711);
		$Shaman_Dom_HtmlEntity.$addPair('isin', 8712);
		$Shaman_Dom_HtmlEntity.$addPair('notin', 8713);
		$Shaman_Dom_HtmlEntity.$addPair('ni', 8715);
		$Shaman_Dom_HtmlEntity.$addPair('prod', 8719);
		$Shaman_Dom_HtmlEntity.$addPair('sum', 8721);
		$Shaman_Dom_HtmlEntity.$addPair('minus', 8722);
		$Shaman_Dom_HtmlEntity.$addPair('lowast', 8727);
		$Shaman_Dom_HtmlEntity.$addPair('radic', 8730);
		$Shaman_Dom_HtmlEntity.$addPair('prop', 8733);
		$Shaman_Dom_HtmlEntity.$addPair('infin', 8734);
		$Shaman_Dom_HtmlEntity.$addPair('ang', 8736);
		$Shaman_Dom_HtmlEntity.$addPair('and', 8743);
		$Shaman_Dom_HtmlEntity.$addPair('or', 8744);
		$Shaman_Dom_HtmlEntity.$addPair('cap', 8745);
		$Shaman_Dom_HtmlEntity.$addPair('cup', 8746);
		$Shaman_Dom_HtmlEntity.$addPair('int', 8747);
		$Shaman_Dom_HtmlEntity.$addPair('there4', 8756);
		$Shaman_Dom_HtmlEntity.$addPair('sim', 8764);
		$Shaman_Dom_HtmlEntity.$addPair('cong', 8773);
		$Shaman_Dom_HtmlEntity.$addPair('asymp', 8776);
		$Shaman_Dom_HtmlEntity.$addPair('ne', 8800);
		$Shaman_Dom_HtmlEntity.$addPair('equiv', 8801);
		$Shaman_Dom_HtmlEntity.$addPair('le', 8804);
		$Shaman_Dom_HtmlEntity.$addPair('ge', 8805);
		$Shaman_Dom_HtmlEntity.$addPair('sub', 8834);
		$Shaman_Dom_HtmlEntity.$addPair('sup', 8835);
		$Shaman_Dom_HtmlEntity.$addPair('nsub', 8836);
		$Shaman_Dom_HtmlEntity.$addPair('sube', 8838);
		$Shaman_Dom_HtmlEntity.$addPair('supe', 8839);
		$Shaman_Dom_HtmlEntity.$addPair('oplus', 8853);
		$Shaman_Dom_HtmlEntity.$addPair('otimes', 8855);
		$Shaman_Dom_HtmlEntity.$addPair('perp', 8869);
		$Shaman_Dom_HtmlEntity.$addPair('sdot', 8901);
		$Shaman_Dom_HtmlEntity.$addPair('lceil', 8968);
		$Shaman_Dom_HtmlEntity.$addPair('rceil', 8969);
		$Shaman_Dom_HtmlEntity.$addPair('lfloor', 8970);
		$Shaman_Dom_HtmlEntity.$addPair('rfloor', 8971);
		$Shaman_Dom_HtmlEntity.$addPair('lang', 9001);
		$Shaman_Dom_HtmlEntity.$addPair('rang', 9002);
		$Shaman_Dom_HtmlEntity.$addPair('loz', 9674);
		$Shaman_Dom_HtmlEntity.$addPair('spades', 9824);
		$Shaman_Dom_HtmlEntity.$addPair('clubs', 9827);
		$Shaman_Dom_HtmlEntity.$addPair('hearts', 9829);
		$Shaman_Dom_HtmlEntity.$addPair('diams', 9830);
		$Shaman_Dom_HtmlEntity.$addPair('quot', 34);
		$Shaman_Dom_HtmlEntity.$addPair('amp', 38);
		$Shaman_Dom_HtmlEntity.$addPair('lt', 60);
		$Shaman_Dom_HtmlEntity.$addPair('gt', 62);
		$Shaman_Dom_HtmlEntity.$addPair('OElig', 338);
		$Shaman_Dom_HtmlEntity.$addPair('oelig', 339);
		$Shaman_Dom_HtmlEntity.$addPair('Scaron', 352);
		$Shaman_Dom_HtmlEntity.$addPair('scaron', 353);
		$Shaman_Dom_HtmlEntity.$addPair('Yuml', 376);
		$Shaman_Dom_HtmlEntity.$addPair('circ', 710);
		$Shaman_Dom_HtmlEntity.$addPair('tilde', 732);
		$Shaman_Dom_HtmlEntity.$addPair('ensp', 8194);
		$Shaman_Dom_HtmlEntity.$addPair('emsp', 8195);
		$Shaman_Dom_HtmlEntity.$addPair('thinsp', 8201);
		$Shaman_Dom_HtmlEntity.$addPair('zwnj', 8204);
		$Shaman_Dom_HtmlEntity.$addPair('zwj', 8205);
		$Shaman_Dom_HtmlEntity.$addPair('lrm', 8206);
		$Shaman_Dom_HtmlEntity.$addPair('rlm', 8207);
		$Shaman_Dom_HtmlEntity.$addPair('ndash', 8211);
		$Shaman_Dom_HtmlEntity.$addPair('mdash', 8212);
		$Shaman_Dom_HtmlEntity.$addPair('lsquo', 8216);
		$Shaman_Dom_HtmlEntity.$addPair('rsquo', 8217);
		$Shaman_Dom_HtmlEntity.$addPair('sbquo', 8218);
		$Shaman_Dom_HtmlEntity.$addPair('ldquo', 8220);
		$Shaman_Dom_HtmlEntity.$addPair('rdquo', 8221);
		$Shaman_Dom_HtmlEntity.$addPair('bdquo', 8222);
		$Shaman_Dom_HtmlEntity.$addPair('dagger', 8224);
		$Shaman_Dom_HtmlEntity.$addPair('Dagger', 8225);
		$Shaman_Dom_HtmlEntity.$addPair('permil', 8240);
		$Shaman_Dom_HtmlEntity.$addPair('lsaquo', 8249);
		$Shaman_Dom_HtmlEntity.$addPair('rsaquo', 8250);
		$Shaman_Dom_HtmlEntity.$addPair('euro', 8364);
		$Shaman_Dom_HtmlEntity.$_maxEntitySize = 9;
	})();
	(function() {
		$System_Uri.uriSchemeHttp = 'http';
		$System_Uri.uriSchemeHttps = 'https';
	})();
	(function() {
		$Shaman_Dom_HtmlDocument.$htmlExceptionRefNotChild = 'Reference node must be a child of this node';
		$Shaman_Dom_HtmlDocument.$htmlExceptionUseIdAttributeFalse = 'You need to set UseIdAttribute property to true to enable this feature';
		$Shaman_Dom_HtmlDocument.$liResetters = ['ul', 'ol'];
		$Shaman_Dom_HtmlDocument.$optionResetters = ['select'];
		$Shaman_Dom_HtmlDocument.$trResetters = ['table'];
		$Shaman_Dom_HtmlDocument.$pResetters = ['div', 'header', 'footer', 'article', 'section'];
		$Shaman_Dom_HtmlDocument.$thTdResetters = ['tr', 'table'];
	})();
	(function() {
		$Shaman_Dom_HtmlNode.htmlNodeTypeNameComment = null;
		$Shaman_Dom_HtmlNode.htmlNodeTypeNameDocument = null;
		$Shaman_Dom_HtmlNode.htmlNodeTypeNameText = null;
		$Shaman_Dom_HtmlNode.elementsFlags = null;
		$Shaman_Dom_HtmlNode.htmlNodeTypeNameComment = '#comment';
		$Shaman_Dom_HtmlNode.htmlNodeTypeNameDocument = '#document';
		$Shaman_Dom_HtmlNode.htmlNodeTypeNameText = '#text';
		$Shaman_Dom_HtmlNode.elementsFlags = {};
		$Shaman_Dom_HtmlNode.elementsFlags['script'] = 1;
		$Shaman_Dom_HtmlNode.elementsFlags['style'] = 1;
		$Shaman_Dom_HtmlNode.elementsFlags['noxhtml'] = 1;
		$Shaman_Dom_HtmlNode.elementsFlags['base'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['link'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['meta'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['isindex'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['hr'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['col'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['img'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['param'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['embed'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['frame'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['wbr'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['bgsound'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['source'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['track'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['spacer'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['keygen'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['area'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['input'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['command'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['basefont'] = 2;
		$Shaman_Dom_HtmlNode.elementsFlags['br'] = 6;
	})();
	(function() {
		$Shaman_Dom_HtmlAttribute.$mustNormalizeName = 2;
		$Shaman_Dom_HtmlAttribute.none = null;
	})();
	(function() {
		$System_StringComparison.ordinalIgnoreCase = true;
	})();
})();
