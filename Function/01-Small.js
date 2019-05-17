function testTable(){

  var wikiPage = new WikiPage();
  var buffer = new Buffer();

  if(pageData.hasAttribute('test')){
    if(includeSuiteSetup){
      var suitSetup = new PageCrawler()

      if(setup !== null){
        var pagePath = suitSetup.getPageCrawler().getFullPath(suitSetup)
        var pagePathName = pathParser.render(pagePath);
        buffer.append('.include pages setup')
              .append(pagePath)
              .append("\n")
      }
    }

    var setup = PageCrawlerImp.getInheritedPage("setup", wikiPage);
    if(setup != null){
      var setupPathName = wikiPage.getPageCrawler.getFullPath(setup);
      buffer.append("include setup")
            .append(setupPathName)
            .append("\n")
    }

    buffer.append(pageData.getContent())
    if(tearDown !== null){

    }
    
  }

}

//better.
function renderPageWithSetupAndTearDown(){
  isTestPage = PageData.hasAttribute('Test');
  if(isTestPage){
    var testPage = PageData.getWikiPage();
    var newPageContent = new StringBuffer();
    includeSetupPages(testPage, newPageContent, isSuite);
    newPageContent.append(pageData.getContent());
    includeTearDownPages(testPage, newPageContent, isSuite);
    pageData.setContent(newPageContent.toString());
  }

  return pageData.getHtml();
}

//even better 
function rednerPageWithSetupAndTearDown(){
  var pageData = new PageData();

  if(isTestPage(pageData)){
    includeSetupAndTeardownPages(pageData, isSuite)
  }

  return pageData.getHtml();
}
