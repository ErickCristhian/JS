"use strict";$(document).ready(function(){$(document).on("click",'a[href^="#"]',function(t){var e=$(this).attr("href"),n=$(e);0!==n.length&&(t.preventDefault(),$("body, html").animate({scrollTop:n.offset().top}))})});