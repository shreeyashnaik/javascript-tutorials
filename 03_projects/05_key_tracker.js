// console.log('Project 5');

const insertNode = document.getElementById('insert');

const tableDiv = document.createElement('div');
tableDiv.innerHTML = `<table>
                        <tr>
                          <th>Key</th>
                          <th>Code</th>
                        </tr>
                      </table>
                     `;
insertNode.appendChild(tableDiv);

// keydown event
window.addEventListener('keydown', (e) => {
  console.log(e.key, e.code);

  const row = document.createElement('tr');
  row.innerHTML = `
  <tr>
    <td>${e.code === 'Space' ? 'Space' : e.key}</td>
    <td>${e.code}</td>
  </tr>
  `;

  const table = insertNode.getElementsByTagName('table')[0];

  table.appendChild(row);
});
