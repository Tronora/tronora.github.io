
document.addEventListener('DOMContentLoaded', () => { 
document.querySelector('thead').addEventListener('click', ev => {
  let column = 0;
  switch (ev.target.innerHTML) {
    case "id":
      column = 0
      break;
    case "Navn":
      column = 1
      break;
  }
  
  sortTable(column)
})

function sortTable(column) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.querySelector("table");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[column];
      y = rows[i + 1].getElementsByTagName("TD")[column];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
})