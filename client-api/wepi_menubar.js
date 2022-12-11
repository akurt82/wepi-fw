let popup_locked = 0;

function popup ( idno, mode, bar )
{
			if ( popup_locked == 1 )
			{
				popup_locked = 0;
			}
			else
			{
				let e;
				let ee;
				// *** //
				for ( let i = 0; i < 256; i++ )
				{
					e = document.getElementById("m" + i);
					// *** //
					ee = document.getElementById("_m" + i);
					// *** //
					if( typeof(e) != 'undefined' && e != null && e.id != idno )
					{
						$(e).fadeOut("fast");
						// *** //
						if ( $(ee).hasClass( "hroot" ) )
						{
							$(ee).removeClass('hroot').addClass('root');
						}
						// *** //
						if ( $(ee).hasClass( "hitem" ) )
						{
							$(ee).removeClass('hitem').addClass('item');
						}
					}
				}
				// *** //
				$("#" + idno).fadeToggle("fast");
				$("#" + idno).css('box-shadow', '10px 10px 5px #888');
				// *** //
				if ( typeof mode === "number" && mode === 2 )
				{
					$("#" + idno).css("margin-top", 
						(- ($("#" + idno + " .inner").outerHeight() + 
						$("#" + bar + " ." + bar + "-inner").outerHeight() )) 
						+ "px" );
				}
				// *** //
				if ( typeof mode === "number" && mode === 3 )
				{
					$("#" + idno).css("position", "absolute");
					$("#" + idno).css("margin-top", 
						-$("#" + bar + " ." + bar + "-inner .root").outerHeight() + "px" );
					$("#" + idno).css("margin-left", 
					($("#" + bar + " ." + bar + "-inner").outerWidth() - 6) + "px" );
				}
				// *** //
				if ( typeof mode === "number" && mode === 4 )
				{
					$("#" + idno).css("position", "absolute");
					$("#" + idno).css("margin-top", 
						-$("#" + bar + " ." + bar + "-inner .root").outerHeight() + "px" );
					$("#" + idno).css("margin-left", 
					(- $("#" + idno + " .inner").outerWidth()) + "px" );
				}
				// *** //
				if ( $("#_" + idno).hasClass( "root" ) )
				{
					$("#_" + idno).removeClass('root').addClass('hroot');
				}
				// *** //
				if ( $("#_" + idno).hasClass( "item" ) )
				{
					$("#_" + idno).removeClass('item').addClass('hitem');
				}
			}
}

function subpopup ()
{
				if ( popup_locked == 1 )
				{
					popup_locked = 0;
				}
				else
				{
				let ok = 0;
				// *** //
				for ( let i = 0; i < 256; i++ )
				{
					e = document.getElementById("m" + i);
					// *** //
					ee = document.getElementById("_m" + i);
					// *** //
					if( typeof(e) != 'undefined' && e != null )
					{
						ok = 0;
						// *** //
						for ( let x = 0; x < arguments.length; x++ )
						{
							if ( e.id != arguments[x] ) {ok = 1; break;}
						}
						// *** //
						if ( ok == 0 )
						{
							$(e).fadeOut("fast");
							// *** //
							if ( $(ee).hasClass( "hroot" ) )
							{
								$(ee).removeClass('hroot').addClass('root');
							}
							// *** //
							if ( $(ee).hasClass( "hitem" ) )
							{
								$(ee).removeClass('hitem').addClass('item');
							}
						}
					}
				}
				// *** //
				for ( let x = 0; x < arguments.length; x++ )
				{
					$("#" + arguments[x]).fadeIn("fast");
					// *** //
					if ( $("#_" + arguments[x]).hasClass( "root" ) )
					{
						$("#_" + arguments[x]).removeClass('root').addClass('hroot');
					}
					// *** //
					if ( $("#_" + arguments[x]).hasClass( "item" ) )
					{
						$("#_" + arguments[x]).removeClass('item').addClass('hitem');
					}
				}
				}
}

