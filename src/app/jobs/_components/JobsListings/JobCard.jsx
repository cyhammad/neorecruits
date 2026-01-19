"use client";

import Link from "next/link";
import { MapPin, Briefcase, Clock, ArrowRight, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function JobCard({ job }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-[#e5e5e5] hover:border-[#9a01cd]/30 bg-white">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 grow">
            <CardTitle className="text-xl sm:text-2xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300">
              {job.title}
            </CardTitle>
            <CardDescription className="text-base font-semibold text-[#0b2677]/80">
              {job.company}
            </CardDescription>
          </div>
          <Badge
            variant="outline"
            className="bg-[#9a01cd]/10 text-[#9a01cd] border-[#9a01cd]/30 font-semibold uppercase text-xs"
          >
            {job.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed line-clamp-2">
          {job.description}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#0b2677]/60">
          <Detail icon={MapPin} text={job.location} />
          {job.salary && <Detail icon={DollarSign} text={job.salary} />}
          <Detail icon={Clock} text={job.posted} />
        </div>
        <div className="pt-2">
          <Badge
            variant="outline"
            className="bg-[#0b2677]/5 text-[#0b2677] border-[#0b2677]/20 text-xs"
          >
            <Briefcase className="w-3 h-3 mr-1" />
            {job.industry}
          </Badge>
        </div>
        <div className="pt-2 space-y-2">
          <p className="text-xs font-semibold text-[#0b2677]/60 uppercase tracking-wider">
            Key Requirements:
          </p>
          <ul className="flex flex-wrap gap-2">
            {job.requirements.map((req, index) => (
              <li
                key={index}
                className="text-xs px-2 py-1 bg-[#f4f4f4] rounded text-[#0b2677]/70 font-medium"
              >
                {req}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#9a01cd] hover:border-[#9a01cd] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest"
          asChild
        >
          <Link href={`/jobs/${job.id}`}>
            View Details <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function Detail({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4" />
      <span>{text}</span>
    </div>
  );
}
