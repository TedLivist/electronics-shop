function electronicsShop(budget, keyboards, usb) {

  let finalCost = -1
  let costSum = 0
  
  for (let i = 0; i <= keyboards.length; i++) {
    if (keyboards[i] < budget) {
      for (let j = 0; j <= usb.length; j++) {
        costSum = keyboards[i] + usb[j]
        if (costSum <= budget) {
          if (costSum > finalCost) {
            finalCost = costSum
          }
        }
      }
    }
  }
  return finalCost

}
