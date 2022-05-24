import { ExportToCsv } from 'export-to-csv';

const options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    title: 'Users',
    showTitle: true,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
};

export const clientCsv = new ExportToCsv(options)