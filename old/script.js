document.body.onkeyup = (e) => {
  if(e.code === "Space") {
    document.body.classList.toggle("dark");
  }
}