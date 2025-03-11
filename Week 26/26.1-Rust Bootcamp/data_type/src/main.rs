fn main() {
    let ans: i32 = -1000;
    println!("Hello, world!, {}", ans);

    let even: bool = is_even(10);
    println!("{}", even);

    let name: String = String::from("Shubham");
    println!("{}", name);
}

fn is_even(a: u32) -> bool {
    return a % 2 == 0;
}
