initSidebarItems({"fn":[["abort_hook","This hook ignores the function arguments and returns `ReturnValue::Abort`. It is suitable for hooking functions such as C's `exit()` which abort the program and never return."],["generic_stub_hook","This hook ignores the function arguments and returns an unconstrained value of the appropriate size for the function's return value (or void for void-typed functions)."]],"struct":[["FunctionHooks","A set of function hooks, which will be executed instead of their respective hooked functions if/when the symbolic execution engine encounters a call to one of those hooked functions."]],"trait":[["IsCall","`IsCall` exists to unify the commonalities between LLVM `Call` and `Invoke` instructions"]],"type":[["Argument","An `Argument` represents a single argument to a called function, together with zero or more attributes which apply to it"]]});