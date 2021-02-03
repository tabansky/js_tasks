let  styles = ['Jazz', 'Blues'];
styles.push('Rock-n-roll');
styles.splice(styles.length / 2, 1, 'Classic');
styles.shift();
styles.unshift('Rap', 'Reggy');

console.log(styles);
