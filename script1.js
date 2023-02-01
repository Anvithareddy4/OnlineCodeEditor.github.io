function run()
{
  /*This is multi line comment
  used in javascript*/

  /*It is an example
  to compare branches*/

  let htmlcode=document.querySelector(".container #html-code").value;
  let csscode="<style>"+document.querySelector(".container #css-code").value+"<style>";
  let jscode=document.querySelector(".container #js-code").value;
  let output=document.querySelector(".container #output1");
  output.contentDocument.body.innerHTML=htmlcode+csscode;
  output.contentWindow.eval(jscode);


}
