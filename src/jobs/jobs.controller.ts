import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobDTO } from './dtos/job.dto';
import { Job } from './interfaces/job.interface';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('jobs')
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'The resource list has been successfully returned.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  findAll(): Promise<Job []> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'The resource has been successfully returned.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  find(@Param('id') id: string): Promise<Job> {
    return this.jobsService.find(id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The resource has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiBody({ type: JobDTO })
  create(@Body() job: JobDTO): Promise<Job> {
    return this.jobsService.create(job);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'The resource has been successfully updated.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiBody({ type: JobDTO })
  update(@Param('id') id: string, @Body() job: JobDTO): Promise<Job> {
    return this.jobsService.update(id, job);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'The resource has been successfully removed.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  delete(@Param('id') id: string): Promise<Job> {
    return this.jobsService.delete(id);
  }
}