function hidepopups ()
{
				if ( arguments.length > 0 )
				{
					for ( let x = 0; x < arguments.length; x++ )
					{
						$("#" + arguments[x]).fadeOut("fast");
						// *** //
						if ( $("#_" + arguments[x]).hasClass( "hroot" ) )
						{
							$("#_" + arguments[x]).removeClass('hroot').addClass('root');
						}
						// *** //
						if ( $("#_" + arguments[x]).hasClass( "hitem" ) )
						{
							$("#_" + arguments[x]).removeClass('hitem').addClass('item');
						}
					}
				}
				else
				{
					for ( let i = 0; i < 256; i++ )
					{
						let e = document.getElementById("m" + i);
						// *** //
						let ee = document.getElementById("_m" + i);
						// *** //
						if( typeof(e) != 'undefined' && e != null )
						{
							$(e).fadeOut("fast");
							// *** //
							if ( $(ee).hasClass( "hroot" ) )
							{
								$(ee).removeClass('hroot').addClass('root');
							}
							// *** //
							if ( $(ee).hasClass( "hitem" ) )
							{
								$(ee).removeClass('hitem').addClass('item');
							}
						}
					}
				}
}

function mclicked( key )//, cbk )
{
	hidepopups();
	popup_locked = 1;
	$("#test").html(key);
}

