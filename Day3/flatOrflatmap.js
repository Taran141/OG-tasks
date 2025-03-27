const complexData = [
    [1, 2],
    [3, [4, 5]],
    [[6], [[7, 8], 9]],
    10
  ];

  //with flat method
  const data = complexData.flat(3);
  console.log(data)

  //with flatmap
  const res=complexData.flatMap((x)=>x);
  console.log(res);
  const res2 = res.flatMap((x)=>x);
  console.log(res2)
  const res3 = res2.flatMap((x)=>x)
  console.log(res3)