import axios from "axios";

const cheerio = require("cheerio");

let spider = function({ url, type }) {
  return new Promise(resolve => {
    axios.get(url).then(function(body) {
      var $ = cheerio.load(body.data);

      if (type == "home") {
        let a = $("#serialCont ul");
        // .eq(1).find("li")
        //   .find("a").attr("href")
        let hotContent = [];
        a.each(function(i, e) {
          let hLove = [];
          let b = $(e).find("li");
          b.each(function(i, e) {
            let c = {};
            c.comicNo = $(e)
              .find("a")
              .attr("href")
              .replace("/", "");
            c.bookTitle = $(e)
              .find("a")
              .attr("title");
            c.bookImg = $(e)
              .find("a img")
              .attr("data-src");
            c.updateChapterName = $(e)
              .find("a .tt")
              .text();
            hLove.push(c);
          });
          hotContent.push(hLove);
        });

        let j = $("#finishCont ul");
        let finishContent = [];
        j.each(function(i, e) {
          let fLove = [];
          let k = $(e).find("li");
          k.each(function(i, e) {
            let l = {};
            l.comicNo = $(e)
              .find("a")
              .attr("href")
              .replace("/", "");
            l.bookTitle = $(e)
              .find("a")
              .attr("title");
            l.bookImg = $(e)
              .find("a img")
              .attr("data-src");
            l.updateChapterName = $(e)
              .find("a .tt")
              .text();
            fLove.push(l);
          });
          finishContent.push(fLove);
        });

        let m = $("#latestCont ul");
        let newContent = [];
        m.each(function(i, e) {
          let nLove = [];
          let n = $(e).find("li");
          n.each(function(i, e) {
            let o = {};
            o.comicNo = $(e)
              .find("a")
              .attr("href")
              .replace("/", "");
            o.bookTitle = $(e)
              .find("a")
              .attr("title");
            o.bookImg = $(e)
              .find("a img")
              .attr("data-src");
            o.updateChapterName = $(e)
              .find("a .tt")
              .text();
            nLove.push(o);
          });
          newContent.push(nLove);
        });

        let content = [];
        content.push(hotContent, finishContent, newContent);
        resolve(content);
      }

      if (type == "category") {
        let a = $("#contList li");
        let content = [];
        a.each(function(i, e) {
          let b = {};
          b.bookImg = $(e)
            .find("a img")
            .attr("data-src");
          b.bookTitle = $(e)
            .find("p a")
            .attr("title");
          b.bookUrl = $(e)
            .find("p a")
            .attr("href");
          b.updateTime = $(e)
            .find(".updateon")
            .children()[0]
            .prev.data.replace("更新于：", "");
          b.updateChapterName = $(e)
            .find("a .tt")
            .text()
            .replace("更新至", "");
          b.bookStatus = $(e)
            .find("a span")
            .hasClass("fd");
          b.bookScore = Number(
            $(e)
              .find(".updateon em")
              .text() / 2
          );
          content.push(b);
        });
        resolve(content);
      }
      //   console.log(hotContent)

      //   let c = $("#finishCont ul").eq(1).find("li")
      // let finishContent = []
      //   c.each(function(i, e) {
      //     let d = {};
      //     d.comicNo = $(e)
      //     .find("a").attr("href").replace('\/','')
      //     d.bookTitle = $(e)
      //     .find("a").attr("title")
      //     d.bookImg = $(e)
      //     .find("a img").attr("data-src")
      //     d.updateChapterName = $(e)
      //     .find("a .tt").text()
      //     finishContent.push(d)
      //   })

      //   let e = $("#latestCont ul").eq(3).find("li")
      // let newContent = []
      //   e.each(function(i, e) {
      //     let f = {};
      //     f.comicNo = $(e)
      //     .find("a").attr("href").replace('\/','')
      //     f.bookTitle = $(e)
      //     .find("a").attr("title")
      //     f.bookImg = $(e)
      //     .find("a img").attr("data-src")
      //     f.updateChapterName = $(e)
      //     .find("a .tt").text()
      //     newContent.push(f)
      //   })

      //   let content = []
      //   content.push(hotContent,finishContent,newContent)
      //   resolve(content)
      //   }

      if (type == "search") {
        let SearchBarContent = [];
        let a = $(".book-result li");
        a.each(function(i, e) {
          let b = {};
          b.bookImg = $(e)
            .find(".book-cover img")
            .attr("src");
          b.bookTitle = $(e)
            .find(".book-detail dl dt a")
            .attr("title");
          b.bookUrl = $(e)
            .find(".book-detail dl dt a")
            .attr("href");
          b.bookStatus = $(e)
            .find(".book-detail dl dd")
            .eq(0)
            .find("span span")
            .eq(0)
            .text();
          b.bookUpdateTime = $(e)
            .find(".book-detail dl dd span span")
            .eq(1)
            .text();
          b.bookUpdataNum = $(e)
            .find(".book-detail dl dd span .blue")
            .text();

          b.bookYear = $(e)
            .find(".book-detail dl dd")
            .eq(1)
            .find("span a")
            .eq(0)
            .text();

          b.bookCountry = $(e)
            .find(".book-detail dl dd")
            .eq(1)
            .find("span")
            .eq(1)
            .find("a")
            .text();

          b.bookAuthor = $(e)
            .find(".book-detail dl dd")
            .eq(2)
            .find("span a")
            .text();

          b.bookOtherName = $(e)
            .find(".book-detail dl dd")
            .eq(3)
            .find("span a")
            .text();

          b.bookSummary = $(e)
            .find(".book-detail dl dd")
            .eq(4)
            .find("span")
            .text();
          b.bookScore =
            $(e)
              .find(".book-score .score-avg strong")
              .text() / 2;

          SearchBarContent.push(b);
          // console.log(bookImg)
        });
        resolve(SearchBarContent);
      }

      if (type == "comic") {
        let comicContent = {};

        let comicDetail = {};
        comicDetail.bookImg = $(".hcover img").attr("src");
        comicDetail.bookTitle = $(".book-detail .book-title h1").text();
        comicDetail.bookUpdate = $(".book-detail .book-title h2 span").text();

        comicDetail.year = $(".book-detail .detail-list li span")
          .eq(0)
          .find("a")
          .text();
        comicDetail.country = $(".book-detail .detail-list li span")
          .eq(1)
          .find("a")
          .text();
        comicDetail.type = $(".book-detail .detail-list li span")
          .eq(3)
          .find("a")
          .text();
        comicDetail.author = $(".book-detail .detail-list li span")
          .eq(4)
          .find("a")
          .text();
        comicDetail.anotherName = $(".book-detail .detail-list li span")
          .eq(5)
          .find("a")
          .text();
        comicDetail.status = $(".book-detail .detail-list li span")
          .eq(6)
          .find("span")
          .eq(0)
          .text();
        comicDetail.updateTime = $(".book-detail .detail-list li span")
          .eq(6)
          .find("span")
          .eq(1)
          .text();
        comicDetail.updateNum = $(".book-detail .detail-list li span")
          .eq(6)
          .find("a")
          .text();
        comicDetail.updateUrl = $(".book-detail .detail-list li span")
          .eq(6)
          .find("a")
          .attr("href");
        comicDetail.bookIntro = $(".book-detail .book-intro p").text();

        let chapterNoandNum = [];
        let c = $(".chapter-list ul li").each(function(i, e) {
          let d = {};
          d.comicNo = $(e)
            .find("a")
            .attr("href")
            .match(/\/(.*?)\//)[1];

          d.chapterNo = $(e)
            .find("a")
            .attr("href")
            .match(/\/.*?\/(.*?).html/)[1];

          d.chapterNum = $(e)
            .find("a")
            .attr("title");
          chapterNoandNum.push(d);
        });

        // ComicContent.chapterNoandNum = chapterNoandNum
        chapterNoandNum.sort(function(a, b) {
          // return a.chapterNo.match(/\d+/g)[1] - b.chapterNo.match(/\d+/g)[1];
          return a.chapterNo - b.chapterNo;
        });
        // console.log(chapterNoandNum[1].chapterNo)
        // chapterNoandNum.unshift('占位数组')
        comicContent.chapterNoandNum = chapterNoandNum;
        comicContent.comicDetail = comicDetail;
        resolve(comicContent);
      }

      if (type == "comicView") {
        let data = body.data.match(
          /\(function\(p,a,c,k,e,d\).*?\.split\(\'\|\'\),0,\{\}\)\)/g
        )[0];

        let comicContent = {};
        comicContent.bookTitle = $(".title h1 a").text();
        comicContent.chapterName = $(".title h2").text();
        comicContent.comicViewImg = eval(data)
          .replace(/\\/g, "")
          .replace(/\'/g, "")
          .match(/fs:\[(.*?)\]/)[1]
          .split(",")
          .map(function(item) {
            item = "http://images.lancaier.com" + item;
            return item;
          });

        comicContent.comicViewFc = eval(data)
          .replace(/\\/g, "")
          .replace(/\'/g, "")
          .match(/fc:(.*?),burl/)[1];
        console.log(comicContent);
        resolve(comicContent);
      }
    });
  });
};
// SearchBarContent.forEach((value, index, array) => {
//   let content = {}
// content.bookImg = array[index].find('.book-cover img').attr('src')
// content.bookTitle = array[index]
//   .find('.book-detail dl dt a')
//   .attr('title')
// content.bookUrl = array[index]
//   .find('.book-detail dl dt a')
//   .attr('href')
//   console.log(content)
// })
// content.bookImg = $('.book-cover img').attr('src')
// content.bookTitle = $('.book-detail dl dt a').attr('title')
// content.bookUrl = $('.book-detail dl dt a').attr('href')

// console.log(SearchBarContent)

// Comic!!!!
// let bookImg = $('.hcover img').attr('src')
// let bookTitle = $('.book-detail .book-title h1').text()
// let bookUpdate = $('.book-detail .book-title h2 span').text()

// let year = $('.book-detail .detail-list li span')
//   .eq(0)
//   .find('a')
//   .text()
// let country = $('.book-detail .detail-list li span')
//   .eq(1)
//   .find('a')
//   .text()
// let type = $('.book-detail .detail-list li span')
//   .eq(3)
//   .find('a')
//   .text()
// let author = $('.book-detail .detail-list li span')
//   .eq(4)
//   .find('a')
//   .text()
// let anotherName = $('.book-detail .detail-list li span')
//   .eq(5)
//   .find('a')
//   .text()
// let status = $('.book-detail .detail-list li span')
//   .eq(6)
//   .find('span')
//   .eq(0)
//   .text()
// let updateTime = $('.book-detail .detail-list li span')
//   .eq(6)
//   .find('span')
//   .eq(1)
//   .text()
// let updateNum = $('.book-detail .detail-list li span')
//   .eq(6)
//   .find('a')
//   .text()
// let updateUrl = $('.book-detail .detail-list li span')
//   .eq(6)
//   .find('a')
//   .attr('href')
// let bookIntro = $('.book-detail .book-intro p').text()

// let bookDetail = {
//   bookImg: bookImg,
//   bookTitle: bookTitle,
//   bookUpdate: bookUpdate,
//   bookIntro: bookIntro,
//   year: year,
//   country: country,
//   type: type,
//   author: author,
//   anotherName: anotherName,
//   status: status,
//   updateTime: updateTime,
//   updateNum: updateNum,
//   updateUrl: updateUrl
// }
// // console.log(bookDetail)
// console.log(bookDetail)
// resolve(bookDetail)

export default spider;