const wepi_menubar = {

	color : {
		item : {
			back : "",
			text : ""
		},
		selected : {
			back : "rgb(100,120,140)",
			text : "#FFF"
		},
		bar : {
			back : "rgb(200,200,200)",
			light : "rgba(255,255,255,0.8)",
			dark : "rgba(180, 180, 180,0.8)",
			darker : "rgba(160, 160, 160,0.8)"
		}
	},

	shadow : {
		bar : "4px 4px 4px rgba(0,0,0,0.15)",
		popup : "",
		text : "4px 4px 4px rgba(0,0,0,0.3)"
	},

	font : {
		name : "Arial",
		size : "12px",
		bold : false,
		italic : false,
		underline : false
	},

	opacity : {
		bar : 1,
		popup : 1	
	},

	edge : {
		bar : {
			tl : 0,
			tr : 0,
			bl : 0,
			br : 0
		},
		popup : {
			tl : 0,
			tr : 0,
			bl : 0,
			br : 0
		},
		root : {
			tl : 0,
			tr : 0,
			bl : 0,
			br : 0
		},
		item : {
			tl : 0,
			tr : 0,
			bl : 0,
			br : 0
		}
	},

	image : {
		bar : "",
		popup : "",
		ritem : "",
		mitem : ""
	},

	imageset : {
		mode : 0,
		cover : false
	},

	bar : {
		dock : "top",
		position : "static",
		layer : 99999,
		size : "100%"
	},

	style : "",

	separator ()
	{
		return '<hr onmousedown = "hidepopups();">';	
	},

	label ( caption )
	{
		
	},

	item ( key, caption, icon, callback )
	{
		let ret = "";
		// *** //
		ret += '<div class = "item" onclick = "mclicked(\'' + key + '\');">';
		// *** //
		if ( typeof icon === "string" && icon.length > 3 )
			ret += '<div class = "ico"><img src = "' + icon + '"></div>';
		else
			ret += '<div class = "ico">&nbsp;</div>';
		// *** //
		ret += '<div class = "ety">' + caption + '</div>';
		ret += '</div>';
		// *** //
		return ret;
	},

	hook ( key, caption, mode, callback )
	{
		let ret = "";
		// *** //
		ret += '<div class = "item" onclick = "mclicked(\'' + key + '\');">';
		// *** //
		if ( typeof mode === "boolean" && mode == true )
			ret += '<div class = "ico"><input type = "checkbox" id = "' + key + '_c" checked></div>';
		else
			ret += '<div class = "ico"><input type = "checkbox" id = "' + key + '_c"></div>';
		// *** //
		ret += '<div class = "ety">' + caption + '</div>';
		ret += '</div>';
		// *** //
		return ret;
	},

	radio ( key, caption, mode, group, callback )
	{
		let ret = "";
		// *** //
		ret += '<div class = "item" onclick = "mclicked(\'' + key + '\');">';
		// *** //
		if ( typeof mode === "boolean" && mode == true )
			ret += '<div class = "ico"><input type = "radio" id = "' + key + '_c" name = "' + group + '" selected></div>';
		else
			ret += '<div class = "ico"><input type = "radio" id = "' + key + '_c" name = "' + group + '" ></div>';
		// *** //
		ret += '<div class = "ety">' + caption + '</div>';
		ret += '</div>';
		// *** //
		return ret;
	},

	root ( popupId, caption, items, maxheight = "" )
	{
		let ret = "";
		// *** //
		if ( this.bar.dock === "top" || this.bar.dock === "topslim" )
			ret += '<div onclick = "popup(\'m'+ popupId +'\',1,\''+ this.style +'\');">';
		else if ( this.bar.dock === "bottom" || this.bar.dock === "bottomslim" )
			ret += '<div onclick = "popup(\'m'+ popupId +'\',2,\''+ this.style +'\');">';
		else if ( this.bar.dock === "left" || this.bar.dock === "leftslim" )
			ret += '<div onclick = "popup(\'m'+ popupId +'\',3,\''+ this.style +'\');">';
		else if ( this.bar.dock === "right" || this.bar.dock === "rightslim" )
			ret += '<div onclick = "popup(\'m'+ popupId +'\',4,\''+ this.style +'\');">';
		// *** //
		ret += '<div class = "root" id = "_m'+ popupId +'">' + caption + '</div>';
		ret += '<div class = "popup" id = "m'+ popupId +'" style = "display: none;">';
		ret += '<div class = "list">';
		ret += '<div class = "inner">';
		// *** //
		if ( maxheight === "" )
			ret += '<div class = "lipanel">';
		else
			ret += '<div class = "lipanel" style = "max-height:' + maxheight + ';">';
		// *** //
		ret += items;
		ret += '</div></div></div></div></div>';
		// *** //
		return ret;
	},

	popup ( myPopupId, popupIdArray, caption, icon, items, maxheight = "" )
	{
		let ret = "";
		// *** //
		ret += '<div onmouseover = "subpopup(';
		// *** //
		for ( let a = 0; a < popupIdArray.length; a++ )
		{
			if ( a > 0 )
				ret += ', ';
			ret += '\'m' + popupIdArray[a] + '\'';
		}
		// *** //
		ret += ');" class = "subpopup">';
		ret += '<div class = "root" id = "_m' + myPopupId + '">';
		// *** //
		if ( typeof icon === "string" && icon.length > 3 )
			ret += '<div class = "ico"><img src = "' + icon + '"></div>';
		else
			ret += '<div class = "ico">&nbsp;</div>';
		// *** //
		ret += '<div class = "ety"><span>' + caption + '</span> <span id = "sparrow" class = "sparrow">&nbsp;</span></div>';
		ret += '</div>';
		ret += '<div class = "popup" id = "m' + myPopupId + '" style = "display: none;">';
		ret += '<div class = "list">';
		ret += '<div class = "inner">';
		// *** //
		if ( maxheight === "" )
			ret += '<div class = "lipanel">';
		else
			ret += '<div class = "lipanel" style = "max-height:' + maxheight + ';">';
		// *** //
		ret += items;
		ret += '</div></div></div></div></div>';
		// *** //
		return ret;
	},

	newbar ( left, right )
	{
		let ret = "";
		// *** //
		ret += '<div id = "' + this.style + '" class = "' + this.style + '" style = "';
		ret += 'position: ' + this.bar.position + ';';
		// *** //
		if ( this.bar.dock === "top" || this.bar.dock === "left" ||
		     this.bar.dock === "topslim" || this.bar.dock === "leftslim" )
		{
			if ( this.bar.position != "static" )
			{
				ret += 'top: 0px;';
				ret += 'left: 0px;';
				ret += 'z-index: ' + this.bar.layer + ';';
				// *** //
				if ( this.bar.dock === "top" )
				{
					ret += 'width: ' + this.bar.size + ';';	
				} 
				else if ( this.bar.dock === "left" ) 
				{
					ret += 'height: ' + this.bar.size + ';';
				}
			}
		}
		// *** //
		else 
		if ( this.bar.dock === "bottom" || this.bar.dock === "bottomslim" )
		{
			if ( this.bar.position != "static" )
			{
				ret += 'bottom: 0px;';
				ret += 'left: 0px;';
				ret += 'z-index: ' + this.bar.layer + ';';
				if ( this.bar.dock === "bottom" )
					ret += 'width: ' + this.bar.size + ';';	
			}
		}
		// *** //
		else 
		if ( this.bar.dock === "right" || this.bar.dock === "rightslim" )
		{
			if ( this.bar.position != "static" )
			{
				ret += 'right: 0;';
				ret += 'top: 0px;';
				ret += 'z-index: ' + this.bar.layer + ';';
				if ( this.bar.dock === "right" )
					ret += 'height: ' + this.bar.size + ';';
			}
		}
		// *** //
		ret += '">';
		ret += '<div class = "' + this.style + '-outer">';
		ret += '<div class = "' + this.style + '-inner">';
		// *** //
		if ( typeof left === "string" )
			ret += '<div class = "left">' + left + '</div>';
		// *** //
		if ( typeof right === "string" )
			ret += '<div class = "right">' + right + '</div>';
		// *** //
		ret += '</div></div></div>';
		// *** //
		return ret;
	},

	create ( target, code )
	{
		let idn = "." + this.style;
		let ido = "." + this.style + "-outer";
		let idi = "." + this.style + "-inner";
		// *** //
		let ret = "";
		// *** //
		ret += '<style type = "text/css">';
		ret += idn + " {";
		ret += 'font-family: ' + this.font.name + ';';
		ret += 'font-size: ' + this.font.size + ';';
		ret += 'background-color: ' + this.color.bar.back + ';';
		ret += 'box-shadow: ' + this.shadow.bar + ';';
		ret += '}  ';
		// *** //
		ret += ido + '{';
		ret += 'background-color: ' + this.color.bar.back + ';';
		ret += 'border-right: 1px solid ' + this.color.bar.darker + ';';
		ret += 'border-bottom: 1px solid ' + this.color.bar.darker + ';';
		// *** //
		if ( this.bar.dock === "top" || this.bar.dock === "topslim" )
		{
			ret += 'border-bottom-left-radius: 4px;';
			ret += 'border-bottom-right-radius: 4px;';
			ret += 'width: 100%;';
		}
		else if ( this.bar.dock === "left" || this.bar.dock === "leftslim" )
		{
			ret += 'border-top-right-radius: 4px;';
			ret += 'border-bottom-right-radius: 4px;';
		}
		else if ( this.bar.dock === "right" || this.bar.dock === "rightslim" )
		{
			ret += 'border-top-left-radius: 4px;';
			ret += 'border-bottom-left-radius: 4px;';
			ret += 'height: 100%;';
		}
		else if ( this.bar.dock === "bottom" || this.bar.dock === "bottomslim" )
		{
			ret += 'border-top-left-radius: 4px;';
			ret += 'border-top-right-radius: 4px;';
		}
		// *** //
		ret += '}  ';
		ret += idi + '{';
		ret += 'padding: 2px;';
		ret += 'border: 1px solid ' + this.color.bar.light + ';';
		ret += 'border-right: 1px solid ' + this.color.bar.dark + ';';
		ret += 'border-bottom: 1px solid ' + this.color.bar.dark + ';';
		// *** //
		if ( this.bar.dock === "top" || this.bar.dock === "bottom" ||
			 this.bar.dock === "topslim" || this.bar.dock === "bottomslim" )
		{
			ret += 'justify-content: space-between;';
			ret += 'display: flex;';
		}
		else
		{
			ret += 'height: 100%;';
		}
		// *** //
		ret += '}  ';
		// *** //
		if ( this.bar.dock === "top" || this.bar.dock === "bottom" ||
			 this.bar.dock === "topslim" || this.bar.dock === "bottomslim" )
		{
			ret += idn + ' .left, ' + idn + ' .right {';
			ret += 'display: flex;';
			ret += '}  ';
		}
		// *** //
		ret += idn + ' hr {';
		ret += 'border: none;';
		ret += 'border-top: 1px solid rgb(160,160,160);';
		ret += 'border-bottom: 1px solid #FFF;';
		ret += 'margin: 0 10%;';
		ret += 'margin-top: 2px;';
		ret += 'margin-bottom: 2px;';
		ret += '}  ';
		ret += idn + ' .root, ' + idn + ' .popup .list .item,';
		ret += idn + ' .hroot, ' + idn + ' .popup .list .hitem';
		ret += '{';
		ret += 'padding: 8px;';
		ret += 'cursor: pointer;';
		ret += 'text-align: left;';
		ret += '}  ';
		ret += idn + ' .popup .root, ' + idn + ' .popup .hroot';
		ret += '{';
		ret += 'padding: 8px;';
		ret += 'cursor: pointer;';
		ret += 'text-align: left;';
		ret += 'width: 100%;';
		ret += '}  ';
		ret += idn + ' .root:hover, ' + idn + ' .popup .root:hover, ';
		ret += idn + ' .popup .list .item:hover,';
		ret += idn + ' .hroot, ' + idn + ' .popup .hroot, ';
		ret += idn + ' .popup .list .hitem';
		ret += '{';
		ret += 'text-shadow: ' + this.shadow.text + ';';
		ret += 'background-color: ' + this.color.selected.back + ';';
		ret += 'box-shadow: inset 4px 4px 4px rgba(0,0,0,0.08);';
		ret += 'vertical-align: middle;';
		ret += 'align-items: center;';
		ret += 'color: ' + this.color.selected.text + ';';
		ret += '}  ';
		ret += idn + ' .root img, ' + idn + ' .popup .list .item img,';
		ret += idn + ' .hroot img, ' + idn + ' .popup .list .hitem img,';
		ret += idn + ' .root:hover img, ' + idn + ' .popup .root:hover img, ';
		ret += idn + ' .popup .list .item:hover img,';
		ret += idn + ' .hroot img, ' + idn + ' .popup .hroot img, ';
		ret += idn + ' .popup .list .hitem img';
		ret += '{';
		ret += 'margin-right: 12px;';
		ret += 'max-height: 28px;';
		ret += '}  ';
		ret += idn + ' .popup .root, ' + idn + ' .popup .hroot';
		ret += '{';
		ret += 'display: flex;';
		ret += 'justify-content: space-between;';
		ret += 'vertical-align: middle;';
		ret += 'align-items: center;';
		ret += '}  ';
		ret += idn + ' .popup .root div:nth-child(2), ';
		ret += idn + ' .popup .hroot div:nth-child(2),';
		ret += idn + ' .popup .item div:nth-child(2), ';
		ret += idn + ' .popup .hitem div:nth-child(2)';
		ret += '{';
		ret += 'text-align: left;';
		ret += 'align-items: center;';
		ret += 'display: flex;';
		ret += 'justify-content: space-between;';
		ret += 'width: 100%;';
		ret += '}  ';
		ret += idn + ' .popup .root div:nth-child(2) span:nth-child(2), ';
		ret += idn + ' .popup .hroot div:nth-child(2) span:nth-child(2),';
		ret += idn + ' .popup .item div:nth-child(2) span:nth-child(2), ';
		ret += idn + ' .popup .hitem div:nth-child(2) span:nth-child(2)';
		ret += '{';
		ret += 'width: 0;';
		ret += 'margin-top: 5px;';
		ret += 'margin-bottom: 5px;';
		ret += '}  ';
		ret += idn + ' .popup .item';
		ret += '{';
		ret += 'display: flex;';
		ret += 'text-align: left;';
		ret += 'padding-right: 30px;';
		ret += '}  ';
		ret += idn + ' .popup .item .ico';
		ret += '{';
		ret += 'margin: 0;';
		ret += 'padding: 0;';
		ret += 'margin-right: 12px;';
		ret += 'width: 20px;';
		ret += 'justify-content: center;';
		ret += 'align-items: center;';
		ret += 'text-align: center;';
		ret += 'vertical-align: middle;';
		ret += '}  ';
		ret += idn + ' .popup .item .ety';
		ret += '{';
		ret += 'margin: 0;';
		ret += 'padding: 0;';
		ret += 'text-align: left;';
		ret += 'vertical-align: middle;';
		ret += '}  ';
		ret += idn + ' .popup .root .sparrow, ' + idn + ' .popup .hroot .sparrow';
		ret += '{';
		ret += 'width: 0;';
		ret += 'height: 0;';
		ret += 'border-top: 6px solid transparent;';
		ret += 'border-bottom: 6px solid transparent;';
		ret += 'border-left: 6px solid #000;';
		ret += 'margin-top: auto;';
		ret += 'margin-bottom: auto;';
		ret += '}  ';
		ret += idn + ' .popup .root .sharrow, ' + idn + ' .popup .hroot .sharrow';
		ret += '{';
		ret += 'width: 0;';
		ret += 'height: 0;';
		ret += 'border-top: 6px solid transparent;';
		ret += 'border-bottom: 6px solid transparent;';
		ret += 'border-left: 6px solid #FFF;';
		ret += 'margin-top: auto;';
		ret += 'margin-bottom: auto;';
		ret += '}  ';
		ret += idn + ' .popup .root:hover .sparrow, ' + idn + ' .popup .hroot:hover .sparrow';
		ret += '{';
		ret += 'width: 0;';
		ret += 'height: 0;';
		ret += 'border-top: 6px solid transparent;';
		ret += 'border-bottom: 6px solid transparent;';
		ret += 'border-left: 6px solid #FFF;';
		ret += '}  ';
		ret += idn + ' .popup';
		ret += '{';
		ret += 'border-bottom-left-radius: 4px;';
		ret += 'border-bottom-right-radius: 4px;';
		ret += '}  ';
		ret += idn + ' .popup .list';
		ret += '{';
		ret += 'position: absolute;';
		ret += 'background-color: rgba(200,200,200,0.95);';
		ret += 'padding: 0px 0px;';
		ret += 'margin: 0px 0px;';
		ret += 'padding-top: 1px;';
		ret += 'padding-left: 1px;';
		ret += 'border-right: 1px solid rgba(160, 160, 160,0.8);';
		ret += 'border-bottom: 1px solid rgba(160, 160, 160,0.8);';
		ret += 'border-bottom-left-radius: 4px;';
		ret += 'border-bottom-right-radius: 4px;';
		ret += 'min-width: 160px;';
		ret += 'box-shadow: 4px 4px 4px rgba(0,0,0,0.15);';
		// *** //
		ret += '}  ';
		ret += idn + ' .popup .list .inner';
		ret += '{';
		ret += 'margin: 0px 0px;';
		ret += 'padding: 2px;';
		ret += 'border: 1px solid rgba(255,255,255,0.8);';
		ret += 'border-right: 1px solid rgba(180, 180, 180,0.8);';
		ret += 'border-bottom: 1px solid rgba(180, 180, 180,0.8);';				
		ret += 'border-bottom-left-radius: 4px;';
		ret += 'border-bottom-right-radius: 4px;';
		ret += '}  ';
		ret += idn + ' .popup .list .inner .lipanel';
		ret += '{';
		ret += 'max-height: 400px;';
		ret += 'overflow: auto;';
		ret += '}  ';
		ret += idn + ' .right .popup .root, .menubar .right .popup .hroot';
		ret += '{';
		ret += 'direction: ltr;';
		ret += '}  ';
		ret += idn + ' .popup .subpopup';
		ret += '{';
		ret += 'display: flex;';
		ret += 'justify-content: space-between;';
		ret += '}  ';
		ret += idn + ' .right .popup';
		ret += '{';
		ret += 'direction: rtl;';
		ret += '}  ';
		ret += '.menubar .popup .root div:nth-child(2), ';
		ret += '.menubar .popup .hroot div:nth-child(2),';
		ret += '.menubar .popup .item div:nth-child(2), ';
		ret += '.menubar .popup .hitem div:nth-child(2)';
		ret += '{';
		ret += 'direction: ltr;';
		ret += 'text-align: left;';
		ret += 'width: 100%;';
		ret += '}  ';
		ret += '@media only screen and (max-width: 560px) {';
		ret += idn + '{';
		ret += 'box-shadow: none;';
		ret += '}  ';
 		ret += idi + '{';
		ret += 'padding: 2px;';
		ret += 'border: 1px solid rgba(255,255,255,0.8);';
		ret += 'border-right: 1px solid rgba(180, 180, 180,0.8);';
		ret += 'border-bottom: 1px solid rgba(180, 180, 180,0.8);';
		ret += 'justify-content: space-between;';
		ret += 'display: block;';
		// *** //
		if ( this.bar.dock === "left" || this.bar.dock === "right" )
		{
			ret += 'height: 100%;';
		}
		// *** //
		ret += '}  ';
		ret += idn + ' .left, ' + idn + ' .right';
		ret += '{';
		ret += 'display: block;';
		ret += '}  ';
		ret += idn + ' .popup .list';
		ret += '{';
		ret += 'position: static;';
		ret += 'min-width: auto;';
		ret += 'overflow-x: hidden;';
		ret += 'box-shadow: none;';
		ret += '}  ';
		ret += idn + ' .popup .subpopup';
		ret += '{';
		ret += 'display: block;';
		ret += 'justify-content: space-between;';
		ret += 'overflow-x: hidden;';
		ret += 'box-shadow: none;';
		ret += '}  ';
		ret += idn + ' .right .popup';
		ret += '{';
		ret += 'direction: ltr;';
		ret += '}  ';
		ret += '}  ';
		ret += '</style>';
		ret += code;
		// *** //
		$(target).html($(target).html() + ret);
		// *** //
		return ret;
	}

}