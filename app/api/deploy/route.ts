import { exec } from "child_process";
import { NextResponse } from "next/server";

export async function POST() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Only available in development" }, { status: 403 });
  }

  return new Promise<NextResponse>((resolve) => {
    exec(
      'cd "/Users/v/Camus Website" && git add . && git commit -m "Update" --allow-empty && git push origin main',
      { timeout: 60000 },
      (error, stdout, stderr) => {
        if (error && !stdout.includes("main -> main") && !stderr.includes("Everything up-to-date") && !stdout.includes("Everything up-to-date")) {
          resolve(NextResponse.json({ success: false, message: stderr || error.message }, { status: 500 }));
        } else {
          const output = stdout + stderr;
          const alreadyUpToDate = output.includes("Everything up-to-date") || output.includes("nothing to commit");
          resolve(NextResponse.json({
            success: true,
            message: alreadyUpToDate ? "Already up to date — no changes to deploy." : "Deployed successfully!",
          }));
        }
      }
    );
  });
}
