export const AggTypes = {
  metric: [
    { key: 'count', title: 'Count' },
    { key: 'average', title: 'Average' },
    { key: 'sum', title: 'Sum' },
    { key: 'min', title: 'Min' },
    { key: 'max', title: 'Max' },
    { key: 'stdDev', title: 'Standard Deviation' }
  ],
  bucket: [
    { key: 'histogram', title: 'Date Histogram' },
    { key: 'range', title: 'Date Range' },
    { key: 'terms', title: 'Terms' },
    { key: 'filters', title: 'Filters' },
  ],
};