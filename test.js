// const key = 'eec38f00c2952d05b3ce7ffa12b1e8eb';
// const token = '92d6cf2de2d7a5f619ffeb0f43457eb1a76bbef8547119fa3d50a90493dcf1b6';
// const boardId = 'poqO4b9d';
// const supportBoardId = 'poqO4b9d';
const supportBackLogListId = '5aa77e9950d7eb0b1eca1448';
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

let jsonData = {"posts":[{"id":"142279","permalink":"https://www.joomshaper.com/forums/how-do-i-edit-menu-sidebar-in-fixter-template&format=json","title":"How do i edit menu sidebar in fixter template?","user_id":"62163","hits":"4","vote":"0","state":"1","locked":"0","created":"2018-05-25 01:03:25","modified":"2018-05-25 01:03:25","content":"I am having trouble finding where I can edit the \"FREE QUOTE\" button in the sticky side bar menu. \r\n\r\nI also would like to maybe ad a picture graphic in between the menu and the free quote button at the bottom to fill some of that negative space. Is there a module position or a way to do that?\r\n\r\nThank you so much!\r\n\r\nScreenshot attached. ","preview":"I am having trouble finding where I can edit the &quot;FREE QUOTE&quot; button in the sticky side bar menu. <br>\r\n<br>\r\nI also would like to maybe ad a picture graphic in between the menu and the free quote button at the bottom to fill some of that negative space. Is there a module position or a way to do that?<br>\r\n<br>\r\nThank you so much!<br>\r\n<br>\r\nScreenshot attached.","replies":[],"comments":[]},{"id":"142276","permalink":"https://www.joomshaper.com/forums/difference-to-look-safari-firefox&format=json","title":"difference to look safari / firefox ","user_id":"931","hits":"6","vote":"0","state":"1","locked":"0","created":"2018-05-24 21:51:31","modified":"2018-05-24 21:51:31","content":"Hi,\r\nI have noticed that the presentation in the browser \"safari\" is sometimes wrong. For example, the slideshow does not show at all, or fonts that are on the right are shown on the left. 3-columns are shown in 1-columns.\r\n\r\nI ask you the difference to look safari / firefox / chrome.\r\n\r\nwww.bpd24.de and www.mybodyfantistic.de\r\n\r\nthank you very much","preview":"Hi,<br>\r\nI have noticed that the presentation in the browser &quot;safari&quot; is sometimes wrong. For example, the slideshow does not show at all, or fonts that are on the right are shown on the left. 3-columns are shown in 1-columns.<br>\r\n<br>\r\nI ask you the difference to look safari / firefox / chrome.<br>\r\n<br>\r\n<a href=\"http://www.bpd24.de\"  target=\"_blank\" rel=\"nofollow\"><a href=\"http://www.bpd24.de\"  target=\"_blank\" rel=\"nofollow\">http://www.bpd24.de</a></a> and <a href=\"http://www.mybodyfantistic.de\"  target=\"_blank\" rel=\"nofollow\">http://www.mybodyfantistic.de</a><br>\r\n<br>\r\nthank you very much","replies":[],"comments":[]},{"id":"142264","permalink":"https://www.joomshaper.com/forums/main-menu-link-does-not-work&format=json","title":"Main menu link does not work","user_id":"229608","hits":"6","vote":"0","state":"1","locked":"0","created":"2018-05-24 20:23:27","modified":"2018-05-24 20:23:27","content":"Hello,\r\nplease see the image attached: here I am in the sub-menu \"Leadership seminar\". When I click on the main menu item \"Enterprises\" nothing happen. On mouse-over it shows the link \"burningchange.ch/#enterprises\" -> it should go back to that section on the home page. But it doesn't.\r\nThanks for your help,\r\nKurt","preview":"Hello,<br>\r\nplease see the image attached: here I am in the sub-menu &quot;Leadership seminar&quot;. When I click on the main menu item &quot;Enterprises&quot; nothing happen. On mouse-over it shows the link &quot;<a href=\"http://burningchange.ch/#enterprises\"  target=\"_blank\" rel=\"nofollow\">http://burningchange.ch/#enterprises</a>&quot; -&gt; it should go back to that section on the home page. But it doesn't.<br>\r\nThanks for your help,<br>\r\nKurt","replies":[],"comments":[]},{"id":"142263","permalink":"https://www.joomshaper.com/forums/child-menus-on-sidebar-not-showing&format=json","title":"Child menus on sidebar not showing","user_id":"51417","hits":"5","vote":"0","state":"1","locked":"0","created":"2018-05-24 20:18:31","modified":"2018-05-24 20:18:31","content":"I know there has to be a way to show child menus be it a module suffix or something but I have been unable to find what that suffix is but I am not able to have a sidebar menu that shows more than the first level menus. Even though the module is set with a start level of 1 and end level of all and show sub-menu items set to yes. How do I get it so ideally an accordion type menu works but in a worse case so all the sub menus show as well in a sidebar menu module?","preview":"I know there has to be a way to show child menus be it a module suffix or something but I have been unable to find what that suffix is but I am not able to have a sidebar menu that shows more than the first level menus. Even though the module is set with a start level of 1 and end level of all and show sub-menu items set to yes. How do I get it so ideally an accordion type menu works but in a worse case so all the sub menus show as well in a sidebar menu module?","replies":[],"comments":[]},{"id":"142262","permalink":"https://www.joomshaper.com/forums/slideshow-full-width-button-icon-issue&format=json","title":"Slideshow (full width) button icon issue","user_id":"229608","hits":"3","vote":"0","state":"1","locked":"0","created":"2018-05-24 20:17:16","modified":"2018-05-24 20:17:16","content":"When adding an icon to the button the name of the icon is shown instead of the icon symbol (see image attached).\r\nThanks for your help,\r\nKurt","preview":"When adding an icon to the button the name of the icon is shown instead of the icon symbol (see image attached).<br>\r\nThanks for your help,<br>\r\nKurt","replies":[],"comments":[]},{"id":"142261","permalink":"https://www.joomshaper.com/forums/slideshow-full-width-button-issue-with-layout&format=json","title":"Slideshow (full width) button issue with layout","user_id":"229608","hits":"3","vote":"0","state":"1","locked":"0","created":"2018-05-24 20:12:23","modified":"2018-05-24 20:12:23","content":"I'd like to increase the border size (number of pixels) for the button in the slideshow.\r\n\r\nIn addition there is an issue when the button is filled - there is thin line between the bottom border and the colored button.\r\n\r\nThanks for your help.\r\nKurt","preview":"I'd like to increase the border size (number of pixels) for the button in the slideshow.<br>\r\n<br>\r\nIn addition there is an issue when the button is filled - there is thin line between the bottom border and the colored button.<br>\r\n<br>\r\nThanks for your help.<br>\r\nKurt","replies":[],"comments":[]},{"id":"142260","permalink":"https://www.joomshaper.com/forums/after-login-blank-page&format=json","title":"After login Blank Page","user_id":"217191","hits":"7","vote":"0","state":"1","locked":"0","created":"2018-05-24 19:48:55","modified":"2018-05-25 01:05:30","content":"After login redirect to blank page, does not show the profile page, edit profile, my profile, blank page. how to solve\r\nhttp://www.obrademariaperegrinacoes.com.br/\r\n","preview":"After login redirect to blank page, does not show the profile page, edit profile, my profile, blank page. how to solve<br>\r\n<a href=\"http://www.obrademariaperegrinacoes.com.br\"  target=\"_blank\" rel=\"nofollow\">http://www.obrademariaperegrinacoes.com.br</a>/","replies":[],"comments":[]},{"id":"142246","permalink":"https://www.joomshaper.com/forums/edit-in-sp-page-builder-3-x-pro-not-working-anymore&format=json","title":"Edit in SP Page Builder 3.x Pro not working anymore","user_id":"214622","hits":"13","vote":"0","state":"1","locked":"0","created":"2018-05-24 17:17:59","modified":"2018-05-24 19:42:58","content":"I do have license for Domains ( License: 1 Domain ) http://www.bridgeclubdekollebloem.be\r\nAlthough it Expires On: 01 May 2019 I can not any more edit the pages: I see the page template but if I want to edit an addondo receive an empty page which I can only close.\r\n\r\n[b]Found the problem[/b]: SP Page Builder 3.x not supported on IE11!\r\n","preview":"I do have license for Domains ( License: 1 Domain ) <a href=\"http://www.bridgeclubdekollebloem.be\"  target=\"_blank\" rel=\"nofollow\">http://www.bridgeclubdekollebloem.be</a><br>\r\nAlthough it Expires On: 01 May 2019 I can not any more edit the pages: I see the page template but if I want to edit an addondo receive an empty page which I can only close.<br>\r\n<br>\r\n<strong>Found the problem</strong>: SP Page Builder 3.x not supported on IE11!","replies":[],"comments":[]},{"id":"142231","permalink":"https://www.joomshaper.com/forums/error-addon-feature-box&format=json","title":"Error addon feature box","user_id":"97185","hits":"4","vote":"0","state":"1","locked":"0","created":"2018-05-24 14:10:52","modified":"2018-05-24 14:10:52","content":"Hello, \r\n\r\nI am working with SP Page Builder 3.2.1 and the Feature Box add-in is not working properly. The link does not appear in the image and in the title, the title is not displayed if I place it after the image, and neither the background and padding settings are shown.\r\n\r\nThanks,","preview":"Hello, <br>\r\n<br>\r\nI am working with SP Page Builder 3.2.1 and the Feature Box add-in is not working properly. The link does not appear in the image and in the title, the title is not displayed if I place it after the image, and neither the background and padding settings are shown.<br>\r\n<br>\r\nThanks,","replies":[],"comments":[]},{"id":"142225","permalink":"https://www.joomshaper.com/forums/problem-with-the-width-of-the-header&format=json","title":"Problem with the width of the header","user_id":"91122","hits":"11","vote":"0","state":"1","locked":"0","created":"2018-05-24 12:35:10","modified":"2018-05-24 12:36:58","content":"Hi, I have a problem with the settings for the width of the logo and header. As I try to set the width of the 180px header, it breaks the design, I apply photos.\r\nLink to the site https://www.hristemo.com/","preview":"Hi, I have a problem with the settings for the width of the logo and header. As I try to set the width of the 180px header, it breaks the design, I apply photos.<br>\r\nLink to the site <a href=\"https://www.hristemo.com\"  target=\"_blank\" rel=\"nofollow\">https://www.hristemo.com</a>/","replies":[],"comments":[]},{"id":"142182","permalink":"https://www.joomshaper.com/forums/saving-and-duplicating-bugs-with-sp-page-builder&format=json","title":"Saving and duplicating bugs with SP Page Builder","user_id":"141483","hits":"7","vote":"0","state":"1","locked":"0","created":"2018-05-24 09:53:13","modified":"2018-05-24 09:53:13","content":"Hi,\r\n\r\nI having several issues with SPPB 3 as follows:\r\n1. I have trouble saving with Text Block - changes to existing content do not save \r\n2. When I duplicate a text block and then modify it, if I hit font color or font size, the content gets back to content that was duplicated\r\n3. When trying to make modification crom the code tab, the changes do not save \r\n\r\nThis keeps happening on many of my sites.\r\n\r\nNote: I have cleared my cache (joomla and browser) and I have the latest JCE and SPP3 version.\r\nThanks for looking into this\r\nFabien\r\n","preview":"Hi,<br>\r\n<br>\r\nI having several issues with SPPB 3 as follows:<br>\r\n1. I have trouble saving with Text Block - changes to existing content do not save <br>\r\n2. When I duplicate a text block and then modify it, if I hit font color or font size, the content gets back to content that was duplicated<br>\r\n3. When trying to make modification crom the code tab, the changes do not save <br>\r\n<br>\r\nThis keeps happening on many of my sites.<br>\r\n<br>\r\nNote: I have cleared my cache (joomla and browser) and I have the latest JCE and SPP3 version.<br>\r\nThanks for looking into this<br>\r\nFabien","replies":[],"comments":[]},{"id":"142150","permalink":"https://www.joomshaper.com/forums/web-service&format=json","title":"web service","user_id":"192650","hits":"6","vote":"0","state":"1","locked":"0","created":"2018-05-24 08:19:08","modified":"2018-05-24 08:19:08","content":"Hi \r\nCan any one guide me to how to use webs service in joomla\r\n\r\nThanking You\r\nShinju","preview":"Hi <br>\r\nCan any one guide me to how to use webs service in joomla<br>\r\n<br>\r\nThanking You<br>\r\nShinju","replies":[],"comments":[]},{"id":"142046","permalink":"https://www.joomshaper.com/forums/not-delete&format=json","title":"not delete","user_id":"68265","hits":"27","vote":"0","state":"1","locked":"0","created":"2018-05-23 12:51:26","modified":"2018-05-23 12:51:26","content":"it does not let me erase anything by clicking the garbage can","preview":"it does not let me erase anything by clicking the garbage can","replies":[],"comments":[]},{"id":"141979","permalink":"https://www.joomshaper.com/forums/exporting-forbidden&format=json","title":"Exporting Forbidden","user_id":"11536","hits":"12","vote":"0","state":"1","locked":"0","created":"2018-05-23 08:22:23","modified":"2018-05-23 08:22:23","content":"Hi,\r\n\r\nI am trying to export from an article as want to put the page in another article but I get this error - \r\nForbidden\r\nYou don't have permission to access /newdesign/administrator/index.php on this server.\r\nAdditionally, a 403 Forbidden error was encountered while trying to use an ErrorDocument to handle the request.\r\nAny ideas ?\r\nThanks","preview":"Hi,<br>\r\n<br>\r\nI am trying to export from an article as want to put the page in another article but I get this error - <br>\r\nForbidden<br>\r\nYou don't have permission to access /newdesign/administrator/index.php on this server.<br>\r\nAdditionally, a 403 Forbidden error was encountered while trying to use an ErrorDocument to handle the request.<br>\r\nAny ideas ?<br>\r\nThanks","replies":[],"comments":[]},{"id":"141949","permalink":"https://www.joomshaper.com/forums/front-page-editor-no-blocks-or-edit-options&format=json","title":"Front Page Editor No Blocks or Edit Options","user_id":"204537","hits":"15","vote":"0","state":"1","locked":"0","created":"2018-05-23 03:02:11","modified":"2018-05-23 03:02:11","content":"I'm having a few issues with SP Pagebuilder, I just started trying to edit a website and can't get anything to work on the frontpage editor.  \r\n\r\nWhen I start the frontpage editor all I get is the attached. I have the Helix template enabled and I found one issue with the \"advanced modules\"  extension by Regular Labs so I disabled it and now I don't get a 500 error but I still cannot edit frontpage.\r\n\r\nI checked the inspector and it doesn't show any errors from the browser.\r\n\r\nWould this be something with a plugin conflict or something?  Not sure where to go from here.\r\n\r\n\r\n\r\n ","preview":"I'm having a few issues with SP Pagebuilder, I just started trying to edit a website and can't get anything to work on the frontpage editor.  <br>\r\n<br>\r\nWhen I start the frontpage editor all I get is the attached. I have the Helix template enabled and I found one issue with the &quot;advanced modules&quot;  extension by Regular Labs so I disabled it and now I don't get a 500 error but I still cannot edit frontpage.<br>\r\n<br>\r\nI checked the inspector and it doesn't show any errors from the browser.<br>\r\n<br>\r\nWould this be something with a plugin conflict or something?  Not sure where to go from here.","replies":[],"comments":[]},{"id":"141774","permalink":"https://www.joomshaper.com/forums/sp-page-builder-3-not-changing-font&format=json","title":"SP Page builder 3 not changing font","user_id":"141483","hits":"24","vote":"0","state":"1","locked":"0","created":"2018-05-21 17:56:09","modified":"2018-05-21 17:56:09","content":"Hi, I am having a few problems with SP Page builder 3:\r\n\r\nI have the latest version installed, I have the latest JCE installed,I have cleared my Joomla and Browser cache and I have checked other posts.\r\n\r\nBelow are the errors I keep getting:\r\n1. When I make changes in a Text Block addon in the editor or code tab, my changes do not always get saved and I have to go back several times to make the save happen\r\n2. In the carousel, the text style is not applied to the title or to my content\r\n3. Sometimes, when selecting font size or font type, the drop down remains on screen and doesnt disappear.\r\n\r\nPlease could you fix.\r\nTHanks","preview":"Hi, I am having a few problems with SP Page builder 3:<br>\r\n<br>\r\nI have the latest version installed, I have the latest JCE installed,I have cleared my Joomla and Browser cache and I have checked other posts.<br>\r\n<br>\r\nBelow are the errors I keep getting:<br>\r\n1. When I make changes in a Text Block addon in the editor or code tab, my changes do not always get saved and I have to go back several times to make the save happen<br>\r\n2. In the carousel, the text style is not applied to the title or to my content<br>\r\n3. Sometimes, when selecting font size or font type, the drop down remains on screen and doesnt disappear.<br>\r\n<br>\r\nPlease could you fix.<br>\r\nTHanks","replies":[],"comments":[]},{"id":"141511","permalink":"https://www.joomshaper.com/forums/icofont-and-icomoon-integration-in-page-builder&format=json","title":"icofont and icomoon integration in page builder","user_id":"141483","hits":"24","vote":"0","state":"1","locked":"0","created":"2018-05-18 10:05:14","modified":"2018-05-18 10:22:46","content":"Hi,\r\n\r\nI have already read a few posts about the icons integration but I was wondering if you had a full list of the icons available for icofont and icomoonn to easily add them to the fa.php file? (e.g. $icofont_list = array(\r\n\t\t\t'icofont-angry-monster',\r\n\r\nIs there an easy way to use the icofont from within Page Builder (I am thinking Text block and <i class=\"icofont icofont-angry-monster\"></i>, however when I do so the page doesnt save the code and I cant see the icofont. Any suggestion?)\r\n\r\nAlso, when are you going to integrate both these fonts in page builder like you did with FA. It seems likea lot of us could do with this feature.\r\n\r\nthanks","preview":"Hi,<br>\r\n<br>\r\nI have already read a few posts about the icons integration but I was wondering if you had a full list of the icons available for icofont and icomoonn to easily add them to the fa.php file? (e.g. $icofont_list = array(<br>\r\n\t\t\t'icofont-angry-monster',<br>\r\n<br>\r\nIs there an easy way to use the icofont from within Page Builder (I am thinking Text block and &lt;i class=&quot;icofont icofont-angry-monster&quot;&gt;&lt;/i&gt;, however when I do so the page doesnt save the code and I cant see the icofont. Any suggestion?)<br>\r\n<br>\r\nAlso, when are you going to integrate both these fonts in page builder like you did with FA. It seems likea lot of us could do with this feature.<br>\r\n<br>\r\nthanks","replies":[],"comments":[]}]};
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
   Trello.post(`cards?name=${title}&pos=bottom&idList=${supportBackLogListId}&keepFromSource=all`, success, error);
   // Trello.post(`cards?name=${title}&pos=bottom&idList=5af69cecb4e4327794780d1e&keepFromSource=all`, success, error);
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
  Trello.get(`lists/${supportBackLogListId}/cards?fields=name`, success, fail);

}
