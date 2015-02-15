Canvas = function Canvas() {};

canvas = new Canvas();

canvas['2'] = {
  title: "problems",
  class: 'top',
  list: []
}

canvas['4'] = {
  title: "solutions",
  class: 'full',
  list: []
}

canvas['3'] = {
  title: "unique value propo.",
  class: 'top',
  colspan: 2,
  list: []
}

canvas['9'] = {
  title: "unfair advantages",
  class: 'full',
  list: []
}

canvas['1'] = {
  title: "customer segments",
  class: 'top',
  list: []
}

canvas['2A'] = {
  title: "existing alternatives",
  class: 'bottom',
  list: []
}

canvas['8'] = {
  title: "key metrics",
  class: 'bottom',
  list: []
}

canvas['3A'] = {
  title: "high level concept",
  class: 'bottom',
  colspan: 2,
}

canvas['5'] = {
  title: "channels",
  class: 'bottom',
  list: []
}

canvas['1A'] = {
  title: "early adopters",
  class: 'bottom',
  list: []
}

canvas['7'] = {
  title: "cost structure",
  class: 'full',
  colspan: 3,
  list: []
}

canvas['6'] = {
  title: "revenue stream",
  class: 'full',
  colspan: 3,
  list: []
}

Template.content.helpers({
  datas: function () {
    Session.get('canvas-list');

    return canvas[this.zone];
  },
  zone: function () {
    return this.zone;
  }
});
