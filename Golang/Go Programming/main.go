package main

var nil int

func main() {
	// i := new(big.Int)
	// bigAns, bigOk := i.SetString("6144", 10)
	// fmt.Println(i, " ", bigAns, " ", bigOk)

	// var x int

	// if i, j := newValue(); i != nil {
	// 	fmt.Println(nil)
	// 	fmt.Println("i is not empty")
	// 	x = j
	// 	fmt.Println(j)
	// }

	// fmt.Println(x)

	// src := []byte("60806040526101f4600055603260015534801561001b57600080fd5b506102558061002b6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806358931c461461003b5780637f353d5514610045575b600080fd5b61004361004f565b005b61004d610097565b005b60006001905060005b6000548110156100935760028261006f9190610114565b915060028261007e91906100e3565b9150808061008b90610178565b915050610058565b5050565b60005b6001548110156100e057600281908060018154018082558091505060019003906000526020600020016000909190919091505580806100d890610178565b91505061009a565b50565b60006100ee8261016e565b91506100f98361016e565b925082610109576101086101f0565b5b828204905092915050565b600061011f8261016e565b915061012a8361016e565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610163576101626101c1565b5b828202905092915050565b6000819050919050565b60006101838261016e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156101b6576101b56101c1565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220cb9cada3f1d447c978af17aa3529d6fe4f25f9c5a174085443e371b6940ae99b64736f6c63430008070033")
	// h := hex.EncodeToString(src)
	// fmt.Println(h)

	c := make(chan string)
	c <- "hello"
	return
}

func newValue() (int, int) {
	return 1, 2
}
