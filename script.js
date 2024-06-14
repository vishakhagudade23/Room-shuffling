document.getElementById("btn").addEventListener("click", () => {
  const tables = document.querySelectorAll("table"); // Select all tables
  const data = [];

  // Collect data from all cells in the tables
  tables.forEach((table) => {
    const rows = Array.from(table.querySelectorAll("tbody tr"));
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td:nth-child(3)");
      const rowData = Array.from(cells).map((cell) => cell.textContent.trim());
      data.push(rowData);
    });
  });

  // Shuffle the data
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }

  // Distribute shuffled data back into the tables
  let dataIndex = 0;
  tables.forEach((table) => {
    const rows = Array.from(table.querySelectorAll("tbody tr"));
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td:nth-child(3)");
      cells.forEach((cell, index) => {
        cell.textContent = data[dataIndex][index];
      });
      dataIndex++;
    });
  });
});