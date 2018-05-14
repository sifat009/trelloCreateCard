// const key = 'eec38f00c2952d05b3ce7ffa12b1e8eb';
// const token = '92d6cf2de2d7a5f619ffeb0f43457eb1a76bbef8547119fa3d50a90493dcf1b6';
// const boardId = 'poqO4b9d';
// const supportBoardId = 'poqO4b9d';
// const supportUrl = `https://api.trello.com/1/board/${supportBoardId}?key=${key}&token=${token}`;
// let myBoards;

// authentication

// var authenticationSuccess = function() {
//   console.log('Successful authentication');
// };


//get the questions from JSON file

function getQuestions(jsonData) {
  return {
    title: jsonData.title,
    link : jsonData.permalink.split("&")[0]
  }
}

let jsonData = {"posts":[{"id":"140440","permalink":"https:\/\/www.joomshaper.com\/forums\/minor-problems-on-joomla-4-alpha-3&format=json","title":"Minors problems on Joomla 4 Alpha 3","user_id":"187145","hits":"4","vote":"0","state":"1","locked":"0","created":"2018-05-13 03:52:11","modified":"2018-05-13 03:52:11","content":"It's something minor, and you probably know already. I've downloaded and installed Joomla 4 Alpha 3, and installed Ultimate in it. Of course it works, but I wasn't able to save any setting in the template. \r\n\r\nIt's an alpha, not for production, but I thought you may want to know. ","preview":"It's something minor, and you probably know already. I've downloaded and installed Joomla 4 Alpha 3, and installed Ultimate in it. Of course it works, but I wasn't able to save any setting in the template. <br>\r\n<br>\r\nIt's an alpha, not for production, but I thought you may want to know.","replies":[],"comments":[]},{"id":"140440","permalink":"https:\/\/www.joomshaper.com\/forums\/minor-problems-on-joomla-4-alpha-3&format=json","title":"Minor problems on Joomla 4 Alpha 3","user_id":"187145","hits":"4","vote":"0","state":"1","locked":"0","created":"2018-05-13 03:52:11","modified":"2018-05-13 03:52:11","content":"It's something minor, and you probably know already. I've downloaded and installed Joomla 4 Alpha 3, and installed Ultimate in it. Of course it works, but I wasn't able to save any setting in the template. \r\n\r\nIt's an alpha, not for production, but I thought you may want to know. ","preview":"It's something minor, and you probably know already. I've downloaded and installed Joomla 4 Alpha 3, and installed Ultimate in it. Of course it works, but I wasn't able to save any setting in the template. <br>\r\n<br>\r\nIt's an alpha, not for production, but I thought you may want to know.","replies":[],"comments":[]},{"id":"140439","permalink":"https:\/\/www.joomshaper.com\/forums\/my-template-in-the-admin-is-just-text&format=json","title":"My Template in the Admin is just text","user_id":"151389","hits":"4","vote":"0","state":"1","locked":"0","created":"2018-05-12 23:08:08","modified":"2018-05-12 23:08:08","content":"\/ extensions \/templates \/ shaper_revibe - Default\/\r\n\r\nI just get text. please see attached. Why? \r\n\r\nCan you please alphabetize your list of templates \r\n\r\n- Levon","preview":"\/ extensions \/templates \/ shaper_revibe - Default\/<br>\r\n<br>\r\nI just get text. please see attached. Why? <br>\r\n<br>\r\nCan you please alphabetize your list of templates <br>\r\n<br>\r\n- Levon","replies":[],"comments":[]},{"id":"140438","permalink":"https:\/\/www.joomshaper.com\/forums\/help-with-sub-menu&format=json","title":"Help with Sub-Menu","user_id":"144638","hits":"5","vote":"0","state":"1","locked":"0","created":"2018-05-12 22:39:35","modified":"2018-05-12 22:39:35","content":"I'm using VM3 with this now and it seems to be working fine except in the Buy Now drop down menu it drops down and the sub menu items don't show up unless you hover over them.  I'm assuming there must be a setting somewhere to change that but I can't seem to find it.  \r\n\r\nIf you can give me some direction there, I'd really appreciate it.\r\n\r\nWebsite: http:\/\/technigraphic.mtnwestdev.com\/","preview":"I'm using VM3 with this now and it seems to be working fine except in the Buy Now drop down menu it drops down and the sub menu items don't show up unless you hover over them.  I'm assuming there must be a setting somewhere to change that but I can't seem to find it.  <br>\r\n<br>\r\nIf you can give me some direction there, I'd really appreciate it.<br>\r\n<br>\r\nWebsite: <a href=\"http:\/\/technigraphic.mtnwestdev.com\"  target=\"_blank\" rel=\"nofollow\">http:\/\/technigraphic.mtnwestdev.com<\/a>\/","replies":[],"comments":[]},{"id":"140433","permalink":"https:\/\/www.joomshaper.com\/forums\/quickstart-not-working-4&format=json","title":"Quickstart Not Working","user_id":"214506","hits":"9","vote":"0","state":"1","locked":"0","created":"2018-05-12 18:22:59","modified":"2018-05-12 18:22:59","content":"I have used Quickstart with a few different templates in past 60 days.  Today, I attempted to follow the same quickstart guides as I had successfully before and neither the Finance QuickStart or the Revibe Quickstart worked. \r\n\r\nHas this process changed in some way or are these templates having errors currently?","preview":"I have used Quickstart with a few different templates in past 60 days.  Today, I attempted to follow the same quickstart guides as I had successfully before and neither the Finance QuickStart or the Revibe Quickstart worked. <br>\r\n<br>\r\nHas this process changed in some way or are these templates having errors currently?","replies":[],"comments":[]},{"id":"140429","permalink":"https:\/\/www.joomshaper.com\/forums\/youtube-video-wall-too-slow-how-to-solve&format=json","title":"YouTube Video wall too slow, How to solve","user_id":"189789","hits":"11","vote":"0","state":"1","locked":"0","created":"2018-05-12 17:08:24","modified":"2018-05-12 17:12:05","content":"Hi guys, \r\nas far as I know each time I embed a YouTube Video (Carousel Pro \/ Modal popup \/ Video addons) the only amount of data is of the few bytes it takes to add the video player embed code in your HTML pages because should both, the youtube player and the video content, be streamed from Youtube's server ([url=https:\/\/www.quora.com\/How-much-web-space-does-a-website-with-1000-embedded-video-links-to-YouTube-take]here[\/url] a discussion example).\r\n\r\nBut, I made some simple tests and it is not true, read [url=https:\/\/www.labnol.org\/internet\/light-youtube-embeds\/27941\/]here[\/url], when I embed few videos in a page the page is evidently slower to load (at least more than 500KB for each player).\r\nYou can see the problem [url=https:\/\/507panama.com]here[\/url] where I had to build a YouTube wall player.\r\nThe slow affect all the page Animations, really an awful result...\r\n\r\nHow to solve it ?!?\r\nIn my opinion, and also as suggested from that blogger, the only way is to add, for each addon I can embed Video (Carousel Pro \/ Modal popup \/ Video addons), the option to charge an image (as preview, the YouTube thumbnail image is around 15 KB) with a centered YouTube Play icon instead to load directly the YouTube Player. Only when I click on play the player will be charged and start video as setted.\r\n\r\nNow, as far as I know, I can hope to do something manually, but some help is need:\r\n\r\n[b]1[\/b] - Could be used a \"modified\" Icon \/ Button link \/ Modal popup addon, where\r\n\r\n[b]2[\/b] - I can always add a responsive background Addon image (the preview). Pleease, Do you have any suggestion on How to do it in the best way ? Which are the best settings, format and resolution ?\r\n\r\n[b]3[\/b] - How to add the [url=https:\/\/www.youtube.com\/intl\/en\/yt\/about\/brand-resources\/#logos-icons-colors]YouTube quite black[\/url] #282828 button transparency Icon ?\r\n\r\n[b]4[\/b] - How to have the Icon horizontally \/ vertically centered into the addon ?\r\n\r\n[b]5[\/b] - When click on Play icon, How to charge the YouTube video player link directly into the addon (\"module\"), not opening it (link) in a new page and without charging again the site page ?\r\n\r\nPlease, Can you help me ?\r\nIn your opinion, what isthe best Addon to use for it ?\r\nHow to solve manually the point 3 \/ 4 \/ 5 points ?\r\n\r\nAll suggestions and helps are too welcome!","preview":"Hi guys, <br>\r\nas far as I know each time I embed a YouTube Video (Carousel Pro \/ Modal popup \/ Video addons) the only amount of data is of the few bytes it takes to add the video player embed code in your HTML pages because should both, the youtube player and the video content, be streamed from Youtube's server (<a href=\"https:\/\/www.quora.com\/How-much-web-space-does-a-website-with-1000-embedded-video-links-to-YouTube-take\" target=\"_blank\" rel=\"nofollow\">here<\/a> a discussion example).<br>\r\n<br>\r\nBut, I made some simple tests and it is not true, read <a href=\"https:\/\/www.labnol.org\/internet\/light-youtube-embeds\/27941\/\" target=\"_blank\" rel=\"nofollow\">here<\/a>, when I embed few videos in a page the page is evidently slower to load (at least more than 500KB for each player).<br>\r\nYou can see the problem <a href=\"https:\/\/507panama.com\" target=\"_blank\" rel=\"nofollow\">here<\/a> where I had to build a YouTube wall player.<br>\r\nThe slow affect all the page Animations, really an awful result...<br>\r\n<br>\r\nHow to solve it ?!?<br>\r\nIn my opinion, and also as suggested from that blogger, the only way is to add, for each addon I can embed Video (Carousel Pro \/ Modal popup \/ Video addons), the option to charge an image (as preview, the YouTube thumbnail image is around 15 KB) with a centered YouTube Play icon instead to load directly the YouTube Player. Only when I click on play the player will be charged and start video as setted.<br>\r\n<br>\r\nNow, as far as I know, I can hope to do something manually, but some help is need:<br>\r\n<br>\r\n<strong>1<\/strong> - Could be used a &quot;modified&quot; Icon \/ Button link \/ Modal popup addon, where<br>\r\n<br>\r\n<strong>2<\/strong> - I can always add a responsive background Addon image (the preview). Pleease, Do you have any suggestion on How to do it in the best way ? Which are the best settings, format and resolution ?<br>\r\n<br>\r\n<strong>3<\/strong> - How to add the <a href=\"https:\/\/www.youtube.com\/intl\/en\/yt\/about\/brand-resources\/#logos-icons-colors\" target=\"_blank\" rel=\"nofollow\">YouTube quite black<\/a> #282828 button transparency Icon ?<br>\r\n<br>\r\n<strong>4<\/strong> - How to have the Icon horizontally \/ vertically centered into the addon ?<br>\r\n<br>\r\n<strong>5<\/strong> - When click on Play icon, How to charge the YouTube video player link directly into the addon (&quot;module&quot<img alt=\";)\" class=\"bb-smiley\" src=\"\/media\/com_easydiscuss\/images\/markitup\/emoticon-wink.png\" \/>, not opening it (link) in a new page and without charging again the site page ?<br>\r\n<br>\r\nPlease, Can you help me ?<br>\r\nIn your opinion, what isthe best Addon to use for it ?<br>\r\nHow to solve manually the point 3 \/ 4 \/ 5 points ?<br>\r\n<br>\r\nAll suggestions and helps are too welcome!","replies":[],"comments":[]},{"id":"140428","permalink":"https:\/\/www.joomshaper.com\/forums\/frontend-languages&format=json","title":"Frontend Languages","user_id":"189789","hits":"17","vote":"0","state":"1","locked":"0","created":"2018-05-12 15:47:20","modified":"2018-05-12 15:47:20","content":"Hi guys, \r\nJoomla 3.8.7 (En - Es - Fr - It languages installed) + Helix Ultimate 1.0.2 + SP Page Builder 3.2.1 (Any language installed yet).\r\nMy default language is Spanish\r\n\r\nAs you can see (I attach an image), the Opt-in form show me correctly the \"suscribir\" (Spanish) button, while into the fields are \"Name\" \/ \"Email\" while should be in Spanish.\r\nSeem that SP Page Builder do not call the standard default Joomla language string, Am I right ?\r\nIf so, in my opinion is a bug. All the times we use standard fields and we can use any of the standard language string we should use them !\r\n\r\nAs far as I understand, right now, the situation should change installing the SP Page Builder Spanish language, Am I right ?","preview":"Hi guys, <br>\r\nJoomla 3.8.7 (En - Es - Fr - It languages installed) + Helix Ultimate 1.0.2 + SP Page Builder 3.2.1 (Any language installed yet).<br>\r\nMy default language is Spanish<br>\r\n<br>\r\nAs you can see (I attach an image), the Opt-in form show me correctly the &quot;suscribir&quot; (Spanish) button, while into the fields are &quot;Name&quot; \/ &quot;Email&quot; while should be in Spanish.<br>\r\nSeem that SP Page Builder do not call the standard default Joomla language string, Am I right ?<br>\r\nIf so, in my opinion is a bug. All the times we use standard fields and we can use any of the standard language string we should use them !<br>\r\n<br>\r\nAs far as I understand, right now, the situation should change installing the SP Page Builder Spanish language, Am I right ?","replies":[],"comments":[]},{"id":"140427","permalink":"https:\/\/www.joomshaper.com\/forums\/image-addon-margin-bottom&format=json","title":"Image addon margin bottom","user_id":"189789","hits":"11","vote":"0","state":"1","locked":"0","created":"2018-05-12 15:28:06","modified":"2018-05-12 15:28:06","content":"Hi guys, \r\nI set a 40px margin bottom Style in my \"Russia\" Image addon, but as far as I understand it is applied only on my desktop view and is missing on mobile view, [url=https:\/\/507panama.com\/]here[\/url] the site and I attach two images...\r\n\r\nPlease, What am I missing ?","preview":"Hi guys, <br>\r\nI set a 40px margin bottom Style in my &quot;Russia&quot; Image addon, but as far as I understand it is applied only on my desktop view and is missing on mobile view, <a href=\"https:\/\/507panama.com\/\" target=\"_blank\" rel=\"nofollow\">here<\/a> the site and I attach two images...<br>\r\n<br>\r\nPlease, What am I missing ?","replies":[],"comments":[]},{"id":"140426","permalink":"https:\/\/www.joomshaper.com\/forums\/sp-page-builder-pro-options-still-closed&format=json","title":"SP Page Builder Pro, options still closed","user_id":"61195","hits":"14","vote":"0","state":"1","locked":"0","created":"2018-05-12 15:11:35","modified":"2018-05-12 15:11:35","content":"Hello, I have been your client for three years. So far, I used all your tools only on my servers and I never had any problems.\r\nNow I currently have one client who wanted to stay at his host. The host is very bad and has a smaller upload than 2mb.\r\nI installed the PageBuilder SP via url, and added the license code and email.\r\nStill, when I try to use SP Page Builder Pro, options are still closed?\r\n\r\nPlease, can you help me to solve this problem?\r\n","preview":"Hello, I have been your client for three years. So far, I used all your tools only on my servers and I never had any problems.<br>\r\nNow I currently have one client who wanted to stay at his host. The host is very bad and has a smaller upload than 2mb.<br>\r\nI installed the PageBuilder SP via url, and added the license code and email.<br>\r\nStill, when I try to use SP Page Builder Pro, options are still closed?<br>\r\n<br>\r\nPlease, can you help me to solve this problem?","replies":[],"comments":[]},{"id":"140424","permalink":"https:\/\/www.joomshaper.com\/forums\/change-column-order-on-smaller-screens&format=json","title":"Change column order on smaller screens","user_id":"65695","hits":"7","vote":"0","state":"1","locked":"0","created":"2018-05-12 13:25:12","modified":"2018-05-12 13:25:12","content":"Hi\r\n\r\nI can see there have been requests made to include a column push\/pull option inside SP Page Builder, which would be ideal, but in the short term please could some advice me whether there is a CSS solution that I can use to replicate .[b]col-md-pull-6[\/b] and .[b]col-md-push-6[\/b] so it will display the right column image above the left column text within a Page Builder row.\r\n\r\nI've tried everything I can think of in the custom class field but I just can't seem to get it working inside a Page Builder row.\r\n\r\nAssistance would be greatly appreciated. \r\n\r\nMany thanks\r\nMike\r\n\r\n","preview":"Hi<br>\r\n<br>\r\nI can see there have been requests made to include a column push\/pull option inside SP Page Builder, which would be ideal, but in the short term please could some advice me whether there is a CSS solution that I can use to replicate .<strong>col-md-pull-6<\/strong> and .<strong>col-md-push-6<\/strong> so it will display the right column image above the left column text within a Page Builder row.<br>\r\n<br>\r\nI've tried everything I can think of in the custom class field but I just can't seem to get it working inside a Page Builder row.<br>\r\n<br>\r\nAssistance would be greatly appreciated. <br>\r\n<br>\r\nMany thanks<br>\r\nMike","replies":[],"comments":[]},{"id":"140423","permalink":"https:\/\/www.joomshaper.com\/forums\/how-can-we-set-an-image-video-background-behind-the-header-navigation-bar&format=json","title":"How can we set an image\/video background behind the header\/navigation bar?","user_id":"143304","hits":"13","vote":"0","state":"1","locked":"0","created":"2018-05-12 13:16:18","modified":"2018-05-12 13:16:18","content":"Hi,\r\n\r\nWhat's the best way to set the header\/navigation bar to be transparent and have a video\/image behind it?\r\n\r\nPlease see screenshot attached for example.\r\n\r\n","preview":"Hi,<br>\r\n<br>\r\nWhat's the best way to set the header\/navigation bar to be transparent and have a video\/image behind it?<br>\r\n<br>\r\nPlease see screenshot attached for example.","replies":[],"comments":[]},{"id":"140422","permalink":"https:\/\/www.joomshaper.com\/forums\/mp4-video-fails-to-upload&format=json","title":"MP4 Video fails to upload?","user_id":"143304","hits":"13","vote":"0","state":"1","locked":"0","created":"2018-05-12 13:12:35","modified":"2018-05-12 13:12:35","content":"Hi,\r\n\r\nFor some reason every time we try and upload an MP4 video as a background, it fails.\r\nAnd when we try and select a video from the media manager, nothing shows up...\r\n\r\nPlease advise.\r\n\r\nThanks","preview":"Hi,<br>\r\n<br>\r\nFor some reason every time we try and upload an MP4 video as a background, it fails.<br>\r\nAnd when we try and select a video from the media manager, nothing shows up...<br>\r\n<br>\r\nPlease advise.<br>\r\n<br>\r\nThanks","replies":[],"comments":[]},{"id":"140421","permalink":"https:\/\/www.joomshaper.com\/forums\/helix3-2&format=json","title":"Helix3","user_id":"172471","hits":"17","vote":"0","state":"1","locked":"0","created":"2018-05-12 12:58:57","modified":"2018-05-12 12:58:57","content":"HI.\r\nJust a question. \r\n1. Do you have to use Helix3 to have to all module positions in the \"Doctor\" template?\r\n\r\nI'm using SP Page Builder Pro but I can't seem to find of the positions.\r\n\r\nThanks in advance for the help.","preview":"HI.<br>\r\nJust a question. <br>\r\n1. Do you have to use Helix3 to have to all module positions in the &quot;Doctor&quot; template?<br>\r\n<br>\r\nI'm using SP Page Builder Pro but I can't seem to find of the positions.<br>\r\n<br>\r\nThanks in advance for the help.","replies":[],"comments":[]},{"id":"140420","permalink":"https:\/\/www.joomshaper.com\/forums\/can-t-add-checkbox-to-contact-form&format=json","title":"can't add Checkbox to Contact Form","user_id":"192412","hits":"15","vote":"0","state":"1","locked":"0","created":"2018-05-12 12:20:55","modified":"2018-05-12 12:26:10","content":"Dear Support,\r\n\r\nIf i activate the Option \"Show Checkbox\" no checkbox is displayed in the frontend. I've test it with SP-Pagebuilder V 3.1.3 and after update to 3.2.1. But the bug remains...\r\n\r\nI can not see any reference to the checkbox in the source code... As if the checkbox were not added... \r\n\r\nit is still possible to send contact requests (without activating the checkbox, because it is not displayed)\r\n\r\nCan you help me to resolve?","preview":"Dear Support,<br>\r\n<br>\r\nIf i activate the Option &quot;Show Checkbox&quot; no checkbox is displayed in the frontend. I've test it with SP-Pagebuilder V 3.1.3 and after update to 3.2.1. But the bug remains...<br>\r\n<br>\r\nI can not see any reference to the checkbox in the source code... As if the checkbox were not added... <br>\r\n<br>\r\nit is still possible to send contact requests (without activating the checkbox, because it is not displayed)<br>\r\n<br>\r\nCan you help me to resolve?","replies":[],"comments":[]},{"id":"140416","permalink":"https:\/\/www.joomshaper.com\/forums\/annother-checkbox-to-appointment-form&format=json","title":"Annother Checkbox to Appointment Form","user_id":"192412","hits":"10","vote":"0","state":"1","locked":"0","created":"2018-05-12 11:48:37","modified":"2018-05-12 11:48:37","content":"Dear Support,\r\n\r\nI have to add one more checkbox to Appointment Form to meet the new gdpr.\r\n\r\nHow can I achieve this?","preview":"Dear Support,<br>\r\n<br>\r\nI have to add one more checkbox to Appointment Form to meet the new gdpr.<br>\r\n<br>\r\nHow can I achieve this?","replies":[],"comments":[]},{"id":"140415","permalink":"https:\/\/www.joomshaper.com\/forums\/how-can-i-do-it-with-page-builder&format=json","title":"how can i do it with page builder?","user_id":"17304","hits":"20","vote":"0","state":"1","locked":"0","created":"2018-05-12 11:42:00","modified":"2018-05-12 11:42:00","content":"hi \r\ni am building website using page builder and helix template \r\ni have a section where it should have like a menu that change the content on the left \r\ni made it by making many pages and linking them together \r\n\r\ni wonder is there is anther way to do so like adding a java-script or any other idea \r\n\r\ncheck this link to know what i did \r\n\r\nhttp:\/\/bestofcms.com\/adi2018\/index.php\/en\/our-company\/leadership\/executive-management.html \r\n\r\n i  knew my solution  look stupid and i feel there is anther way do so \r\n\r\n\r\nplease help me ","preview":"hi <br>\r\ni am building website using page builder and helix template <br>\r\ni have a section where it should have like a menu that change the content on the left <br>\r\ni made it by making many pages and linking them together <br>\r\n<br>\r\ni wonder is there is anther way to do so like adding a java-script or any other idea <br>\r\n<br>\r\ncheck this link to know what i did <br>\r\n<br>\r\n<a href=\"http:\/\/bestofcms.com\/adi2018\/index.php\/en\/our-company\/leadership\/executive-management.html\"  target=\"_blank\" rel=\"nofollow\">http:\/\/bestofcms.com\/adi2018\/index.php\/en\/our-company\/leadership\/executive-management.html<\/a> <br>\r\n<br>\r\n i  knew my solution  look stupid and i feel there is anther way do so <br>\r\n<br>\r\n<br>\r\nplease help me","replies":[],"comments":[]},{"id":"140412","permalink":"https:\/\/www.joomshaper.com\/forums\/arabic-homepage-menu&format=json","title":"Arabic homepage menu ","user_id":"226627","hits":"11","vote":"0","state":"1","locked":"0","created":"2018-05-12 10:23:13","modified":"2018-05-12 10:23:13","content":"Hello,\r\nI am building a multilingual  donation website it has 2 language (English,Arabic) the english version is working fine but when i switch to arabic version the arabic homepage it doesn't show the arabic menu it shows the mean main menu and if i unpublish the main menu it shows the homepage in arabic with menu , although i followed all the instructions that u gave to me about making multilanguage website can u please check to me ,\r\nHere is the website link : www.mnartalwatan.com\r\n\r\nthe admin username and password i will send to u if u need it but please tell me how to hide it so no one but u can see the info \r\nThanks in advance!\r\n  ","preview":"Hello,<br>\r\nI am building a multilingual  donation website it has 2 language (English,Arabic) the english version is working fine but when i switch to arabic version the arabic homepage it doesn't show the arabic menu it shows the mean main menu and if i unpublish the main menu it shows the homepage in arabic with menu , although i followed all the instructions that u gave to me about making multilanguage website can u please check to me ,<br>\r\nHere is the website link : <a href=\"http:\/\/www.mnartalwatan.com\"  target=\"_blank\" rel=\"nofollow\">http:\/\/www.mnartalwatan.com<\/a><br>\r\n<br>\r\nthe admin username and password i will send to u if u need it but please tell me how to hide it so no one but u can see the info <br>\r\nThanks in advance!","replies":[],"comments":[]},{"id":"140411","permalink":"https:\/\/www.joomshaper.com\/forums\/use-of-a-local-video-file&format=json","title":"Use of a local video file","user_id":"68533","hits":"12","vote":"0","state":"1","locked":"0","created":"2018-05-12 10:17:10","modified":"2018-05-12 11:34:19","content":"How can I use a local video file? It works fine with YouTube but not with my local file (webspace\/server). \r\n\r\nWorks: YouTube (and www.xyz.com\/images\/video\/filename(.mp4))\r\nDo not work: images\/video\/filename\r\n\r\nbest regards,\r\nAlex","preview":"How can I use a local video file? It works fine with YouTube but not with my local file (webspace\/server). <br>\r\n<br>\r\nWorks: YouTube (and www.xyz.com\/images\/video\/filename(.mp4))<br>\r\nDo not work: images\/video\/filename<br>\r\n<br>\r\nbest regards,<br>\r\nAlex","replies":[],"comments":[]},{"id":"140410","permalink":"https:\/\/www.joomshaper.com\/forums\/where-is-the-following-codes-locatedd&format=json","title":"Where is the following codes located?","user_id":"66506","hits":"12","vote":"0","state":"1","locked":"0","created":"2018-05-12 10:06:38","modified":"2018-05-12 10:07:27","content":"Hello,\r\n\r\nMay I know when can we find the following codes? It appears in the main page (view source) in our website and would like to remove it if possible.\r\n\r\n*****************************\r\n\"<script type=\"application\/json\" class=\"joomla-script-options new\"> {\"csrf.token\":\"1c37bb413f4460402ad1ab465649f8cc\",\"system.paths\":{\"root\":\"\",\"base\":\"\"},\"joomla.jtext\":{\"COM_SPPAGEBUILDER_FRONTEND_EDITOR\":\"Fronten...... more more more data <\/script>\"\r\n*****************************\r\n\r\nPlease advice.\r\n\r\nThank you\r\n\r\nRegards,\r\nJosh","preview":"Hello,<br>\r\n<br>\r\nMay I know when can we find the following codes? It appears in the main page (view source) in our website and would like to remove it if possible.<br>\r\n<br>\r\n*****************************<br>\r\n&quot;&lt;script type=&quot;application\/json&quot; class=&quot;joomla-script-options new&quot;&gt; {&quot;csrf.token&quot;:&quot;1c37bb413f4460402ad1ab465649f8cc&quot;,&quot;system.paths&quot;:{&quot;root&quot;:&quot;&quot;,&quot;base&quot;:&quot;&quot;},&quot;joomla.jtext&quot;:{&quot;COM_SPPAGEBUILDER_FRONTEND_EDITOR&quot;:&quot;Fronten...... more more more data &lt;\/script&gt;&quot;<br>\r\n*****************************<br>\r\n<br>\r\nPlease advice.<br>\r\n<br>\r\nThank you<br>\r\n<br>\r\nRegards,<br>\r\nJosh","replies":[],"comments":[]},{"id":"140407","permalink":"https:\/\/www.joomshaper.com\/forums\/error-log-1&format=json","title":"Error log","user_id":"102339","hits":"10","vote":"0","state":"1","locked":"0","created":"2018-05-12 06:54:36","modified":"2018-05-12 06:54:36","content":"Hi, my error log is full of errors of the lines below. Can you tell me what that is and how to fix it because it is making the error log too big and takes up all server space?\r\n\r\n[12-May-2018 06:49:54 UTC] PHP Notice:  Undefined property: Joomla\\CMS\\Object\\CMSObject::$id in \/****\/public_html\/plugins\/k2\/sppagebuilder\/sppagebuilder.php on line 86\r\n[12-May-2018 06:49:54 UTC] PHP Notice:  Undefined property: Joomla\\CMS\\Object\\CMSObject::$id in \/***\/public_html\/plugins\/k2\/sppagebuilder\/sppagebuilder.php on line 85","preview":"Hi, my error log is full of errors of the lines below. Can you tell me what that is and how to fix it because it is making the error log too big and takes up all server space?<br>\r\n<br>\r\n[12-May-2018 06:49:54 UTC] PHP Notice:  Undefined property: Joomla\\CMS\\Object\\CMSObject::$id in \/****\/public_html\/plugins\/k2\/sppagebuilder\/sppagebuilder.php on line 86<br>\r\n[12-May-2018 06:49:54 UTC] PHP Notice:  Undefined property: Joomla\\CMS\\Object\\CMSObject::$id in \/***\/public_html\/plugins\/k2\/sppagebuilder\/sppagebuilder.php on line 85","replies":[],"comments":[]},{"id":"140403","permalink":"https:\/\/www.joomshaper.com\/forums\/define-the-width-of-a-row&format=json","title":"Define the width of a row","user_id":"210614","hits":"18","vote":"0","state":"1","locked":"0","created":"2018-05-12 05:52:49","modified":"2018-05-12 05:52:49","content":"hi,\r\nhow can I define the width of the row here: http:\/\/www.matzke-haus.de\/joomla\/index.php\/leistungen\r\n\r\nI mean the row under the menu with the heading \"Kompetenzen\/Leistungen\". I want them to have the same width as the header above.\r\n\r\nThanks.","preview":"hi,<br>\r\nhow can I define the width of the row here: <a href=\"http:\/\/www.matzke-haus.de\/joomla\/index.php\/leistungen\"  target=\"_blank\" rel=\"nofollow\">http:\/\/www.matzke-haus.de\/joomla\/index.php\/leistungen<\/a><br>\r\n<br>\r\nI mean the row under the menu with the heading &quot;Kompetenzen\/Leistungen&quot;. I want them to have the same width as the header above.<br>\r\n<br>\r\nThanks.","replies":[],"comments":[]}]};
let questions = jsonData.posts.map(getQuestions);


