function dig(obj, selector) {
    var result = obj;
    const splitter = selector.split('.');

    for (let i = 0; i < splitter.length; i++){
        if (result == undefined)
            return undefined;                
        result = result[splitter[i]];
    }

    console.log("dig result", result);
    return result;
}

export function collect(obj, field) {
    console.log(JSON.stringify(obj))
    console.log(field)
    console.log(typeof field)
    if (typeof(field) === 'function')
        return field(obj);
    else if (typeof(field) === 'string')
        return dig(obj, field);
    else
        return undefined;
}

export function exportExcel(rows, columns) {
    console.log("exportExcel");
    const mimeType = 'data:application/vnd.ms-excel';
    const html = renderTable(rows, columns).replace(/ /g, '%20');
    console.log("table rendered");
    const documentPrefix = 'Maple'
    const d = new Date();

    var dummy = document.createElement('a');
    dummy.href = mimeType + ',' + html;
    dummy.download = documentPrefix
        + '-' + d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate()
        + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds()
        +'.xls';

    dummy.target = '_blank';
    console.log("dummy", dummy);
    dummy.click();
    console.log("clicked");
}

export function print() {
    let win = window.open("");
    win.document.write(renderTable(this));
    win.print();
    win.close();
}

function renderTable(rows, columns) {
    console.log("rows", rows);
    console.log("columns", columns);
    let table = '<table><thead>';

    table += '<tr>';
    for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        table += '<th>';
        table += 	column.label;
        table += '</th>';
    }
    table += '</tr>';

    table += '</thead><tbody>';
    
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        table += '<tr>';
        for (let j = 0; j < columns.length; j++) {
            const column = columns[j];
            table += '<td>';
            table +=	collect(row, column.field);
            table += '</td>';
        }
        table += '</tr>';
    }

    table += '</tbody></table>';
    return table;
}