useNavigate :
useNavigate is a hook used to navigate between pages using JavaScript (not UI click).
🔹 1. navigate("/course-detail")
👉 Moves user to Course Detail page
const navigate = useNavigate();
navigate("/course/101");
###
How to Receive This Data ?
We don’t pass full data
👉 We pass only ID and fetch data using it
const { id } = useParams();
const course = courses.find(c => c.id === id);
navigate("/course/101")
        ↓
useParams() → id = 101
        ↓
find() → get course data
        ↓
display on screen
###
When should we use useNavigate instead of <Link>?
When navigation depends on logic (login, submit, redirect)
RealTime eg :
Login System :
<Link to="/dashboard">Login</Link> ❌
const handleLogin = () => {
  if (validUser) {
    navigate("/dashboard");
  }
};
Form Submission :
User fills form → submit → go to success page

const handleSubmit = () => {
  // save data
  navigate("/success");
};

👉 Cannot use <Link> here
Logout : 
const handleLogout = () => {
  localStorage.removeItem("auth");
  navigate("/login");
};
👉 App decides where to go
4️⃣ Payment Flow 💳
const handlePayment = () => {
  if (paymentSuccess) {
    navigate("/success");
  } else {
    navigate("/failed");
  }
};

👉 Conditional navigation
5️⃣ Role-Based Routing 👨‍💼👨‍🎓
if (user.role === "admin") {
  navigate("/admin");
} else {
  navigate("/student");
}

👉 Based on user role
6️⃣ Protected Route Redirect 🔐
if (!isLoggedIn) {
  navigate("/login");
}

👉 Auto redirect

7️⃣ After API Call 🌐
fetchData().then(() => {
  navigate("/dashboard");
});

👉 After async operation

8️⃣ Error Handling ❌
if (error) {
  navigate("/error");
}

9️⃣ Timer-Based Redirect ⏳
useEffect(() => {
  setTimeout(() => {
    navigate("/");
  }, 3000);
}, []);

👉 Example: success page auto redirect

🔟 Multi-Step Form 📋
const nextStep = () => {
  navigate("/step-2");
};

👉 Controlled flow

1️⃣1️⃣ Dynamic Navigation 📦
navigate(`/course/${course.id}`);

👉 Based on data

1️⃣2️⃣ Go Back Button 🔙
<button onClick={() => navigate(-1)}>
  Back
</button>

👉 Cannot use <Link> for this

###
“If navigation needs thinking → useNavigate
If navigation is simple clicking → Link”
###
Core IDea of Link
Use <Link> when user clicks and navigates directly (no logic needed)
| Situation             | Use      |
| --------------------- | -------- |
| Click menu / navbar   | `<Link>` |
| Static navigation     | `<Link>` |
| No conditions / logic | `<Link>` |
1️⃣ Navbar Menu 🧭
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/courses">Courses</Link>
<Link to="/about">About</Link>

👉 User simply clicks → goes to page

2️⃣ Sidebar Navigation 📚
<Link to="/dashboard">Dashboard</Link>
<Link to="/profile">Profile</Link>
<Link to="/settings">Settings</Link>

👉 No logic needed

3️⃣ Footer Links 🔗
<Link to="/privacy">Privacy Policy</Link>
<Link to="/terms">Terms & Conditions</Link>

4️⃣ Course List (Basic Version)
<Link to="/course/101">React Course</Link>

👉 Direct navigation (no logic)

5️⃣ Product Cards 🛒
<Link to={`/product/${product.id}`}>
  <h3>{product.name}</h3>
</Link>

👉 Click card → go to detail page

6️⃣ Logo Click 🏠
<Link to="/">
  <h1>MyApp</h1>
</Link>

👉 Clicking logo → go to home

7️⃣ Breadcrumb Navigation 🍞
<Link to="/">Home</Link> / 
<Link to="/courses">Courses</Link>

8️⃣ Static Pages 📄
<Link to="/contact">Contact Us</Link>
<Link to="/about">About Us</Link>

9️⃣ Pagination 🔢
<Link to="/page/1">1</Link>
<Link to="/page/2">2</Link>

🔟 Simple Redirect Button (No Logic)
<Link to="/login">
  <button>Go to Login</button>
</Link>

| Feature     | `<Link>` | `useNavigate` |
| ----------- | -------- | ------------- |
| User click  | ✅        | ❌             |
| Logic-based | ❌        | ✅             |
| Conditions  | ❌        | ✅             |
| API calls   | ❌        | ✅             |




