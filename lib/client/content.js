Canvas = function Canvas() {
  this.problem;
  this.solution;
  this.uvp;
  this.advantage;
  this.customer;
  this.alternative;
  this.key;
  this.concept;
  this.channel;
  this.adopter;
  this.cost;
  this.revenue;
};

canvas = new Canvas();

canvas.problem = {
  title: "problems",
  class: 'top'
}

canvas.solution = {
  title: "solutions",
  class: 'full'
}

canvas.uvp = {
  title: "unique value proposition",
  class: 'top',
  colspan: 2
}

canvas.advantage = {
  title: "unfair advantages",
  class: 'full'
}

canvas.customer = {
  title: "customer segments",
  class: 'top'
}

canvas.alternative = {
  title: "existing alternatives",
  class: 'bottom'
}

canvas.key = {
  title: "key metrics",
  class: 'bottom'
}

canvas.concept = {
  title: "high level concept",
  class: 'bottom',
  colspan: 2
}

canvas.channel = {
  title: "channels",
  class: 'bottom'
}

canvas.adopter = {
  title: "early adopters",
  class: 'bottom'
}

canvas.cost = {
  title: "cost structure",
  class: 'full',
  colspan: 3
}

canvas.revenue = {
  title: "revenue stream",
  class: 'full',
  colspan: 3
}

Template.content.helpers({
  datas: function () {
    return canvas[this.zone];
  }
});