var authenticationFailure = function() {
  console.log('Failed authentication');
};
window.Trello.authorize({
  type: 'popup',
  name: 'Test App',
  scope: {
    read: 'true',
    write: 'true' },
  expiration: 'never',
  success: createCards,
  error: authenticationFailure
});

// create card

function createCard(title, questionLink) {
  let success = function(successMsg) {
    let cardId = successMsg.id;
    addAttachment(cardId, questionLink);
  };

  let error = function(errorMsg) {
    console.log(errorMsg);
  };
   Trello.post(`cards?name=${title}&pos=bottom&idList=5af69cecb4e4327794780d1e&keepFromSource=all`, success, error);
}

// create card attachment

function addAttachment(cardId, questionLink) {
   Trello.post(`cards/${cardId}/attachments?url=${questionLink}`);
}

// create cards 

function createCards() {
  // get previous cards from trello list
  
  let success = function(listCards) {
    let previousCards = listCards.map(function(card) {
      return card.name;    
    })
    questions.forEach(function(question) {
      // checking if the card already exists or not

      if(previousCards.indexOf(question.title) < 0) {
        createCard(question.title, question.link);
      }
    })
  }
  let fail = function() {
    console.log("Couldn't fetch data");
  }
  Trello.get(`lists/5af69cecb4e4327794780d1e/cards?fields=name`, success, fail);

}
