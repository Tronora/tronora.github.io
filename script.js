/**
 *  Scriptet lytter til når HTML-dokumentet er lastet inn
 *  Den finner så en gitt tabell basert på klassenavn. Hvis tabellen finnes
 *  lytter vi etter klikk på header-raden av tabellen.
 *  Når det blir klikket på header-raden kaller vi en sorteringsfunksjonen
 *  hvor vi sender inn tabell-elementet, og hvilket element som ble klikket på
 */
document.addEventListener('DOMContentLoaded', () => {
  // Duplier de seks linjene under her hvis du skal ha en tabell til (fra 'let personellTable')
  let personellTable = document.querySelector('.personellTable')
  if (personellTable) {
    personellTable.querySelector('thead').addEventListener('click', ev => {
      getClickedHeaderAndSort(personellTable, ev.target);
    })
  }
  // til hit
 
  // Utkommentert eksempel for din neste tabell:
  // let spacecraftTable = document.querySelector('.spacecraftTable')
  // if (spacecraftTable) {
  // spacecraftTable.querySelector('thead').addEventListener('click', ev => {
  //    getClickedHeaderAndSort(spacecraftTable, ev.target);
  //  })
  // }

})

// dette er en nye funksjon som tar seg av det som den switch / case saken gjorde tidligere
function getClickedHeaderAndSort(table, target) {
  let column = 0;
  let columns = table.querySelectorAll('th');
  for (let i = 0; i < columns.length; i++) {
    if (columns[i] === target) {
      column = i;
      break
    }
  }
  sortTable(column)
}

// Selve sorteringen av tabellen
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
        if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerText.toLowerCase() < y.innerText.toLowerCase()) {
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


