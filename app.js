var circle = {
  radius: 10,
  // Write code here
  circumference() {
    return (this.radius * 2 * Math.PI).toFixed(2);
  },
  area() {
    return (this.radius ** 2 * Math.PI).toFixed(2);
  },
};

console.log(circle.circumference());

console.log(circle.area());
